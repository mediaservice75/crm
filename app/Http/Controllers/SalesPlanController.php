<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Claim;
use App\Models\Group;
use App\Models\HistoryPayment;
use App\Models\SalesPlan;
use App\Models\SalesPlanMonth;
use App\Models\Service;
use App\Models\UserM;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\Rule;
use Yajra\DataTables\Facades\DataTables;

class SalesPlanController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $salesPlan = SalesPlan::orderBy('month', 'desc')->get();
//        where('month', date('Y-m-01'))
//            ->get();

        return view('plan.index', compact('salesPlan'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $groups = Group::all();
        $users = Group::with('roles.users')
            ->where('name', 'Отдел продаж')
            ->get();

//        dd($users);
        return view('plan.create', compact('groups', 'users'));

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        $amount = str_replace(' ', '', $request->plan);

        $request->merge([
            'plan' => $amount,
        ]);


        $validatedData = $request->validate(
            [
                'user_id' => 'required|integer',
                'month' => [
                    'required',
                    'date',
                    Rule::unique('sales_plans')
                        ->where('user_id', $request->user_id)
                        ->whereNull('deleted_at')
                ],
                'plan' => 'required|numeric',
            ],
            [
                'user_id.required' => 'Выберите значение из списка',
                'user_id.integer' => 'Выберите значение из списка',
                'month.required' => 'Поле месяц не может быть пустым',
                'month.date' => 'Поле месяц должно быть в формате даты',
                'month.unique' => 'План для данного сотрудника в этот месяц установлен',
                'plan.required' => 'Поле план продаж не может быть пустым',
                'plan.numeric' => 'Поле план продаж должно быть формате числа',
            ]
        );

        DB::beginTransaction();
        try {
            SalesPlan::create($request->all());
            DB::commit();
            $request->session()->flash('success', 'Данные успешно добавлены 👍');
            return back();
        } catch (\Exception $exception) {
            DB::rollback();

            $request->session()->flash('error', 'При добавлении данных произошла ошибка 😢' );
            return back();
        }
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        abort(404);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $plan = SalesPlan::firstWhere('id', $id);
        $groups = Group::all();
        $users = UserM::where('isBlocked', 0)->get();
        return view('plan.edit', compact('plan', 'users', 'groups'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $validatedData = $request->validate(
            [
                'user_id' => 'required|integer',
                'month' => [
                    'required',
                    'date',
                    Rule::unique('sales_plans')
                        ->where('user_id', $request->user_id)
                        ->whereNull('deleted_at')
                        ->whereNot('id', $id)
                ],
                'plan' => 'required|numeric',
            ],
            [
                'user_id.required' => 'Выберите значение из списка',
                'user_id.integer' => 'Выберите значение из списка',
                'month.required' => 'Поле месяц не может быть пустым',
                'month.date' => 'Поле месяц должно быть в формате даты',
                'month.unique' => 'План для данного сотрудника в этот месяц установлен',
                'plan.required' => 'Поле план продаж не может быть пустым',
                'plan.numeric' => 'Поле план продаж должно быть формате числа',
            ]
        );

        $plan = SalesPlan::firstWhere('id', $id);
        $plan->update($request->all());
        return redirect()->back()->with('success', 'Данные успешно обновлены 👍');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $salesPlan = SalesPlan::find($id);
        $salesPlan->delete();
        return redirect()->back()->with('success', 'Данные успешно удалены 👍');
    }

    public function statistics(Request $request)
    {

        $start = date('Y-m-01') . ' 00:00:00';
        $end = date('Y-m-31') . ' 23:59:59';
        $planMonth = date('Y-m-01');

        if ($request->input('month')) {
            $start = $request->input('month').'-01 00:00:00';
            $end = $request->input('month').'-31 23:59:59';
            $planMonth = $request->input('month').'-01';
        }

        $sumPlan = SalesPlan::orderBy('month', 'desc')
            ->where('month', $planMonth)
            ->sum('plan');

        $sumClaims = DB::table('claims')
            ->select(DB::raw('SUM(amount) as total_amount'))
            ->whereNotNull('creator')
            ->where('notInclude', '=',0)
            ->where('created_at', '>=', $start)
            ->where('created_at', '<=', $end)
            ->whereNull('deleted_at')
            ->get();


        $sumPaid = HistoryPayment::where('created_at', '>=', $start)
                    ->where('created_at', '<=', $end)
                    ->with('status')
                    ->whereHas('status', function ($w) {
                        $w->where('name', "Частично оплачен")
                            ->orWhere('name', "Оплачен");
                    })
            ->select(DB::raw(' SUM(amount) as total_amount'))
            ->get();

        $paidClaims = HistoryPayment::where('created_at', '>=', $start)
            ->where('created_at', '<=', $end)
            ->with('status')
            ->whereHas('status', function ($w) {
                $w->where('name', "Частично оплачен")
                    ->orWhere('name', "Оплачен");
            })
            ->groupBy('claim_id')
            ->select(DB::raw('claim_id, SUM(amount) as total_amount'))
            ->get();


        $multipliedPaidClaims = [];


        if (count($paidClaims) != 0) {
            foreach ($paidClaims as $key => $part) {

                if (!isset($part->claim->id)) continue;
                if (isset($multipliedPaidClaims[$part->claim->creator])) {
                    $multipliedPaidClaims[$part->claim->creator] += $part->total_amount;
                } else {
                    $multipliedPaidClaims[$part->claim->creator] = $part->total_amount;
                }

            }
        }

        $usersClaims = DB::table('claims')
            ->select('creator', DB::raw('SUM(amount) as total_amount'))
            ->where('notInclude',0)
            ->whereNotNull('creator')
            ->where('created_at', '>=', $start)
            ->where('created_at', '<=', $end)
            ->whereNull('deleted_at')
            ->groupBy('creator')
            ->get();

        $multiplied = $usersClaims->mapWithKeys(function ($item, $key) {
            return [$item->creator => $item];
        });


        $salesPlan = SalesPlan::orderBy('month', 'desc')
            ->where('month', $planMonth)
            ->get();

//        dd($multiplied);

        return view('plan.statistics', compact('multiplied', 'salesPlan', 'multipliedPaidClaims', 'sumPlan', 'sumClaims', 'sumPaid', 'planMonth'));
    }


    public function remoteData(Request $request)
    {
        $start = date('Y-m-01') . ' 00:00:00';
        $end = date('Y-m-31') . ' 23:59:59';

        if ($request->input('month')) {
            $start = $request->input('month').'-01 00:00:00';
            $end = $request->input('month').'-31 23:59:59';
        }


//        $paidClaims = Claim::with('historiesPayment')
//            ->whereHas('historiesPayment', function ($q) use ($start, $end) {
//                $q->where('created_at', '>=', $start)
//                    ->where('created_at', '<=', $end)
//                    ->with('status')
//                    ->whereHas('status', function ($w) {
//                        $w->where('name', "Частично оплачен")
//                            ->where('name', "Оплачен");
//                    });
//            })
//            ->where('notInclude',0)
//            ->select('creator', DB::raw('SUM(amount) as total_amount'))
//            ->groupBy('creator')
//            ->get();

        $paidClaims = HistoryPayment::where('created_at', '>=', $start)
            ->where('created_at', '<=', $end)
            ->with('status')
            ->whereHas('status', function ($w) {
                $w->where('name', "Частично оплачен")
                    ->orWhere('name', "Оплачен");
            })
            ->groupBy('claim_id')
            ->select(DB::raw('claim_id, SUM(amount) as total_amount'))
            ->get();

        $fio = [];
        $multipliedPaidClaims = [];
        if (count($paidClaims) != 0) {
            foreach ($paidClaims as $key => $part) {
                if (!isset($part->claim->id)) continue;
                if (isset($multipliedPaidClaims[$part->claim->creator])) {
                    $multipliedPaidClaims[$part->claim->creator] += floatval($part->total_amount);
                } else {
                    $multipliedPaidClaims[$part->claim->creator] = floatval($part->total_amount);
                }
                $fio[$part->claim->creator] = $part->claim->creatorUser->getFullName();
            }
        }


//        $fio = $paidClaims->mapWithKeys(function ($item, $key) {
//            return [$key => $item->creatorUser->getFullName()];
//        });
//
//        $multipliedPaidClaims = $paidClaims->mapWithKeys(function ($item, $key) {
//            return [$key => $item->total_amount];
//        });

        $res = array(
            'labels' => $fio,
            'data' => $multipliedPaidClaims,
        );

        return json_encode($res);
    }

    public function services(Request $request)
    {

        $start = date('Y-m-01') . ' 00:00:00';
        $end = date('Y-m-31') . ' 23:59:59';

        if ($request->input('month')) {
            $start = $request->input('month').'-01 00:00:00';
            $end = $request->input('month').'-31 23:59:59';
        }
        $categories = Category::all();

//        $categoriesAllSum = DB::table('categories')
//            ->leftJoin('services', 'categories.id', '=', 'services.category_id')
//            ->leftJoin('claims', 'services.id', '=', 'claims.service_id')
//            ->leftJoin('history_payments', 'claims.id', '=', 'history_payments.claim_id')
//            ->leftJoin('status_payments', 'history_payments.status_id', '=', 'status_payments.id')
//            ->select('categories.id',
//                'categories.name',
//                DB::raw('sum(history_payments.amount) as claims_amount'))
//            ->whereNull('categories.deleted_at')
////            ->where('claims.created_at', '>=', $start)
////            ->where('claims.created_at', '<=', $end)
//            ->where('claims.notInclude',0)
////            ->where('history_payments.status_id', '=', 4)
//            ->where('status_payments.name', '=', 'Оплачен')
//            ->orWhere('status_payments.name', '=', 'Частично оплачен')
//            ->where('history_payments.created_at', '>=', $start)
//            ->where('history_payments.created_at', '<=', $end)
//            ->groupBy('categories.id', 'categories.name')
//            ->get();

        $categoriesAllSum = [];
        foreach ($categories as $category) {
            $categoryClaims = DB::table('categories')
                ->join('services', 'categories.id', '=', 'services.category_id')
                ->join('claims', 'services.id', '=', 'claims.service_id')
                ->select('claims.id')
                ->where('categories.id', $category->id)
                ->whereNull('categories.deleted_at')
                ->get();

            $claims = $categoryClaims->mapWithKeys(function ($item, $i) {
                return [$i => $item->id];
            });

            $paid = HistoryPayment::where('created_at', '>=', $start)
            ->where('created_at', '<=', $end)
            ->whereIn('claim_id', $claims)
            ->with('status')
            ->whereHas('status', function ($w) {
                $w->where('name', "Частично оплачен")
                    ->orWhere('name', "Оплачен");
            })
            ->select(DB::raw('SUM(amount) as total_amount'))
            ->get();

            if ($paid->first()->total_amount != null) {
                $categoriesAllSum[$category->id] = [
                    'id' => $category->id,
                    'name' => $category->name,
                    'claims_amount' => $paid->first()->total_amount,
                ];
            }

        }


//        $categoriesAllSum = $categoriesAllSum->mapWithKeys(function ($item, $key) {
//            return [$item->id => $item];
//        });

        $usersSum = array();
        $allData = array();


        foreach ($categories as $key => $category) {

            $allData[$key] = array('name' => $category->name);
            if (isset($categoriesAllSum[$category->id])) {
                $allData[$key]['sum'] = $categoriesAllSum[$category->id]['claims_amount'];
            } else {
                $allData[$key]['sum'] = 0;
            }



            $categoryClaims = DB::table('categories')
                ->join('services', 'categories.id', '=', 'services.category_id')
                ->join('claims', 'services.id', '=', 'claims.service_id')
                ->select('claims.id')
                ->whereNull('categories.deleted_at')
                ->where('categories.id', $category->id)
                ->get();

            $claims = $categoryClaims->mapWithKeys(function ($item, $i) {
                return [$i => $item->id];
            });

            $paid = HistoryPayment::where('created_at', '>=', $start)
                ->where('created_at', '<=', $end)
                ->whereIn('claim_id', $claims)
                ->with('status')
                ->whereHas('status', function ($w) {
                    $w->where('name', "Частично оплачен")
                        ->orWhere('name', "Оплачен");
                })
                ->groupBy('claim_id')
                ->select(DB::raw('claim_id, SUM(amount) as total_amount'))
                ->get();


            $user = [];
            if (count($paid) != 0) {
                foreach ($paid as $part) {

                    if($part->claim == null || $part->claim->creator == null) continue;
                    if (isset($user[$part->claim->creator])) {
                        $user[$part->claim->creator] = [
                            'creator' => $part->claim->creatorUser->id,
                            'total_amount' => $user[$part->claim->creator]['total_amount'] + $part->total_amount
                        ];
                    } else {
                        $user[$part->claim->creator] = [
                            'creator' => $part->claim->creatorUser->id,
                            'total_amount' => $part->total_amount
                        ];
                    }
                }
            }


            $allData[$key]['users'] = $user;
        }
//        dd($allData);


        return view('plan.services', compact('categories', 'allData'));
    }

    public function getStatisticsByYear($year) {

        $paid = HistoryPayment::where('created_at', '>=', $year.'-01-01')
            ->where('created_at', '<=', $year.'-12-31')
            ->with('status')
            ->whereHas('status', function ($w) {
                $w->where('name', "Частично оплачен")
                    ->orWhere('name', "Оплачен");
            })
            ->groupBy('new_date')
            ->orderBy('new_date')
            ->select(DB::raw('SUM(amount) as total_amount'), DB::raw('DATE_FORMAT(created_at, "%Y-%m") AS new_date'))
            ->get();

        $sumClaims = DB::table('claims')
            ->select(DB::raw('SUM(amount) as total_amount'), DB::raw('DATE_FORMAT(created_at, "%Y-%m") AS new_date'))
            ->whereNotNull('creator')
            ->where('notInclude',0)
            ->where('created_at', '>=', $year.'-01-01 00:00:00')
            ->where('created_at', '<=', $year.'-12-31 23:59:59')
            ->whereNull('deleted_at')
            ->groupBy('new_date')
            ->orderBy('new_date')
            ->get();


        $res = [];
        $data = [];
        $data2 = [];
        $claims = [];

        foreach ($paid as $item) {
            $res[intval(explode('-', $item->new_date)[1])] = $item->total_amount;
        }

        foreach ($sumClaims as $item) {
            $claims[intval(explode('-', $item->new_date)[1])] = $item->total_amount;
        }

        for ($i = 1; $i <= 12; $i++) {
            if (isset($res[$i])) $data[] = $res[$i];
            else $data[] = 0;

            if (isset($claims[$i])) $data2[] = $claims[$i];
            else $data2[] = 0;
        }

        $final = [];

        $final[] = [
            'name' => 'Поступления',
            'data' => $data,
        ];

        $final[] = [
            'name' => 'Создано заявок',
            'data' => $data2,
        ];



        return json_encode($final);
    }


    public function countDays() {

        return view('plan.countdays');
    }

    public function countDaysPost(Request $request) {

        $validatedData = $request->validate(
            [
                'month' => [
                    'required',
                    'date',
                ],
            ],
            [
                'month.required' => 'Поле месяц не может быть пустым',
                'month.date' => 'Поле месяц должно быть в формате даты',
            ]
        );


        DB::beginTransaction();
        try {

            $salesPlanMonth = SalesPlanMonth::where('month', $request->month)->first();
            if ($salesPlanMonth) {
                $salesPlanMonth->update([
                    'selected_days' => $request->selected_days
                ]);
            } else {
                SalesPlanMonth::create($request->all());
            }

            DB::commit();
            $request->session()->flash('success', 'Данные успешно обновлены 👍');
            return back();
        } catch (\Exception $exception) {
            DB::rollback();

            $request->session()->flash('error', 'При добавлении данных произошла ошибка 😢');
            return back();
        }

    }

    public function getWorkingDays($month) {

        $res = [];
        $days = SalesPlanMonth::where('month', $month)->first();
        if ($days) {
            $days = explode('|', $days->selected_days);
            foreach ($days as $day) {
                $res[] = trim($day);
            }
            return json_encode($res);
        }

        return json_encode($res);


    }

}
