<?php

namespace App\Console\Commands;

use App\Models\Goal;
use App\Notifications\GoalRemiderNotification;
use Illuminate\Console\Command;

class SendGoalRemindersCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'goal_reminder:send';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Send goal reminder';

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
        $goals = Goal::with('user')
            ->where('remind_at', '<=', now()->toDateTimeString())
            ->get();

        foreach ($goals as $goal) {
            $goal->user->notify(new GoalRemiderNotification($goal));
            $goal->update(['remind_at' => NULL]);
        }




        return 0;
    }
}
