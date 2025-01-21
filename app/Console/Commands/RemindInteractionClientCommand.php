<?php

namespace App\Console\Commands;

use App\Models\Client;
use App\Models\Role;
use App\Models\UserM;
use App\Notifications\RemindClient;
use http\Client\Curl\User;
use Illuminate\Console\Command;

class RemindInteractionClientCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'client:interaction';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Reminder if there was no interaction with clients for 3 months';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $clients = Client::all();
        foreach ($clients as $client) {
            if ($client->histories->first()->created_at) {
                $lastDate = \Carbon\Carbon::make($client->histories->first()->created_at);
                $diffDays = $lastDate->diff(now())->days;
                if ($diffDays > 60) {
                    if ($client->interactionsRemind == 0) {

                        $client->interactionsRemind = 1;
                        $client->save();

                        $ropUser = Role::with('users')
                            ->where('level', 2)
                            ->get();

                        if (count($ropUser) != 0) {
                            foreach ($ropUser as $role) {
                                if (count($role->users) != 0) {
                                    foreach ($role->users as $user) {
                                        $user->notify(new RemindClient($client));
                                    }
                                }
                            }
                        }

                        if ($client->user_id) {
                            $client->user->notify(new RemindClient($client));
                        }
                    }


                } else {
                    $client->interactionsRemind = 0;
                    $client->save();
                }
            }

        }

        return 0;
    }
}
