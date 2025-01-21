@extends('layout.layout')
@section('page-heading')
    <div class="row align-items-center">
        <div class="col-12 col-md-6">
            <h3>Управление планом продаж</h3>
        </div>
        <div class="col-12 col-md-6 text-end">
            <a href="{{url()->previous()}}" class="btn btn-primary">Назад</a>
        </div>
    </div>
@endsection

@section('content')

    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-content">
                    <div class="card-body">
{{--                        <form action="{{route('plan.services')}}" method="GET">--}}
                        <form action="{{request()->url()}}" method="GET">
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

    <h4 class="card-title mb-4 ">Статистика продаж по услугам</h4>
    <div class="row">
    @foreach($allData as $item)

        <div class="col-12 col-md-6">
            <div class="card">
                <div class="card-content">
                    <div class="card-body">
                        <h4 class="card-title">{{$item['name']}}</h4>
                        <p class="text-primary"><b>Общая сумма: </b> {{money($item['sum'])}} руб.</p>
                        @if(count($item['users']) == 0)
                            <p class="text-danger">Данная категория услуг не продана ни одним менеджером</p>
                        @else
                            <table class="table table-lg table-hover datatables">
                                <thead>
                                    <th>Ф.И.О.</th>
                                    <th>Продано</th>
                                </thead>

                                @foreach($item['users'] as $user)

                                    <tr>
                                        <td>{{getUserById($user['creator'])}}</td>
                                        <td>{{money($user['total_amount'])}} руб.</td>
                                    </tr>
                                @endforeach
                            </table>
                        @endif

                    </div>
                </div>
            </div>
        </div>
    @endforeach
    </div>

@endsection

