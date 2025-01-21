@extends('layout.layout')
@section('page-heading')
    <div class="row align-items-center">
        <div class="col-12 col-md-6">
            <h3>Созданные заявки</h3>
        </div>
        <div class="col-12 col-md-6 text-end">
            <a href="{{route('claim.claimsMy')}}" class="btn btn-primary">Назад</a>
        </div>
    </div>
@endsection

@section('content')
    <div class="row">
        <div class="col-md-12">
            <div class="card">
                <div class="card-content">
                    <div class="card-body">
                        <h4 class="card-title mb-4 ">Список созданных заявок</h4>

                        @if($claims->isEmpty())
                            <h5 class="text-gray-500">К сожалению, заявок не найдено 😢</h5>
                        @else
                            <div class="list-group">

                                @foreach($claims as $claim)
                                    <div class="list-group-item list-group-item-action p-4">
                                        <div class="d-flex w-100 justify-content-between mb-2">
                                            <h5 class="mb-1">Заявка №{{$claim->id}} - {{$claim->service->name}}</h5>
                                            <small>{{$claim->getCreateDate()}}</small>
                                        </div>
                                        <div class="d-flex align-items-center justify-content-start">
                                            <span class=" fw-bold ">Ответственный заявку:</span>

                                            @if($claim->user)
                                                <div class="avatar bg-white ms-2 me-2">
                                                    <img src="
                                                        @if(isset($claim->user->photo) && !empty($claim->user->photo))
                                                            {{asset("/storage")."/".$claim->user->photo}}
                                                        @else
                                                            {{asset('images/faces/1.jpg')}}
                                                        @endif"
                                                         alt="Avatar">
                                                </div>
                                                <span class="text-success">  {{$claim->user->getFullName()}}</span>
                                            @else
                                                 <span class="text-danger ms-2"> Не назначен</span>
                                            @endif
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

                                        <div class="actions">
                                            <p>Взаимодействия</p>
                                            <a href="{{route('claims.show', ['claim' => $claim->id])}}" class="btn icon btn-primary"><i class="bi bi-eye-fill"></i></a>
                                            <a href="{{route('claims.edit', ['claim' => $claim->id])}}" class="btn icon btn-warning"><i class="bi bi-pencil-fill"></i></a>
                                            <form action="{{route('claims.destroy', ['claim' => $claim->id])}}" method="POST" class="d-inline">
                                                @csrf
                                                @method('DELETE')
                                                <a href="#" class="btn icon btn-danger delete"><i class="bi bi-trash-fill"></i></a>
                                            </form>
                                            <a href="{{route('claim.repeat', ['claim' => $claim->id])}}" class="btn icon btn-success"><i class="bi bi-repeat"></i></a>
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

