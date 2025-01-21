@extends('layout.layout')
@section('page-heading')
    <div class="row">
        <div class="col-12 col-md-3">
            <h3>Клиенты</h3>
        </div>
        <div class="col-12 col-md-9 text-end">
            @if (auth()->user()->can('allowClient', \App\Models\Client::class))
                <a href="{{route('clients.allow')}}" class="btn btn-sm btn-primary">Подтверждение клиентов
                    <span class="badge bg-transparent">{{getCountClientIsNotAllow()}}</span>
                </a>
            @endif

            @if (auth()->user()->can('allowClient', \App\Models\Client::class))
                <a href="{{route('clients.distribution')}}" class="btn btn-sm btn-primary">Распределение клиентов между МП</a>
            @endif

            @if (auth()->user()->can('create', \App\Models\Client::class))
                <a href="{{route('clients.create')}}" class="btn btn-sm btn-primary">Добавление</a>
                <a href="{{route('clients.createFast')}}" class="btn btn-sm btn-success">Быстрое добавление</a>
            @endif
        </div>
    </div>
@endsection

@section('content')


    <style>
        tfoot {
            display: table-row-group !important;
        }
    </style>

    <div class="mb-4">
            <form action="{{route('clients.showAll')}}" method="GET">
                <div class="d-block">
                    <label>Поиск клиента: </label>
                    <p class="mb-0"><small class="text-info text-opacity-75"><i>Поиск доступен по наименованию клиента, номеру телефона, электронной почте, адресу</i></small></p>
                    <div class="form-check form-switch mt-2 mb-3">
                        <label class="form-check-label" for="free-client">Свободный клиент</label>
                        <input class="form-check-input" name="free-client" type="checkbox" @if(app('request')->input('free-client')) checked @endif>
                    </div>

                    <div class="input-group mt-2">
                        <input type="text" id="search"
                               class="form-control @if($errors->has('search')) is-invalid @endif" name="search"
                               placeholder="Введите поисковый запрос..."  aria-describedby="search-btn"
                               value="@if(app('request')->input('search')){{app('request')->input('search')}}@endif">
                        <button class="btn btn-success" type="submit" id="search-btn">Поиск</button>
                        @if(app('request')->input('search'))
                            <a class="btn btn-danger" type="submit" id="search-btn" href="{{route('clients.showAll')}}">Сбросить</a>
                        @endif
                    </div>
                </div>
            </form>

        </div>

    <div class="row">

        @if($clients->isEmpty())
            <h5 class="text-gray-500">К сожалению, клиентов не найдено 😢</h5>
        @else
                <table class="table table-lg table-hover" id="">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Логотип</th>
                        <th>Клиент</th>
                        <th>Менеджер</th>
                        <th>Последнее взаимодействие</th>
                        @if(auth()->user()->role->level <= 2)
                            <th>Взаимодействие</th>
                        @endif
                    </tr>
                    </thead>
                    <tbody>
                    @foreach($clients as $key => $item)
                        <tr>
                            <td>{{$item->id}}</td>
                            <td width="200px">
                                <div class="avatar avatar-lg">
                                    @if(empty($item->logo))
                                        <img src="{{asset('images/faces/2.jpg')}}" alt="Логотип отсутствует" srcset="">
                                    @else
                                        <img src="{{asset('storage').'/'.$item->logo}}" alt="Логотип организации">
                                    @endif
                                </div>
                            </td>
                            <td>{{$item->name}}</td>
                            <td>
                                @if ($item->user)
                                    <span>{{$item->user->getFullName()}}</span>
                                @else
                                    <span class="text-success">Свободный клиент</span>
                                @endif
                            </td>
                            <td>
                                @if ($item->histories->first())
                                    <p>{{$item->histories->first()->status->name}}</p>
                                    <p><b>Ответственный: </b>{{$item->histories->first()->user->getFullName()}}</p>
                                @else
                                    <span class="text-danger">Взаимодействий не найдено</span>
                                @endif
                            </td>
                            @if(auth()->user()->role->level <= 2)
                                <td>
                                    <a title="Открыть" href="{{route('clients.show', ['client' => $item->id])}}"
                                   class="btn btn-sm icon btn-primary me-2 mb-2"><i class="bi bi-eye-fill"></i></a>
                                    <a title="Управление ЛПР" href="{{route('lpr.createLpr', ['client_id' => $item->id])}}"
                                       class="btn btn-sm icon btn-success me-2 mb-2"><i class="bi bi-people-fill"></i>
                                    </a>
                                    @if($item->requisite)
                                    <a title="Управление реквизитами" href="{{route('requisites.edit', ['requisite' => $item->requisite->id])}}"
                                       class="btn btn-sm icon btn-success me-2 mb-2"><i class="bi bi-file-binary-fill"></i>
                                        </a>
                                    @endif
                                    <a title="Редактирование клиента" href="{{route('clients.edit', ['client' => $item->id])}}"
                                       class="btn btn-sm icon btn-primary me-2 mb-2"><i class="bi bi-pencil"></i>
                                        </a>
                                    <form action="{{route('clients.destroy', ['client' => $item->id])}}" method="POST" class="d-inline-block">
                                        @csrf
                                        @method('DELETE')
                                        <button title="Удалить" type="submit" class="btn icon btn-danger me-2 mb-2 delete btn-sm"><i
                                                class="bi bi-trash-fill"></i>
                                        </button>
                                    </form>
                                </td>

                            @endif
                        </tr>

                    @endforeach
                    </tbody>
                </table>


        @endif

    </div>

    Всего записей: {{$clients->total()}}
    {{ $clients->links() }}




@endsection
