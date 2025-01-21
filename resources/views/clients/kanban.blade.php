<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css"/>
<script src="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js"></script>

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
                <a href="{{route('clients.index')}}" class="btn btn-sm btn-primary">Обычный вид</a>
                <a href="{{route('clients.create')}}" class="btn btn-sm btn-primary">Добавление</a>
                <a href="{{route('clients.createFast')}}" class="btn btn-sm btn-success">Быстрое добавление</a>
            @endif
        </div>
    </div>
@endsection


@section('content')
    <div class="swiper" id="swiper">
        <div class="swiper-wrapper" style="height: auto">

            @foreach($allData as $item)
                <div class="swiper-slide">
                    <div class="card">
                        <div class="card-content">
                            <div class="card-body">
                                <h5 class="title mb-4">{{$item['name']}}</h5>
                                @if(isset($item['clients']))
                                    @foreach($item['clients'] as $client)
                                        <a href="{{route('clients.show', ['client' => $client->id])}}">
                                            <div class="alert alert-primary">
                                                <i class="bi bi-arrow-right"></i>
                                                {{$client->name}}
                                                @if($client->requisite->fullName)
                                                    (Юр.название: {{$client->requisite->fullName}})
                                                @endif
                                            </div>
                                        </a>
                                    @endforeach

                                @else
                                    <p>Клиентов не найдено</p>
                                @endif
                            </div>
                        </div>
                    </div>
                </div>
            @endforeach



        </div>

        <div class="swiper-scrollbar"></div>
    </div>
@endsection
