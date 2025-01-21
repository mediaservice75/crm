<?php

use App\Models\Claim;
use App\Models\ClaimUsers;
use App\Models\HistoryPayment;
use App\Models\SalesPlanMonth;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;

if (!function_exists('getAllGoals')) {
    function getAllGoals()
    {
        $goals = \App\Models\Goal::all();
        return $goals;
    }
}

if (!function_exists('getCountGoals')) {
    function getCountGoals()
    {
        $start = date('Y-m-d') . ' 00:00:00';
        $end = date('Y-m-d') . ' 23:59:59';
        $goals = \App\Models\Goal::where('status', 0)
            ->where('user_id', \Illuminate\Support\Facades\Auth::user()->id)
            ->get();

        $count = 0;
        foreach ($goals as $goal) {
            $start_date = Carbon::create($goal->start_date)->format('Y-m-d');
            $deadline = Carbon::create($goal->deadline)->format('Y-m-d');
            $today = Carbon::now()->format('Y-m-d');

            if ($today >= $start_date && $today <= $deadline) {
                $count++;
            }
        }

        return $count;
    }
}

if (!function_exists('goalsIsRead')) {
    function goalsIsRead()
    {
        \App\Models\Goal::where('isRead', 0)
            ->where('user_id', \Illuminate\Support\Facades\Auth::user()->id)
            ->update(['isRead' => 1]);
    }
}

if (!function_exists('expiredGoal')) {
    function expiredGoal()
    {
        \App\Models\Goal::where('deadline', '<', date('Y-m-d H:i:s'))
            ->where('user_id', \Illuminate\Support\Facades\Auth::user()->id)
            ->where('status', '=', 0)
            ->update(['status' => 2]);
    }
}

if (!function_exists('countExpiredGoal')) {
    function countExpiredGoal()
    {
        $count = \App\Models\Goal::where('status', 2)
            ->where('user_id', \Illuminate\Support\Facades\Auth::user()->id)
//            ->where('isReadExpired', '=', '0')
            ->count();
        return $count;
    }
}

if (!function_exists('goalsIsReadExpired')) {
    function goalsIsReadExpired()
    {
        \App\Models\Goal::where('isReadExpired', 0)
            ->where('user_id', \Illuminate\Support\Facades\Auth::user()->id)
            ->where('status', '=', 2)
            ->update(['isReadExpired' => 1]);
    }
}

if (!function_exists('getCountClaimsResponsible')) {
    function getCountClaimsResponsible()
    {
        return \App\Models\Service::where('user_id', \Illuminate\Support\Facades\Auth::user()->id)->count();
    }
}

if (!function_exists('getCountClaimsWithoutUser')) {
    function getCountClaimsWithoutUser()
    {
        return \App\Models\Service::whereNull('user_id')
            ->where('group_id', Auth::user()->role->group_id)
            ->count();
//        ('user_id', \Illuminate\Support\Facades\Auth::user()->id)->count();
    }
}

if (!function_exists('getCountClaimsResponsibleIsNotRead')) {
    function getCountClaimsResponsibleIsNotRead()
    {
        return \App\Models\Claim::whereNull('user_id')
            ->where('isClose', 0)
            ->with('service')
            ->whereHas('service', function ($q) {
                $q->where('user_id', \Illuminate\Support\Facades\Auth::user()->id);
            })->count();
    }
}

if (!function_exists('getCountClaimsResponsibleComplete')) {
    function getCountClaimsResponsibleComplete()
    {
        return \App\Models\Claim::whereNotNull('user_id')
            ->with('service')
            ->whereHas('service', function ($q) {
                $q->where('user_id', \Illuminate\Support\Facades\Auth::user()->id);
            })->count();
    }
}

if (!function_exists('getCountClaimsGroupIsNotRead')) {
    function getCountClaimsGroupIsNotRead()
    {
        return \App\Models\Claim::where('isRead', '=', 0)
            ->whereNull('user_id')
            ->with('service')
            ->whereHas('service', function ($q) {
                $q->where('group_id', Auth::user()->role->group_id);
            })->count();
    }
}


if (!function_exists('claimsIsRead')) {
    function claimsIsRead()
    {
        $services = \App\Models\Service::where('user_id', \Illuminate\Support\Facades\Auth::user()->id)->get();
        if ($services) {
            foreach ($services as $service) {
                if ($service->claims) {
                    foreach ($service->claims as $claim) {
                        $claim->isRead = 1;
                        $claim->save();
                    }
                }
            }
        }

    }
}

if (!function_exists('claimsGroupIsRead')) {
    function claimsGroupIsRead()
    {
        $services = \App\Models\Service::where('group_id', \Illuminate\Support\Facades\Auth::user()->role->group_id)->get();
        if ($services) {
            foreach ($services as $service) {
                if ($service->claims) {
                    foreach ($service->claims as $claim) {
                        if ($claim->user_id == null) {
                            $claim->isRead = 1;
                            $claim->save();
                        }
                    }
                }
            }
        }

    }
}

if (!function_exists('myClaimsIsNotClosed')) {
    function myClaimsIsNotClosed()
    {

        $claimUsers = ClaimUsers::where('user_id', Auth::user()->id)
            ->get();


        $ids = array(0);
        if (count($claimUsers) != 0) {
            foreach ($claimUsers as $claimUser) {
                $ids[] = $claimUser->claim_id;
            }
        }

        return Claim::where('isClose', 0)
            ->where(function($query) use ($ids) {
                $query->where('user_id', Auth::user()->id)
                    ->orWhereIn('id', $ids);
            })
            ->count();



    }
}

if (!function_exists('myClaimsIsClosed')) {
    function myClaimsIsClosed()
    {
        return Claim::where('user_id', Auth::user()->id)
            ->where('isClose', 1)->count();

    }
}

if (!function_exists('getCountCreatedClaims')) {
    function getCountCreatedClaims()
    {
        return Claim::where('creator', Auth::user()->id)->count();

    }
}

if (!function_exists('claimsAdds')) {
    function claimsAdds($claim)
    {
        $claims = array();

        if ($claim->service->isRequiredMaterial) $claims[] = 'Материалы';
        if ($claim->service->isPackage) $claims[] = 'Пакеты услуг';
        if ($claim->service->isPeriod)  $claims[] = 'Период размещения';
        if ($claim->service->isBrif)  $claims[] = 'Бриф';
        if ($claim->service->isOutput)  $claims[] = 'Количество выходов';
        if ($claim->isInvoice)  $claims[] = 'Счет';

        return $claims;
    }
}

if (!function_exists('getCountCompleteInvoice')) {
    function getCountCompleteInvoice()
    {
        return \App\Models\Claim::where('isInvoice', 1)
            ->whereNotNull('invoice')->count();
    }
}

if (!function_exists('getCountNotCompleteInvoice')) {
    function getCountNotCompleteInvoice()
    {
        return \App\Models\Claim::where('isInvoice', 1)
            ->whereNull('invoice')->count();
    }
}

if (!function_exists('getCountCompletePayment')) {
    function getCountCompletePayment()
    {
        return Claim::with('historiesPayment.status')
            ->whereHas('historiesPayment.status', function ($q) {
                $q->where('name', "Оплачен");
            })
            ->count();
    }
}

if (!function_exists('convertMonth')) {
    function convertMonth($month)
    {
        $month = $month.'-01';
        return Str::title(Carbon::parse($month)->translatedFormat('F')) . " " . Carbon::parse($month)->format('Y');
    }
}

if (!function_exists('getMonths')) {
    function getMonths()
    {
        return array(
            '1' => 'Январь',
            '2' => 'Февраль',
            '3' => 'Март',
            '4' => 'Апрель',
            '5' => 'Май',
            '6' => 'Июнь',
            '7' => 'Июль',
            '8' => 'Август',
            '9' => 'Сентябрь',
            '10' => 'Октябрь',
            '11' => 'Ноябрь',
            '12' =>  'Декабрь',
        );
    }
}

if (!function_exists('getAbbrMonths')) {
    function getAbbrMonths()
    {
        return array(
            '1' => 'Янв',
            '2' => 'Февр',
            '3' => 'Март',
            '4' => 'Апр.',
            '5' => 'Май',
            '6' => 'Июнь',
            '7' => 'Июль',
            '8' => 'Авг.',
            '9' => 'Сент.',
            '10' => 'Окт.',
            '11' => 'Нояб.',
            '12' =>  'Дек.',
        );
    }
}

if (!function_exists('getCountClientIsNotAllow')) {
    function getCountClientIsNotAllow()
    {
        $clients = \App\Models\Client::where('isAllow', 0)->count();
        return $clients;
    }
}

if (!function_exists('getCountActiveAds')) {
    function getCountActiveAds()
    {
        return Claim::whereHas('activeAd', function ($q) {
                $q->where('end_date', '>=', now()->second(0)->minute(0)->hour(0));
            })
            ->where('creator', Auth::user()->id)
            ->count();
    }
}

if (!function_exists('getCountExActiveAds')) {
    function getCountExActiveAds()
    {
        return Claim::whereHas('activeAd', function ($q) {
            $q->where('end_date', '<', now()->second(0)->minute(0)->hour(0));
        })
            ->where('creator', Auth::user()->id)
            ->count();
    }
}

if (!function_exists('getDiffDate')) {
    function getDiffDate($end) {

        $end = \Carbon\Carbon::make($end);
        if (($end->day == now()->day) && ($end->month == now()->month)) {
            return 'Сегодня';
        } else if ($end < now()->second(0)->minute(0)->hour(0)) {
            return 'Рекламная кампания закончилась';
        } else {
            return $end->diffForHumans();
        }
    }

}

if (!function_exists('getUserById')) {
    function getUserById($id) {
        $user = \App\Models\UserM::firstWhere('id', $id);
        if ($user) return $user->getFullName();
        else return 'Пользователь не найден!';
    }
}

if (!function_exists('money')) {
    function money($value) {
        return number_format($value, 2, '.',' ');
    }
}

if (!function_exists('checkUserAccessToClaim')) {
    function checkUserAccessToClaim($claim_id, $user_id) {

        $claimUser = ClaimUsers::where('claim_id', $claim_id)
            ->where('user_id', $user_id)
            ->count();

        if ($claimUser == 0) {
            return false;
        } else {
            return true;
        }

    }
}

if (!function_exists('getPaymentsClaim')) {
    function getPaymentsClaim($claim_id) {
        $claim = HistoryPayment::with('status')
            ->whereHas('status', function ($q) {
                $q->where('name', 'Частично оплачен');
            })
            ->where('claim_id', $claim_id)
            ->sum('amount');

        return $claim;
    }
}
if (!function_exists('getDebtSum')) {
    function getDebtSum() {

        $res = '';

        $debtClaims = Claim::with('historiesPayment')
            ->whereHas('historiesPayment', function ($q)  {
                $q->with('status')
                    ->whereHas('status', function ($w) {
                        $w->where('name', "Долг");
                    });
            })
            ->where('notInclude',0)
            ->select(DB::raw('id'))
            ->get();

        $paidClaims = Claim::with('historiesPayment')
            ->whereHas('historiesPayment', function ($q)  {
                $q->with('status')
                    ->whereHas('status', function ($w) {
                        $w->where('name', "Оплачен");
                    });
            })
            ->where('notInclude',0)
            ->select(DB::raw('id'))
            ->get();

        $idPaidClaims = $paidClaims->mapWithKeys(function ($item, $i) {
            return [$i => $item->id];
        });

        $idDebtClaims = $debtClaims->mapWithKeys(function ($item, $i) {
            return [$i => $item->id];
        });

        $sumDebtClaims = Claim::with('historiesPayment')
            ->whereHas('historiesPayment', function ($q)  {
                $q->with('status')
                    ->whereHas('status', function ($w) {
                        $w->where('name', "Долг");
                    });
            })
            ->where('notInclude',0)
            ->whereNotIn('id', $idPaidClaims)
            ->select(DB::raw('SUM(amount) as total_amount'))
            ->get();

        $sumPartPaid = HistoryPayment::with('status')
            ->whereHas('status', function ($w) {
                $w->where('name', "Частично оплачен");
            })
            ->whereNotIn('claim_id', $idPaidClaims)
            ->whereIn('claim_id', $idDebtClaims)
            ->select(DB::raw(' SUM(amount) as total_amount'))
            ->get();


        $res .= '<p class="fw-bold mb-0"><b class="text-primary">Долг: </b>';
        if($sumDebtClaims->first()->total_amount == null)
            $res .= '0 руб';
        else {
            $res .= money($sumDebtClaims->first()->total_amount) . ' руб.';
            if ($sumPartPaid->first()->total_amount != null) {
                $res .= ' (из них частично оплачено: '. money($sumPartPaid->first()->total_amount) . ' руб.)';
                $res .= ' = Итого: '. money($sumDebtClaims->first()->total_amount - $sumPartPaid->first()->total_amount) . ' руб.';
            }
        }


        $res .= '</p>';

        return $res;

    }
}

if (!function_exists('getDebtSumByUser')) {
    function getDebtSumByUser($user_id) {

        $res = '';

        $debtClaims = Claim::with('historiesPayment')
            ->whereHas('historiesPayment', function ($q)  {
                $q->with('status')
                    ->whereHas('status', function ($w) {
                        $w->where('name', "Долг");
                    });
            })
            ->where('creator', $user_id)
            ->where('notInclude',0)
            ->select(DB::raw('id'))
            ->get();

        $paidClaims = Claim::with('historiesPayment')
            ->whereHas('historiesPayment', function ($q)  {
                $q->with('status')
                    ->whereHas('status', function ($w) {
                        $w->where('name', "Оплачен");
                    });
            })
            ->where('creator', $user_id)
            ->where('notInclude',0)
            ->select(DB::raw('id'))
            ->get();

        $idDebtClaims = $debtClaims->mapWithKeys(function ($item, $i) {
            return [$i => $item->id];
        });

        $idPaidClaims = $paidClaims->mapWithKeys(function ($item, $i) {
            return [$i => $item->id];
        });

        $sumDebtClaims = Claim::with('historiesPayment')
            ->whereHas('historiesPayment', function ($q)  {
                $q->with('status')
                    ->whereHas('status', function ($w) {
                        $w->where('name', "Долг");
                    });
            })
            ->whereNotIn('id', $idPaidClaims)
            ->where('creator', $user_id)
            ->where('notInclude',0)
            ->select(DB::raw('SUM(amount) as total_amount'))
            ->get();

        $sumPartPaid = HistoryPayment::with('status')
            ->whereHas('status', function ($w) {
                $w->where('name', "Частично оплачен");
            })
            ->with('claim')
            ->whereHas('claim', function ($q) use ($user_id) {
                $q->where('creator', $user_id);
            })
            ->whereNotIn('claim_id', $idPaidClaims)
            ->whereIn('claim_id', $idDebtClaims)
            ->select(DB::raw(' SUM(amount) as total_amount'))
            ->get();


        $res .= '<p class="fw-bold mb-0"><b class="text-primary">Долг: </b>';
        if($sumDebtClaims->first()->total_amount == null)
            $res .= '0 руб';
        else {
            $res .= money($sumDebtClaims->first()->total_amount) . ' руб.';
            if ($sumPartPaid->first()->total_amount != null) {
                $res .= ' (из них частично оплачено: '. money($sumPartPaid->first()->total_amount) . ' руб.)';
                $res .= ' = Итого: '. money($sumDebtClaims->first()->total_amount - $sumPartPaid->first()->total_amount) . ' руб.';
            }
        }


        $res .= '</p>';

        return $res;

    }
}

if (!function_exists('getWorkingDays')) {
    function getWorkingDays($month) {
        $res = [];
        $days = SalesPlanMonth::where('month', $month)->first();
        if ($days) {
            $days = explode('|', $days->selected_days);
            foreach ($days as $day) {
                $res[] = trim($day);
            }
            return $res;
        }

        return $res;
    }
}

if (!function_exists('getCountPastDays')) {
    function getCountPastDays($month) {
        $countPastDays = 0;
        $today = Carbon::now()->format('Y-m-d');
        $days = SalesPlanMonth::where('month', $month)->first();
        if ($days) {
            $days = explode('|', $days->selected_days);
            foreach ($days as $day) {
               if (Carbon::createFromDate($day) <= Carbon::createFromDate($today)) {
                   $countPastDays++;
               }
            }
        }

        return $countPastDays;
    }
}


if (!function_exists('checkAnotherUser')) {
    function checkAnotherUser($claim_id) {

        $claim = Claim::where('id', $claim_id)->first();


        if (!$claim) return 0;
        else {
            if ($claim->creator == $claim->client->user_id) {
                return 0;
            } else {
                return true;
            }
        }

    }
}

if (!function_exists('createPusherNotification')) {
    function createPusherNotification($claim_id, $user_id, $text, $url) {

        try {
            \App\Models\PusherNotification::create([
                'claim_id' => $claim_id,
                'user_id' => $user_id,
                'text' => $text,
                'url' => $url,
            ]);

            return true;

        } catch (Exception $exception) {

            return false;

        }

    }
}
