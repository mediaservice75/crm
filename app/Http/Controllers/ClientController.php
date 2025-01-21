<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreClients;
use App\Models\ActiveAd;
use App\Models\Claim;
use App\Models\Client;
use App\Models\Group;
use App\Models\HistoryClaim;
use App\Models\HistoryClient;
use App\Models\HistoryPayment;
use App\Models\LprClient;
use App\Models\RequisiteClient;
use App\Models\StatusClient;
use App\Models\UserM;
use App\Notifications\NotifyUser;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\Rule;

class ClientController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {


        if (Auth::user()->cannot('viewAny', Client::class)) {
            abort(403);
        }

        $search = '%';
        if ($request->input('search')) {
            $request->merge(['search' => $request->input('search')]);
            $validatedData = $request->validate(
                [
                    'search' => 'required|string|min:1',
                ],
                [
                    'search.required' => 'Введите поисковый запрос',
                    'search.min' => 'Введите поисковый запрос',
                    'search.string' => 'Введите поисковый запрос',
                ]
            );

            $search = '%' . $request->input('search') . '%';
        }

//        if (Auth::user()->role->level <= 2) {
//            $clients = Client::where(function ($q) use ($search) {
//                    $q->where('name', 'like', $search);
//                    $q->orWhere('phone', 'like', $search);
//                    $q->orWhere('address', 'like', $search);
//                    $q->orWhere('email', 'like', $search);
//                })
//                ->where('isAllow', 1)
//                ->paginate(9);
//        } else {
            $clients = Client::where('user_id', Auth::user()->id)
                ->where(function ($q) use ($search) {
                    $q->where('name', 'like', $search);
                    $q->orWhere('phone', 'like', $search);
                    $q->orWhere('address', 'like', $search);
                    $q->orWhere('email', 'like', $search);
                })
                ->where('isAllow', 1);



            $clients = $clients->paginate(12)->withQueryString();
//        }


        return view('clients.index', compact('clients'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        if (Auth::user()->cannot('create', Client::class)) {
            abort(403);
        }
        return view('clients.create');
    }

    public function createFast()
    {
        if (Auth::user()->cannot('create', Client::class)) {
            abort(403);
        }
        return view('clients.fast');
    }

    public function store(StoreClients $request)
    {
        if (Auth::user()->cannot('create', Client::class)) {
            abort(403);
        }

        $inn = null;
        if ($request->input('inn') != null) {
            $validatedData = $request->validate(
                [
                    'inn' => 'required|regex:/^[0-9]+$/|min:10|max:12',
                ],
                [
                    'inn.required' => 'Поле ИНН не может быть пустым',
                    'inn.regex' => 'Поле ИНН может состоять только из цифр',
                    'inn.min' => 'Поле ИНН не может быть меньше 10 символов',
                    'inn.max' => 'Поле ИНН не может быть больше 12 символов',
                ]
            );
            $inn = $request->input('inn');

            $resultInn = RequisiteClient::where('INN', $inn)->first();

            if ($resultInn != null) {
                $request->session()->flash('error', 'Введенный ИНН занят');
                return back();
            }
        }


        DB::beginTransaction();

        $data = [];
        try {
            if (Auth::user()->role->level == 1 || Auth::user()->role->level == 2) {
                $request->merge(['isAllow' => 1]);
            }

            $user_id = Auth::user()->id;
            $request->merge(['user_id' => $user_id]);
            if ($request->date_of_birth) {
                $date = Carbon::createFromFormat('d.m.Y', $request->date_of_birth)->format('Y-m-d');
                $request->merge(['date_of_birth' => $date]);
            }


            $client = Client::create($request->all());
            DB::commit();
            if ($request->hasFile('logo')) {
                $folder = date("Y-m-d");
                $data['logo'] = $request->file('logo')->store("images/{$folder}");
                $client->logo = $data['logo'];
                $client->save();
                DB::commit();
            }
            $idClient = $client->id;


            $rc = new RequisiteClient;
            $rc->INN = $inn;
            $rc->client_id = $idClient;
            $rc->save();
            DB::commit();


            $history = new HistoryClient;
            $history->status_id = StatusClient::where('name', 'Создан клиент')->get()->first()->id;
            $history->client_id = $idClient;
            $history->comment = 'Создан новый клиент';
            $history->user_id = Auth::user()->id;
            $history->save();
            DB::commit();

            $request->session()->flash('success', 'Данные успешно добавлены 👍');
            return back();
        } catch (\Exception $exception) {
            DB::rollback();

            $request->session()->flash('error', 'При добавлении данных произошла ошибка 😢');
            return back();
        }


    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function storeFast(Request $request)
    {
        if (Auth::user()->cannot('create', Client::class)) {
            abort(403);
        }

        $validatedData = $request->validate(
            [
                'name' => 'required',
                'phone' => 'required|regex:/^(\+7)(\()[0-9]{3}(\))[0-9]{3}(\-)[0-9]{2}(\-)[0-9]{2}$/',
            ],
            [
                'name.required' => 'Поле наименование не может быть пустым',
                'phone.required' => 'Поле номер телефона не может быть пустым',
                'phone.regex' => 'Поле номер телефона должен быть в формате +7(999)999-99-99',
            ]
        );

        DB::beginTransaction();

        try {
            if (Auth::user()->role->level == 1 || Auth::user()->role->level == 2) {
                $request->merge(['isAllow' => 1]);
            }
            $request->merge(['user_id' => Auth::user()->id]);

            $client = Client::create($request->all());
            DB::commit();
            $idClient = $client->id;
            $rc = new RequisiteClient;
            $rc->client_id = $idClient;
            $rc->save();
            DB::commit();

            $history = new HistoryClient;
            $history->status_id = StatusClient::where('name', 'Создан клиент')->get()->first()->id;
            $history->client_id = $idClient;
            $history->comment = 'Создан новый клиент';
            $history->user_id = Auth::user()->id;
            $history->save();
            DB::commit();

            $request->session()->flash('success', 'Данные успешно добавлены 👍');
            return back();
        } catch (\Exception $exception) {
            DB::rollback();
            $request->session()->flash('error', 'При добавлении данных произошла ошибка 😢' . $exception);
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
        $client = Client::firstWhere('id', $id);

        if (Auth::user()->cannot('view', $client)) {
            abort(403);
        }
//        session()->forget('previous_url');
        session(['previous_url' => url()->current()]);
        $users = Group::with('roles.users')
            ->where('name', 'Отдел продаж')
            ->get();

        $statusClient = StatusClient::where('isVisible', 1)->get();
        $listStatusesClient = HistoryClient::where('client_id', $id)->orderBy('id', 'desc')->get();
        $groups = Group::all();
//        $claims = Claim::where('client_id', $id)->get();
//        $listStatusesClaims = HistoryClaim::where('client_id', $id)->orderBy('id', 'desc')->get();
        $claims = Claim::where('client_id', $id)->with('histories')->orderBy('created_at', 'desc')->get();
//        $services =
        return view('clients.show', compact('client', 'statusClient', 'listStatusesClient', 'groups', 'claims', 'users'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $client = Client::firstWhere('id', $id);
//        if (Auth::user()->cannot('update', $client)) {
//            abort(403);
//        }

        return view('clients.edit', compact('client'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function update(StoreClients $request, $id)
    {

//        dd($request);
        $client = Client::firstWhere('id', $id);
//        if (Auth::user()->cannot('update', $client)) {
//            abort(403);
//        }

        $inn = null;
        if ($request->input('inn') != null) {
            $validatedData = $request->validate(
                [
                    'inn' => 'required|regex:/^[0-9]+$/|min:10|max:12',
                ],
                [
                    'inn.required' => 'Поле ИНН не может быть пустым',
                    'inn.regex' => 'Поле ИНН может состоять только из цифр',
                    'inn.min' => 'Поле ИНН не может быть меньше 10 символов',
                    'inn.max' => 'Поле ИНН не может быть больше 12 символов',
                ]
            );
            $inn = $request->input('inn');

            $resultInn = RequisiteClient::where('INN', $inn)->first();

            if ($resultInn != null) {
                if ($resultInn->client_id != $id) {
                    $request->session()->flash('error', 'Введенный ИНН занят');
                    return back();
                }
            }
        }

        DB::beginTransaction();

        try {

            if ($request->date_of_birth) {
                $date = Carbon::createFromFormat('d.m.Y', $request->date_of_birth)->format('Y-m-d');
                $request->merge(['date_of_birth' => $date]);
            }

            $client->update($request->all());
            DB::commit();

            $data = [];
            if ($request->hasFile('logo')) {
                Storage::delete($client->logo);
                $folder = date("Y-m-d");
                $data['logo'] = $request->file('logo')->store("images/{$folder}");
                $client->logo = $data['logo'];
                $client->save();
                DB::commit();
            }

            $req = RequisiteClient::firstWhere('client_id', $id);
            $req->INN = $inn;
            $req->save();
            DB::commit();


            return redirect()->back()->with('success', 'Данные успешно обновлены 👍');
        } catch (\Exception $exception) {
            DB::rollback();

            $request->session()->flash('error', 'При добавлении данных произошла ошибка 😢');
            return back();
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return \Illuminate\Http\RedirectResponse
     */
    public function destroy($id)
    {
        $client = Client::find($id);
        if (Auth::user()->cannot('delete', $client)) {
            abort(403);
        }

        $claims = Claim::where('client_id', $id)->get();
        if ($claims) {
            foreach ($claims as $claim) {
                HistoryPayment::where('claim_id', $claim->id)->delete();
                $claim->delete();
            }
        }

        $client->delete();
        return redirect()->back()->with('success', 'Данные успешно удалены 👍');
    }

    public function showAll(Request $request)
    {
        if (Auth::user()->cannot('viewAny', Client::class)) {
            abort(403);
        }

//        dd($request);

        $search = '%';
        if ($request->input('search')) {
            $request->merge(['search' => $request->input('search')]);
            $validatedData = $request->validate(
                [
                    'search' => 'required|string|min:1',
                ],
                [
                    'search.required' => 'Введите поисковый запрос',
                    'search.min' => 'Введите поисковый запрос',
                    'search.string' => 'Введите поисковый запрос',
                ]
            );

            $search = '%' . $request->input('search') . '%';
        }

//        if (Auth::user()->role->level <= 2) {
//            $clients = Client::where(function ($q) use ($search) {
//                    $q->where('name', 'like', $search);
//                    $q->orWhere('phone', 'like', $search);
//                    $q->orWhere('address', 'like', $search);
//                    $q->orWhere('email', 'like', $search);
//                })
//                ->where('isAllow', 1)
//                ->paginate(9);
//        } else {

//            $clients = DB::table('clients')
//                ->join('users', 'users.id', '=', 'clients.user_id')
//                ->where('clients.name', 'like', $search)
//                ->orWhere('clients.phone', 'like', $search)
//                ->orWhere('clients.address', 'like', $search)
//                ->orWhere('clients.email', 'like', $search)
//                ->orWhere('users.name', 'like', $search)
//                ->orWhere('users.surname', 'like', $search)
//                ->orWhere('users.patron', 'like', $search)
//                ->where('isAllow', '=', 1)
//                ->select('clients.*', 'users.*');
//        dd($clients);

            $clients = Client::where(function ($q) use ($search) {
                    $q->where('clients.name', 'like', $search);
                    $q->orWhere('clients.phone', 'like', $search);
                    $q->orWhere('clients.address', 'like', $search);
                    $q->orWhere('clients.email', 'like', $search);
                })
                ->select('users.*', 'clients.*')
                ->leftJoin('users', 'users.id', '=', 'clients.user_id')
                ->where('isAllow', 1);

        if ($request->input('free-client') and !$request->input('search')) {
            $clients->whereNull('clients.user_id');
        } else {
            $clients->orWhere('users.name', 'like', $search)
                ->orWhere('users.surname', 'like', $search)
                ->orWhere('users.patron', 'like', $search);
        }

            $clients = $clients->paginate(30)->withQueryString();


        // $clients = Client::where('isAllow', 1)->paginate(30)->withQueryString();
        return view('clients.all', compact('clients'));
    }

    public function allow()
    {
        if (Auth::user()->cannot('allowClient', Client::class)) {
            abort(403);
        }
        $clients = Client::where('isAllow', 0)->get();
        return view('clients.allow', compact('clients'));
    }

    public function allowUpdate($id, Request $request)
    {
        if (Auth::user()->cannot('allowClient', Client::class)) {
            abort(403);
        }

        DB::beginTransaction();
        try {
            $client = Client::firstWhere('id', $id);
            $client->isAllow = 1;
            $client->save();
            DB::commit();

            return redirect()->back()->with('success', 'Данные успешно обновлены 👍');
        } catch (\Exception $exception) {
            DB::rollback();

            $request->session()->flash('error', 'При обновлении данных произошла ошибка 😢');
            return back();
        }
    }

    // ----------**********------------
    // ********** COMPLETE ************
    // ----------**********------------

    public function distribution(Request $request) {
        if (Auth::user()->cannot('allowClient', Client::class)) {
            abort(403);
        }

        $search = '%';
        if ($request->input('search')) {
            $request->merge(['search' => $request->input('search')]);
            $validatedData = $request->validate(
                [
                    'search' => 'required|string|min:1',
                ],
                [
                    'search.required' => 'Введите поисковый запрос',
                    'search.min' => 'Введите поисковый запрос',
                    'search.string' => 'Введите поисковый запрос',
                ]
            );

            $search = '%' . $request->input('search') . '%';
        }

//        $clients = Client::where(function ($q) use ($search) {
//                $q->where('name', 'like', $search);
//                $q->orWhere('phone', 'like', $search);
//                $q->orWhere('address', 'like', $search);
//                $q->orWhere('email', 'like', $search);
//            })
//            ->where('isAllow', 1);
//
//        if ($request->input('free-client')) {
//            $clients->whereNull('user_id');
//        }
        $clients = Client::where(function ($q) use ($search) {
            $q->where('clients.name', 'like', $search);
            $q->orWhere('clients.phone', 'like', $search);
            $q->orWhere('clients.address', 'like', $search);
            $q->orWhere('clients.email', 'like', $search);
        })
            ->select('users.*', 'clients.*')
            ->leftJoin('users', 'users.id', '=', 'clients.user_id')
            ->where('isAllow', 1);

        if ($request->input('free-client') and !$request->input('search')) {
            $clients->whereNull('clients.user_id');
        } else {
            $clients->orWhere('users.name', 'like', $search)
                ->orWhere('users.surname', 'like', $search)
                ->orWhere('users.patron', 'like', $search);
        }

        $clients = $clients->paginate(12)->withQueryString();

//        $clients = Client::where('isAllow', 1)
//            ->paginate(12)->withQueryString();
        $users = UserM::where('isBlocked', 0)->get();

        return view('clients.distribution', compact('clients', 'users'));
    }

    // ----------**********------------
    // ********** COMPLETE ************
    // ----------**********------------

    public function distributionUpdate($id, Request $request) {

//        if (Auth::user()->cannot('viewAny', ActiveAd::class)) {
//            abort(403);
//        }

        $client = Client::find($id);
        if (!$client) {
            return response()->json([
                'error' => 'Клиент не найден'
            ], 404);
        }

        if ($request->user_id == 0) {
            $request->merge([
                'user_id' => null,
            ]);
        }

        $client->update([
            'user_id' => $request->user_id,
        ]);

        $user = '';
        if ($client->user_id) {
            $user = "<span>" . $client->user->getFullName() . "</span>";
            $client->user->notify(new NotifyUser('Вас назаничили ответстенным для клиента', 'https://crm-mediaservice.ru/clients/' . $client->id, $client));

        } else {
            $user = '<span class="text-success">Свободный клиент</span>';
        }

        return response()->json($user);


    }

    public function kanban() {

        $statusClients = StatusClient::orderBy('order', 'asc')->get();
        $allData = array();
        $clients = Client::where('user_id', Auth::user()->id)->get();

        foreach ($statusClients as $key => $statusClient) {

            $i = $key+1;

            $allData[$i] = array('name' => $statusClient->name);


            foreach ($clients as $index => $client) {
                if ($client->histories->first()->status_id == $statusClient->id) {

                    $allData[$i]['clients'][] = $client;
                    unset($clients[$index]);
                }
            }

        }


        return view('clients.kanban', compact('allData'));
    }


    public function typing(Request $request) {

        $res = '';
        $clients = Client::where('name', 'LIKE', '%'.$request->client.'%')->get();
        $res .= '<h5>Результаты поиска:</h5>';

        if (count($clients) == 0) {
            $res .= '<p class="mt-3">Ничего не найдено</p>';
        } else {
            $res .= '<ul>';
            foreach ($clients as $client) {
                $res .= '<li><a target="_blank" href="/clients/'.$client->id.'" >'.$client->name.'</a></li>';
            }
            $res .= '</ul>';
        }

        return $res;
    }
}
