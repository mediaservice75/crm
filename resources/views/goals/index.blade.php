@extends('layout.layout')
@section('page-heading')
    <div class="row align-items-center">
        <div class="col-12 col-md-6">
            <h3>Мои задачи</h3>
        </div>
        <div class="col-12 col-md-6 text-end">
            <a href="{{route('goals.deadline')}}" class="btn  btn-danger">Просроченные задачи <span class="badge bg-transparent">{{countExpiredGoal()}}</span></a>
            <a href="{{route('goals.send')}}" class="btn  btn-primary">Отправленные задачи</a>
            <a href="{{route('goals.create')}}" class="btn  btn-success">Создать задачу</a>
        </div>
    </div>
@endsection


@section('content')
    <div class="row">
        <div class="col-md-12">
            <div class="card">
                <div class="card-content">
                    <div class="card-body">
                        <button class="btn btn-primary btn-collapse w-100" type="button" data-bs-toggle="collapse"
                                data-bs-target="#goalsToday" aria-expanded="true" aria-controls="goalsToday">
                            <span class="card-title fw-bold fs-6 mb-0">Список задач на сегодня </span>
                            <span class="badge bg-transparent">{{$todayGoals->count()}}</span>
                            <i class="bi bi-caret-up-fill ms-1"></i>
                        </button>

                        @if($todayGoals->isEmpty())
                            <h5 class="text-gray-500 mt-4 mb-0">Задач для выполнения нет 😎 </h5>
                        @else

                            <div class="table-responsive">
                                <table class="table table-hover collapse mt-3 show" id="goalsToday">
                                    <thead>
                                    <tr>
                                        <th>Статус</th>
                                        <th>Задача</th>
                                        <th>Создана</th>
                                        <th>Выполнить до</th>
                                        <th>Создал задачу</th>
                                        <th>Файлы</th>
                                        <th class="text-center">Действие</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    @foreach($todayGoals as $key => $item)


                                        <tr @if(!$item->isRead) class="bg-light-primary" @endif>
                                            <td>
                                                @if(!$item->status)
                                                    <span class="badge bg-danger ">
                                                    Не выполнена
                                                </span>
                                                @else
                                                    <span class="badge bg-success ">
                                                    Выполнена
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
                                                @if($item->files->count() == 0)
                                                    <span class="text-warning">Файлы не были загружены</span>
                                                @else
                                                    <a class="btn btn-success download-zip" attr-id="{{$item->id}}">Скачать</a>
                                                @endif
                                            </td>
                                            <td class="text-center">
                                                <a href="{{route('category.edit', ['category' => $item->id])}}"
                                                   class="text-primary"><i
                                                        class="bi bi-pen-fill"></i></a>
                                                <form action="{{route('category.destroy', ['category' => $item->id])}}"
                                                      method="POST" class="d-inline">
                                                    @csrf
                                                    @method('DELETE')
                                                    <a href="#" class="text-danger ms-2 delete"><i
                                                            class="bi bi-trash-fill"></i></a>
                                                </form>
                                                <form action="{{route('goals.complete', ['goal' => $item->id])}}" class="d-inline" method="POST">
                                                    @csrf
                                                    <button type="submit" class="bg-transparent border-0 text-success"><i class="bi bi-check-lg fs-5"></i></button>
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

        <div class="col-md-12">
            <div class="card">
                <div class="card-content">
                    <div class="card-body">
                        <button class="btn btn-primary btn-collapse w-100" type="button" data-bs-toggle="collapse"
                                data-bs-target="#goalsTomorrow" aria-expanded="true" aria-controls="goalsTomorrow">
                            <span class="card-title fw-bold fs-6 mb-0">Список задач на завтра </span>
                            <span class="badge bg-transparent">{{$tomorrowGoals->count()}}</span>
                            <i class="bi bi-caret-up-fill ms-1"></i>
                        </button>

                        @if($tomorrowGoals->isEmpty())
                            <h5 class="text-gray-500 mt-4 mb-0">Задач для выполнения нет 😎 </h5>
                        @else

                            <div class="table-responsive">
                                <table class="table table-hover collapse mt-3 show" id="goalsTomorrow">
                                    <thead>
                                    <tr>
                                        <th>Статус</th>
                                        <th>Задача</th>
                                        <th>Создана</th>
                                        <th>Выполнить до</th>
                                        <th>Создал задачу</th>
                                        <th>Файлы</th>
                                        <th class="text-center">Действие</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    @foreach($tomorrowGoals as $key => $item)

                                        <tr @if(!$item->isRead) class="bg-light-primary" @endif>
                                            <td>
                                                @if(!$item->status)
                                                    <span class="badge bg-danger ">
                                                    Не выполнена
                                                </span>
                                                @else
                                                    <span class="badge bg-success ">
                                                    Выполнена
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
                                                @if($item->files->count() == 0)
                                                    <span class="text-warning">Файлы не были загружены</span>
                                                @else
                                                    <a class="btn btn-success download-zip" attr-id="{{$item->id}}">Скачать</a>
                                                @endif
                                            </td>
                                            <td class="text-center">
                                                <a href="{{route('category.edit', ['category' => $item->id])}}"
                                                   class="text-primary"><i
                                                        class="bi bi-pen-fill"></i></a>
                                                <form action="{{route('category.destroy', ['category' => $item->id])}}"
                                                      method="POST" class="d-inline">
                                                    @csrf
                                                    @method('DELETE')
                                                    <a href="#" class="text-danger ms-2 delete"><i
                                                            class="bi bi-trash-fill"></i></a>
                                                </form>
                                                <form action="{{route('goals.complete', ['goal' => $item->id])}}" class="d-inline" method="POST">
                                                    @csrf
                                                    <button type="submit" class="bg-transparent border-0 text-success"><i class="bi bi-check-lg fs-5"></i></button>
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

        <div class="col-md-12">
            <div class="card">
                <div class="card-content">
                    <div class="card-body">
                        <button class="btn btn-primary btn-collapse w-100" type="button" data-bs-toggle="collapse"
                                data-bs-target="#otherGoals" aria-expanded="true" aria-controls="otherGoals">
                            <span class="card-title fw-bold fs-6 mb-0">Остальные задачи</span>
                            <span class="badge bg-transparent">{{$otherGoals->count()}}</span>
                            <i class="bi bi-caret-up-fill ms-1"></i>
                        </button>

                        @if($otherGoals->isEmpty())
                            <h5 class="text-gray-500 mt-4 mb-0">Задач для выполнения нет 😎 </h5>
                        @else

                            <div class="table-responsive">
                                <table class="table table-hover collapse mt-3 show" id="otherGoals">
                                    <thead>
                                    <tr>
                                        <th>Статус</th>
                                        <th>Задача</th>
                                        <th>Создана</th>
                                        <th>Выполнить до</th>
                                        <th>Создал задачу</th>
                                        <th>Файлы</th>
                                        <th class="text-center">Действие</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    @foreach($otherGoals as $key => $item)

                                        <tr @if(!$item->isRead) class="bg-light-primary" @endif>
                                            <td>
                                                @if(!$item->status)
                                                    <span class="badge bg-danger ">
                                                    Не выполнена
                                                </span>
                                                @else
                                                    <span class="badge bg-success ">
                                                    Выполнена
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
                                                @if($item->files->count() == 0)
                                                    <span class="text-warning">Файлы не были загружены</span>
                                                @else
                                                <a class="btn btn-success download-zip" attr-id="{{$item->id}}">Скачать</a>
                                                @endif
                                            </td>
                                            <td class="text-center">
                                                <a href="{{route('category.edit', ['category' => $item->id])}}"
                                                   class="text-primary"><i
                                                        class="bi bi-pen-fill"></i></a>
                                                <form action="{{route('category.destroy', ['category' => $item->id])}}"
                                                      method="POST" class="d-inline">
                                                    @csrf
                                                    @method('DELETE')
                                                    <a href="#" class="text-danger ms-2 delete"><i
                                                            class="bi bi-trash-fill"></i></a>
                                                </form>
                                                <form action="{{route('goals.complete', ['goal' => $item->id])}}" class="d-inline" method="POST">
                                                    @csrf
                                                    <button type="submit" class="bg-transparent border-0 text-success"><i class="bi bi-check-lg fs-5"></i></button>
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

        <div class="col-md-12">
            <div class="card">
                <div class="card-content">
                    <div class="card-body">
                        <button class="btn btn-success btn-collapse w-100" type="button" data-bs-toggle="collapse"
                                data-bs-target="#completeGoals" aria-expanded="true" aria-controls="completeGoals">
                            <span class="card-title fw-bold fs-6 mb-0">Выполненные задачи</span>
                            <span class="badge bg-transparent">{{$completeGoals->count()}}</span>
                            <i class="bi bi-caret-down-fill ms-1"></i>
                        </button>

                        @if($completeGoals->isEmpty())
                            <h5 class="text-gray-500 mt-4 mb-0">Выполненных задач не найдено </h5>
                        @else

                            <div class="table-responsive">
                                <table class="table table-hover collapse mt-3" id="completeGoals">
                                    <thead>
                                    <tr>
                                        <th>Статус</th>
                                        <th>Задача</th>
                                        <th>Создана</th>
                                        <th>Выполнить до</th>
                                        <th>Создал задачу</th>
                                        <th>Файлы</th>

                                    </tr>
                                    </thead>
                                    <tbody>
                                    @foreach($completeGoals as $key => $item)

                                        <tr @if(!$item->isRead) class="bg-light-primary" @endif>
                                            <td>
                                                @if(!$item->status)
                                                    <span class="badge bg-danger ">
                                                    Не выполнена
                                                </span>
                                                @else
                                                    <span class="badge bg-success ">
                                                    Выполнена
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
                                                @if($item->files->count() == 0)
                                                    <span class="text-warning">Файлы не были загружены</span>
                                                @else
                                                    <a class="btn btn-success download-zip" attr-id="{{$item->id}}">Скачать</a>
                                                @endif
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

{{goalsIsRead()}}
