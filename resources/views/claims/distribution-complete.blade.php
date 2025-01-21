@extends('layout.layout')
@section('page-heading')
    <div class="row align-items-center">
        <div class="col-12 col-md-6">
            <h3>Распределение заявок</h3>
        </div>
        <div class="col-12 col-md-6 text-end">
            <a href="{{route('claim.distribution')}}" class="btn btn-primary">Назад</a>
        </div>
    </div>
@endsection


@section('content')
    <div class="row">
        <div class="col-md-12">
            <div class="card">
                <div class="card-content">
                    <div class="card-body">
                        <h4 class="card-title mb-4 ">Список распределенных заявок</h4>

                        @if($claims->isEmpty())
                            <h5 class="text-gray-500">К сожалению, заявок не найдено 😢</h5>
                        @else
                            <div class="list-group">

                                @foreach($claims as $claim)
                                    <div class="list-group-item list-group-item-action p-4">
                                        <div class="d-flex w-100 justify-content-between mb-2">
                                            <h5 class="mb-1">Заявка №{{$claim->id}} - {{$claim->service->name}}
                                                @if($claim->isRead == 0)
                                                    <span class="badge bg-info ms-2">Новая заявка</span>
                                                @endif</h5>

                                            <small>{{$claim->getCreateDate()}}</small>
                                        </div>
                                        <div class="d-flex align-items-center justify-content-start">
                                            <span class="text-success fw-bold ">Создал заявку:</span>

                                            <div class="avatar bg-white ms-2 me-2">

                                                <img src="
                                             @if(isset($claim->creatorUser->photo) && !empty($claim->creatorUser->photo))
                                                {{asset("/storage")."/".$claim->creatorUser->photo}}
                                                @else
                                                {{asset('images/faces/1.jpg')}}
                                                @endif"
                                                     alt="Avatar">
                                            </div>
                                            {{$claim->creatorUser->getFullName()}}
                                        </div>
                                        <hr>
                                        <p class="mb-1">
                                            <b>Клиент - </b> <a href="{{route('clients.show', ['client' => $claim->client_id])}}">{{$claim->client->name}}</a>
                                        </p>
                                        <p class="mb-1">
                                            <b>Текущий статус - </b> {{$claim->histories->first()->status->name}}
                                        </p>
                                        <p class="mb-1">
                                            <b>Стоимость - </b> {{money($claim->amount)}} руб.
                                        </p>

                                        <hr>

                                        <form action="{{route('claim.userUpdate', ['claim' => $claim->id])}}" method="POST">
                                            @csrf
                                            <div class="form-group @if($errors->has('user_id')) is-invalid @endif">
                                                <label>Выберите ответственного за выполнение заявки: </label>
                                                <select class="js-example-basic-single" name="user_id" id="user_id{{$loop->index}}">
                                                    <option value="0">Не выбрано</option>
                                                    @foreach($users as $user)
                                                        @if ($claim->user_id == $user->id)
                                                            <option value="{{$user->id}}" selected>{{$user->getFullName()}}</option>
                                                        @else
                                                            <option value="{{$user->id}}">{{$user->getFullName()}}</option>
                                                        @endif
                                                    @endforeach
                                                </select>
                                                @if($errors->has('user_id'))
                                                    <div class="invalid-feedback">
                                                        <i class="bx bx-radio-circle"></i>
                                                        @foreach($errors->get('user_id') as $message)
                                                            {{$message}}<br>
                                                        @endforeach
                                                    </div>
                                                @endif
                                            </div>

                                            <button type="submit" class="btn btn-success">Сохранить</button>
                                        </form>

                                        <hr>

                                        <div class="actions">
                                            <p>Взаимодействия</p>
                                            <a href="{{route('claims.show', ['claim' => $claim->id])}}" class="btn icon btn-primary"><i class="bi bi-eye-fill"></i></a>
                                        </div>

                                    </div>
                                @endforeach

                            </div>

                            {{ $claims->links() }}
                        @endif
                    </div>
                </div>
            </div>
        </div>
    </div>

@endsection
