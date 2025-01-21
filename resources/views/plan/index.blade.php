@extends('layout.layout')
@section('page-heading')
    <div class="row align-items-center">
        <div class="col-12 col-md-4">
            <h3>Управление планом продаж</h3>
        </div>
        <div class="col-12 col-md-8 text-end">
            <a href="{{route('plan.statistics')}}" class="btn mb-2 btn-sm btn-primary">Продажи (План/Факт)</a>
            <a href="{{route('plan.services')}}" class="btn mb-2 btn-sm btn-primary">Продажи (по услугам)</a>
            <a href="{{route('plan.salesCategory')}}" class="btn mb-2 btn-sm btn-primary">Продажи (по менеджерам)</a>
            <a href="{{route('plan.countDays')}}" class="btn mb-2 btn-sm btn-info">График работы</a>
            <a href="{{route('plan.create')}}" class="btn mb-2 btn-sm btn-success">Добавление плана</a>
        </div>
    </div>
@endsection


@section('content')
    <div class="row">
        <div class="col-lg-12 col-md-12">
            <div class="card">
                <div class="card-content">
                    <div class="card-body">
                        <h4 class="card-title">Просмотр плана продаж</h4>
                        <p class="text-muted">В данном разделе вы можете посмотреть сумму планируемых продаж для каждого сотрудника по месяцам</p>

                        @if($salesPlan->isEmpty())
                            <h5 class="text-gray-500">К сожалению, план не был установлен 😢</h5>
                        @else

                            <p class="mb-1 fw-bold"><b class="text-primary">Общий план всех сотрудников:</b> <span id="sum">0</span> руб.</p>
                            <p class="mb-1 fw-bold">
                                <b class="text-primary">Количество рабочих дней:</b>
                                @if(count(getWorkingDays(\Carbon\Carbon::now()->format('Y-m-01'))) == 0)
                                    <span class="text-danger">График работы не установлен</span>
                                @else
                                   <span id="countDays">{{count(getWorkingDays(\Carbon\Carbon::now()->format('Y-m-01')))}}</span>
                                @endif
                            </p>

                            <p class="mb-4 fw-bold">
                                <b class="text-primary">Ежедневный план для сотрудников:</b>
                                <span id="everyDayPlan">0 руб.</span>
                            </p>

                            <div class="row mt-3 mb-4">
                                <div class="col-12">
                                    <div class="form-group">
                                        <label>Выберите месяц для фильтрации: </label>
                                        <input type="hidden" name="month" id="month">
                                        <input type="text" id="filter-month"
                                               class="form-control filter-month"
                                               name="filter-month"
                                               placeholder="Выберите месяц..." required
                                               value="{{getMonths()[\Carbon\Carbon::now()->format('n')]}} {{   \Carbon\Carbon::now()->format('Y')}}">
                                    </div>
                                </div>
                            </div>

{{--                            <form action="#" method="POST">--}}
{{--                                @csrf--}}
{{--                                <div class="form-group">--}}
{{--                                    <label>Количество рабочих дней: </label>--}}
{{--                                    <input type="text" id="filter-month"--}}
{{--                                           class="form-control "--}}
{{--                                           name="filter-month"--}}
{{--                                           placeholder="Выберите месяц..." required>--}}
{{--                                </div>--}}
{{--                            </form>--}}


                            <table class="table table-lg table-hover mt-4" id="plan-table">
                                <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Месяц / Год</th>
                                    <th>Сотрудник</th>
                                    <th>План продаж</th>
                                    <th class="text-center">Действие</th>
                                </tr>
                                </thead>
                                <tbody>
                                @foreach($salesPlan as $key => $item)
                                    <tr>
                                        <td>{{$key+1}}</td>
                                        <td>{{$item->getDate()}}</td>
                                        <td>{{$item->user->getFullName()}}</td>
                                        <td amount="{{$item->plan}} руб.">{{money($item->plan)}} руб.</td>

                                        <td class="text-center">
                                            <a href="{{route('plan.edit', ['plan' => $item->id])}}"
                                               class="text-primary"><i class="bi bi-pen-fill"></i></a>
                                            <form action="{{route('plan.destroy', ['plan' => $item->id])}}"
                                                  method="POST" class="d-inline">
                                                @csrf
                                                @method('DELETE')
                                                <a href="#" class="text-danger ms-2 delete"><i
                                                        class="bi bi-trash-fill"></i></a>
                                            </form>
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


    </div>


    <div class="row">
        <div class="col-lg-4 col-md-12">
            <div class="card">
                <div class="card-content">
                    <div class="card-body">
                        <h4 class="card-title mb-4 text-center">План на месяц</h4>

                        <div id="bar"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-8 col-md-12">
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
