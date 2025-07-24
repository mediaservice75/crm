<?php

namespace App\Http\Controllers;

use App\Models\HistoryPayment;
use App\Models\UserM;
use Illuminate\Http\Request;

class ReceivableController extends Controller
{
    public function index()
    {
        $end = now(); // или ваша дата

        // Сначала получаем всех пользователей
        $users = UserM::whereIn('role_id', [2, 4, 13])
            ->where('isBlocked', 0)
            ->get();

        // Получаем все исключаемые ID claims одним запросом
        $excludedClaimIds = HistoryPayment::whereHas('status', function ($q) {
            $q->where('name', 'Оплачен');
        })
            ->whereHas('claim', function ($q) {
                $q->where('notInclude', 0);
            })->pluck('claim_id')->toArray();

        // Затем для каждого пользователя загружаем claims
        $users->load(['claims' => function ($query) use ($end, $excludedClaimIds) {
            $query->where('created_at', '<=', $end)
                ->where('notInclude', 0)
                ->whereNotIn('id', $excludedClaimIds);
        }]);

        return view('receivable.index', compact('users'));
    }
}
