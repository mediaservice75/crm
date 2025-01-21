@extends('layout.layout')
@section('page-heading')
    <div class="row">
        <div class="col-12 col-md-6">
            <h3>Распределение клиентов</h3>
        </div>
        <div class="col-12 col-md-6 text-end">
            <a href="{{route('clients.showAll')}}" class="btn btn-sm btn-primary">Назад</a>
        </div>
    </div>
@endsection

@section('content')

    <div class="mb-4">
        <form action="{{route('clients.distribution')}}" method="GET">
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
                        <a class="btn btn-danger" type="submit" id="search-btn" href="{{route('clients.distribution')}}">Сбросить</a>
                    @endif
                </div>
            </div>
        </form>

    </div>

    <div class="row">

        @if($clients->isEmpty())
            <h5 class="text-gray-500">К сожалению, клиентов не найдено 😢</h5>
        @else
            <table class="table table-lg table-hover">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Логотип</th>
                    <th>Клиент</th>
                    <th>Менеджер</th>
                    <th>Последнее взаимодействие</th>
                    <th>Назначить сотрудника</th>
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
                        <td>
                            <a href="{{route('clients.show',['client' => $item->id])}}">{{$item->name}}</a>
                        </td>
                        <td class="user-td">
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
                        <td>
                            @csrf
                            <select class="js-example-basic-single is-invalid user_id" name="user_id" attr-id="{{$item->id}}">
                                <option value="0">Не выбрано</option>
                            @foreach($users as $user)
                                @if($item->user_id == $user->id)
                                    <option selected value="{{$user->id}}">{{$user->getFullName()}}</option>
                                @else
                                    <option value="{{$user->id}}">{{$user->getFullName()}}</option>
                                @endif
                            @endforeach
                            </select>
                        </td>
                    </tr>

                @endforeach
                </tbody>
            </table>


        @endif

    </div>
    Всего записей: {{$clients->total()}}
    {{ $clients->links() }}

@endsection
