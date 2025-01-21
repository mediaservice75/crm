@extends('layout.layout')
@section('page-heading')
    <div class="row align-items-center">
        <div class="col-12 col-md-6">
            <h3>Статистика сотрудника - {{$user->getFullName()}}</h3>
            <input type="hidden" id="id_user" value="{{$user->id}}">
        </div>
        <div class="col-12 col-md-6 text-end">
            <a href="{{back()->getTargetUrl()}}" class="btn btn-primary">Назад</a>
        </div>
    </div>
@endsection


@section('content')

    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-content">
                    <div class="card-body">
                        <form action="{{route('users.show', ['user' => $id])}}" method="GET">
                            <div class="form-group ">
                                <label>Выберите месяц для фильтрации: </label>
                                <div class="d-flex">
                                    <input type="hidden" name="month" id="month"
                                           value="@if(app('request')->input('month')){{app('request')->input('month')}}@endif">
                                    <input type="text" id="month-f"
                                           class="form-control month-f"
                                           placeholder="Выберите месяц..." required
                                           value="@if(app('request')->input('month')){{convertMonth(app('request')->input('month'))}}@endif">
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

        <style>
            table th, table td {
                padding: 0.3rem !important;
            }
        </style>

        <div class="col-md-12 col-lg-12">
            <div class="card">
                <div class="card-content">
                    <div class="card-body">
                        <h4 class="card-title mb-4 ">Статистика продаж</h4>
                        @if($userClaims->isEmpty())
                            <h5 class="text-gray-500">К сожалению, заявок не создано 😢</h5>
                        @else

                            <p class="fw-bold mb-3"><b class="text-primary">План сотрудника на месяц:</b> {{money($sumPlan)}} руб.</p>
                            <hr>
                            <p class="fw-bold mb-0">
                                <b class="text-primary">Количество рабочих дней:</b>
                                @if(count(getWorkingDays($planMonth)) == 0)
                                    <span class="text-danger">График работы не установлен</span>
                                @else
                                    <span id="countDays">{{count(getWorkingDays($planMonth))}}</span>
                                @endif
                            </p>


                            <p class="mb-0 fw-bold">
                                <b class="text-primary">Ежедневный план:</b>
                                @if(count(getWorkingDays($planMonth)) == 0)
                                    <span class="text-danger">График работы не установлен</span>
                                @else
                                    <span id="everyDayPlan">{{ money($sumPlan/ count(getWorkingDays($planMonth))) }} руб.</span>
                                @endif
                            </p>
                            <p class="mb-3 fw-bold">
                                <b class="text-primary">Сумма на сегодня ({{\Carbon\Carbon::now()->format('d.m.Y')}}): </b>
                                @if(count(getWorkingDays($planMonth)) == 0)
                                    <span class="text-danger">График работы не установлен</span>
                                @else
                                    <span id="everyDayPlan">{{money(($sumPlan / count(getWorkingDays($planMonth))) * getCountPastDays($planMonth))}} руб.</span>
                                @endif
                            </p>

                            <hr>
                            <p class="fw-bold mb-0"><b class="text-primary">Заявок создано на:</b>
                                @if($sumClaims->first()->total_amount == null)
                                    0 руб.
                                @else
                                    {{money($sumClaims->first()->total_amount)}} руб.
                                @endif</p>
                            @php echo getDebtSumByUser($id) @endphp
                            <p class="fw-bold mb-0"><b class="text-primary">Поступления:</b>            @if($sumPaid->first()->total_amount == null)
                                    0 руб.
                                @else
                                    {{money($sumPaid->first()->total_amount)}} руб.
                                @endif</p>
                            <p class="fw-bold mb-4"><b class="text-primary">Процент выполения:</b>
                                @if ($sumPlan == 0)
                                    0%
                                @else
                                {{round($sumPaid->first()->total_amount / $sumPlan * 100, 2)}}%
                                @endif
                            </p>

                            <table class="table table-lg table-hover" id="datatables">
                                <thead>
                                <tr>
                                    <th>Месяц / Год</th>
                                    <th>№ заявки</th>
                                    <th>Клиент</th>
                                    <th>Категория услуг</th>
                                    <th>Наименование услуги</th>
                                    <th style="width: 20% !important">Сумма</th>
                                    <th>Статус оплаты</th>
                                </tr>
                                </thead>
                                <tbody>

                                @foreach($userClaims as $key => $item)

                                    @if($item->client == null) continue; @endif
                                    <tr>
                                        <td>{{$item->getDate()}}</td>
                                        <td>
                                            <a href="{{route('claims.show', ['claim' => $item->id])}}">№{{$item->id}}</a>
                                        </td>
                                        <td>
                                            <a href="{{route('clients.show', ['client'=>$item->client->id])}}" target="_blank">{{$item->client->name}}
                                            @if($item->client->requisite->fullName)
                                            <span>
                                                (<b>Юр.имя: </b>
                                                {{$item->client->requisite->fullName}})
                                            </span>
                                            @endif
                                            </a>
                                        </td>

                                        <td>{{$item->service->category->name}}</td>
                                        <td>{{$item->service->name}}</td>
                                        <td>{{money($item->amount)}} руб.</td>
                                        <td>
                                            @if(count($item->historiesPayment) != 0)
                                                <span class="badge custom-bg-{{$item->historiesPayment->first()->status->color}}">{{$item->historiesPayment->first()->status->name}}</span>
                                            @else
                                                <span class="text-danger">Статус неизвестен</span>
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
                        <div id="plan-user" ></div>
                    </div>
                </div>
            </div>
        </div>

    </div>

    <div id="data" class="row">
        {!! $salesByCategory !!}
    </div>

@endsection
