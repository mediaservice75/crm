@extends('layout.layout')
@section('page-heading')
    <div class="row align-items-center">
        <div class="col-12 col-md-6">
            <h3>Просмотр заявки</h3>
        </div>
        <div class="col-12 col-md-6 text-end">
            @if (auth()->user()->role->level <= 2 || auth()->user()->role->level == 5 || auth()->user()->id == $claim->creator)
                <a href="{{route('claims.edit', ['claim' => $claim->id])}}" class="btn btn-sm icon btn-warning"><i class="bi bi-pencil-fill"></i></a>
                <form action="{{route('claims.destroy', ['claim' => $claim->id])}}" method="POST" class="d-inline">
                    @csrf
                    @method('DELETE')
                    <input type="hidden" name="url" value="{{$url ?? old('url') ?? url()->previous()}}">
                    <a href="#" class="btn icon btn-sm btn-danger delete"><i class="bi bi-trash-fill"></i></a>
                </form>
            @endif
                <a href="{{session('previous_url') ?? old('url') ?? url()->previous()}}" class="btn btn-sm btn-primary">Вернуться назад</a>
            </div>
        </div>
    @endsection

    @section('content')
        <div class="row">

            @if (auth()->user()->role->level <= 2 || auth()->user()->role->level == 6 || auth()->user()->role->level == 5 || auth()->user()->id == $claim->creator || auth()->user()->id == $claim->user_id || checkUserAccessToClaim($claim->id, auth()->user()->id))
                <div class="col-lg-9 col-md-12">
            @else
                <div class="col-lg-12 col-md-12">
            @endif

                <div class="card">
                    <div class="card-content">
                        <div class="card-body">
                            <div class="d-flex w-100 justify-content-between mb-2">
                                <h4 class="card-title">
                                    Заявка №{{$claim->id}} - {{$claim->service->name}} <span
                                        class="ms-2 badge bg-{{$claim->histories->first()->status->color}}"> {{$claim->histories->first()->status->name}}</span>

                                    @if($claim->notInclude)
                                        <span class="ms-1 badge bg-danger">
                                            Не включена в план продаж
                                        </span>
                                    @endif
                                </h4>
                                <small>{{$claim->getCreateDate()}}</small>
                            </div>
                            <div class="badges">
                                @if($claim->service->isRequiredMaterial)
                                    <span class="badge bg-success me-2">Материалы</span>
                                @endif
                                @if($claim->service->isPackage)
                                    <span class="badge bg-success me-2">Пакеты услуг</span>
                                @endif
                                @if($claim->service->isPeriod)
                                    <span class="badge bg-success me-2">Период размещения</span>
                                @endif
                                @if($claim->service->isBrif)
                                    <span class="badge bg-success me-2">Бриф</span>
                                @endif
                                @if($claim->service->isOutput)
                                    <span class="badge bg-success me-2">Количество выходов</span>
                                @endif
                                @if($claim->isInvoice)
                                    <span class="badge bg-success me-2">Счет</span>
                                @endif
                            </div>

                            <p class="mt-3 mb-0"><b class="text-primary">Клиент:</b> {{$claim->client->name}}</p>
                            <p class="mt-1 mb-0"><b class="text-primary">Стоимость:</b> {{money($claim->amount)}} р.</p>
                            <p class="mt-1 mb-0"><b class="text-primary">Выполнить до:</b> {{$claim->getDeadline()}}</p>
                            @if ($claim->comment)
                                <p class="mt-1"><b class="text-primary">Комментарий:</b><br> {!! nl2br($claim->comment) !!}</p>
                            @endif
                            @if (auth()->user()->role->level > 2 && auth()->user()->id != $claim->creator && auth()->user()->id != $claim->user_id && !checkUserAccessToClaim($claim->id, auth()->user()->id))
                                @if($claim->service->isBrif)
                                    @if ($claim->brif)
                                        <a href=" {{asset("/storage")."/".$claim->brif}}"
                                           class="btn icon icon-left btn-primary mt-3" download>
                                            <i class="bi bi-file-arrow-down-fill"></i> Скачать бриф</a>
                                    @endif
                                @endif
                            @endif


                            <hr>
                            @if($activeAd)
                                @if (count($activeAd) != 0)

                                    @foreach($activeAd as $activeAdItem)
                                        @if($activeAdItem->end_date < now())
                                            <h4 class="card-title mb-0 mt-2">Рекламная кампания завершена</h4>
                                            <p class="mt-2">
                                                <b class="text-primary">Период рекламной кампании:</b>
                                                {{\Illuminate\Support\Carbon::parse($activeAdItem->start_date)->format('d.m.Y')}}
                                                -
                                                {{\Illuminate\Support\Carbon::parse($activeAdItem->end_date)->format('d.m.Y')}}
                                            </p>
                                        @else
                                            <h4 class="card-title mb-0 mt-2">Рекламная кампания запущена <form action="{{route('claim.deleteAd', ['ad'=>$activeAdItem->id])}}" method="POST" class="ms-2 d-inline-block">
                                                    @csrf
                                                    @method('DELETE')
                                                    <input type="hidden" name="url" value="{{$url ?? old('url') ?? url()->previous()}}">
                                                    <button type="submit" class="btn btn-sm btn-danger icon"><i class="bi bi-trash-fill"></i></button>
                                                </form></h4>
                                            <p class="mt-2">
                                                <b class="text-primary">Период рекламной кампании:</b>
                                                {{\Illuminate\Support\Carbon::parse($activeAdItem->start_date)->format('d.m.Y')}}
                                                -
                                                {{\Illuminate\Support\Carbon::parse($activeAdItem->end_date)->format('d.m.Y')}}
                                            </p>

                                        @endif
                                            <div class="mb-4"></div>
                                    @endforeach

                                @endif
                            @endif

                            @if (auth()->user()->role->level <= 2 || auth()->user()->id == $claim->creator || auth()->user()->id == $claim->user_id || checkUserAccessToClaim($claim->id, auth()->user()->id))

                            <div class="form-check form-switch">
                                <label class="form-check-label" for="active-adds">Поставить рекламу на запуск</label>
                                <input class="form-check-input" name="active-adds" type="checkbox"  @if($errors->has('range_date_hidden')) checked @endif>
                            </div>

                            <div class="form-active-adds mt-3" @if($errors->has('range_date_hidden')) style="display: block" @else style="display: none"  @endif>
                                <h4 class="card-title mb-0 mt-2">Поставить рекламу на запуск</h4>
                                <p class="mb-3 text-warning text-opacity-75"><i>После постановки данной заявки на запуск, за неделю
                                        автоматически сгенерируется задача о приближающемся окончании рекламной кампании
                                    </i></p>

                                <form action="{{route('claim.storeAd', ['claim' => $claim->id])}}" method="POST">
                                    @csrf
                                    <input type="hidden" name="url" value="{{$url ?? old('url') ?? url()->previous()}}">
                                    <div class="row">
                                        <div class="col-lg-12 col-md-12">
                                            <div class="form-group">
                                                <label for="range-ad-datepicker" class="mb-2">Выберите период рекламной кампании:</label>
                                                @if($errors->has('range_date_hidden'))
                                                    <p class="text-danger">
                                                        @foreach($errors->get('range_date_hidden') as $message)
                                                            {{$message}}<br>
                                                        @endforeach
                                                    </p>
                                                @endif
                                                <div id="range-ad-datepicker"></div>
                                            </div>

                                            <input type="hidden" name="range_date_hidden" id="range-ad-hidden">

                                        </div>
                                    </div>

                                    <button type="submit" class="btn btn-success mt-3">Запустить</button>
                                </form>
                            </div>

                            @endif


                            @if (auth()->user()->role->level <= 2 || auth()->user()->id == $claim->creator || auth()->user()->id == $claim->user_id || checkUserAccessToClaim($claim->id, auth()->user()->id))
                            @if ($claim->isClose == 0)
                                <hr>
                                <div class="form-check form-switch">
                                    <label class="form-check-label" for="close-claim">Закрыть заявку</label>
                                    <input class="form-check-input" name="close-claim" type="checkbox">
                                </div>

                                <div class="form-close-claim mt-3" style="display: none">
                                    <h4 class="card-title mb-0">Закрыть заявку</h4>
                                    <p class="mb-3 text-warning text-opacity-75"><i>После закрытия заявки, изменение истории
                                            будет
                                            невозможно</i></p>
                                    <form action="{{route('claim.claimsClosed', ['claim' => $claim->id])}}" method="POST">
                                        @csrf
                                        <input type="hidden" name="url" value="{{$url ?? old('url') ?? url()->previous()}}">

                                        <div class="form-group">
                                            <label>Выберите дату закрытия заявки: </label>
                                            <input type="hidden" name="updated_at" id="updated_at" value="{{\Illuminate\Support\Carbon::now()}}">
                                            <input type="text" id="updated_at-datepicker"
                                                   class="form-control updated_at-datepicker @if($errors->has('updated_at')) is-invalid @endif"
                                                   name="updated_at-datepicker"
                                                   placeholder="Выберите дату создания задачи..." required
                                                   value="{{old('updated_at')}}">
                                            @if($errors->has('updated_at'))
                                                <div class="invalid-feedback">
                                                    <i class="bx bx-radio-circle"></i>
                                                    @foreach($errors->get('updated_at') as $message)
                                                        {{$message}}<br>
                                                    @endforeach
                                                </div>
                                            @endif
                                        </div>

                                        <div class="form-group">
                                            <label>Причина закрытия заявки: </label>
                                            <textarea
                                                class="form-control @if($errors->has('commentClose')) is-invalid @endif"
                                                id="commentClose" name="commentClose" rows="3" required
                                                placeholder="Введите причину закрытия заявки...">{{old('commentClose')}}</textarea>
                                            @if($errors->has('commentClose'))
                                                <div class="invalid-feedback">
                                                    <i class="bx bx-radio-circle"></i>
                                                    @foreach($errors->get('commentClose') as $message)
                                                        {{$message}}<br>
                                                    @endforeach
                                                </div>
                                            @endif
                                        </div>

                                        <button type="submit" class="btn btn-danger">Закрыть заявку</button>

                                    </form>
                                </div>
                            @endif
                            @endif

                            @if (auth()->user()->role->level <= 2 || auth()->user()->id == $claim->creator || auth()->user()->id == $claim->user_id || checkUserAccessToClaim($claim->id, auth()->user()->id))
                                @if ($claim->isClose == 0)
                                <hr>
                                <div class="form-check form-switch">
                                    <label class="form-check-label" for="store-users">Назначить дополнительных сотрудников</label>
                                    <input class="form-check-input" name="store-users" type="checkbox" @if (count($claimUsers) != 0) checked @endif>
                                </div>
                                <div class="form-store-users mt-4" @if (count($claimUsers) == 0) style="display: none" @endif>
                                    <h4 class="card-title mb-0 mt-2">Добавление сотрудников</h4>
                                    <p class="mb-3 text-warning text-opacity-75"><i>Выберите сотрудников которых Вы хотите подключить к выполнению заявки
                                        </i></p>

                                    <form action="{{route('claim.storeUsers', ['claim' => $claim->id])}}" method="POST">
                                        @csrf
                                        <input type="hidden" name="url" value="{{$url ?? old('url') ?? url()->previous()}}">
                                        <div class="form-group">
                                            <label>Выберите ответственных за данную заявку: </label>
                                            <select class="js-example-basic-single is-invalid"
                                                    name="user_id[]" id="user_id" multiple="multiple">
                                                @foreach($withoutUsers as $user)
                                                    <option value="{{$user->id}}">{{$user->getFullName()}} ({{$user->role->name}})</option>
                                                @endforeach
                                            </select>
                                        </div>

                                        <button type="submit" class="btn btn-success mt-2">Сохранить</button>
                                    </form>

                                    @if (count($claimUsers) != 0)
                                        <h5 class="mt-4 mb-3">Назначенные сотрудники:</h5>
                                        @foreach($claimUsers as $claimUser)
                                            <form action="{{route('claim.deleteUser', ['claim' => $claimUser->id])}}" class="mt-2" method="POST">
                                                @csrf
                                                @method('DELETE')
                                                <input type="hidden" name="url" value="{{$url ?? old('url') ?? url()->previous()}}">
                                                <a href="#" class="btn icon btn-danger delete"><i class="bi bi-trash-fill"></i></a>
                                                <p class="d-inline-block ms-2">{{$claimUser->user->getFullName()}} ({{$claimUser->user->role->name}})</p>
                                            </form>
                                        @endforeach

                                    @endif
                                </div>
                                @endif
                            @endif

                        </div>
                    </div>
                </div>
                @if (auth()->user()->role->level <= 2 || auth()->user()->id == $claim->creator || auth()->user()->id == $claim->user_id || checkUserAccessToClaim($claim->id, auth()->user()->id))
                <div class="card">
                    <div class="card-content">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-lg-6 col-md-12">
                                    <h4 class="card-title">История заявки</h4>
                                    @if(!$claim->histories)
                                        <h5 class="text-gray-500">К сожалению, истории не найдено 😢</h5>
                                    @else
                                        <ol class="activity-feed">
                                            @foreach($claim->histories as $history)
                                                <li class="feed-item feed-item-{{$history->status->color}}">
                                                    <time class="date" datetime="9-25">{{$history->getDate()}}</time>
                                                    <p class="fs-6"><b>Статус: </b> {{$history->status->name}}</p>
                                                    <span
                                                        class="text"><b>Комментарий: </b> {{$history->comment}}</span>
                                                    <p class="text mt-3">
                                                        <b>Ответственный: </b>{{$history->user->getFullName()}}</p>
                                                </li>
                                            @endforeach
                                        </ol>
                                    @endif
                                </div>


                                <div class="col-lg-6 col-md-12">
                                    <h4 class="card-title">Добавление истории</h4>
                                    @if ($claim->isClose == 1)
                                        <p class="text-gray-500 mt-3">Заявка закрыта, добавление истории невозможно 😢</p>
                                    @else
                                        <form action="{{route('claim.storeHistory', ['claim' => $claim->id])}}"
                                              method="POST"
                                              class="mt-3">
                                            @csrf
                                            <input type="hidden" name="url" value="{{$url ?? old('url') ?? url()->previous()}}">
                                            <div class="col-md-12">
                                                <div
                                                    class="form-group @if($errors->has('status_id')) is-invalid @endif">
                                                    <label>Выберите новый статус заявки: </label>
                                                    <select class="js-example-basic-single is-invalid"
                                                            name="status_id" id="status_id">
                                                        @foreach($statusesClaim as $status)
                                                            <option
                                                                value="{{$status->id}}">{{$status->name}}</option>
                                                        @endforeach
                                                    </select>
                                                    @if($errors->has('status_id'))
                                                        <div class="invalid-feedback">
                                                            <i class="bx bx-radio-circle"></i>
                                                            @foreach($errors->get('status_id') as $message)
                                                                {{$message}}<br>
                                                            @endforeach
                                                        </div>
                                                    @endif
                                                </div>
                                            </div>
                                            <div class="col-md-12 mt-3">
                                                <div class="form-group">
                                                    <label>Комменатрий: </label>
                                                    <textarea
                                                        class="form-control @if($errors->has('comment')) is-invalid @endif"
                                                        id="comment" name="comment" rows="3"
                                                        placeholder="Введите комментарий...">{{old('comment')}}</textarea>
                                                    @if($errors->has('comment'))
                                                        <div class="invalid-feedback">
                                                            <i class="bx bx-radio-circle"></i>
                                                            @foreach($errors->get('comment') as $message)
                                                                {{$message}}<br>
                                                            @endforeach
                                                        </div>
                                                    @endif
                                                </div>
                                            </div>

                                            <div class="col-12 mt-4">
                                                <button type="submit" class="btn btn-success">Сохранить</button>
                                            </div>
                                        </form>
                                    @endif
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                @endif
            </div>

            <div class="col-lg-3 col-md-12">
                @if (auth()->user()->role->level <= 2 || auth()->user()->role->level == 6 || auth()->user()->role->level == 5 || auth()->user()->id == $claim->creator || auth()->user()->id == $claim->user_id || checkUserAccessToClaim($claim->id, auth()->user()->id))
                <div class="card">
                    <div class="card-content">
                        <div class="card-body">
                            <h4 class="card-title">
                                История оплаты заявки
                            </h4>

                            @if(!$claim->historiesPayment->count())
                                <h6 class="text-gray-500  mt-3">К сожалению, истории не найдено 😢</h6>
                            @else
                                <ol class="activity-feed mt-3">
                                    @foreach($claim->historiesPayment as $history)
                                        <li class="feed-item feed-item-{{$history->status->color}}">
                                            <time class="date" datetime="9-25">{{$history->getDate()}}</time>
                                            <p class="fs-6"><b>Статус: </b> {{$history->status->name}}</p>
                                            <span
                                                class="text"><b>Комментарий: </b> {{$history->comment}}</span>
                                            <p class="text mt-3">
                                                <b>Ответственный: </b>{{$history->user->getFullName()}}</p>
                                        </li>
                                    @endforeach
                                </ol>
                            @endif

                        </div>
                    </div>
                </div>
                @endif

                @if (auth()->user()->role->level <= 2 || auth()->user()->id == $claim->creator || auth()->user()->id == $claim->user_id || checkUserAccessToClaim($claim->id, auth()->user()->id))
                    @if($claim->isInvoice)
                        <div class="col-12">
                            <div class="card">
                                <div class="card-content">
                                    <div class="card-body">
                                        <h4 class="card-title">Счет</h4>
                                        @if ($claim->invoice)

                                            @if(str_replace(' ', '', $claim->invoice) == '')
                                                <p class="text-gray-500 m-0">Счет не был загружен 😢</p>
                                            @else
                                                <a class='btn btn-success icon icon-left download-zip-invoice mt-2' attr-id='{{$claim->id}}'><i class="bi bi-file-arrow-down-fill"></i> Скачать документы</a>
                                            @endif
    {{--                                        <a href=" {{asset("/storage")."/".$claim->invoice}}"--}}
    {{--                                           class="btn icon icon-left btn-primary me-2 mt-2" download>--}}
    {{--                                            <i class="bi bi-file-arrow-down-fill"></i> Скачать счет</a>--}}

                                        @else
                                            <p class="text-gray-500 m-0">Счет не готов 😢</p>
                                        @endif
                                    </div>
                                </div>
                            </div>
                        </div>
                    @endif
                    @if($claim->service->isRequiredMaterial)
                        <div class="col-12">
                            <div class="card">
                                <div class="card-content">
                                    <div class="card-body">
                                        <h4 class="card-title mb-1">Материалы</h4>

                                        @if (count($claim->files) != 0)

                                            @foreach($claim->files as $file)
                                                <a href=" {{asset("/storage")."/".$file->file}}"
                                                   class="btn icon icon-left btn-primary me-1 mt-2" download>
                                                    <i class="bi bi-file-arrow-down-fill"></i> Скачать файл</a>
                                            @endforeach

                                        @else
                                            <p class="text-gray-500 m-0">Дополнительные материалы не найдены 😢</p>
                                        @endif
                                    </div>
                                </div>
                            </div>
                        </div>

                    @endif
                    @if($claim->service->isPackage)
                        <div class="col-12">
                            <div class="card">
                                <div class="card-content">
                                    <div class="card-body">
                                        <h4 class="card-title">Пакет услуг</h4>
                                        @if ($claim->package_id)
                                            <p class="m-0"><b>Выбранный пакет: </b>{{$claim->package->name}}</p>
                                        @else
                                            <p class="text-gray-500 m-0">Пакет услуг не был выбран 😢</p>
                                        @endif
                                    </div>
                                </div>
                            </div>
                        </div>
                    @endif
                    @if($claim->service->isPeriod)
                        <div class="col-12">
                            <div class="card">
                                <div class="card-content">
                                    <div class="card-body">
                                        <h4 class="card-title">Период размещения</h4>
                                        @if ($claim->period)
                                            <p class="m-0"><b>Выбранный период: </b>{{$claim->period}}</p>
                                        @else
                                            <p class="text-gray-500 m-0">Период размещения не был выбран 😢</p>
                                        @endif
                                    </div>
                                </div>
                            </div>
                        </div>
                    @endif
                    @if($claim->service->isBrif)
                        <div class="col-12">
                            <div class="card">
                                <div class="card-content">
                                    <div class="card-body">
                                        <h4 class="card-title">Бриф</h4>
                                        @if ($claim->brif)
                                            <a href=" {{asset("/storage")."/".$claim->brif}}"
                                               class="btn icon icon-left btn-primary me-2" download>
                                                <i class="bi bi-file-arrow-down-fill"></i> Скачать бриф</a>
                                        @else
                                            <p class="text-gray-500 m-0">Бриф не был загружен 😢</p>
                                        @endif
                                    </div>
                                </div>
                            </div>
                        </div>
                    @endif
                    @if($claim->service->isOutput)
                    <div class="col-12">
                        <div class="card">
                            <div class="card-content">
                                <div class="card-body">
                                    <h4 class="card-title">Количество выходов</h4>
                                    @if ($claim->output)
                                        <p class="m-0">{{$claim->output}}</p>
                                    @else
                                        <p class="text-gray-500 m-0">Количество выходов не было указано 😢</p>
                                    @endif
                                </div>
                            </div>
                        </div>
                    </div>
                @endif
                @endif

            </div>
        </div>
    @endsection
