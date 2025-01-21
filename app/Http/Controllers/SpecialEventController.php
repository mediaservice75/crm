<?php

namespace App\Http\Controllers;

use App\Models\DynamicTable;
use App\Models\UserM;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class SpecialEventController extends Controller
{
    public function index() {
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

        if (auth()->user()->role->level != 1 && auth()->user()->role->level != 2) {
            return view('specialEvent.index', compact('headers', 'rows'));
        } else {
            return view('specialEvent.admin', compact('headers', 'rows', 'users'));
        }

    }

    public function saveTable(Request $request) {

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
                            'row_id' => $rowIndex+1,
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


}
