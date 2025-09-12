@extends('layout.layout')
@section('page-heading')
    <div class="row align-items-center">
        <div class="col-12 col-md-6">
            <h3>Управление планом продаж</h3>
        </div>
        <div class="col-12 col-md-6 text-end">
            <a href="{{ route('plan.index') }}" class="btn btn-primary">Назад</a>
        </div>
    </div>
@endsection

@section('content')
    <style>
        .percent-text {
            font-weight: 500;
            color: #808080;
        }
    </style>

    @php
    @endphp

    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-content">
                    <div class="card-body">
                        <form action="{{ route('plan.statistics') }}" method="GET">
                            <div class="form-group ">
                                <label>Выберите месяц для фильтрации: </label>
                                <div class="d-flex">
                                    <input type="hidden" name="month" id="month"
                                        value="@if (app('request')->input('month')) {{ app('request')->input('month') }} @endif">
                                    <input type="text" id="month-f" class="form-control month-f"
                                        placeholder="Выберите месяц..." required
                                        value="@if (app('request')->input('month')) {{ convertMonth(app('request')->input('month')) }}@else{{ getMonths()[\Carbon\Carbon::now()->format('n')] }} {{ \Carbon\Carbon::now()->format('Y') }} @endif">
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
                        <div class="global-stats mb-4 p-3 bg-light rounded-4">
                            <div class="row align-items-center">
                                <div class="col-md-4">
                                    <div class="stat-card text-center p-3 border-end">
                                        <div class="stat-value display-6 fw-bold">
                                            {{ money($sumPlan) }} ₽
                                        </div>
                                        <div class="stat-label small text-muted">Общий план всех сотрудников</div>
                                    </div>
                                </div>

                                <div class="col-md-4">
                                    <div class="stat-card text-center p-3 border-end">
                                        @php
                                            $totalAmount = $sumPaid->first()->total_amount ?? 0;
                                            $percentage = $sumPlan == 0 ? 0 : round(($totalAmount / $sumPlan) * 100, 2);

                                            if ($percentage < 25) {
                                                $catImage = 'crying.png';
                                            } elseif ($percentage >= 25 && $percentage < 50) {
                                                $catImage = 'sad.png';
                                            } elseif ($percentage >= 50 && $percentage < 75) {
                                                $catImage = 'neutral.png';
                                            } elseif ($percentage >= 75 && $percentage < 100) {
                                                $catImage = 'happy.png';
                                            } else {
                                                $catImage = 'cool.png';
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

                                @php
                                    $paidAmount = $sumPaid->first()->total_amount ?? 0;
                                    $difference = $paidAmount - $sumPlan;
                                    $colorClass = $difference >= 0 ? 'text-success' : 'text-warning';
                                @endphp
                                <div class="col-md-4">
                                    <div class="stat-card p-3">
                                        <div class="d-flex align-items-center justify-content-between">
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
                        @if ($salesPlan->isEmpty())
                            <h5 class="fw-bold">К сожалению, план не был установлен 😢</h5>
                        @else
                            @php
                                $paidAmount = $sumPaid->first()->total_amount ?? 0;
                                $difference = $paidAmount - $sumPlan;
                                $colorClass = $difference >= 0 ? 'text-success' : 'text-warning';
                            @endphp
                            <p class="fw-bold mb-1">
                                <b class="text-primary">Количество рабочих дней:</b>
                                @if (count(getWorkingDays($planMonth)) == 0)
                                    <span class="text-danger">График работы не установлен</span>
                                @else
                                    <span id="countDays">{{ count(getWorkingDays($planMonth)) }}</span>
                                @endif
                            </p>
                            <p class="mb-1 fw-bold">
                                <b class="text-primary">Ежедневный план:</b>
                                @if (count(getWorkingDays($planMonth)) == 0)
                                    <span class="text-danger">График работы не установлен</span>
                                @else
                                    <span id="everyDayPlan">{{ money($sumPlan / count(getWorkingDays($planMonth))) }}
                                        ₽</span>
                                @endif
                            </p>
                            <p class="mb-1 fw-bold">
                                <b class="text-primary">План на {{ \Carbon\Carbon::now()->format('d.m.Y') }}:
                                </b>
                                @if (count(getWorkingDays($planMonth)) == 0)
                                    <span class="text-danger">График работы не установлен</span>
                                @else
                                    <span
                                        id="everyDayPlan">{{ money(($sumPlan / count(getWorkingDays($planMonth))) * getCountPastDays($planMonth)) }}
                                        ₽</span>
                                @endif
                            </p>
                            <p class="fw-bold mb-1"><b class="text-primary">Заявок создано на:</b>
                                @if ($sumClaims->first()->total_amount == null)
                                    0 ₽
                                @else
                                    {{ money($sumClaims->first()->total_amount) }} ₽
                                @endif
                            </p>
                            <hr>

                            {{-- Разница (план на сегодня - заявок создано) --}}
                            <p class="fw-bold mb-1">
                                <b class="text-primary">Разница (план на {{ \Carbon\Carbon::now()->format('d.m.Y') }} -
                                    заявок создано):</b>
                                @php
                                    $totalAmount = $sumClaims->first()->total_amount;
                                    $workingDaysCount = count(getWorkingDays($planMonth));
                                    $pastDaysCount = getCountPastDays($planMonth);
                                    $plannedAmount = ($sumPlan / $workingDaysCount) * $pastDaysCount;

                                    $difference = $totalAmount - $plannedAmount;
                                @endphp

                                <span class="{{ $difference >= 0 ? 'text-success' : 'text-warning' }}">
                                    {{ money($difference) }}
                                </span>
                            </p>

                            {{-- Разница (Общий план - заявок создано) --}}
                            <p class="fw-bold mb-1">
                                <b class="text-primary">Разница (Общий план - заявок создано):</b>
                                @php
                                    $difference = $sumClaims->first()->total_amount - $sumPlan;
                                @endphp
                                <span class="{{ $difference >= 0 ? 'text-success' : 'text-warning' }}">
                                    {{ money($difference) }}
                                </span>
                            </p>
                            <hr>

                            {{-- Долг за прошлый период --}}
                            @php echo getDebtSum() @endphp

                            {{-- Таблица поступлений --}}
                            <table class="table table-lg table-hover statistic-table" id="datatables">
                                <thead>
                                    <tr>
                                        <th>Сотрудник</th>
                                        <th>Месяц / Год</th>
                                        <th>План продаж на месяц</th>
                                        <th>Заявок создано</th>
                                        <th>Факт</th>
                                        <th>Разница</th>
                                        <th>Процент выполнения</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {{-- Начало цикла --}}
                                    @foreach ($salesPlan as $key => $item)
                                        @php
                                            $plan = $item->plan;
                                            $fact = 0;
                                            $displayedUsers[$item->user_id] = true;
                                        @endphp
                                        <tr>
                                            <td>
                                                <a href="{{ route('users.show', ['user' => $item->user->id]) }}">
                                                    {{ $item->user->getFullName() }}</a>
                                            </td>
                                            <td>{{ $item->getDate() }}</td>
                                            <td>{{ money($item->plan) }} ₽</td>
                                            <td>
                                                @if (isset($multiplied[$item->user_id]))
                                                    {{ money($multiplied[$item->user_id]->total_amount) }} ₽
                                                @else
                                                    <span class="text-danger">Заявок не создано</span>
                                                @endif
                                            </td>
                                            <td>
                                                @if (isset($multipliedPaidClaims[$item->user_id]))
                                                    {{ money($multipliedPaidClaims[$item->user_id]) }} ₽
                                                    @php $fact = $multipliedPaidClaims[$item->user_id] @endphp
                                                @else
                                                    <span class="text-danger">0 ₽</span>
                                                @endif
                                            </td>
                                            <td>
                                                @php $res = $fact - $plan @endphp
                                                @if ($res > 0)
                                                    <span class="text-success">+{{ money($res) }} ₽</span>
                                                @elseif($fact > 0 && $fact < $plan)
                                                    <span class="text-warning">{{ money($res) }} ₽</span>
                                                @else
                                                    <span class="text-danger">{{ money($res) }} ₽</span>
                                                @endif
                                            </td>

                                            <td>
                                                @php
                                                    if ($plan == 0) {
                                                        $percent = 0;
                                                    } else {
                                                        $percent = ($fact / $plan) * 100;
                                                } @endphp
                                                @if ($res > 0)
                                                    <span class="text-success">{{ round($percent, 2) }}%</span>
                                                @elseif($fact > 0 && $fact < $plan)
                                                    <span class="text-warning">{{ round($percent, 2) }}%</span>
                                                @else
                                                    <span class="text-danger">{{ round($percent, 2) }}%</span>
                                                @endif
                                            </td>

                                        </tr>

                                        @php
                                            unset($multiplied[$item->user_id]);
                                            unset($multipliedPaidClaims[$item->user_id]);
                                        @endphp
                                    @endforeach

                                    @if (count($multiplied) != 0)
                                        @foreach ($multiplied as $idU => $value)
                                            @php
                                                if (isset($displayedUsers[$idU])) {
                                                    continue;
                                                }
                                                $displayedUsers[$idU] = true;
                                            @endphp
                                            <tr>
                                                <td>
                                                    <a href="{{ route('users.show', ['user' => $idU]) }}">
                                                        {{ getUserById($idU) }}</a>
                                                </td>
                                                <td>{{ $salesPlan[0]->getDate() }}</td>
                                                <td>План не установлен</td>
                                                <td>{{ money($value->total_amount) }} ₽</td>
                                                <td>
                                                    @if (isset($multipliedPaidClaims[$idU]))
                                                        {{ money($multipliedPaidClaims[$idU]) }} ₽
                                                        @php $fact = $multipliedPaidClaims[$idU] @endphp
                                                    @else
                                                        <span class="text-danger">0 ₽</span>
                                                    @endif
                                                </td>

                                                <td>-</td>
                                                <td>-</td>

                                            </tr>
                                        @endforeach
                                    @endif

                                    @if (count($multipliedPaidClaims) != 0)
                                        @foreach ($multipliedPaidClaims as $userId => $amount)
                                            @php
                                                if (isset($displayedUsers[$userId])) {
                                                    continue;
                                                }
                                            @endphp
                                            <tr>
                                                <td>
                                                    <a href="{{ route('users.show', ['user' => $userId]) }}">
                                                        {{ getUserById($userId) }}</a>
                                                </td>
                                                <td>{{ $salesPlan[0]->getDate() }}</td>
                                                <td>План не установлен</td>
                                                <td>0 ₽</td>
                                                <td>{{ money($amount) }} ₽</td>
                                                <td>-</td>
                                                <td>-</td>
                                            </tr>
                                        @endforeach
                                    @endif

                                    {{-- Конец цикла --}}
                                </tbody>
                            </table>
                        @endif
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col-lg-5 col-md-12">
            <div class="card">
                <div class="card-content">
                    <div class="card-body">
                        <h4 class="card-title mb-4 ">Диаграмма поступлений</h4>

                        <div id="plan-statistics"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-7 col-md-12">
            <div class="card">
                <div class="card-content">
                    <div class="card-body">
                        <h4 class="card-title mb-4">Диаграмма поступлений за год</h4>

                        <div id="statistics-bar"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>

@endsection
