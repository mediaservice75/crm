@extends('layout.layout')
@section('page-heading')
    <div class="row align-items-center">
        <div class="col-12 col-md-6">
            <h3>Управление оплатами</h3>
        </div>
        <div class="col-12 col-md-6 text-end">
            <a href="{{route('payment.paid')}}" class="btn btn-primary">Назад</a>
        </div>
    </div>
@endsection

@section('content')
    <div class="row">
        <div class="col-md-12">
            <div class="card">
                <div class="card-content">
                    <div class="card-body">
                        <h4 class="card-title mb-4 ">Список статусов оплаты</h4>

                        @if($historiesPaidClaims->isEmpty())
                            <h5 class="text-gray-500">К сожалению, заявок не найдено 😢</h5>
                        @else
                            <table class="table table-lg table-hover" id="datatables">
                                <thead>
                                <tr>
                                    <th>Заявка №</th>
                                    <th>Дата</th>
                                    <th>Статус</th>
                                    <th>Сумма оплаты</th>
                                    <th class="text-center">Удалить</th>
                                </tr>
                                </thead>
                                <tbody>
                                @foreach($historiesPaidClaims as $key => $item)
                                    <tr>
                                        <td>{{$item->claim_id}}</td>
                                        <td>{{$item->getDate()}}</td>
                                        <td>{{$item->status->name}}</td>
                                        @if($item->status->name == 'Оплачен' || $item->status->name == 'Частично оплачен')
                                            <td>{{money($item->amount)}} руб.</td>
                                        @else
                                            <td>-</td>
                                        @endif
                                        <td class="text-center">
                                            <form action="{{route('payment.del-paid', ['id' => $item->id])}}" method="POST" class="d-inline">
                                                @csrf
                                                @method('DELETE')
                                                <a href="#" class="text-danger ms-2 delete"><i class="bi bi-trash-fill"></i></a>
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

@endsection
