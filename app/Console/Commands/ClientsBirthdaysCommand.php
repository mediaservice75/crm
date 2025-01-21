<?php

namespace App\Console\Commands;

use App\Models\Client;
use App\Models\Goal;
use Carbon\Carbon;
use Illuminate\Console\Command;
use Illuminate\Database\Eloquent\Model;

class ClientsBirthdaysCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'client:birthday';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Creates a client birthday event';

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

        $clients = Client::where('isAllow', 1)
            ->whereNotNull('date_of_birth')
            ->whereNotNull('user_id')
            ->get();

        foreach ($clients as $client) {
            $birthdayClient = \Carbon\Carbon::make($client->date_of_birth);
            $birthdayClient->setYear(now()->year);

            if ($birthdayClient->isPast()) {
                $birthdayClient->addYear();
            }

            if ($birthdayClient->diff(now())->days <= 7) {
                $countGoal = Goal::where('birthday', 1)
                    ->where('client_id', $client->id)
                    ->where('start_date', Carbon::parse($birthdayClient)->format('Y-m-d 00:00:00'))
                    ->whereNull('client_lpr_id')
                    ->count();

                if ($countGoal == 0) {
                    $goal = new Goal;
                    $goal->exposed = $client->user_id;
                    $goal->user_id = $client->user_id;
                    $goal->client_id = $client->id;
                    $goal->birthday = 1;
                    $goal->text = "День рождения у клиента - " . $client->name . "";
                    $goal->start_date = Carbon::parse($birthdayClient)->format('Y-m-d 00:00:00');
                    $goal->deadline = Carbon::parse($birthdayClient)->addDay()->format('Y-m-d 00:00:00');
                    $goal->allDay = 1;
                    $goal->save();
                }
            }
        }

        return 0;
    }
}
