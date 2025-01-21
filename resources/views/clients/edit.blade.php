@extends('layout.layout')
@section('page-heading')
    Управление клиентом &laquo;{{$client->name}}&raquo; <a href="{{route('clients.show', ['client' => $client->id])}}" class="btn btn-sm btn-primary">Назад</a>
@endsection


@section('content')
    <div class="row">
        <div class="col-md-12">
            <div class="card">
                <div class="card-content">
                    <div class="card-body">

                        @if(session()->has('infoClient'))
                            <div class="alert alert-danger alert-dismissible show fade mt-3">
                                Добавление невозможно, такой клиент уже существует. <br>
                                <b>Найден клиент - </b><a href="#">{{session('infoClient')['name']}}</a>
                                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                            </div>
                        @endif

                        <h4 class="card-title mb-4 ">Редактирование информации о клиенте</h4>
                        <form action="{{route('clients.update', ['client'=>$client->id])}}" method="POST" enctype="multipart/form-data">
                            @csrf
                            @method('PUT')
                            <div class="form-body">
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <label>ИНН организации: </label>
                                            <input type="text" id="inn" class="form-control @if($errors->has('inn')) is-invalid @endif" name="inn"
                                                   placeholder="Введите ИНН..."
                                                   value="{{$client->requisite->INN}}">
                                            @if($errors->has('inn'))
                                                <div class="invalid-feedback">
                                                    <i class="bx bx-radio-circle"></i>
                                                    @foreach($errors->get('inn') as $message)
                                                        {{$message}}<br>
                                                    @endforeach
                                                </div>
                                            @endif
                                        </div>
                                        <div class="form-group">


                                            <label>Логотип организации: </label>
                                            @if(!empty($client->logo))
                                                <div class="avatar avatar-xl d-block text-start mb-3">
                                                    <img src="{{asset('storage').'/'.$client->logo}}" alt="Логотип организации">
                                                </div>
                                            @else
                                                <p class="text-danger">Фото не загружено 🥺</p>
                                            @endif
                                            <input type="file" id="logo" class="form-control @if($errors->has('logo')) is-invalid @endif" name="logo">
                                            @if($errors->has('logo'))
                                                <div class="invalid-feedback">
                                                    <i class="bx bx-radio-circle"></i>
                                                    @foreach($errors->get('logo') as $message)
                                                        {{$message}}<br>
                                                    @endforeach
                                                </div>
                                            @endif
                                        </div>
                                        <div class="form-group">
                                            <label>Наименование организации: </label>
                                            <input type="text" id="name" class="form-control @if($errors->has('name')) is-invalid @endif" name="name"
                                                   placeholder="Введите наименование..." required
                                                   value="{{$client->name}}">
                                            @if($errors->has('name'))
                                                <div class="invalid-feedback">
                                                    <i class="bx bx-radio-circle"></i>
                                                    @foreach($errors->get('name') as $message)
                                                        {{$message}}<br>
                                                    @endforeach
                                                </div>
                                            @endif
                                        </div>
                                        <div class="form-group">
                                            <label>Телефон: </label>
                                            <input type="tel" id="phone" class="form-control @if($errors->has('phone')) is-invalid @endif" name="phone"
                                                   placeholder="Введите телефон..." required
                                                   value="{{$client->phone}}">
                                            @if($errors->has('phone'))
                                                <div class="invalid-feedback">
                                                    <i class="bx bx-radio-circle"></i>
                                                    @foreach($errors->get('phone') as $message)
                                                        {{$message}}<br>
                                                    @endforeach
                                                </div>
                                            @endif
                                        </div>
                                        <div class="form-group">
                                            <label>Адрес организации: </label>
                                            <input type="text" id="address" class="form-control @if($errors->has('address')) is-invalid @endif" name="address"
                                                   placeholder="Введите адрес..."
                                                   value="{{$client->address}}">
                                            @if($errors->has('address'))
                                                <div class="invalid-feedback">
                                                    <i class="bx bx-radio-circle"></i>
                                                    @foreach($errors->get('address') as $message)
                                                        {{$message}}<br>
                                                    @endforeach
                                                </div>
                                            @endif
                                        </div>
                                        <div class="form-group">
                                            <label>E-mail: </label>
                                            <input type="email" id="email" class="form-control @if($errors->has('email')) is-invalid @endif" name="email"
                                                   placeholder="Введите e-mail..."
                                                   value="{{$client->email}}">
                                            @if($errors->has('email'))
                                                <div class="invalid-feedback">
                                                    <i class="bx bx-radio-circle"></i>
                                                    @foreach($errors->get('email') as $message)
                                                        {{$message}}<br>
                                                    @endforeach
                                                </div>
                                            @endif
                                        </div>
                                        <div class="form-group">
                                            <label>Официальный сайт: </label>
                                            <small class="text-info text-opacity-75">(Например.
                                                <i>https://namesite.com</i>)</small>
                                            <input type="text" id="website" class="form-control @if($errors->has('website')) is-invalid @endif" name="website"
                                                   placeholder="Введите адрес сайта..."
                                                   value="{{$client->website}}">
                                            @if($errors->has('website'))
                                                <div class="invalid-feedback">
                                                    <i class="bx bx-radio-circle"></i>
                                                    @foreach($errors->get('website') as $message)
                                                        {{$message}}<br>
                                                    @endforeach
                                                </div>
                                            @endif
                                        </div>
                                        <div class="form-group">
                                            <label>День рождения компании: </label>
                                            <input type="text" id="date_of_birth" class="form-control @if($errors->has('date_of_birth')) is-invalid @endif"
                                                   name="date_of_birth"
                                                   placeholder="Выберите дату рождения компании"
                                                   value="{{$client->getDateBirth($client->date_of_birth)}}">
                                            @if($errors->has('date_of_birth'))
                                                <div class="invalid-feedback">
                                                    <i class="bx bx-radio-circle"></i>
                                                    @foreach($errors->get('date_of_birth') as $message)
                                                        {{$message}}<br>
                                                    @endforeach
                                                </div>
                                            @endif
                                        </div>

                                        <div class="row mt-3 mb-3">
                                            <div class="col-12">
                                                <div class="form-group">
                                                    <label>Дополнительный комментарий: </label>
                                                    <textarea class="form-control " id="comment" name="comment" rows="3" placeholder="Например, дополнительные реквизиты...">{{$client->comment}}</textarea>
                                                </div>
                                            </div>
                                        </div>

                                        <button type="submit" class="btn btn-success">Сохранить</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
