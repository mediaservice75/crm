@extends('layout.layout')
@section('page-heading')
    <div class="row align-items-center">
        <div class="col-12 col-md-6">
            <h3>Активная реклама</h3>
        </div>
        <div class="col-12 col-md-6 text-end">
            <a href="{{route('claim.activeAd')}}" class="btn btn-primary">Назад</a>
        </div>
    </div>
@endsection


@section('content')
    <div class="row">
        <div class="col-md-12">
            <div class="card">
                <div class="card-content">
                    <div class="card-body">
                        <h4 class="card-title mb-4 ">Список прошедшей активной рекламы</h4>

                        @if($activeAds->isEmpty())
                            <h5 class="text-gray-500">К сожалению, прошедшей активной рекламы не найдено 😢</h5>
                        @else
                            <table class="table table-lg table-hover" id="datatables">
                                <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Клиент</th>
                                    <th>Заявка</th>
                                    <th>Запустил кампанию</th>
                                    <th>Начало рекламной кампании</th>
                                    <th>Конец рекламной кампании</th>
                                    <th>Уведомление о приблжении конца рекламной кампании</th>
                                    <th>Просмотр</th>
                                </tr>
                                </thead>
                                <tbody>
                                @foreach($activeAds as $key => $item)
                                    <tr>
                                        <td>{{$key+1}}</td>
                                        <td>
                                            <a href="{{route('clients.show', ['client'=>$item->client->id])}}" target="_blank">{{$item->client->name}}</a>
                                        </td>
                                        <td>Заявка №{{$item->id}} - {{$item->service->name}}</td>
                                        @if ($item->user_id)
                                            <td>{{$item->user->getFullName()}}</td>
                                        @else
                                            <td>-</td>
                                        @endif
                                        <td>
                                            <span class="badge bg-success fs-6">
                                                {{\Carbon\Carbon::parse($item->activeAd->first()->start_date)->format('d.m.Y')}}
                                            </span>
                                        </td>
                                        <td>
                                            <span class="badge bg-danger fs-6">
                                                {{\Carbon\Carbon::parse($item->activeAd->first()->end_date)->format('d.m.Y')}}
                                                ({{getDiffDate($item->activeAd->first()->end_date)}})
                                            </span>
                                        </td>
                                        <td>
                                            @if($item->isRemind == 0)
                                                <span class="text-primary">Уведомление еще не отправлено</span>
                                            @else
                                                <span class="text-success">Уведомление еще не отправлено</span>
                                            @endif
                                        </td>
                                        <td>
                                            <a href="{{route('claims.show', ['claim' => $item->id])}}" class="btn btn-primary">Открыть заявку</a>
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
