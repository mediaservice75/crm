@extends('layout.layout')
@section('page-heading')
    <div class="row align-items-center">
        <div class="col-12 col-md-6">
            <h3>Управление статусами оплаты</h3>
        </div>
        <div class="col-12 col-md-6 text-end">
            <a href="{{route('status-payment.create')}}" class="btn  btn-success">Добавление</a>
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
                        <p class="font-bold mb-4"><sup class="text-danger">*</sup> Внимание! Созданы системные статусы для корректной работы приложения.
                            <br>
                            Редактировние/удаление данных статусов может привести к неккоректной работе системы. </p>

                        @if($statusPayment->isEmpty())
                            <h5 class="text-gray-500">К сожалению, статусов оплаты не найдено 😢</h5>
                        @else
                            <table class="table table-lg table-hover" id="datatables">
                                <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Наименование статуса</th>
                                    <th>Цвет отображения статуса</th>
                                    <th class="text-center">Действие</th>
                                </tr>
                                </thead>
                                <tbody>
                                @foreach($statusPayment as $key => $item)
                                    <tr>
                                        <td>{{$key+1}}</td>
                                        <td>{{$item->name}}</td>
                                        <td>
                                            <div class="square-color-{{$item->color}}"></div>

                                        </td>

                                        <td class="text-center">
                                            <a href="{{route('status-payment.edit', ['status_payment' => $item->id])}}" class="text-primary"><i class="bi bi-pen-fill"></i></a>
                                            <form action="{{route('status-payment.destroy', ['status_payment' => $item->id])}}" method="POST" class="d-inline">
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
