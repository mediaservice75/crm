<?php

namespace App\Console\Commands;

use App\Models\Goal;
use Illuminate\Console\Command;

class DeadlineGoalsCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'goals:deadline';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Change the status die tasks';

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
        $goals = Goal::where('deadline', '<=', now()->toDateTimeString())
            ->where('status', 0)
            ->whereNull('rrule')
            ->get();

        foreach ($goals as $goal) {
            $goal->status = 2;
            $goal->save();
        }

        return 0;
    }
}
