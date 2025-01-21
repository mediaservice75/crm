@extends('layout.layout')
@section('page-heading')
    <div class="row align-items-center">
        <div class="col-12 col-md-6">
            <h3>Отправленные задачи</h3>
        </div>
        <div class="col-12 col-md-6 text-end">
            <a href="{{route('calendar.index')}}" class="btn  btn-primary">Назад</a>
        </div>
    </div>
@endsection


@section('content')
    <div class="row">
        <div class="col-md-12">
            <div class="card">
                <div class="card-content">
                    <div class="card-body">

                        @if($goals->isEmpty())
                            <h5 class="text-gray-500 mt-4 mb-0">Задач не найдено 😎 </h5>
                        @else

                            <div class="table-responsive">
                                <table class="table table-hover collapse mt-3 show" id="datatables">
                                    <thead>
                                    <tr>
                                        <th>Статус</th>
                                        <th>Задача</th>
                                        <th>Создана</th>
                                        <th>Выполнить до</th>
                                        <th>Создал задачу</th>
                                        <th>Ответственный</th>
                                        <th>Удалить</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    @foreach($goals as $key => $item)


                                        <tr>
                                            <td>

                                                @if($item->status == 0)
                                                    <span class="badge bg-danger ">
                                                    Не выполнена
                                                </span>
                                                @elseif ($item->status == 1)
                                                    <span class="badge bg-success ">
                                                    Выполнена
                                                </span>
                                                @elseif ($item->status == 2)
                                                    <span class="badge bg-danger ">
                                                    Просрочена
                                                </span>
                                                @endif

                                            </td>
                                            <td style="width: 30%">{{$item->text}}</td>
                                            <td><span class="badge bg-success ">{{$item->getDateCreate()}}</span></td>
                                            <td><span class="badge bg-danger ">{{$item->getDeadline()}}</span></td>
                                            <td>
                                                {{$item->exposed_user->getFullName()}}
                                            </td>
                                            <td>
                                                {{$item->user->getFullName()}}
                                            </td>
                                            <td class="text-center">
                                                <form action="{{route('goals.destroy', ['goal' => $item->id])}}" method="POST" class="d-inline">
                                                    @csrf
                                                    @method('DELETE')
                                                    <a href="#" class="text-danger ms-2 delete"><i class="bi bi-trash-fill"></i></a>
                                                </form>
                                            </td>
                                        </tr>
                                    @endforeach
                                    </tbody>
                                </table>
                            </div>

                        @endif

                    </div>
                </div>
            </div>
        </div>
    </div>

@endsection

