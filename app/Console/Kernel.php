<?php

namespace App\Console;

use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;

class Kernel extends ConsoleKernel
{
    /**
     * Define the application's command schedule.
     *
     * @param  \Illuminate\Console\Scheduling\Schedule  $schedule
     * @return void
     */
    protected function schedule(Schedule $schedule)
    {
//        $schedule->command('goal_reminder:send')->everyThirtyMinutes();
//        $schedule->command('goals:deadline')->daily()->runInBackground();
//        $schedule->command('client:birthday')->daily()->runInBackground();
//        $schedule->command('client:lprBirthday')->daily()->runInBackground();
//        $schedule->command('client:lprBirthday')->daily()->runInBackground();

        $schedule->command('goal_reminder:send')->everyMinute();
        $schedule->command('goals:deadline')->daily();
        $schedule->command('client:birthday')->daily();
        $schedule->command('client:lprBirthday')->daily();
        $schedule->command('goals:active_ad')->daily();
        $schedule->command('client:interaction')->daily();
        $schedule->command('claims:debt')->daily();
    }

    /**
     * Register the commands for the application.
     *
     * @return void
     */
    protected function commands()
    {
        $this->load(__DIR__.'/Commands');

        require base_path('routes/console.php');
    }
}
