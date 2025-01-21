@extends('layout.layout')
@section('page-heading')
    <div class="row align-items-center">
        <div class="col-12 col-md-6">
            <h3>Клиент №{{$client->id}} - {{$client->name}}</h3>
            @if($listStatusesClient->first()->status == null)
                <span class="badge custom-bg-danger fs-6"><b>Текущий статус клиента</b> - Неизвестно</span>
            @else
            <span class="badge custom-bg-{{$listStatusesClient->first()->status->color}} fs-6"><b>Текущий статус клиента</b> - {{$listStatusesClient->first()->status->name}}</span>
            @endif
        </div>
        <div class="col-12 col-md-6 text-end">
            <a href="{{route('lpr.createLpr', ['client_id' => $client->id])}}"
               class="btn btn-sm icon btn-success me-2 mb-2"><i class="bi bi-people-fill"></i>
                Управление ЛПР</a>
            <a href="{{route('requisites.edit', ['requisite' => $client->requisite->id])}}"
               class="btn btn-sm icon btn-success me-2 mb-2"><i class="bi bi-file-binary-fill"></i>
                Управление реквизитами</a>
            <a href="{{route('clients.edit', ['client' => $client->id])}}"
               class="btn btn-sm icon btn-primary me-2 mb-2"><i class="bi bi-pencil"></i>
                Редактировать</a>
            <a href="{{route('clients.index')}}" class="btn icon btn-sm btn-primary mb-2"><i class="bi bi-arrow-left"></i> Вернуться назад</a>
        </div>
    </div>


@endsection


@section('content')
    <section class="row">

        @if (auth()->user()->can('interaction-client', $client))
            <div class="col-12 col-lg-3">
        @else
            <div class="col-12">
        @endif
            <div class="card">
                <div class="card-body py-4 px-4">
                    <div class="d-flex align-items-center">
                        <div class="avatar avatar-xl">
                            @if(empty($client->logo))
                                <img src="{{asset('images/faces/2.jpg')}}" alt="Логотип отсутствует" srcset="">
                            @else
                                <img src="{{asset('storage').'/'.$client->logo}}" alt="Логотип организации">
                            @endif
                        </div>
                        <div class="ms-3 name">
                            <h5 class="font-bold">{{$client->name}}</h5>
                        </div>
                    </div>
                    <p class="mb-1 mt-4"><b>Адрес: </b>@if($client->address){{$client->address}} @else <span
                            class="text-danger">Не заполнено</span> @endif</p>
                    <p class="mb-1"><b>Телефон: </b><a href="tel:{{$client->phone}}">{{$client->phone}}</a></p>
                    <p class="mb-1"><b>E-Mail: </b>@if($client->email)<a
                            href="mailto:{{$client->email}}">{{$client->email}}</a> @else <span class="text-danger">Не заполнено</span> @endif
                    </p>
                    <p class="mb-1"><b>Сайт: </b>@if($client->website)<a target="_blank"
                                                                         href="{{$client->website}}">{{$client->website}}</a>@else
                            <span class="text-danger">Не заполнено</span> @endif</p>
                    <p class="mb-1"><b>День рождения
                            компании: </b>@if($client->date_of_birth){{$client->getUntilBirthday()}} @else <span
                            class="text-danger">Не заполнено</span> @endif</p>

                    <p class="mb-1"><b>Комментарий: </b>@if($client->comment){{$client->comment}} @else <span
                            class="text-danger">Не заполнено</span> @endif</p>
                </div>
            </div>
            <div class="card">
                <div class="card-header">
                    <h4>ЛПР</h4>
                </div>
                <div class="card-body pb-4">
                    @if($client->lprs->isEmpty())
                        <p>Информации не найдено 😢</p>
                    @else
                        @foreach($client->lprs as $lpr)
                            <div class="recent-message  mb-3">
                                <div class="name">
                                    <h5 class="mb-1">{{$lpr->getFullName()}}</h5>
                                    <h6 class="text-muted mb-3">{{$lpr->post}}</h6>
                                </div>
                                <p class="mb-1"><b>Телефон: </b><a href="tel:{{$lpr->phone}}">{{$lpr->phone}}</a></p>
                                <p class="mb-1"><b>День
                                        рождения: </b>@if($lpr->date_of_birth){{$lpr->getUntilBirthday()}} @else <span
                                        class="text-danger">Не заполнено</span> @endif</p>
                                <p class="mb-1"><b>Дополнительная информация: </b>{{$lpr->getComment($lpr->comment)}}
                                </p>
                            </div>
                            @if(!$loop->last)
                                <hr> @endif
                        @endforeach
                    @endif

                </div>
            </div>
            <div class="card">
                <div class="card-header">
                    <h4>Реквизиты</h4>
                </div>
                <div class="card-body">
                    @if(!$client->requisite)
                        Информации не найдено 😢
                    @else
                        <p class="mb-1"><b>Полное
                                наименование: </b>@if($client->requisite->fullName){{$client->requisite->fullName}} @else
                                <span class="text-danger">Не заполнено</span> @endif</p>
                        <p class="mb-1"><b>Организационно-правовая
                                форма: </b>@if($client->requisite->legalForm){{$client->requisite->legalForm}} @else
                                <span class="text-danger">Не заполнено</span> @endif</p>
                        <p class="mb-1"><b>ИНН: </b>@if($client->requisite->INN){{$client->requisite->INN}} @else <span
                                class="text-danger">Не заполнено</span> @endif</p>
                        <p class="mb-1">
                            <b>ОГРН(ОРГНИП): </b>@if($client->requisite->OGRN){{$client->requisite->OGRN}} @else <span
                                class="text-danger">Не заполнено</span> @endif </p>
                        <p class="mb-1"><b>Юридический
                                адрес: </b>@if($client->requisite->lawAddress){{$client->requisite->lawAddress}} @else
                                <span class="text-danger">Не заполнено</span> @endif </p>

                        <div class="divider divider-left">
                            <div class="divider-text">Банковские реквизиты</div>
                        </div>
                        <p class="mb-1"><b>Расчетный
                                счет: </b>@if($client->requisite->checkingAccount){{$client->requisite->checkingAccount}} @else
                                <span class="text-danger">Не заполнено</span> @endif </p>
                        <p class="mb-1"><b>Корреспондентский
                                счет: </b>@if($client->requisite->correspondentAccount){{$client->requisite->correspondentAccount}} @else
                                <span class="text-danger">Не заполнено</span> @endif </p>

                        <p class="mb-1"><b>БИК: </b>@if($client->requisite->BIC){{$client->requisite->BIC}} @else <span
                                class="text-danger">Не заполнено</span> @endif </p>
                        <p class="mb-1"><b>Наименование
                                банка: </b>@if($client->requisite->nameBank){{$client->requisite->nameBank}} @else <span
                                class="text-danger">Не заполнено</span> @endif </p>
                        <p class="mb-1"><b>КПП: </b>@if($client->requisite->KPP){{$client->requisite->KPP}} @else <span
                                class="text-danger">Не заполнено</span> @endif </p>
                        <p class="mb-1"><b>КБК: </b>@if($client->requisite->KBK){{$client->requisite->KBK}} @else <span
                                class="text-danger">Не заполнено</span> @endif </p>

                        <div class="divider divider-left">
                            <div class="divider-text">Бухглатер</div>
                        </div>

                        <p class="mb-1">
                            <b>Бухглатер: </b>@if($client->requisite->buhName){{$client->requisite->buhName}} @else
                                <span class="text-danger">Не заполнено</span> @endif </p>
                        <p class="mb-1"><b>Телефон: </b><a
                                href="tel:{{$client->requisite->phone}}">{{$client->requisite->phone}}</a></p>
                    @endif
                </div>
            </div>
        </div>
        @if (auth()->user()->can('interaction-client', $client))
            <div class="col-12 col-lg-9">
                <div class="row">
                    <div class="col-12">
                        <div class="card">
                            <div class="card-body">

                                <div class="flex-scroll">
                                    <ul class="nav nav-tabs" id="myTab" role="tablist">
                                        @if (auth()->user()->can('interaction-client', $client))
                                            <li class="nav-item" role="presentation">
                                                <a class="nav-link @if($errors->has('deadlineClaim') || $errors->has('amount')) @else active @endif" id="request-tab" data-bs-toggle="tab" href="#request"
                                                   role="tab" aria-controls="request" aria-selected="false" tabindex="-1">Добавление
                                                    статуса</a>
                                            </li>
                                        @endif
                                        @if (auth()->user()->can('interaction-client', $client))
                                        <li class="nav-item" role="presentation">
                                            <a class="nav-link" id="historyClient-tab" data-bs-toggle="tab"
                                               href="#historyClient"
                                               role="tab" aria-controls="historyClient" aria-selected="false" tabindex="-1">История
                                                взаимодействия с клиентом</a>
                                        </li>
                                        @endif
                                        @if (auth()->user()->can('interaction-client', $client))
                                        <li class="nav-item" role="presentation">
                                            <a class="nav-link @if($errors->has('deadlineClaim') || $errors->has('amount')) active @endif" id="create-request-tab" data-bs-toggle="tab"
                                               href="#create-request" role="tab" aria-controls="create-request"
                                               aria-selected="false" tabindex="-1">Создание заявки</a>
                                        </li>
                                        @endif
                                        @if (auth()->user()->can('interaction-client', $client))
                                        <li class="nav-item" role="presentation">

                                            <a class="nav-link" id="history-tab" data-bs-toggle="tab" href="#history"
                                               role="tab" aria-controls="history" aria-selected="false" tabindex="-1">История
                                                заявок</a>
                                        </li>
                                        @endif
                                    </ul>
                                </div>

                                <div class="tab-content mt-4">
                                    <div class="tab-pane fade show @if($errors->has('deadlineClaim') || $errors->has('amount')) @else active @endif" id="request" role="tabpanel"
                                         aria-labelledby="request-tab">
                                        <h5 class="text-primary">Изменение статуса клиента</h5>

                                        <form action="{{route('history-client.store')}}" method="POST" class="mt-3">
                                            @csrf
                                            <div class="form-body">
                                                <div class="row">
                                                    <div class="col-md-12">
                                                        <div
                                                            class="form-group @if($errors->has('status_id')) is-invalid @endif">
                                                            <label>Выберите новый статус клиента: </label>
                                                            <select class="js-example-basic-single is-invalid"
                                                                    name="status_id" id="status_id">
                                                                @foreach($statusClient as $status)
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
                                                    <input type="hidden" name="client_id" value="{{$client->id}}">
                                                    <div class="col-md-12 mt-3">
                                                        <div class="form-group">
                                                            <label>Комменатрий: </label>
                                                            <textarea
                                                                class="form-control @if($errors->has('comment')) is-invalid @endif"
                                                                id="comment" name="comment" rows="3"
                                                                placeholder="Введите дополнительные комментарии...">{{old('comment')}}</textarea>
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
                                                </div>

                                                <div class="col-12 mt-4">
                                                    <div class="form-check">
                                                        <div class="custom-control custom-checkbox">
                                                            <input type="checkbox"
                                                                   class="form-check-input form-check-primary form-check-glow"
                                                                   name="goalC" id="goal">
                                                            <input type="hidden" name="goal" value="0">
                                                            <label class="form-check-label" for="goal">Создать
                                                                напоминание</label>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="goal-section">
                                                    <div class="col-12 mt-3">
                                                        <div class="form-group">
                                                            <label>Выберите дату выполнения: </label>
                                                            <input type="hidden" name="deadline" id="deadline">
                                                            <input type="text" id="deadline-datepicker"
                                                                   class="form-control datepicker @if($errors->has('deadline')) is-invalid @endif"
                                                                   name="deadline-datepicker"
                                                                   placeholder="Выберите дату выполнения задачи..." required
                                                                   value="{{old('deadline')}}">
                                                            @if($errors->has('deadline'))
                                                                <div class="invalid-feedback">
                                                                    <i class="bx bx-radio-circle"></i>
                                                                    @foreach($errors->get('deadline') as $message)
                                                                        {{$message}}<br>
                                                                    @endforeach
                                                                </div>
                                                            @endif
                                                        </div>
                                                    </div>
                                                    <div class="col-md-12 mt-3">
                                                        <div class="form-group">
                                                            <label>Введите описание задачи: </label>
                                                            <textarea
                                                                class="form-control @if($errors->has('text')) is-invalid @endif"
                                                                id="text" name="text" rows="3"
                                                                placeholder="Введите описание задачи...">{{old('text')}}</textarea>
                                                            @if($errors->has('text'))
                                                                <div class="invalid-feedback">
                                                                    <i class="bx bx-radio-circle"></i>
                                                                    @foreach($errors->get('text') as $message)
                                                                        {{$message}}<br>
                                                                    @endforeach
                                                                </div>
                                                            @endif
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="col-12 mt-4">
                                                    <button type="submit" class="btn btn-success">Сохранить</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>

                                    <div class="tab-pane fade" id="historyClient" role="tabpanel"
                                         aria-labelledby="historyClient-tab">
                                        <ol class="activity-feed">
                                            @foreach($listStatusesClient as $currentStatus)
                                                @if ($currentStatus->status == null)
                                                    <li class="feed-item feed-item-primary">
                                                @else
                                                    <li class="feed-item feed-item-{{$currentStatus->status->color}}">
                                                        @endif

                                                    <time class="date" datetime="9-25">{{$currentStatus->getDate()}}</time>
                                                        @if ($currentStatus->status == null)
                                                            <p class="fs-6"><b>Статус: </b> Неизвестно</p>
                                                        @else
                                                            <p class="fs-6"><b>Статус: </b> {{$currentStatus->status->name}}</p>
                                                        @endif
                                                    <span
                                                        class="text"><b>Комментарий: </b> {{$currentStatus->comment}}</span>
                                                    <p class="text mt-3">
                                                        <b>Ответственный: </b>{{$currentStatus->user->getFullName()}}</p>
                                                </li>
                                            @endforeach

                                        </ol>
                                    </div>

                                    <div class="tab-pane fade show @if($errors->has('deadlineClaim') || $errors->has('amount')) active @endif" id="create-request" role="tabpanel"
                                         aria-labelledby="create-request-tab">
                                        <h5 class="text-primary">Создание заявки</h5>
                                        <form action="{{route('claims.store')}}" method="POST"
                                              enctype="multipart/form-data">
                                            @csrf

                                            <div class="row mt-3">
                                                <div class="col">
                                                    <input class="form-check-input" name="isInvoiceC" id="isInvoiceC"
                                                           type="checkbox" value=""> Нужен ли счет?
                                                    <input type="hidden" name="isInvoice" value="0">

                                                    <input class="form-check-input ms-3" name="notIncludeC" id="notIncludeC" type="checkbox" value=""> Не включать в план продаж
                                                    <input type="hidden" name="notInclude" value="0">

                                                    <input class="form-check-input ms-3" name="anotherUserC" id="anotherUserC" type="checkbox" value=""> Внештатный сотрудник
                                                    <input type="hidden" name="anotherUser" id="anotherUser" value="0">

                                                    <input class="form-check-input ms-3" name="anotherCreatedAt" id="anotherCreatedAt" type="checkbox" value=""> Выбрать дату создания
                                                    <input type="hidden" name="anotherCreatedAt" id="anotherCreatedAt" value="0">
                                                </div>
                                            </div>


                                            <div class="row mt-3 d-none users-form">
                                                <div class="col-lg-12">
                                                    <div class="form-group @if($errors->has('group_id')) is-invalid @endif">
                                                        <label>Выберите сотрудника: </label>
                                                        <select class="js-example-basic-single is-invalid" name="creator"
                                                                id="creator">
                                                            <option value="">Не выбрано</option>
                                                            @if(count($users) != 0)
                                                                @foreach($users as $group)
                                                                    @foreach($group->roles as $role)
                                                                        @foreach($role->users as $user)
                                                                            <option value="{{$user->id}}">{{$user->getFullName()}}</option>
                                                                        @endforeach
                                                                    @endforeach
                                                                @endforeach
                                                            @endif
                                                        </select>
                                                        @if($errors->has('group_id'))
                                                            <div class="invalid-feedback">
                                                                <i class="bx bx-radio-circle"></i>
                                                                @foreach($errors->get('group_id') as $message)
                                                                    {{$message}}<br>
                                                                @endforeach
                                                            </div>
                                                        @endif
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="row mt-3">
                                                <div class="col-lg-6 col-md-12">
                                                    <div class="form-group @if($errors->has('group_id')) is-invalid @endif">
                                                        <label>Выберите отдел: </label>
                                                        <select class="js-example-basic-single is-invalid" name="group_id"
                                                                id="group_idS">
                                                            <option value="">Не выбрано</option>
                                                            @foreach($groups as $group)
                                                                <option value="{{$group->id}}">{{$group->name}}</option>
                                                            @endforeach
                                                        </select>
                                                        @if($errors->has('group_id'))
                                                            <div class="invalid-feedback">
                                                                <i class="bx bx-radio-circle"></i>
                                                                @foreach($errors->get('group_id') as $message)
                                                                    {{$message}}<br>
                                                                @endforeach
                                                            </div>
                                                        @endif
                                                    </div>
                                                </div>
                                                <input type="hidden" name="client_id" value="{{$client->id}}">
                                                <div class="col-lg-6 col-md-12">
                                                    <div class="form-group @if($errors->has('service_id')) is-invalid @endif">
                                                        <label>Выберите услугу: </label>
                                                        <select disabled="disabled"
                                                                class="js-example-basic-single is-invalid service-group"
                                                                name="service_id" id=service_id">
                                                            <option value="0">Выберите услугу</option>
                                                        </select>
                                                        @if($errors->has('service_id'))
                                                            <div class="invalid-feedback">
                                                                <i class="bx bx-radio-circle"></i>
                                                                @foreach($errors->get('service_id') as $message)
                                                                    {{$message}}<br>
                                                                @endforeach
                                                            </div>
                                                        @endif
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="row mt-3 package-block d-none">
                                                <div class="col-12">
                                                    <div class="form-group @if($errors->has('package_id')) is-invalid @endif">
                                                        <label>Выберите пакет услуг: </label>
                                                        <select disabled="disabled"
                                                                class="js-example-basic-single is-invalid service-package"
                                                                name="package_id" id=package_id">
                                                            <option value="0">Выберите пакет услуг</option>
                                                        </select>
                                                        @if($errors->has('package_id'))
                                                            <div class="invalid-feedback">
                                                                <i class="bx bx-radio-circle"></i>
                                                                @foreach($errors->get('package_id') as $message)
                                                                    {{$message}}<br>
                                                                @endforeach
                                                            </div>
                                                        @endif
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="row mt-3 created-at-block d-none">
                                                <div class="col-12">
                                                    <div class="form-group">
                                                        <label>Выберите дату создания: </label>
                                                        <input type="hidden" name="created_at" id="created_at" value="{{\Illuminate\Support\Carbon::now()}}">
                                                        <input type="text" id="created_at-datepicker"
                                                               class="form-control created_at @if($errors->has('created_at')) is-invalid @endif"
                                                               name="created_at-datepicker"
                                                               placeholder="Выберите дату создания задачи..." required
                                                               value="{{old('created_at')}}">
                                                        @if($errors->has('created_at'))
                                                            <div class="invalid-feedback">
                                                                <i class="bx bx-radio-circle"></i>
                                                                @foreach($errors->get('created_at') as $message)
                                                                    {{$message}}<br>
                                                                @endforeach
                                                            </div>
                                                        @endif
                                                    </div>
                                                </div>
                                            </div>


                                            <div class="row mt-3">
                                                <div class="col-12">
                                                    <div class="form-group">
                                                        <label>Выберите дату выполнения: </label>
                                                        <input type="hidden" name="deadlineClaim" id="deadlineClaim">
                                                        <input type="text" id="deadlineClaim-datepicker"
                                                               class="form-control deadlineClaim @if($errors->has('deadlineClaim')) is-invalid @endif"
                                                               name="deadlineClaim-datepicker"
                                                               placeholder="Выберите дату выполнения задачи..." required
                                                               value="{{old('deadlineClaim')}}">
                                                        @if($errors->has('deadlineClaim'))
                                                            <div class="invalid-feedback">
                                                                <i class="bx bx-radio-circle"></i>
                                                                @foreach($errors->get('deadlineClaim') as $message)
                                                                    {{$message}}<br>
                                                                @endforeach
                                                            </div>
                                                        @endif
                                                    </div>
                                                </div>
                                            </div>



                                            <div class="row mt-3">
                                                <div class="col-12 ">
                                                    <div class="form-group">
                                                        <label>Стоимость: </label>
                                                        <input type="text" id="amount"
                                                               class="form-control @if($errors->has('amount')) is-invalid @endif"
                                                               name="amount"
                                                               required
                                                               placeholder="Введите стоимость..."
                                                               value="{{old('amount')}}">
                                                        @if($errors->has('amount'))
                                                            <div class="invalid-feedback">
                                                                <i class="bx bx-radio-circle"></i>
                                                                @foreach($errors->get('amount') as $message)
                                                                    {{$message}}<br>
                                                                @endforeach
                                                            </div>
                                                        @endif
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-md-12 mt-3">
                                                <div class="form-group">
                                                    <label>Комменатрий к заявке: </label>
                                                    <textarea
                                                        class="form-control @if($errors->has('comment')) is-invalid @endif"
                                                        id="comment" name="comment" rows="3"
                                                        placeholder="Введите дополнительный комментарий...">{{old('comment')}}</textarea>
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



                                            <div class="other-columns">
                                                <div class="row mt-3 period-block d-none">
                                                    <div class="col-12">
                                                        <div class="form-group">
                                                            <label>Выберите период размещения: </label>
                                                            <input type="hidden" name="period-range" id="period-range">
                                                            <input type="text" id="datepicker-range"
                                                                   class="form-control datepicker-range @if($errors->has('deadline')) is-invalid @endif"
                                                                   name="period"
                                                                   placeholder="Выберите период размещения..." required
                                                                   value="{{old('period')}}">
                                                            @if($errors->has('period'))
                                                                <div class="invalid-feedback">
                                                                    <i class="bx bx-radio-circle"></i>
                                                                    @foreach($errors->get('period') as $message)
                                                                        {{$message}}<br>
                                                                    @endforeach
                                                                </div>
                                                            @endif
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="row mt-3 brif-block d-none">
                                                    <div class="col-12">
                                                        <div class="form-group">
                                                            <label>Прикрепите бриф: </label>
                                                            <input type="file" id="brif"
                                                                   class="form-control @if($errors->has('brif')) is-invalid @endif"
                                                                   name="brif"
                                                                   value="{{old('brif')}}">
                                                            @if($errors->has('brif'))
                                                                <div class="invalid-feedback">
                                                                    <i class="bx bx-radio-circle"></i>
                                                                    @foreach($errors->get('brif') as $message)
                                                                        {{$message}}<br>
                                                                    @endforeach
                                                                </div>
                                                            @endif
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="row mt-3 output-block d-none">
                                                    <div class="col-12 ">
                                                        <div class="form-group">
                                                            <label>Количество выходов: </label>
                                                            <input type="text" id="output"
                                                                   class="form-control @if($errors->has('output')) is-invalid @endif"
                                                                   name="output"
                                                                   placeholder="Введите количество выходов..."
                                                                   value="{{old('output')}}">
                                                            @if($errors->has('output'))
                                                                <div class="invalid-feedback">
                                                                    <i class="bx bx-radio-circle"></i>
                                                                    @foreach($errors->get('output') as $message)
                                                                        {{$message}}<br>
                                                                    @endforeach
                                                                </div>
                                                            @endif
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>

                                            <div class="row mt-3 material-block d-none">
                                                <div class="col-12 ">
                                                    <div class="form-group">
                                                        <label>Загрузите материалы: </label>
                                                        <input type="file" id="filepond" name="filepond[]"
                                                               multiple>
                                                    </div>
                                                </div>
                                            </div>


                                            <div class="row mt-4">
                                                <div class="col-12">
                                                    <button type="submit" class="btn btn-success create-claim">Создать заявку</button>
                                                </div>
                                            </div>

                                        </form>
                                    </div>

                                    <div class="tab-pane fade show" id="history" role="tabpanel"
                                         aria-labelledby="history-tab">

                                        <div class="list-group">


                                            @foreach($claims as $claim)
                                                <a href="{{route('claims.show', ['claim' => $claim->id])}}" class="list-group-item list-group-item-action p-4" style="margin-bottom: 0 !important">
                                                    <div class="d-flex w-100 justify-content-between">
                                                        <h5 class="mb-1">Заявка №{{$claim->id}} - {{$claim->service->name}}</h5>

                                                        <small>{{$claim->getCreateDate()}}</small>

                                                    </div>

                                                    <p class="mb-1">
                                                        <b>Создал заявку - </b> {{$claim->creatorUser->getFullName()}}
                                                    </p>
                                                    <p class="mb-1">
                                                        <b>Текущий статус - </b> {{$claim->histories->first()->status->name}}
                                                    </p>
                                                    <p >
                                                        <b>Стоимость - </b> {{money($claim->amount)}}
                                                    </p>


                                                </a>
                                                <a href="{{route('claim.repeat', ['claim' => $claim->id])}}" class="btn icon btn-success mb-4"><i class="bi bi-repeat me-2"></i> Повторить заявку</a>
                                            @endforeach


                                        </div>

                                    </div>

                                </div>

                            </div>
                        </div>

                    </div>
                </div>

            </div>
        @endif
    </section>
    <script src="{{asset('js/filepond.js')}}"></script>
@endsection



