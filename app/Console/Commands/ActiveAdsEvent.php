<?php

namespace App\Console\Commands;

use App\Models\ActiveAd;
use App\Models\Goal;
use App\Notifications\RemindActiveAd;
use Carbon\Carbon;
use Illuminate\Console\Command;

class ActiveAdsEvent extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'goals:active_ad';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Create an active ad task';

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
        $activeAds = ActiveAd::where('isRemind', 0)
            ->get();

        foreach ($activeAds as $activeAd) {
            $endDate = \Carbon\Carbon::make($activeAd->end_date);
//            $endDate->setYear(now()->year);

            if ($endDate->isPast()) {
//                $endDate->addYear();
                 continue;
            }

            if ($endDate->diff(now())->days <= 7) {

                if ($activeAd->claim == null) continue;

                $goal = new Goal;
                $goal->exposed = $activeAd->user_id;
                $goal->user_id = $activeAd->user_id;
                $goal->client_id = $activeAd->claim->client_id;
                $goal->text = "Заканчивается рекламная кампания - " . $activeAd->claim->service->name . "";
                $goal->start_date = \Carbon\Carbon::parse($endDate)->format('Y-m-d 00:00:00');
                $goal->deadline = \Illuminate\Support\Carbon::parse($endDate)->addDay()->format('Y-m-d 00:00:00');
                $goal->allDay = 1;
                $goal->save();
                $activeAd->user->notify(new RemindActiveAd($activeAd));


                if ($activeAd->user_id != $activeAd->claim->creator) {
                    $newGoal = $goal->replicate();
                    $newGoal->exposed = $activeAd->claim->creator;
                    $newGoal->user_id = $activeAd->claim->creator;
                    $newGoal->save();
                    $activeAd->claim->creatorUser->notify(new RemindActiveAd($activeAd));
                }

                $activeAd->isRemind = 1;
                $activeAd->save();
            }
        }

        return 0;
    }
}
