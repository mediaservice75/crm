<?php

namespace App\Http\Controllers;

use App\Models\DynamicTable;
use App\Models\EventSession;
use App\Models\EventSponsor;
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
            //            $headers[] = $data->column_name;

            if (!isset($rows[$data->row_id])) {
                $rows[$data->row_id] = [];
            }

            $rows[$data->row_id][$data->column_name] = [
                'data' => $data->value ?? '',
                'user_id' => $data->user_id
            ];
        }

        // Убираем дубликаты в заголовках
        //        $headers = array_unique($headers);
        //
        // Проверка на пустоту заголовков и строк для корректного отображения
        if (empty($headers)) {
            $headers = ['Новый заголовок']; // Задаем дефолтный заголовок
        }
        if (empty($rows)) {
            $rows = [array_fill_keys($headers, 'Пустое значение')]; // Заполняем одну пустую строку
        }

        $rows = array_values($rows);

        //        return view('table', [
        //            'headers' => $headers,
        //            'rows' => $rows
        //        ]);

        //        dump($headers);
        //        dd($rows);

        $userRoleLevel = auth()->user()->role->level;

        $events = SpecialEvent::with('sessions', 'sponsors')->get();

        if ($userRoleLevel != 1 && $userRoleLevel != 2) {
            return view('specialEvent.index', compact('headers', 'rows'));
        } else {
            return view('specialEvent.admin', compact('headers', 'rows', 'users', 'events'));
        }
    }

    public function create()
    {
        // $managers = User::whereIn('role_id', [2, 4, 13])->where('isBlocked', 0)->get();

        return view('specialEvent.create');
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'title' => 'required|string|max:255',
            'campaign_start_date' => 'required|date',
            'campaign_end_date' => 'required|date|after_or_equal:campaign_start_date',
            'sessions' => 'required|array|min:1',
            'sessions.*.event_date' => 'required|date',
            'sessions.*.event_time' => 'nullable|date_format:H:i',
            'sessions.*.location' => 'required|string|max:255',
        ]);

        $event = SpecialEvent::create([
            'title' => $validatedData['title'],
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
        //        return response()->json(['status' => 'error', 'message' => $request, 'error' => $e->getMessage()], 500);
        //        return response()->json(['status' => 'success', 'message' => $request->input('headers')]);

        $request->validate([
            'headers' => 'required|array',
            'rows' => 'required|array',
        ]);

        $headers = $request->input('headers'); // Названия столбцов
        $rows = $request->input('rows'); // Данные строк

        DB::beginTransaction();
        try {
            //            DB::table('dynamic_table')->delete(); // Удаление всех записей
            //            DB::statement("ALTER TABLE dynamic_table AUTO_INCREMENT = 1");
            DynamicTable::query()->delete();
            //            DB::table('dynamic_table')->truncate();

            // Для каждой строки данных
            foreach ($rows as $rowIndex => $row) {
                // Для каждого столбца в строке
                foreach ($headers as $colIndex => $header) {
                    // Проверяем, существует ли значение для текущей ячейки
                    if (isset($row[$header])) {
                        //                        return response()->json(['status' => 'success', 'message' => $row[$header]]);
                        DynamicTable::create([
                            'column_name' => $header,
                            'row_id' => $rowIndex + 1,
                            'value' => $row[$header]['value'],
                            'user_id' => $row[$header]['user_id']
                        ]);
                    }
                }
            }

            DB::commit(); // Подтверждаем транзакцию

            return response()->json(['status' => 'success', 'message' => 'Table data saved successfully!']);
        } catch (\Exception $e) {
            DB::rollBack(); // Откатываем транзакцию в случае ошибки
            return response()->json(['status' => 'error', 'message' => 'Error saving table data.', 'error' => $e->getMessage()], 500);
        }
    }

    public function show($id)
    {
        $event = SpecialEvent::with(['sessions', 'sponsors'])->findOrFail($id);
        $users = User::all();

        return view('specialEvent.show', compact('event', 'users'));
    }

    public function edit($id)
    {
        $event = SpecialEvent::with('sponsors')->find($id);
        $users = User::all();
        return view('specialEvent.edit', compact('event', 'users'));
    }

    public function update(Request $request, $id)
    {
        $event = SpecialEvent::findOrFail($id);

        $event->update([
            'title' => $request->input('title', $event->title),
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
                        'name' => $sponsor['name'] ?? '',
                        'is_general' => $sponsor['is_general'] ?? 0,
                        'has_logo' => $sponsor['has_logo'] ?? 0,
                        'has_leaflet' => $sponsor['has_leaflet'] ?? 0,
                        'has_feedback' => $sponsor['has_feedback'] ?? 0,
                        'responsible_manager_id' => $sponsor['responsible_manager_id'] ?? null,
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

        return redirect()->route('special-event.show', $id)->with('success', 'Изменения сохранены');
    }
}
