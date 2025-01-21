<?php

namespace App\Console\Commands;

use App\Models\Client;
use App\Models\Goal;
use Carbon\Carbon;
use Illuminate\Console\Command;
use Illuminate\Database\Eloquent\Model;

class ClientLprsBirthdaysCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'client:lprBirthday';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Creates a client lprs birthday event';

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
            ->whereNotNull('user_id')
            ->with('lprs')
            ->whereHas('lprs', function ($q) {
                $q->whereNotNull('date_of_birth');
            })
            ->get();

        foreach ($clients as $client) {
            if ($client->lprs->count() != 0) {
                foreach ($client->lprs as $lpr) {
                    if ($lpr->date_of_birth != null) {
                        $birthdayLpr = Carbon::make($lpr->date_of_birth);
                        $birthdayLpr->setYear(now()->year);

                        if ($birthdayLpr->isPast()) {
                            $birthdayLpr->addYear();
                        }

                        if ($birthdayLpr->diff(now())->days <= 7) {
                            $countGoal = Goal::where('birthday', 1)
                                ->where('client_id', $client->id)
                                ->where('client_lpr_id', $lpr->id)
                                ->where('start_date', Carbon::parse($birthdayLpr)->format('Y-m-d 00:00:00'))
                                ->count();

                            if ($countGoal == 0) {
                                $goal = new Goal;
                                $goal->exposed = $client->user_id;
                                $goal->user_id = $client->user_id;
                                $goal->client_id = $client->id;
                                $goal->client_lpr_id = $lpr->id;
                                $goal->birthday = 1;
                                $goal->text = "День рождения у ЛПР - " . $lpr->getFullName() . " (". $client->name .")";
                                $goal->start_date = Carbon::parse($birthdayLpr)->format('Y-m-d 00:00:00');
                                $goal->deadline = Carbon::parse($birthdayLpr)->addDay()->format('Y-m-d 00:00:00');
                                $goal->allDay = 1;
                                $goal->save();
                            }
                        }


                    }
                }
            }

        }

        return 0;
    }
}
