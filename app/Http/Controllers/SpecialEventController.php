<?php

namespace App\Http\Controllers;

use App\Models\DynamicTable;
use App\Models\EventResponsibleEmployee;
use App\Models\EventSession;
use App\Models\EventSponsor;
use App\Models\Group;
use App\Models\SpecialEvent;
use App\Models\User;
use App\Models\UserM;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class SpecialEventController extends Controller
{
    public function index()
    {
        $headersName = DynamicTable::where('row_id', 1)->get();
        $tableData = DynamicTable::all();
        $users = UserM::where('isBlocked', 0)
            ->where('name', '!=', 'Админ')
            ->get();
        $headers = [];
        $rows = [];

        if ($headersName) {
            foreach ($headersName as $data) {
                $headers[] = [
                    'header' => $data->column_name,
                    'user_id' => $data->user_id
                ];
            }
        }

        foreach ($tableData as $data) {
            if (!isset($rows[$data->row_id])) {
                $rows[$data->row_id] = [];
            }

            $rows[$data->row_id][$data->column_name] = [
                'data' => $data->value ?? '',
                'user_id' => $data->user_id
            ];
        }

        if (empty($headers)) {
            $headers = ['Новый заголовок'];
        }
        if (empty($rows)) {
            $rows = [array_fill_keys($headers, 'Пустое значение')];
        }

        $rows = array_values($rows);

        $userRoleLevel = auth()->user()->role->level;

        $events = SpecialEvent::with('sessions', 'sponsors')->where('is_archived', false)->get();

        if ($userRoleLevel == 1 || $userRoleLevel == 2) {
            return view('specialEvent.admin', compact('headers', 'rows', 'users', 'events'));
        } else {
            return view('specialEvent.index', compact('headers', 'rows', 'events'));
        }
    }

    public function old()
    {
        $headersName = DynamicTable::where('row_id', 1)->get();
        $tableData = DynamicTable::all();
        $users = UserM::where('isBlocked', 0)
            ->where('name', '!=', 'Админ')
            ->get();
        $headers = [];
        $rows = [];

        if ($headersName) {
            foreach ($headersName as $data) {
                $headers[] = [
                    'header' => $data->column_name,
                    'user_id' => $data->user_id
                ];
            }
        }

        foreach ($tableData as $data) {
            if (!isset($rows[$data->row_id])) {
                $rows[$data->row_id] = [];
            }

            $rows[$data->row_id][$data->column_name] = [
                'data' => $data->value ?? '',
                'user_id' => $data->user_id
            ];
        }

        if (empty($headers)) {
            $headers = ['Новый заголовок'];
        }
        if (empty($rows)) {
            $rows = [array_fill_keys($headers, 'Пустое значение')];
        }

        $rows = array_values($rows);

        $userRoleLevel = auth()->user()->role->level;

        if ($userRoleLevel != 1 && $userRoleLevel != 2) {
            return view('specialEvent.old-nonadmin', compact('headers', 'rows', 'users'));
        } else {
            return view('specialEvent.old-admin', compact('headers', 'rows', 'users'));
        }
    }

    public function create()
    {
        return view('specialEvent.create');
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'title' => 'required|string|max:255',
            'radio' => 'required|in:Русское Радио,Серебряный Дождь',
            'campaign_start_date' => 'required|date',
            'campaign_end_date' => 'required|date|after_or_equal:campaign_start_date',
            'sessions' => 'required|array|min:1',
            'sessions.*.event_date' => 'required|date',
            'sessions.*.event_time' => 'nullable|date_format:H:i',
            'sessions.*.location' => 'required|string|max:255',
        ]);

        $event = SpecialEvent::create([
            'title' => $validatedData['title'],
            'radio' => $validatedData['radio'],
            'campaign_start_date' => $validatedData['campaign_start_date'],
            'campaign_end_date' => $validatedData['campaign_end_date'],
        ]);

        foreach ($validatedData['sessions'] as $session) {
            EventSession::create([
                'event_id' => $event->id,
                'event_date' => $session['event_date'],
                'event_time' => $session['event_time'] ?? null,
                'location' => $session['location'],
            ]);
        }

        return redirect()->route('special-event.index')->with('success', 'Мероприятие успешно добавлено!');
    }

    public function saveTable(Request $request)
    {
        $request->validate([
            'headers' => 'required|array',
            'rows' => 'required|array',
        ]);

        $headers = $request->input('headers');
        $rows = $request->input('rows');

        DB::beginTransaction();
        try {
            DynamicTable::query()->delete();

            foreach ($rows as $rowIndex => $row) {
                foreach ($headers as $colIndex => $header) {
                    if (isset($row[$header])) {
                        DynamicTable::create([
                            'column_name' => $header,
                            'row_id' => $rowIndex + 1,
                            'value' => $row[$header]['value'],
                            'user_id' => $row[$header]['user_id']
                        ]);
                    }
                }
            }

            DB::commit();

            return response()->json(['status' => 'success', 'message' => 'Table data saved successfully!']);
        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json(['status' => 'error', 'message' => 'Error saving table data.', 'error' => $e->getMessage()], 500);
        }
    }

    public function show($id)
    {
        $event = SpecialEvent::with(['sessions', 'sponsors', 'responsibles'])->findOrFail($id);
        $users = User::all();
        $groups = Group::all();

        return view('specialEvent.show', compact('event', 'users', 'groups'));
    }

    public function edit($id)
    {
        $event = SpecialEvent::with(['sessions', 'sponsors', 'responsibles'])->find($id);
        $users = User::whereIn('role_id', [2, 4, 13, 9])
            ->where('isBlocked', 0)
            ->get();
        $usersAll = User::all();
        $groups = Group::all();

        return view('specialEvent.edit', compact('event', 'users', 'groups', 'usersAll'));
    }

    public function update(Request $request, $id)
    {
        $event = SpecialEvent::findOrFail($id);

        $validatedData = $request->validate([
            'title' => 'required|string|max:255',
            'radio' => 'required|in:Русское Радио,Серебряный дождь',
        ]);

        $event->update([
            'title' => $request->input('title', $event->title),
            'radio' => $validatedData['radio'],
            'campaign_start_date' => $request->input('campaign_start_date', $event->campaign_start_date),
            'campaign_end_date' => $request->input('campaign_end_date', $event->campaign_end_date),
        ]);

        if ($request->has('sessions')) {
            $existingSessionIds = $event->sessions()->pluck('id')->toArray();
            $newSessionIds = [];

            foreach ($request->input('sessions') as $session) {
                $sessionModel = $event->sessions()->updateOrCreate(
                    ['id' => $session['id'] ?? null],
                    [
                        'location' => $session['location'] ?? '',
                        'event_date' => $session['event_date'] ?? null,
                        'event_time' => $session['event_time'] ?? null,
                        'special_event_id' => $event->id,
                    ]
                );
                $newSessionIds[] = $sessionModel->id;
            }

            $event->sessions()->whereNotIn('id', $newSessionIds)->delete();
        }

        if ($request->has('sponsors')) {
            $newSponsorIds = [];

            foreach ($request->input('sponsors') as $sponsor) {
                $sponsorModel = EventSponsor::updateOrCreate(
                    ['id' => $sponsor['id'] ?? null],
                    [
                        'name' => $sponsor['name'] ?: null,
                        'is_general' => $sponsor['is_general'] ?? 0,
                        'has_logo' => $sponsor['has_logo'] ?? 0,
                        'has_leaflet' => $sponsor['has_leaflet'] ?? 0,
                        'has_feedback' => $sponsor['has_feedback'] ?? 0,
                        'responsible_manager' => $sponsor['responsible_manager'],
                        'gratitude_to' => $sponsor['gratitude_to'] ?? '',
                        'event_id' => $event->id,
                    ]
                );
                $newSponsorIds[] = $sponsorModel->id;
            }

            EventSponsor::where('event_id', $event->id)
                ->whereNotIn('id', $newSponsorIds)
                ->delete();
        } else {
            EventSponsor::where('event_id', $event->id)->delete();
        }

        if ($request->has('responsibles')) {
            $newResponsibleIds = [];

            EventResponsibleEmployee::where('event_id', $event->id)->delete();

            foreach ($request->input('responsibles') as $responsible) {
                EventResponsibleEmployee::create([
                    'event_id' => $event->id,
                    'group' => $responsible['group'],
                    'user' => $responsible['user'],
                ]);
            }
        } else {
            EventResponsibleEmployee::where('event_id', $event->id)->delete();
        }

        return redirect()->route('special-event.show', $id)->with('success', 'Изменения сохранены');
    }

    public function archive()
    {
        $events = SpecialEvent::with('sessions', 'sponsors')->where('is_archived', true)->get();
        return view('specialEvent.archive', compact('events'));
    }

    public function archiveEvent($id)
    {
        $event = SpecialEvent::findOrFail($id);
        $event->update(['is_archived' => true]);

        return redirect()->route('special-event.index')->with('success', 'Мероприятие перемещено в архив');
    }
}
