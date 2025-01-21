@extends('layout.layout')
@section('page-heading')
    <div class="row align-items-center">
        <div class="col-12 col-md-6">
            <h3>Управление пакетами услуг</h3>
        </div>
        <div class="col-12 col-md-6 text-end">
            <a href="{{route('packages.create')}}" class="btn  btn-success">Добавление</a>
        </div>
    </div>
@endsection


@section('content')
    <div class="row">
        <div class="col-md-12">
            <div class="card">
                <div class="card-content">
                    <div class="card-body">
                        <h4 class="card-title mb-4 ">Список пакетов услуг</h4>

                        @if($packages->isEmpty())
                            <h5 class="text-gray-500">К сожалению, пакетов услуг не найдено 😢</h5>
                        @else
                            <table class="table table-lg table-hover" id="datatables">
                                <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Услуга</th>
                                    <th>Наименование пакета услуги</th>
                                    <th class="text-center">Действие</th>
                                </tr>
                                </thead>
                                <tbody>
                                @foreach($packages as $key => $item)
                                    <tr>
                                        <td>{{$key+1}}</td>
                                        <td>{{$item->service->name}}</td>
                                        <td>{{$item->name}}</td>

                                        <td class="text-center">
                                            <a href="{{route('packages.edit', ['package' => $item->id])}}" class="text-primary"><i class="bi bi-pen-fill"></i></a>
                                            <form action="{{route('packages.destroy', ['package' => $item->id])}}" method="POST" class="d-inline">
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
