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
    </style>

    @php
        $totalRemaining = 0;
        foreach ($userClaims as $key => $item) {
            if ($item->client == null) {
                continue;
            }

            $remaining = 0;
            if ($item->historiesPayment->first()->status->name != 'Оплачен') {
                if (getPaymentsClaim($item->id) != 0) {
                    $remaining = $item->amount - getPaymentsClaim($item->id);
                } else {
                    $remaining = $item->amount;
                }
                $totalRemaining += $remaining;
            }
        }
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
                                <span class="percent-text">(@if ($sumPlan == 0)0%@else{{ round(($sumPaid->first()->total_amount / $sumPlan) * 100, 2) }}%@endif)</span>
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
                                (
                                @if (count(getWorkingDays($planMonth)) == 0)
                                    <span class="text-danger">План не установлен</span>
                                @else
                                    <span id="everyDayPlan">{{ money($sumPlan / count(getWorkingDays($planMonth))) }}
                                        ₽</span>
                                @endif
                                / День
                                )
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
                            <table class="table table-lg table-hover table-striped" id="datatables">
                                <thead>
                                    <tr>
                                        <th class="date-column">Дата</th>
                                        <th class="date-column">№</th>
                                        <th class="client-column">Клиент</th>
                                        <th class="name-column">Наименование услуги</th>
                                        <th class="sum-column">Сумма</th>
                                        <th>Статус оплаты</th>
                                        <th class="part-payment">Частичная оплата</th>
                                        <th>Остаток</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @foreach ($userClaims as $key => $item)
                                        @if ($item->client == null)
                                            continue;
                                        @endif
                                        <tr>
                                            <td>{{ $item->created_at->format('d.m.y') }}</td>
                                            <td>
                                                <a
                                                    href="{{ route('claims.show', ['claim' => $item->id]) }}">{{ $item->id }}</a>
                                            </td>
                                            <td>
                                                <a href="{{ route('clients.show', ['client' => $item->client->id]) }}"
                                                    target="_blank">{{ $item->client->name }}
                                                    @if ($item->client->requisite->fullName)
                                                        <span>
                                                            <br>
                                                            (<b>Юр.имя: </b>
                                                            {{ $item->client->requisite->fullName }})
                                                        </span>
                                                    @endif
                                                </a>
                                            </td>
                                            <td>{{ $item->service->name }}</td>
                                            <td>{{ money($item->amount) }}</td>
                                            <td class="payment-status">
                                                @if (count($item->historiesPayment) != 0)
                                                    <span
                                                        class="badge custom-bg-{{ $item->historiesPayment->first()->status->color }}">
                                                        {{ $item->historiesPayment->first()->status->name }}
                                                    </span>
                                                @else
                                                    <span class="text-danger">Статус неизвестен</span>
                                                @endif
                                            </td>
                                            <td>
                                                <div
                                                    style="display: flex; align-items: center; justify-content: space-between; width: 70%;">
                                                    @if (getPaymentsClaim($item->id) != 0)
                                                        <span>{{ money(getPaymentsClaim($item->id)) }}</span>
                                                    @else
                                                        <span>&nbsp;</span>
                                                    @endif
                                                    &nbsp;
                                                    <a href="{{ route('payment.list-paid', ['claim' => $item->id]) }}"
                                                        class="btn icon btn-primary" style="padding: 2px 6px;">
                                                        <i class="bi bi-eye-fill" style="font-size: 14px;"></i>
                                                    </a>
                                                </div>
                                            </td>
                                            @php
                                                $remaining = 0;
                                                if ($item->historiesPayment->first()->status->name != 'Оплачен') {
                                                    if (getPaymentsClaim($item->id) != 0) {
                                                        $remaining = $item->amount - getPaymentsClaim($item->id);
                                                    } else {
                                                        $remaining = $item->amount;
                                                    }
                                                    $totalRemaining += $remaining;
                                                }
                                            @endphp
                                            <td>
                                                @if ($remaining > 0)
                                                    {{ money($remaining) }}
                                                @endif
                                            </td>
                                        </tr>
                                    @endforeach
                                </tbody>
                            </table>
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
@endsection
