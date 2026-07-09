@extends('layout.layout')
@section('page-heading')
    <div class="row align-items-center">
        <div class="col-12 col-md-6">
            <h3>Статистика сотрудника - {{ $user->getFullName() }}</h3>
            <input type="hidden" id="id_user" value="{{ $user->id }}">
        </div>
        <div class="col-12 col-md-6 text-end">
            <a href="{{ back()->getTargetUrl() }}" class="btn btn-primary">Назад</a>
        </div>
    </div>
@endsection

@section('content')
    <style>
        /* .table-fixed {
                    table-layout: fixed;
                    width: 100%;
                }

                .th-date {
                    width: 8%;
                }

                .th-claim-number {
                    width: 8%;
                }

                .th-service {
                    width: 15%;
                }

                .th-invoice {
                    width: 15%;
                }

                .th-amount {
                    width: 10%;
                }

                .th-paid {
                    width: 15%;
                }

                .th-status {
                    width: 15%;
                }

                .th-service {
                    white-space: normal;
                    word-wrap: break-word;
                }

                .text-end,
                .th-amount,
                .th-paid,
                .th-remaining {
                    text-align: right;
                    padding-right: 1rem;
                }

                .status-column {
                    white-space: nowrap;
                    padding-left: 1rem;
                    min-width: 120px;
                }

                .table th,
                .table td {
                    vertical-align: middle !important;
                    padding: 0.5rem !important;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }

                .remaining-column {
                    text-align: right !important;
                    padding-right: 1rem !important;
                } */

        .percent-text {
            font-weight: 500;
            color: #808080;
        }

        .everyDayPlan {
            font-weight: 500;
            color: #808080;
        }

        .client-arrow {
            transition: transform 0.2s;
            font-size: 0.8em;
            margin-right: 8px;
        }

        .client-header:hover .client-arrow {
            transform: translateX(3px);
        }

        .client-header {
            cursor: pointer;
            padding: 10px 0;
            border-bottom: 1px solid #eee;
            margin-bottom: 10px;
        }

        .client-header h5 {
            margin: 0;
            display: flex;
            align-items: center;
        }
    </style>

    @php
        // Группируем заявки по клиентам
        $clientsData = [];
        $totalRemaining = 0;

        foreach ($userClaims as $claim) {
            if ($claim->client == null) {
                continue;
            }

            $clientId = $claim->client->id;

            if (!isset($clientsData[$clientId])) {
                $clientsData[$clientId] = [
                    'client' => $claim->client,
                    'claims' => [],
                    'total' => 0,
                ];
            }

            $remaining = 0;
            if ($claim->historiesPayment->first()->status->name != 'Оплачен') {
                $paid = getPaymentsClaim($claim->id); // Получаем сумму оплат
                $remaining = max(0, $claim->amount - $paid);

                $clientsData[$clientId]['claims'][] = [
                    'data' => $claim,
                    'paid' => $paid,
                    'remaining' => $remaining,
                ];

                $clientsData[$clientId]['total'] += $remaining;
                $totalRemaining += $remaining;
            }
        }

        // Сортируем клиентов по сумме долга (от большего к меньшему)
        uasort($clientsData, function ($a, $b) {
            return $b['total'] <=> $a['total'];
        });
    @endphp

    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-content">
                    <div class="card-body">
                        <form action="{{ route('users.show', ['user' => $id]) }}" method="GET">
                            <div class="form-group ">
                                <label>Выберите месяц для фильтрации: </label>
                                <div class="d-flex">
                                    <input type="hidden" name="month" id="month"
                                        value="@if (app('request')->input('month')) {{ app('request')->input('month') }} @endif">
                                    <input type="text" id="month-f" class="form-control month-f"
                                        placeholder="Выберите месяц..." required
                                        value="@if (app('request')->input('month')) {{ convertMonth(app('request')->input('month')) }} @endif">
                                    <button type="submit" class="btn btn-success ms-2">Применить</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col-md-12 col-lg-12">
            <div class="card">
                <div class="card-content">
                    <div class="card-body">
                        {{-- Блок общей статистики --}}
                        <div class="global-stats mb-4 p-3 bg-light rounded-4">
                            <div class="row align-items-center"> {{-- Добавлено вертикальное выравнивание --}}
                                {{-- Общий план - выровнено по центру --}}
                                <div class="col-md-4">
                                    <div
                                        class="stat-card text-center p-3 border-end h-100 d-flex flex-column justify-content-center">
                                        {{-- Добавлены классы для вертикального центрирования --}}
                                        <div class="stat-value display-6 fw-bold">
                                            {{ money($sumPlan) }} ₽
                                        </div>
                                        <div class="stat-label small text-muted">План на месяц</div>
                                    </div>
                                </div>

                                {{-- Поступления - выровнено по центру --}}
                                <div class="col-md-4">
                                    <div
                                        class="stat-card text-center p-3 border-end h-100 d-flex flex-column justify-content-center">
                                        {{-- Добавлены классы для вертикального центрирования --}}
                                        @php
                                            $totalAmount = $sumPaid->first()->total_amount ?? 0;
                                            $percentage = $sumPlan == 0 ? 0 : round(($totalAmount / $sumPlan) * 100, 2);

                                            if ($percentage < 25) {
                                                $catImage = 'sad.png';
                                            } elseif ($percentage >= 25 && $percentage < 50) {
                                                $catImage = 'neutral.png';
                                            } elseif ($percentage >= 50 && $percentage < 75) {
                                                $catImage = 'half.png';
                                            } elseif ($percentage >= 75 && $percentage < 100) {
                                                $catImage = 'almost.png';
                                            } else {
                                                $catImage = 'best.png';
                                            }

                                            $catImageUrl = asset("images/cat/{$catImage}");
                                        @endphp
                                        <div class="stat-value fs-4 fw-bold">
                                            @if ($totalAmount == 0)
                                                0 ₽
                                            @else
                                                {{ money($totalAmount) }} ₽
                                            @endif
                                        </div>
                                        <div class="percent-text fs-5 fw-semibold">({{ $percentage }}%)</div>
                                        <div class="stat-label small text-muted">Поступления</div>
                                    </div>
                                </div>

                                {{-- Разница - текст прижат к левому краю --}}
                                @php
                                    $paidAmount = $sumPaid->first()->total_amount ?? 0;
                                    $difference = $paidAmount - $sumPlan;
                                    $colorClass = $difference >= 0 ? 'text-success' : 'text-warning';
                                @endphp
                                <div class="col-md-4">
                                    <div class="stat-card p-3 h-100 d-flex align-items-center"> {{-- Добавлены классы для вертикального центрирования --}}
                                        <div class="d-flex align-items-center justify-content-between w-100">
                                            <div class="text-start me-3">
                                                <div class="stat-value fs-4 fw-bold">
                                                    <span class="{{ $colorClass }}">
                                                        {{ money($difference) }} ₽
                                                    </span>
                                                </div>
                                                <div class="stat-label small text-muted">Разница</div>
                                            </div>
                                            <div class="cat-image">
                                                <img src="{{ $catImageUrl }}" alt="Статус выполнения"
                                                    class="img-fluid rounded" style="max-height: 150px;">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h4 class="card-title mb-4 ">Статистика продаж</h4>
                        @if ($userClaims->isEmpty())
                            <h5 class="text-gray-500">К сожалению, заявок не создано 😢</h5>
                        @else
                            @php
                                $paidAmount = $sumPaid->first()->total_amount ?? 0;
                                $difference = $paidAmount - $sumPlan;
                                $colorClass = $difference >= 0 ? 'text-success' : 'text-warning';
                            @endphp
                            <p class="mb-1 fw-bold">
                                <b class="text-primary">План на {{ \Carbon\Carbon::now()->format('d.m.Y') }}:
                                </b>
                                @if (count(getWorkingDays($planMonth)) == 0)
                                    <span class="text-danger">План не установлен</span>
                                @else
                                    <span
                                        id="everyDayPlan">{{ money(($sumPlan / count(getWorkingDays($planMonth))) * getCountPastDays($planMonth)) }}
                                        ₽</span>
                                @endif
                                <span class="everyDayPlan">
                                    (@if (count(getWorkingDays($planMonth)) == 0)
                                        <span class="text-danger">План не установлен</span>
                                    @else<span
                                            id="everyDayPlan">{{ money($sumPlan / count(getWorkingDays($planMonth))) }}₽</span>
                                    @endif/день)
                                </span>
                            </p>
                            <p class="fw-bold mb-0"><b class="text-primary">Заявок создано на:</b>
                                @if ($sumClaims->first()->total_amount == null)
                                    0 ₽
                                @else
                                    {{ money($sumClaims->first()->total_amount) }} ₽
                                @endif
                            </p>
                            <hr>
                            @php echo getDebtSumByUser($id) @endphp
                            <p class="fw-bold mb-4"><b class="text-primary">Ожидаемая сумма поступлений:</b>
                                {{ money($totalRemaining) }}
                                ₽
                            </p>
                            <br>

                            {{-- Задолженности по клиентам --}}
                            <h4 class="card-title mb-4 d-flex justify-content-between align-items-center">
                                <span>Задолженности по клиентам</span>
                                <span class="text-danger fw-light">{{ money($totalRemaining) }} ₽</span>
                            </h4>
                            <div class="debt-list">
                                @foreach ($clientsData as $clientData)
                                    @if (money($clientData['total']) == 0)
                                        @continue
                                    @endif
                                    <div class="client-section mb-4">
                                        <div class="client-header d-flex justify-content-between align-items-center"
                                            data-bs-toggle="collapse" href="#client-{{ $clientData['client']->id }}"
                                            role="button" aria-expanded="false">
                                            <h6 class="m-0 d-flex align-items-center">
                                                <i class="fas fa-chevron-right client-arrow"></i>
                                                <a href="{{ route('clients.show', $clientData['client']->id) }}"
                                                    class="text-decoration-none">
                                                    {{ $clientData['client']->name }}
                                                </a>
                                                @if ($clientData['client']->requisite && $clientData['client']->requisite->fullName)
                                                    <small class="text-muted ms-2">
                                                        ({{ $clientData['client']->requisite->fullName }})
                                                    </small>
                                                @endif
                                            </h6>
                                            <div class="text-danger fw-medium">
                                                {{ money($clientData['total']) }} ₽
                                            </div>
                                        </div>

                                        <div class="collapse" id="client-{{ $clientData['client']->id }}">
                                            <table class="table table-borderless fixed-layout table-striped table-hover">
                                                <thead>
                                                    <tr>
                                                        <th class="fw-normal small th-date">Дата заявки</th>
                                                        <th class="fw-normal small th-claim-number">Номер заявки</th>
                                                        <th class="fw-normal small th-service">Услуга</th>
                                                        <th class="fw-normal small th-invoice">Номер счёта</th>
                                                        <th class="fw-normal small th-amount text-end">Сумма счёта</th>
                                                        <th class="fw-normal small th-paid text-end">Оплачено</th>
                                                        <th class="fw-normal small th-status">Статус</th>
                                                        <th class="fw-normal small th-remaining text-end">Остаток</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    @foreach ($clientData['claims'] as $claimItem)
                                                        @php $claim = $claimItem['data'] @endphp
                                                        <tr>
                                                            <td>{{ $claim->created_at->format('d.m.y') }}</td>
                                                            <td>
                                                                <a
                                                                    href="{{ route('claims.show', $claim->id) }}">{{ $claim->id }}</a>
                                                            </td>
                                                            <td>{{ $claim->service->name }}</td>
                                                            <td>
                                                                <a href="{{ url('/payments/paid/' . $claim->id) }}">
                                                                    {{ $claim->number_invoice }}
                                                                </a>
                                                            </td>
                                                            <td class="text-end">{{ money($claim->amount) }}</td>
                                                            <td class="text-end">
                                                                <div class="paid-column">
                                                                    @if ($claimItem['paid'] != 0)
                                                                        <span>{{ money($claimItem['paid']) }}</span>
                                                                    @else
                                                                        <span>&nbsp;</span>
                                                                    @endif
                                                                </div>
                                                            </td>
                                                            <td class="status-column">
                                                                @if (count($claim->historiesPayment) != 0)
                                                                    <span
                                                                        class="badge custom-bg-{{ $claim->historiesPayment->first()->status->color }}">
                                                                        {{ $claim->historiesPayment->first()->status->name }}
                                                                    </span>
                                                                @else
                                                                    <span class="text-danger">Статус неизвестен</span>
                                                                @endif
                                                            </td>
                                                            <td
                                                                class="text-end {{ $claimItem['remaining'] > 0 ? 'text-danger' : '' }}">
                                                                @if ($claimItem['remaining'] > 0)
                                                                    {{ money($claimItem['remaining']) }}
                                                                @endif
                                                            </td>
                                                        </tr>
                                                    @endforeach
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                @endforeach
                            </div>
                        @endif
                    </div>
                </div>
            </div>
        </div>
        <div class=" col-lg-12 col-md-12">
            <div class="card">
                <div class="card-content">
                    <div class="card-body">
                        <h4 class="card-title mb-4 ">Диаграмма cтатистики продаж</h4>
                        <div id="plan-user"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id="data" class="row">
        {!! $salesByCategory !!}
    </div>

    <div class="col-lg-12 col-md-12">
    <div class="card">
        <div class="card-content">
            <div class="card-body">
                <h4 class="card-title mb-4">График заявок и поступлений за предыдущий год</h4>
                <canvas id="incomeChart" height="100"></canvas>
            </div>
        </div>
    </div>
</div>

<div class="col-lg-12 col-md-12 mt-4">
    <div class="card">
        <div class="card-content">
            <div class="card-body">
                <h4 class="card-title mb-4">Глобальный тренд продаж</h4>
                <canvas id="trendChart" height="100"></canvas>
            </div>
        </div>
    </div>
</div>

<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script src="https://cdn.jsdelivr.net/npm/chartjs-plugin-datalabels@2.0.0"></script>

    <script>
    document.addEventListener('DOMContentLoaded', function() {
        // Регистрируем плагин для подписей данных
        Chart.register(ChartDataLabels);

        // Цвета
        const incomeColor = '#28a745'; // Зеленый
        const claimsColor = '#343a40'; // Темный серый/черный

        // Исходные данные
        var incomeData = Object.values({!! json_encode($lastYearRealIncome) !!});
        var claimsData = Object.values({!! json_encode($lastYearClaimsIncome) !!});

        var monthNames = ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'];
        var labels = Object.keys({!! json_encode($lastYearRealIncome) !!}).map(function(month) {
            var parts = month.split('-');
            return monthNames[parseInt(parts[1]) - 1] + ' ' + parts[0];
        });

        // Функция для форматирования чисел с разделителями тысяч
        function formatNumber(value) {
            return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        }

        // Функция расчета линейного тренда (метод наименьших квадратов)
        function calculateLinearTrend(data) {
            let n = data.length;
            if (n === 0) return [];
            
            let sumX = 0, sumY = 0, sumXY = 0, sumXX = 0;
            for (let i = 0; i < n; i++) {
                let valY = parseFloat(data[i]);
                
                sumX += i;
                sumY += data[i];
                sumXY += i * data[i];
                sumXX += i * i;
            }
            
            let slope = (n * sumXY - sumX * sumY) / (n * sumXX - sumX * sumX);
            let intercept = (sumY - slope * sumX) / n;
            
            let trendValues = [];
            for (let i = 0; i < n; i++) {
                trendValues.push(slope * i + intercept);
            }
            return trendValues;
        }

        // Расчет трендов
        var trendIncomeData = calculateLinearTrend(incomeData);
        var trendClaimsData = calculateLinearTrend(claimsData);


        // ==========================================
        // ГРАФИК 1: Исходная динамика
        // ==========================================
        var ctxIncome = document.getElementById('incomeChart').getContext('2d');
        new Chart(ctxIncome, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [
                    {
                        label: 'Поступления',
                        data: incomeData,
                        borderColor: incomeColor,
                        backgroundColor: incomeColor + '20',
                        borderWidth: 3,
                        tension: 0.2,
                        fill: false,
                        pointBackgroundColor: incomeColor,
                        pointRadius: 5,
                        pointHoverRadius: 7
                    },
                    {
                        label: 'Заявок создано на',
                        data: claimsData,
                        borderColor: claimsColor,
                        backgroundColor: claimsColor + '20',
                        borderWidth: 3,
                        tension: 0.2,
                        fill: false,
                        borderDash: [4, 4],
                        pointBackgroundColor: claimsColor,
                        pointRadius: 5,
                        pointHoverRadius: 7
                    }
                ]
            },
            options: {
                responsive: true,
                plugins: {
                    datalabels: {
                        anchor: 'end',
                        align: 'top',
                        formatter: function(value) {
                            return formatNumber(Math.round(value)) + ' ₽';
                        },
                        font: { weight: 'bold', size: 13 },
                        color: function(context) {
                            return context.datasetIndex === 0 ? incomeColor : claimsColor;
                        },
                        display: function(context) {
                            return context.dataset.data[context.dataIndex] !== 0;
                        }
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return context.dataset.label + ': ' + formatNumber(Math.round(context.raw)) + ' ₽';
                            }
                        }
                    },
                    legend: { position: 'top', labels: { usePointStyle: true, padding: 20, font: { size: 14 } } }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: { callback: function(value) { return formatNumber(Math.round(value)); }, padding: 10 },
                        grid: { drawBorder: false }
                    },
                    x: { grid: { display: false } }
                }
            },
            plugins: [ChartDataLabels]
        });


        // ==========================================
        // ГРАФИК 2: Линии тренда
        // ==========================================
        var ctxTrend = document.getElementById('trendChart').getContext('2d');
        new Chart(ctxTrend, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [
                    {
                        label: 'Тренд: Поступления',
                        data: trendIncomeData,
                        borderColor: incomeColor,
                        borderWidth: 4, // Сделаем чуть толще для солидности
                        tension: 0,     // Строго прямая линия
                        pointRadius: 0, // Убираем точки, важен только вектор
                        pointHoverRadius: 0,
                        fill: false
                    },
                    {
                        label: 'Тренд: Заявки',
                        data: trendClaimsData,
                        borderColor: claimsColor,
                        borderWidth: 4,
                        borderDash: [6, 6],
                        tension: 0,
                        pointRadius: 0,
                        pointHoverRadius: 0,
                        fill: false
                    }
                ]
            },
            options: {
                responsive: true,
                plugins: {
                    datalabels: {
                        display: false // Полностью отключаем цифры над точками, чтобы они не слипались на прямой линии
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return context.dataset.label + ': ~' + formatNumber(Math.round(context.raw)) + ' ₽';
                            }
                        }
                    },
                    legend: { position: 'top', labels: { usePointStyle: true, padding: 20, font: { size: 14 } } }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: { callback: function(value) { return formatNumber(Math.round(value)); }, padding: 10 },
                        grid: { drawBorder: false }
                    },
                    x: { grid: { display: false } }
                }
            }
        });

        // Обработка стрелок для клиентов
        document.querySelectorAll('.client-header').forEach(header => {
            header.addEventListener('click', function() {
                const arrow = this.querySelector('.client-arrow');
                if (arrow) {
                    arrow.classList.toggle('fa-chevron-right');
                    arrow.classList.toggle('fa-chevron-down');
                }
            });
        });
    });
</script>
@endsection
