<?php

namespace App\Http\Controllers;

use App\Models\HistoryPayment;
use App\Models\UserM;
use Illuminate\Http\Request;

class ReceivableController extends Controller
{
    public function index()
    {
        if (!in_array(auth()->user()->role->level, [1, 2, 4, 5])) {
            abort(403);
        }

        $end = now(); // или ваша дата

        // Сначала получаем всех пользователей
        $users = UserM::whereIn('role_id', [2, 4, 13, 9])
            ->where('isBlocked', 0)
            ->orderByRaw("FIELD(role_id, 9, 4, 13, 2)")
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

        // Новые расчеты
        $totalDebt = $users->sum(function ($user) {
            return $user->claims->sum(function ($claim) {
                return max(0, $claim->amount - getPaymentsClaim($claim->id));
            });
        });

        $clientIds = [];
        foreach ($users as $user) {
            foreach ($user->claims as $claim) {
                if ($claim->client && $claim->amount > getPaymentsClaim($claim->id)) {
                    $clientIds[] = $claim->client->id;
                }
            }
        }
        $totalClientsWithDebt = count(array_unique($clientIds));

        $totalClaims = $users->sum(function ($user) {
            return $user->claims->count();
        });

        return view('receivable.index', compact('users', 'totalDebt', 'totalClientsWithDebt', 'totalClaims'));
    }
}
