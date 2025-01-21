@extends('layout.layout')
@section('page-heading')
    <div class="row align-items-center">
        <div class="col-12 col-md-6">
            <h3>Управление услугами</h3>
        </div>
        <div class="col-12 col-md-6 text-end">
            <a href="{{route('services.create')}}" class="btn btn-success">Добавление</a>
        </div>
    </div>
@endsection


@section('content')
    <div class="row">
        <div class="col-md-12">
            <div class="card">
                <div class="card-content">
                    <div class="card-body">
                        <h4 class="card-title mb-4 ">Перечень услуг</h4>

                        @if($services->isEmpty())
                            <h5 class="text-gray-500">К сожалению, услуг не найдено 😢</h5>
                        @else
                            <table class="table table-lg table-hover table-responsive" id="datatables">
                                <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Категория</th>
                                    <th>Наименование услуги</th>
                                    <th>Наименование отдела</th>
                                    <th>Сотрудник</th>
                                    <th>Обязательные материалы</th>
                                    <th>Пакеты услуг</th>
                                    <th>Период размещения</th>
                                    <th>Бриф</th>
                                    <th>Количество выходов</th>
                                    <th class="text-center">Действие</th>
                                </tr>
                                </thead>
                                <tbody>
                                @foreach($services as $key => $item)
                                    <tr>
                                        <td>{{$key+1}}</td>
                                        <td>{{$item->category->name}}</td>
                                        <td>{{$item->name}}</td>
                                        <td>{{$item->group->name}}</td>

                                        @if($item->user_id)
                                            <td>{{$item->user->getFullName()}}</td>
                                        @else
                                            <td><span class="text-danger">Ответственный не назначен</span></td>
                                        @endif

                                        <td>
                                            @if($item->isRequiredMaterial)
                                                <span class="badge bg-success">Да</span>
                                            @else
                                                <span class="badge bg-danger">Нет</span>
                                            @endif
                                        </td>
                                        <td>
                                            @if($item->isPackage)
                                                <span class="badge bg-success">Да</span>
                                            @else
                                                <span class="badge bg-danger">Нет</span>
                                            @endif
                                        </td>
                                        <td>
                                            @if($item->isPeriod)
                                                <span class="badge bg-success">Да</span>
                                            @else
                                                <span class="badge bg-danger">Нет</span>
                                            @endif
                                        </td>
                                        <td>
                                            @if($item->isBrif)
                                                <span class="badge bg-success">Да</span>
                                            @else
                                                <span class="badge bg-danger">Нет</span>
                                            @endif
                                        </td>
                                        <td>
                                            @if($item->isOutput)
                                                <span class="badge bg-success">Да</span>
                                            @else
                                                <span class="badge bg-danger">Нет</span>
                                            @endif
                                        </td>

                                        <td class="text-center">
                                            <a href="{{route('services.edit', ['service' => $item->id])}}" class="text-primary"><i class="bi bi-pen-fill"></i></a>
                                            <form action="{{route('services.destroy', ['service' => $item->id])}}" method="POST" class="d-inline">
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
