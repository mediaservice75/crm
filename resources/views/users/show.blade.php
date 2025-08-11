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
        table th,
        table td {
            padding: 0.3rem !important;
        }

        .date-column {
            width: 100px;
            max-width: 100px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        }

        .client-column {
            width: 550px;
            max-width: 550px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        }

        .name-column {
            width: 250px;
            max-width: 250px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        }

        .sum-column {
            width: 150px;
            max-width: 150px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        }

        .payment-status {
            width: 175px;
            max-width: 175px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        }

        .part-payment {
            width: 200px;
            max-width: 200px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        }

        table td:last-child {
            width: 150px;
            max-width: 150px;
        }

        .percent-text {
            font-weight: 500;
            color: #808080;
        }

        .everyDayPlan {
            font-weight: 500;
            color: #808080;
        }

        /* Новые стили для аккордеона */
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
                        <h4 class="card-title mb-4 ">Статистика продаж</h4>
                        @if ($userClaims->isEmpty())
                            <h5 class="text-gray-500">К сожалению, заявок не создано 😢</h5>
                        @else
                            <p class="fw-bold mb-1">
                                <b class="text-primary">План на месяц:</b>
                                {{ money($sumPlan) }} ₽
                            </p>
                            <p class="fw-bold mb-1"><b class="text-primary">Поступления:</b>
                                @if ($sumPaid->first()->total_amount == null)
                                    0 ₽
                                @else
                                    {{ money($sumPaid->first()->total_amount) }} ₽
                                @endif
                                <span class="percent-text">(@if ($sumPlan == 0)
                                        0%@else{{ round(($sumPaid->first()->total_amount / $sumPlan) * 100, 2) }}%
                                    @endif)</span>
                            </p>
                            @php
                                $paidAmount = $sumPaid->first()->total_amount ?? 0;
                                $difference = $paidAmount - $sumPlan;
                                $colorClass = $difference >= 0 ? 'text-success' : 'text-warning';
                            @endphp
                            <p class="fw-bold mb-1">
                                <b class="text-primary">Разница:</b>
                                <span class="{{ $colorClass }}">
                                    {{ money($difference) }} ₽
                                </span>
                            </p>
                            <hr>
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
                                            <table class="table table-lg table-hover table-striped">
                                                <thead>
                                                    <tr>
                                                        <th class="date-column">Дата</th>
                                                        <th class="date-column">№</th>
                                                        <th class="name-column">Наименование услуги</th>
                                                        <th class="sum-column">Сумма</th>
                                                        <th class="payment-status">Статус оплаты</th>
                                                        <th class="part-payment">Частичная оплата</th>
                                                        <th>Остаток</th>
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
                                                            <td>{{ money($claim->amount) }}</td>
                                                            <td>
                                                                @if (count($claim->historiesPayment) != 0)
                                                                    <span
                                                                        class="badge custom-bg-{{ $claim->historiesPayment->first()->status->color }}">
                                                                        {{ $claim->historiesPayment->first()->status->name }}
                                                                    </span>
                                                                @else
                                                                    <span class="text-danger">Статус неизвестен</span>
                                                                @endif
                                                            </td>
                                                            <td>
                                                                <div
                                                                    style="display: flex; align-items: center; justify-content: space-between; width: 70%;">
                                                                    @if ($claimItem['paid'] != 0)
                                                                        <span>{{ money($claimItem['paid']) }}</span>
                                                                    @else
                                                                        <span>&nbsp;</span>
                                                                    @endif
                                                                    &nbsp;
                                                                    <a href="{{ route('payment.list-paid', ['claim' => $claim->id]) }}"
                                                                        class="btn icon btn-primary"
                                                                        style="padding: 2px 6px;">
                                                                        <i class="bi bi-eye-fill"
                                                                            style="font-size: 14px;"></i>
                                                                    </a>
                                                                </div>
                                                            </td>
                                                            <td
                                                                class="{{ $claimItem['remaining'] > 0 ? 'text-danger' : '' }}">
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

    <div class=" col-lg-12 col-md-12">
        <div class="card">
            <div class="card-content">
                <div class="card-body">
                    <h4 class="card-title mb-4 ">График заявок и поступлений за предыдущий год</h4>
                    <canvas id="incomeChart" height="100"></canvas>
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

            var ctx = document.getElementById('incomeChart').getContext('2d');

            // Цвета
            const incomeColor = '#28a745'; // Зеленый
            const claimsColor = '#343a40'; // Темный серый/черный

            var monthNames = ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'];
            var labels = Object.keys({!! json_encode($lastYearRealIncome) !!}).map(function(month) {
                var parts = month.split('-');
                return monthNames[parseInt(parts[1]) - 1] + ' ' + parts[0];
            });

            // Функция для форматирования чисел с разделителями тысяч
            function formatNumber(value) {
                return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
            }

            new Chart(ctx, {
                type: 'line',
                data: {
                    labels: labels,
                    datasets: [{
                            label: 'Поступления',
                            data: Object.values({!! json_encode($lastYearRealIncome) !!}),
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
                            data: Object.values({!! json_encode($lastYearClaimsIncome) !!}),
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
                            font: {
                                weight: 'bold',
                                size: 13
                            },
                            color: function(context) {
                                return context.datasetIndex === 0 ? incomeColor : claimsColor;
                            },
                            padding: {
                                top: 5
                            },
                            display: function(context) {
                                return context.dataset.data[context.dataIndex] !== 0;
                            }
                        },
                        tooltip: {
                            callbacks: {
                                label: function(context) {
                                    return context.dataset.label + ': ' +
                                        formatNumber(Math.round(context.raw)) + ' ₽';
                                }
                            }
                        },
                        legend: {
                            position: 'top',
                            labels: {
                                usePointStyle: true,
                                padding: 20,
                                font: {
                                    size: 14
                                }
                            }
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            ticks: {
                                callback: function(value) {
                                    return formatNumber(Math.round(value));
                                },
                                padding: 10
                            },
                            grid: {
                                drawBorder: false
                            }
                        },
                        x: {
                            grid: {
                                display: false
                            }
                        }
                    }
                },

                plugins: [ChartDataLabels]
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
