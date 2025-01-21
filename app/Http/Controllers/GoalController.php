<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreGoal;
use App\Models\ClaimFile;
use App\Models\Goal;
use App\Models\GoalFile;
use App\Models\Group;
use App\Models\TemporaryFile;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class GoalController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        abort(404);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        abort(404);
        $groups = Group::all();
        return view('goals.create', compact('groups'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate(
            [
                'text' => 'required',
                'user_id' => 'nullable',
            ],
            [
                'text.required' => 'Поле описание не может быть пустым',
                'user_id.integer' => 'Выберите значение из списка',
            ]
        );
        $request->merge([
            'exposed' => Auth::user()->id,
        ]);
        if ($request->isMySelf == 1) {
            $request->merge([
                'user_id' => Auth::user()->id,
            ]);
        }

        if ($request->rrule == '') {
            $request->merge([
                'rrule' => null,
            ]);
        }

        if ($request->remind_at == '0') {
            $request->merge([
                'remind_at' => null,
            ]);
        }



        DB::beginTransaction();
        try {
            if ($request->isMySelf == 0) {
                $user_ids = explode(',', $request->user_id);
                foreach ($user_ids as $user) {
                    $request->merge([
                        'user_id' => $user,
                    ]);
                    $goal = Goal::create($request->all());
                    $goal_id = $goal->id;

                    if ($request->filepond) {
                        if (count($request->filepond) != 0) {
                            $files = $request->file('filepond');

                            foreach ($files as $file) {

                                $filename = $file->getClientOriginalName();
                                $folder = uniqid() . '-' . now()->timestamp;

                                $file->storeAs('goals/' . $folder, $filename);

                                $goalFile = GoalFile::create([
                                    'goal_id' => $goal_id,
                                    'file' => 'goals/' . $folder . '/' . $filename,
                                ]);

                            }
                        }
                    }

                    DB::commit();
                    $res[] = [
                        'goal' => $goal,
                        'user' => $goal->exposed_user->getFullName(),
                    ];
                }
                return response()->json($res);
            } else {
                $goal = Goal::create($request->all());
                $goal_id = $goal->id;

                if ($request->filepond) {
                    if (count($request->filepond) != 0) {
                        $files = $request->file('filepond');

                        foreach ($files as $file) {

                            $filename = $file->getClientOriginalName();
                            $folder = uniqid() . '-' . now()->timestamp;

                            $file->storeAs('goals/' . $folder, $filename);

                            $goalFile = GoalFile::create([
                                'goal_id' => $goal_id,
                                'file' => 'goals/' . $folder . '/' . $filename,
                            ]);

                        }
                    }
                }

                DB::commit();
                return response()->json([
                    'goal' => $goal,
                    'user' => $goal->exposed_user->getFullName(),
                ]);
            }
        } catch (\Exception $exception) {
            DB::rollback();
            return $exception;
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
        abort(404);
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
        abort(404);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $goal = Goal::find($id);
        $goal->delete();
        return redirect()->back()->with('success', 'Данные успешно удалены 👍');
    }

    public function deadline()
    {
//        dd(Auth::user());

        if (Auth::user()->userLeader == 1 && Auth::user()->role->level != 1) {
            $goals = Goal::where('status', 2)
                ->whereHas('user.role', function ($q) {
                    $q->where('group_id', Auth::user()->role->group_id);
                })
                ->orderBy('id', 'desc')
                ->get();
        } else if (Auth::user()->role->level == 1) {
            $goals = Goal::where('status', 2)
                ->orderBy('id', 'desc')
                ->get();
        } else {
            $goals = Goal::where('status', 2)
                ->where('user_id', \Illuminate\Support\Facades\Auth::user()->id)
                ->orderBy('id', 'desc')
                ->get();
        }

        return view('goals.expired', compact('goals'));
    }

    public function complete($id)
    {
        $goal = Goal::firstWhere('id', $id);
        if (!$goal) {
            return response()->json([
                'error' => 'Задача не найдена'
            ], 404);
        }
        $goal->status = 1;
        $goal->save();
        return response()->json('Задача успешно обновлена');
    }

    public function send()
    {
        $goals = Goal::where('exposed', \Illuminate\Support\Facades\Auth::user()->id)
            ->where('user_id', '<>', \Illuminate\Support\Facades\Auth::user()->id)
            ->orderBy('id', 'desc')
            ->get();

        return view('goals.send', compact('goals'));
    }

    public function repeatGoal($id, Request $request)
    {
        DB::beginTransaction();
        try {
            $goal = Goal::where('id', $id)->get()->first();
            if ($goal->rrule != null) {
                $request->session()->flash('error', 'К сожалению, для данной задачи невозможно выполнить повтор 😢');
                return back();
            }
            $newGoal = $goal->replicate();
            $goal->isRepeat = 1;
            $goal->save();

            $startDate = Carbon::now()->addDay();
            $oldDate = Carbon::parse($goal->start_date);
            $startDate->hour = $oldDate->hour;
            $startDate->minute = $oldDate->minute;
            $startDate->second = 0;
            $newGoal->start_date = $startDate;

            $endDate = Carbon::now()->addDay();
            $oldEndDate = Carbon::parse($goal->deadline);
            $endDate->hour = $oldEndDate->hour;
            $endDate->minute = $oldEndDate->minute;
            $endDate->second = 0;

            $newGoal->deadline = $endDate;
            $newGoal->created_at = Carbon::now();
            $newGoal->status = 0;
            $newGoal->save();

            DB::commit();

            $request->session()->flash('success', 'Задача создана повторно 👍');
            return back();
        } catch (\Exception $exception) {
            DB::rollback();

            $request->session()->flash('error', 'При повторе задачи произошла ошибка 😢');
            return back();
        }

    }
}
