<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\StoreUser;
use App\Mail\TestMail;
use App\Mail\UserRegistration;
use App\Models\Category;
use App\Models\Claim;
use App\Models\Client;
use App\Models\Group;
use App\Models\HistoryPayment;
use App\Models\Role;
use App\Models\SalesPlan;
use App\Models\UserM;
use App\Notifications\RemindClient;
use http\Client\Curl\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class UserController extends Controller
{

    public function login()
    {
//        dd(DB::table('users')->where('id', '=', '1')->update([
//            'password' => Hash::make('1111'),
//            'email' => 'admin@info.ru'
//        ]));
        return view('users.login');
    }

    public function auth(LoginRequest $request)
    {

        if (Auth::attempt([
            'email' => $request->email,
            'password' => $request->password,
            'isBlocked' => 0,
        ])) {

            return redirect()->route('calendar.index');
        }

        return redirect()->back()->with('error', "Неверный логин или пароль!");

    }

    public function logout()
    {
        Auth::logout();
        return redirect()->route('users.login');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {


        $users = UserM::orderBy('isBlocked', 'asc')->get();
        return view('users.index', compact('users'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $roles = Role::all();
        return view('users.create', compact('roles'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreUser $request)
    {
        DB::beginTransaction();
        $data = [];
        try {
            $email = $request->email;
            $password = Str::random(8);
            $params = [
                'email' => $email,
                'password' => $password,
            ];
            $request->merge(['password' => Hash::make($password)]);

            $user = UserM::create($request->all());
            DB::commit();

            if ($request->hasFile('photo')) {
                $folder = date("Y-m-d");
                $data['photo'] = $request->file('photo')->store("images/{$folder}");
                $user->photo = $data['photo'];
                $user->save();
                DB::commit();
            }

            Mail::to($email)->send(new UserRegistration($params));

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
    public function show($id, Request $request)
    {
        if (auth()->user()->role->level != 1 && auth()->user()->role->level != 2 && auth()->user()->id != $id && auth()->user()->role->level != 5 ) {
            abort(403);
        }
        $ajaxMonth = date('Y-m');
        $start = date('Y-m-01') . ' 00:00:00';
        $end = date('Y-m-31') . ' 23:59:59';
        $planMonth = date('Y-m-01');

        session(['previous_url' => url()->current()]);
        getCountPastDays($planMonth);

        if ($request->input('month')) {
            $start = $request->input('month') . '-01 00:00:00';
            $end = $request->input('month') . '-31 23:59:59';
            $planMonth = $request->input('month') . '-01';
            $ajaxMonth = $request->input('month');
        }

        $res = new Request();
        $res->merge([
            'month' => $ajaxMonth,
            'user_id' => $id
        ]);

        $salesByCategory = $this->getSalesByCategoryAjax($res);

        $sumPlan = SalesPlan::orderBy('month', 'desc')
            ->where('month', $planMonth)
            ->where('user_id', $id)
            ->sum('plan');

        $sumClaims = DB::table('claims')
            ->select(DB::raw('SUM(amount) as total_amount'))
            ->whereNotNull('creator')
            ->where('creator', $id)
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
            ->with('claim')
            ->whereHas('claim', function ($q) use ($id) {
                $q->where('creator', $id);
            })
            ->select(DB::raw('SUM(amount) as total_amount'))
            ->get();

        $claimsNotPaid = HistoryPayment::with('status')
            ->whereHas('status', function ($w) {
                $w->where('name', "Оплачен");
            })
            ->with('claim')
            ->whereHas('claim', function ($q) use ($id, $start) {
                $q->where('creator', $id)
                    ->where('created_at', '<', $start)
                    ->where('notInclude', 0);
            })
//            ->groupBy('claim_id')
            ->select(DB::raw('claim_id'))
            ->get();

//        dd($claimsNotPaid);
        $ids = [];
        if ($claimsNotPaid) {
            foreach ($claimsNotPaid as $claim2) {
                $ids[] = $claim2->claim_id;
            }
        }

//        dd($ids);

        $userClaims = Claim::where('creator', $id)
//            ->where('created_at', '>=', $start)
            ->where('created_at', '<=', $end)
            ->whereNotIn('id', $ids)
            ->where('notInclude', 0)
            ->get();

//        dd($userClaims);

        $user = UserM::firstWhere('id', $id);


        return view('users.show', compact('userClaims', 'user', 'sumPlan', 'sumClaims', 'sumPaid', 'id', 'salesByCategory', 'planMonth'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $roles = Role::all();
        $user = UserM::firstWhere('id', $id);
        return view('users.edit', compact('roles'))->with('user', $user);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function update(StoreUser $request, $id)
    {
        $userOld = UserM::firstWhere('id', $id);
        $sendEmail = false;
        DB::beginTransaction();
        $data = [];
        try {
            if ($userOld->email != $request->email) {
                $email = $request->email;
                $password = Str::random(8);
                $params = [
                    'email' => $email,
                    'password' => $password,
                ];
                $request->merge(['password' => Hash::make($password)]);
                $sendEmail = true;
            }

            $userOld->update($request->all());
            DB::commit();

            if ($request->hasFile('photo')) {
                if ($userOld->photo) {
                    Storage::delete($userOld->logo);
                }
                $folder = date("Y-m-d");
                $data['photo'] = $request->file('photo')->store("images/{$folder}");
                $userOld->photo = $data['photo'];
                $userOld->save();
                DB::commit();
            }

            if ($sendEmail) Mail::to($email)->send(new UserRegistration($params));

            $request->session()->flash('success', 'Данные успешно добавлены 👍');
            return back();
        } catch (\Exception $exception) {
            DB::rollback();

            $request->session()->flash('error', 'При добавлении данных произошла ошибка 😢' . $exception);
            return back();
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $user = UserM::find($id);

        if ($user->isBlocked == 1) {
            $user->isBlocked = 0;
            $user->save();
            return redirect()->route('users.index')->with('success', 'Пользователь успешно разблокирован 👍');
        } else {
            $user->isBlocked = 1;
            $user->save();
            Client::where('user_id', $id)->update(['user_id' => null]);
            Claim::where('user_id', $id)->update(['user_id' => null]);
            return redirect()->route('users.index')->with('success', 'Пользователь успешно заблокирован 👍');
        }




    }


    public function getClaimsPayment(Request $request)
    {

        $start = date('Y-m-01') . ' 00:00:00';
        $end = date('Y-m-31') . ' 23:59:59';
        $planMonth = date('Y-m-01');
        $id = $request->input('id');

        if ($request->input('month')) {
            $start = $request->input('month') . '-01 00:00:00';
            $end = $request->input('month') . '-31 23:59:59';
            $planMonth = $request->input('month') . '-01';
        }


        $sumPlan = SalesPlan::orderBy('month', 'desc')
            ->where('month', $planMonth)
            ->where('user_id', $id)
            ->sum('plan');

        $sumClaims = DB::table('claims')
            ->select(DB::raw('SUM(amount) as total_amount'))
            ->whereNotNull('creator')
            ->where('creator', $id)
            ->where('notInclude', 0)
            ->where('created_at', '>=', $start)
            ->where('created_at', '<=', $end)
            ->get();

        $sumPaid = HistoryPayment::where('created_at', '>=', $start)
            ->where('created_at', '<=', $end)
            ->with('status')
            ->whereHas('status', function ($w) {
                $w->where('name', "Частично оплачен")
                    ->orWhere('name', "Оплачен");
            })
            ->with('claim')
            ->whereHas('claim', function ($q) use ($id) {
                $q->where('creator', $id);
            })
            ->select(DB::raw('SUM(amount) as total_amount'))
            ->get();

//        $paidClaims = Claim::with('historiesPayment')
//            ->whereHas('historiesPayment', function ($q) use ($start, $end) {
//                $q->where('created_at', '>=', $start)
//                    ->where('created_at', '<=', $end)
//                    ->with('status')
//                    ->whereHas('status', function ($w) {
//                        $w->where('name', "Оплачен");
//                    });
//            })
//            ->select('creator', DB::raw('SUM(amount) as total_amount'))
//            ->groupBy('creator')
//            ->get();
//
//        $fio = $paidClaims->mapWithKeys(function ($item, $key) {
//            return [$key => $item->creatorUser->getFullName()];
//        });
//
//        $multipliedPaidClaims = $paidClaims->mapWithKeys(function ($item, $key) {
//            return [$key => $item->total_amount];
//        });

        if (!$sumClaims->first()->total_amount) {
            $sumClaims = 0;
        } else {
            $sumClaims = $sumClaims->first()->total_amount;
        }

        if (!$sumPaid->first()->total_amount) {
            $sumPaid = 0;
        } else {
            $sumPaid = $sumPaid->first()->total_amount;
        }

        $res = array(
            'paid' => array($sumPaid),
            'plan' => array($sumPlan),
            'claims' => array($sumClaims),
        );

//        $res = array($sumPlan, $sumPaid, $sumClaims);

        return json_encode($res);
    }

    public function getSalesByCategory () {
        $groups = Group::all();
        $users = Group::with('roles.users')
            ->where('name', 'Отдел продаж')
            ->get();
        return view('users.sales', compact('groups', 'users'));
    }

    public function getSalesByCategoryAjax(Request $request) {

        $start = $request->month.'-01 00:00:00';
        $end = $request->month.'-31 23:59:59';
//        $start = '2022-12-00 00:00:00';
//        $end = '2022-12-32 00:00:00';
//        $request->user_id = 1;

        $categories = Category::all();

        $categoriesAllSum = [];

        foreach ($categories as $category) {
            $categoryClaims = DB::table('categories')
                ->join('services', 'categories.id', '=', 'services.category_id')
                ->join('claims', 'services.id', '=', 'claims.service_id')
                ->select('claims.id')
                ->where('claims.creator', '=', $request->user_id)
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
//
//        $categoriesAllSum = DB::table('categories')
//            ->leftJoin('services', 'categories.id', '=', 'services.category_id')
//            ->leftJoin('claims', 'services.id', '=', 'claims.service_id')
//            ->leftJoin('history_payments', 'claims.id', '=', 'history_payments.claim_id')
//            ->select('categories.id',
//                'categories.name',
//                DB::raw('sum(claims.amount) as claims_amount'))
//            ->whereNull('categories.deleted_at')
////            ->where('claims.created_at', '>=', $start)
////            ->where('claims.created_at', '<=', $end)
//            ->where('claims.notInclude', 0)
//            ->where('claims.creator', '=', $request->user_id)
//            ->where('history_payments.status_id', '=', 4)
//            ->where('history_payments.created_at', '>=', $start)
//            ->where('history_payments.created_at', '<=', $end)
//            ->groupBy('categories.id', 'categories.name')
//            ->get();

//        dd($categoriesAllSum);


//        $categories = Category::all();
//
//        $categoriesAllSum = $categoriesAllSum->mapWithKeys(function ($item, $key) {
//            return [$item->id => $item];
//        });

        $allData = array();
        foreach ($categories as $key => $category) {
            $i = $key+1;

            $allData[$i] = array('name' => $category->name);
            if (isset($categoriesAllSum[$category->id])) {
                $allData[$i]['sum'] = $categoriesAllSum[$category->id]["claims_amount"];
            } else {
                $allData[$i]['sum'] = 0;
            }

            $categoryClaims = DB::table('categories')
                ->join('services', 'categories.id', '=', 'services.category_id')
                ->join('claims', 'services.id', '=', 'claims.service_id')
                ->join('clients', 'clients.id', '=', 'claims.client_id')
                ->select(DB::raw('clients.id as client_id, claims.id as claim_id'))
                ->where('claims.creator', '=', $request->user_id)
                ->where('categories.id', $category->id)
                ->where('claims.notInclude', 0)
                ->whereNull('categories.deleted_at')
                ->get();

            $allData[$i]['users'] = [];
            foreach($categoryClaims as $user){
                $paid = HistoryPayment::where('created_at', '>=', $start)
                    ->where('created_at', '<=', $end)
                    ->where('claim_id', $user->claim_id)
                    ->with('status')
                    ->whereHas('status', function ($w) {
                        $w->where('name', "Частично оплачен")
                            ->orWhere('name', "Оплачен");
                    })
                    ->groupBy('claim_id')
                    ->select(DB::raw('claim_id, SUM(amount) as total_amount'))
                    ->get();
                $allData[$i]['users'][] = $paid;
            }



//            $claims = DB::table('categories')
//                ->leftJoin('services', 'categories.id', '=', 'services.category_id')
//                ->leftJoin('claims', 'services.id', '=', 'claims.service_id')
//                ->leftJoin('history_payments', 'claims.id', '=', 'history_payments.claim_id')
//                ->leftJoin('clients', 'clients.id', '=', 'claims.client_id')
//                ->leftJoin('requisites_clients', 'clients.id', '=', 'requisites_clients.client_id')
//                ->select(
//                    'clients.name',
//                    'requisites_clients.fullName',
//                    'claims.amount',
//                )
//                ->whereNull('categories.deleted_at')
//                ->where('categories.id', $category->id)
////                ->where('claims.created_at', '>=', $start)
////                ->where('claims.created_at', '<=', $end)
//                ->where('claims.notInclude', 0)
//                ->where('claims.creator', '=', $request->user_id)
//                ->where('history_payments.status_id', '=', 4)
//                ->where('history_payments.created_at', '>=', $start)
//                ->where('history_payments.created_at', '<=', $end)
//                ->get();

//            $allData[$i]['users'] = $claims;

        }

        $sum = 0;
        $res = '';
        $res .= '<div class="col-12 col-md-12">
            <div class="card">
                <div class="card-content">
                    <div class="card-body">
                        <h4 class="card-title">Итого поступлений</h4>
                        <table class="table  table-hover datatables"><tr>';
        $res .= '<th></th>';
                    foreach ($allData as $item) {
                        $res .= '<th>' . $item['name'] . '</th>';
                    }
        $res .= '</tr>';

        $res .= '<tr>';
        $res .= '<td class="font-bold">Итого поступлений: </td>';
        foreach ($allData as $item) {
            $sum += $item['sum'];
            $res .= '<td>' . money($item['sum']) . ' руб.</td>';
        }
        $res .= '</tr>';

        $res .= '<tr>';
        $res .= '<td class="font-bold">Доход: </td>';

        $allClaimsAmount = 0;
        $allSalary = 0;
        $bonus = 0;

        foreach ($allData as $item) {
            $allSalary += $item['sum'] * 0.15;
            $allClaimsAmount += $item['sum'];
            $res .= '<td>' . money($item['sum'] * 0.15) . ' руб.</td>';
        }

        $res .= '</tr>';


        $res .= '<tr>';
        $res .= '<td class="font-bold text-primary">Итого поступлений: </td>';
        $res .= '<td colspan="'.count($allData).'">' . money($sum) . ' руб.</td>';
        $res .= '</tr>';

        $res .= '<tr>';
        $res .= '<td class="font-bold text-primary">Общий доход: </td>';
        $res .= '<td colspan="'.count($allData).'">' . money($allSalary) . ' руб.</td>';
        $res .= '</tr>';

        if ($allClaimsAmount < 200000) $bonus = 0;
        else if ($allClaimsAmount < 300000) $bonus = $allClaimsAmount * 0.01;
        else if ($allClaimsAmount < 500000) $bonus = $allClaimsAmount * 0.02;
        else if ($allClaimsAmount < 700000) $bonus = $allClaimsAmount * 0.03;
        else if ($allClaimsAmount < 1000000) $bonus = $allClaimsAmount * 0.04;
        else if ($allClaimsAmount < 3000000) $bonus = $allClaimsAmount * 0.05;
        else $bonus = $allClaimsAmount * 0.06;

        $res .= '<tr>';
        $res .= '<td class="font-bold text-primary">Премия: </td>';
        $res .= '<td colspan="'.count($allData).'">' . money($bonus) . ' руб.</td>';
        $res .= '</tr>';

        $res .='  </table></div>
                </div>
            </div>
        </div>';

//dd($allData);

        foreach($allData as $item) {

        $res .= '<div class="col-12 col-md-6">
            <div class="card">
                <div class="card-content">
                    <div class="card-body">
                        <h4 class="card-title">'.$item['name'].'</h4>
                        <p class="text-primary"><b>Общая сумма: </b>'. money($item['sum']) . ' руб.</p>';
//            {{dd(count($item['users'])); }}
                        $countI = count($item['users']);
                        if (count($item['users']) == 0) {
                            $res .= '<p class="text-danger">В данной категории услуг продажи не найдены</p>';
                        }
                        else {
                            $res .= '<table class="table table-lg table-hover datatables">
                                <thead>
                                    <th>Клиент</th>
                                    <th>Юридическое лицо</th>
                                    <th>Сумма</th>
                                </thead>';
                            foreach($item['users'] as $user) {


                                if(count($user) != 0) {
                                    if($user->first()->claim == null || $user->first()->claim->client == null) continue;
                                    $res .= "<tr>
                                            <td>" . $user->first()->claim->client->name ."</td>";

                                    if ($user->first()->claim->client->requisite->fullName) {
                                        $res .= "<td>" .  $user->first()->claim->client->requisite->fullName ."</td>";
                                    } else {
                                        $res .= "<td class='text-danger'>Данные не заполнены</td>";
                                    }

                                    $res .= "<td>" . money($user->first()->total_amount) ." руб.</td>
                                        </tr>";
                                }
                            }
                            $res .= '</table>';
                        }

             $res .='  </div>
                </div>
            </div>
        </div>';
        }

        return $res;
    }

    public function settings() {
        return view('users.settings');
    }

    public function storeSettings(Request $request) {

        $request->validate(
            [
                'photo' => 'required|image',
            ],
            [
                'photo.required' => 'Поле фото не может быть пустым',
                'photo.image' => 'Формат загружемого файла должен быть (jpg, jpeg, png, bmp, gif, svg, or webp)',
            ]
        );
        $userOld = UserM::firstWhere('id', Auth::user()->id);

        DB::beginTransaction();

        try {
            if ($request->hasFile('photo')) {
                if ($userOld->photo) {
                    Storage::delete($userOld->logo);
                }
                $folder = date("Y-m-d");
                $data['photo'] = $request->file('photo')->store("images/{$folder}");
                $userOld->photo = $data['photo'];
                $userOld->save();
                DB::commit();
            }

            $request->session()->flash('success', 'Аватар успешно обновлен 👍');
            return back();
        } catch (\Exception $exception) {
            DB::rollback();

            $request->session()->flash('error', 'При обновлении автара произошла ошибка 😢');
            return back();
        }
    }
//
//if ($request->hasFile('photo')) {
//$folder = date("Y-m-d");
//$data['photo'] = $request->file('photo')->store("images/{$folder}");
//$user->photo = $data['photo'];
//$user->save();
//DB::commit();
//}

    public function repeatPassword(Request $request, $id) {

        $user = UserM::firstWhere('id', $id);

        $email = $user->email;
        $password = Str::random(8);
        $params = [
            'email' => $email,
            'password' => $password,
        ];

        $user->password = Hash::make($password);
        $user->save();

        Mail::to($email)->send(new UserRegistration($params));

        if (Mail::failures()) {
            $request->session()->flash('error', 'При отправке нового пароля произошла ошибка 😢');
            return back();
        } else {
            $request->session()->flash('success', 'Новый пароль успешно отправлен 👍');
            return back();
        }


    }

}
