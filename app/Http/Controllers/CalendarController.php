<?php

namespace App\Http\Controllers;

use App\Events\ClaimCreated;
use App\Models\ActiveAd;
use App\Models\Claim;
use App\Models\ClaimUsers;
use App\Models\Client;
use App\Models\Goal;
use App\Models\Group;
use App\Models\HistoryClient;
use App\Models\HistoryPayment;
use App\Models\Role;
use App\Models\StatusPayment;
use App\Models\User;
use App\Models\UserM;
use App\Notifications\RemindActiveAd;
use App\Notifications\RemindClient;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class CalendarController extends Controller
{
    public function index()
    {


//        dd(DB::table('users')->where('id', '=', '16')->update([
//            'password' => Hash::make('1111'),
//        ]));



//        dd(Hash::make('1111'));
//        $users = DB::table('users')
//            ->join('roles', 'users.role_id', '=', 'roles.id')
//            ->join('groups', 'roles.group_id', '=', 'groups.id')
//            ->select('users.id')
//            ->where('groups.id','=', 5)
//            ->whereNull('users.deleted_at')
//            ->get();
//
//        $users = $users->mapWithKeys(function ($item, $i) {
//            return [$i => $item->id];
//        });
//
//        dump($users);
//
//        $users = User::whereIn('id', $users)->where('userLeader', 1)->get();
//        dd($users);
//
//        if ($users->count()) {
//            event(new ClaimCreated('Привет, это массовое уведомление!', $users->first()->id));
//        } else {
//            $users = User::whereIn('id', $users)->get();
//            foreach ($users as $user) {
//                event(new ClaimCreated('Привет, это массовое уведомление!', $user->id));
//            }
//        }




//        return response()->json(['status' => 'Уведомления отправлены!']);

        $groups = Group::all();
        $users = Group::with('roles.users')
//            ->where('name', 'Отдел продаж')
            ->get();
        return view('calendar.index', compact('groups', 'users'));
    }

    public function getGoals(Request $request)
    {

//    dd($request);
        if ($request->view == null || $request->view == 1) {
            $goals = Goal::where('user_id', $request->idU)
//                ->orWhereNotNull('rrule')
                ->get();
        } else {
            $goals = Goal::where('user_id', $request->idU)
                ->where('status', 0)
//                ->orWhereNotNull('rrule')
                ->get();
        }

//        dd($goals);

//        $goals = Goal::where('user_id', Auth::user()->id)
////            ->where('status', 0)
//            ->orWhereNotNull('rrule')
//            ->get();
        $events = array();

        foreach ($goals as $goal) {
            $editable = true;
            $duration = '';
            if ($goal->exposed != Auth::user()->id) $editable = false;
            if ($goal->rrule != '' && $goal->allDay == 0) {
//                diffInRealMilliseconds
                $sd = Carbon::createMidnightDate($goal->start_date);
                $ed = Carbon::createMidnightDate($goal->deadline);
                $duration = $ed->diffInRealMilliseconds($sd);
            }

            $allDay = false;
            if ($goal->allDay == 1) {
                $allDay = true;
            }

            $rrule = 0;
            if ($goal->rrule != null) {
                $rrule = 1;
                $editable = false;
            }

            $events[] = [
                'id' => $goal->id,
                'title' => $goal->text,
                'start' => $goal->start_date,
                'end' => $goal->deadline,
                'backgroundColor' => $goal->color,
                'borderColor' => $goal->color,
                'display' => 'block',
                'exposed' => 'Создал задачу: ' . $goal->exposed_user->getFullName(),
                'allDay' => $allDay,
                'duration' => ['milliseconds' => $duration],
                'rrule' => $goal->rrule,
                'customRrule' => $rrule,
                'status' => $goal->status,
                'editable' => $editable,
            ];
        }

        return json_encode($events);
    }

    public function getGoalById($id)
    {
        $goal = Goal::firstWhere('id', $id);
        $editable = true;

        if ($goal->exposed != Auth::user()->id) $editable = false;
        if ($goal->client_id == null) {
            $client = "Клиент не найден";
        } else {
            $client = "<a href='/clients/".$goal->client->id."' target='_blank'>".$goal->client->name."</a>";
        }

        $countFiles = $goal->files->count();

        $event = [
            'id' => $goal->id,
            'title' => $goal->text,
            'start' => $goal->start_date,
            'end' => $goal->deadline,
            'backgroundColor' => $goal->color,
            'borderColor' => $goal->color,
            'display' => 'block',
            'exposed' => $goal->exposed_user->getFullName(),
            'user' => $goal->user->getFullName(),
            'client' => $client,
            'files' => $countFiles,
            'allDay' => $goal->allDay,
            'editable' => $editable,
            'status' => $goal->status
        ];


        return response()->json($event);
    }

    public function updateGoal($id, Request $request)
    {

        $goal = Goal::find($id);
        if (!$goal) {
            return response()->json([
                'error' => 'Задача не найдена'
            ], 404);
        }

        $goal->update([
            'start_date' => $request->start_date,
            'deadline' => $request->deadline,
        ]);

        return response()->json('Задача обновлена');
    }

    public function deleteGoal($id)
    {
        $goal = Goal::find($id);
        if (!$goal) {
            return response()->json([
                'error' => 'Задача не найдена 😢 Попробуйте перезагрузить страницу.'
            ], 404);
        } else if ($goal->exposed != Auth::user()->id) {
            return response()->json([
                'error' => 'Удаление задачи доступно только создателю задачи!'
            ], 403);
        }

        $goal->delete();
        return $id;
    }


    public function reports(Request $request) {
        $users = Group::with('roles.users')
            ->where('name', 'Отдел продаж')
            ->get();

        return view('goals.report', compact('users'));
    }

    public function myReport(Request $request) {

        return view('goals.my-report');
    }



    public function createReport(Request $request) {

        $start = $request->day.' 00:00:01';
        $end = $request->day.' 23:59:59';

        $user_id = $request->user_id;
        $user = UserM::firstWhere('id', $user_id);

        $historiesC = HistoryClient::where('user_id', $user_id)
                    ->where('created_at', '>=', $start)
                    ->where('created_at', '<=', $end)
                    ->orderBy('status_id', 'asc')
                    ->get();

        $goals = Goal::where('exposed', $user_id)
            ->where('updated_at', '>=', $start)
            ->where('updated_at', '<=', $end)
            ->orderBy('status', 'asc')
            ->get();


        $res = '';
        $res .= '<div class="col-12 col-md-12">
            <div class="card">
                <div class="card-content">
                    <div class="card-body">
                        <h4 class="card-title">Отчет сотрудника - ' . $user->getFullName() . ' (за '. Carbon::create($request->day)->format('d.m.Y') .')</h4>

                        <h6 class="mt-4">Взаимодействия с клиентами</h6>
                        <table class="table mt-2 table-hover datatables">';

        if (count($historiesC) == 0) {
            $res .= "<p class='mt-3'>К сожалению, ничего не найдно</p>";
        } else {


            $res .= '<thead>
                <tr>
                    <th>№</th>
                    <th>Клиент</th>
                    <th>Описание</th>
                    <th>Статус</th>
                </tr>
            </thead><tbody>';

            $i = 1;
            foreach ($historiesC as $history) {
                $res .= '<tr>
                        <td>' . $i . '</td>
                        <td>' . $history->client->name . '</td>
                        <td>' . $history->comment . '</td>
                        <td><span class="badge custom-bg-' . $history->status->color . '">' . $history->status->name . '</span></td>
                    </tr>';

                $i++;
            }

        }
        $res .= '</tbody></table>';
        $res .= '<h6 class="mt-4">Задачи сотрудника</h6>
                        <table class="table mt-2 table-hover datatables">';

        if (count($goals) == 0) {
            $res .= "<p class='mt-3'>К сожалению, ничего не найдно</p>";
        } else {
            $res .= '<thead>
                <tr>
                    <th>№</th>
                    <th>Выполнить до</th>
                    <th>Клиент</th>
                    <th>Описание</th>
                    <th>Статус</th>
                </tr>
            </thead><tbody>';

            $i = 1;
            foreach ($goals as $goal) {

                $res .= '<tr>
                        <td>' . $i . '</td>';

                $res .= '<td>
                        '.Carbon::create($goal->deadline)->format('d.m.Y H:i').'
                        </td>';

                if ($goal->client_id != null) {
                    $res .= '<td>' . $goal->client->name . '</td>';
                } else {
                    $res .= '<td>-</td>';
                }

                $res .= '<td>' . $goal->text . '</td>';

                if ($goal->status == 0) {
                    $res .= '<td><span class="badge bg-danger">Не выполнено</span></td>';
                } else if ($goal->status == 1) {
                    $res .= '<td><span class="badge bg-success">Выполнено</span></td>';
                } else {
                    $res .= '<td><span class="badge bg-danger">Просрочена</span></td>';
                }

                $res .= '</tr>';
                $i++;
            }

//            $res .= '<tr><td colspan="2"><b>Итого выполненно услуг на сумму:</b></td><td class="text-primary"><b>' . money($amount) . ' руб.</b></td></tr></tbody>';
        }

        $res .='  </table></div>
                </div>
            </div>
        </div>';


        return $res;
    }
}
