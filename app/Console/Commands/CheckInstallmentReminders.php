<?php

namespace App\Console\Commands;

use App\Models\InstallmentDate;
use App\Models\InstallmentReminder;
use Carbon\Carbon;
use Illuminate\Console\Command;

class CheckInstallmentReminders extends Command {

    protected $signature = 'check:installment-reminders';
    protected $description = 'Создаёт напоминание о платежах по рассрочке за 5 дней до даты';

    public function __construct() {
        parent::__construct();
    }

    public function handle(): int {
        $targetDate = Carbon::now()->addDays(5)->toDateString();

        $this->info("Ищем рассрочки на дату: {$targetDate}");

        // Находим все даты рассрочки, которые наступают через 5 дней
        $installmentDates = InstallmentDate::with('claim')
            ->whereDate('installment_date', $targetDate)
            ->whereHas('claim', function ($query) {
                // Только заявки с включённой рассрочкой (на всякий случай)
                $query->where('isInstallment', 1);
            })
            ->get();

        if ($installmentDates->isEmpty()) {
            $this->info('Нет рассрочек, требующих напоминания.');
            return self::SUCCESS;
        }

        $created = 0;
        $skipped = 0;

        foreach ($installmentDates as $installmentDate) {
            $claim = $installmentDate->claim;
            if (!$claim) {
                continue;
            }

            // Получатель — создатель заявки
            $userId = $claim->creator;
            if (!$userId) {
                $this->warn("Заявка №{$claim->id}: не указан creator, пропускаем.");
                continue;
            }

            // Проверяем, нет ли уже такого уведомления (защита от дублей)
            $exists = InstallmentReminder::where('claim_id', $claim->id)
                ->where('installment_date', $installmentDate->installment_date)
                ->where('user_id', $userId)
                ->exists();

            if ($exists) {
                $skipped++;
                continue;
            }

            // Создаём уведомление
            InstallmentReminder::create([
                'user_id' => $userId,
                'claim_id' => $claim->id,
                'installment_date' => $installmentDate->installment_date,
                'amount' => $installmentDate->amount,
                'is_read' => false,
            ]);

            $created++;
            $this->line("Заявка №{$claim->id}: уведомление для пользователя {$userId} создано.");
        }

        $this->info("Готово. Создано: {$created}, пропущено (уже есть): {$skipped}");

        return self::SUCCESS;
    }
}
