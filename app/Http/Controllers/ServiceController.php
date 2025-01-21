<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreServ;
use App\Http\Requests\StoreService;
use App\Models\Category;
use App\Models\Group;
use App\Models\Package;
use App\Models\Service;
use App\Models\UserM;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ServiceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $services = Service::all();
        $categories = Category::all();
        $groups = Group::all();
        return view('services.index', compact('categories', 'groups', 'services'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $categories = Category::all();
        $groups = Group::all();
        $users = UserM::where('isBlocked', 0)->get();
        return view('services.create', compact('groups', 'categories', 'users'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreService  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreService $request)
    {

        DB::beginTransaction();
        try {

            if(!$request->user_id) {
                $request->merge(['user_id' => null]);
            }

            Service::create($request->all());
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
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        abort(404);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $service = Service::firstWhere('id', $id);
        $categories = Category::all();
        $groups = Group::all();
        $users = UserM::where('isBlocked', 0)->get();
//        if (!$service->user_id) $users = false;
//        else $users = Group::with('roles.users')->find($service->group_id);
        return view('services.edit', compact('service', 'categories', 'groups', 'users'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(StoreService $request, $id)
    {
        $service = Service::firstWhere('id', $id);
        if(!$request->user_id) {
            $request->merge(['user_id' => null]);
        }

        $service->update($request->all());
        return redirect()->back()->with('success', 'Данные успешно обновлены 👍');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $service = Service::find($id);
        $service->delete();
        return redirect()->back()->with('success', 'Данные успешно удалены 👍');
    }

    public function usersByGroup(Request $request) {

        if ($request->value > 0) {
//        $request->value = 3;

//        $users = Group::with('roles.users')->find($request->value);
//            $users = Group::with('roles')
//                ->whereHas('roles', function ($q) {
//                    $q->with('users')
//                        ->whereHas('users', function ($q2) {
//                            $q2->where('isBlocked', '=' , 0);
//                        });
//                })
//                ->where('id', $request->value)
//                ->get();

        $users = UserM::with('role')
            ->whereHas('role', function ($q) use ($request) {
                $q->with('group')
                ->whereHas('group', function ($q2) use ($request) {
                    $q2->where('id', $request->value);
                });
            })
            ->where('isBlocked', 0)
            ->get();

//            dd($users);


            $htmlRes = '<option value="0">Не выбрано</option>';
            if (!$users) {
                echo $htmlRes;
                return;
            }

            if (count($users) != 0) {
                foreach ($users as $user) {
                    $nameRole = $user->role->name;
                    $htmlRes .= "<option value='$user->id'>$user->surname $user->name $user->patron ($nameRole)</option>";
                }
            }

            echo $htmlRes;
            return;

        }
        return 0;
    }

    public function servicesByGroup(Request $request) {

        if ($request->value > 0) {

            $services = Service::where('group_id', $request->value)->get();

            $htmlRes = '<option value="0">Не выбрано</option>';
            if (!$services) {
                echo $htmlRes;
                return;
            }

            foreach ($services as $service) {
                $htmlRes .= "<option value='$service->id'>$service->name</option>";
            }


            echo $htmlRes;
            return;

        }
        return 0;
    }

    public function packageByService(Request $request) {

        if ($request->value > 0) {

            $services = Package::where('service_id', $request->value)->get();

            $htmlRes = '<option value="0">Не выбрано</option>';
            if (!$services) {
                echo $htmlRes;
                return;
            }

            foreach ($services as $service) {
                $htmlRes .= "<option value='$service->id'>$service->name</option>";
            }


            $res = array(
                'html' => $htmlRes,
                'service' => Service::firstWhere('id', $request->value),
            );

            echo json_encode($res);
            return;

        }
        return 0;

    }

}
