@extends('layout.layout')
@section('page-heading')
    Управление ЛПР <a href="{{route('lpr.createLpr', ['client_id' => $lpr->client_id])}}" class="btn btn-sm btn-primary">Назад</a>
@endsection


@section('content')
    <div class="row">
        <div class="col-md-12">
            <div class="card">
                <div class="card-content">
                    <div class="card-body">
                        <h4 class="card-title mb-4 ">Редактирование ЛПР</h4>
                        <form action="{{route('lpr.update', ['lpr' => $lpr->id])}}" method="POST">
                            @csrf
                            @method('PUT')
                            <div class="form-body">
                                <div class="row">
                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <label>Фамилия: </label>
                                            <input type="text" id="surname"
                                                   class="form-control @if($errors->has('surname')) is-invalid @endif"
                                                   name="surname"
                                                   placeholder="Введите фамилию..." required
                                                   value="{{$lpr->surname}}">
                                            @if($errors->has('surname'))
                                                <div class="invalid-feedback">
                                                    <i class="bx bx-radio-circle"></i>
                                                    @foreach($errors->get('surname') as $message)
                                                        {{$message}}<br>
                                                    @endforeach
                                                </div>
                                            @endif
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <label>Имя: </label>
                                            <input type="text" id="name"
                                                   class="form-control @if($errors->has('name')) is-invalid @endif"
                                                   name="name"
                                                   placeholder="Введите имя..." required
                                                   value="{{$lpr->name}}">
                                            @if($errors->has('name'))
                                                <div class="invalid-feedback">
                                                    <i class="bx bx-radio-circle"></i>
                                                    @foreach($errors->get('name') as $message)
                                                        {{$message}}<br>
                                                    @endforeach
                                                </div>
                                            @endif
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <label>Отчество: </label>
                                            <input type="text" id="patron"
                                                   class="form-control @if($errors->has('patron')) is-invalid @endif"
                                                   name="patron"
                                                   placeholder="Введите отчество..."
                                                   value="{{$lpr->patron}}">
                                            @if($errors->has('patron'))
                                                <div class="invalid-feedback">
                                                    <i class="bx bx-radio-circle"></i>
                                                    @foreach($errors->get('patron') as $message)
                                                        {{$message}}<br>
                                                    @endforeach
                                                </div>
                                            @endif
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-12 mt-3">
                                    <div class="form-group">
                                        <label>Должность: </label>
                                        <input type="text" id="post"
                                               class="form-control @if($errors->has('post')) is-invalid @endif"
                                               name="post"
                                               placeholder="Введите должность..."
                                               value="{{$lpr->post}}">
                                        @if($errors->has('post'))
                                            <div class="invalid-feedback">
                                                <i class="bx bx-radio-circle"></i>
                                                @foreach($errors->get('post') as $message)
                                                    {{$message}}<br>
                                                @endforeach
                                            </div>
                                        @endif
                                    </div>
                                </div>

                                <div class="row mt-3">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label>Телефон: </label>
                                            <input type="tel" id="phone"
                                                   class="form-control @if($errors->has('phone')) is-invalid @endif"
                                                   name="phone"
                                                   placeholder="Введите телефон..."
                                                   value="{{$lpr->phone}}">
                                            @if($errors->has('phone'))
                                                <div class="invalid-feedback">
                                                    <i class="bx bx-radio-circle"></i>
                                                    @foreach($errors->get('phone') as $message)
                                                        {{$message}}<br>
                                                    @endforeach
                                                </div>
                                            @endif
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label>День рождения ЛПР: </label>
                                            <input type="text" id="date_of_birth"
                                                   class="form-control @if($errors->has('date_of_birth')) is-invalid @endif"
                                                   name="date_of_birth"
                                                   placeholder="Введите день рождения ЛПР..."
                                                   value="{{$lpr->getDateBirth($lpr->date_of_birth)}}">
                                            @if($errors->has('date_of_birth'))
                                                <div class="invalid-feedback">
                                                    <i class="bx bx-radio-circle"></i>
                                                    @foreach($errors->get('date_of_birth') as $message)
                                                        {{$message}}<br>
                                                    @endforeach
                                                </div>
                                            @endif
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-12 mt-3">
                                    <div class="form-group">
                                        <label>Дополнительные комменатрии: </label>
                                        <textarea class="form-control @if($errors->has('comment')) is-invalid @endif" id="comment" name="comment" rows="3" placeholder="Введите дополнительные комментарии...">{{$lpr->comment}}</textarea>
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

                                <div class="col-12 mt-3">
                                    <button type="submit" class="btn btn-success">Сохранить</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

@endsection
