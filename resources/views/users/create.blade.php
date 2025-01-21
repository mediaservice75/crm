@extends('layout.layout')
@section('page-heading')
    <div class="row align-items-center">
        <div class="col-12 col-md-6">
            <h3>Управление пользователями</h3>
        </div>
        <div class="col-12 col-md-6 text-end">
            <a href="{{route('users.index')}}" class="btn btn-primary">Назад</a>
        </div>
    </div>
@endsection


@section('content')
    <div class="row">
        <div class="col-md-12">
            <div class="card">
                <div class="card-content">
                    <div class="card-body">
                        <h4 class="card-title mb-4 ">Добавление пользователя <sup class="text-danger">*</sup></h4>
                        <form action="{{route('users.store')}}" method="POST" enctype="multipart/form-data">
                            @csrf
                            <div class="form-body">
                                <div class="row mt-1">
                                    <div class="col-lg-6 col-md-12">
                                        <input class="form-check-input me-1" name="userInvoiceC" type="checkbox" value=""> Может ли пользователь выставлять счет?
                                        <input type="hidden" name="userInvoice" value="0">
                                    </div>
                                    <div class="col-lg-6 col-md-12">
                                        <input class="form-check-input me-1" name="userLeaderC" type="checkbox" value=""> Пользователь является руководителем отдела?
                                        <input type="hidden" name="userLeader" value="0">
                                    </div>
                                </div>
                                <div class="row mt-4">
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <label>Фотография пользователя: </label>
                                            <input type="file" id="photo" class="form-control @if($errors->has('photo')) is-invalid @endif"
                                                   name="photo"
                                                   accept="image/*"
                                                   value="{{old('photo')}}">
                                            @if($errors->has('photo'))
                                                <div class="invalid-feedback">
                                                    <i class="bx bx-radio-circle"></i>
                                                    @foreach($errors->get('photo') as $message)
                                                        {{$message}}<br>
                                                    @endforeach
                                                </div>
                                            @endif
                                        </div>
                                    </div>
                                </div>
                                <div class="row mt-3">
                                    <div class="col-md-4 col-sm-12">
                                        <div class="form-group">
                                            <label>Фамилия: </label>
                                            <input type="text" id="surname"
                                                   class="form-control @if($errors->has('surname')) is-invalid @endif"
                                                   name="surname"
                                                   placeholder="Введите фамилию..." required
                                                   value="{{old('surname')}}">
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
                                    <div class="col-md-4 col-sm-12">
                                        <div class="form-group">
                                            <label>Имя: </label>
                                            <input type="text" id="name"
                                                   class="form-control @if($errors->has('name')) is-invalid @endif"
                                                   name="name"
                                                   placeholder="Введите имя..." required
                                                   value="{{old('name')}}">
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
                                    <div class="col-md-4 col-sm-12">
                                        <div class="form-group">
                                            <label>Отчество: </label>
                                            <input type="text" id="patron"
                                                   class="form-control @if($errors->has('patron')) is-invalid @endif"
                                                   name="patron"
                                                   placeholder="Введите отчество..." required
                                                   value="{{old('patron')}}">
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

                                <div class="row mt-3">
                                    <div class="col-md-6 col-sm-12">
                                        <div class="form-group">
                                            <label>E-Mail: <span class="text-info text-opacity-75">(Данная почта будет использоваться для входа в CRM-систему)</span></label>
                                            <input type="email" id="email"
                                                   class="form-control @if($errors->has('email')) is-invalid @endif"
                                                   name="email"
                                                   placeholder="Введите e-mail..." required
                                                   value="{{old('email')}}">
                                            @if($errors->has('email'))
                                                <div class="invalid-feedback">
                                                    <i class="bx bx-radio-circle"></i>
                                                    @foreach($errors->get('email') as $message)
                                                        {{$message}}<br>
                                                    @endforeach
                                                </div>
                                            @endif
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-sm-12">
                                        <div class="form-group">
                                            <label>Телефон: </label>
                                            <input type="tel" id="phone"
                                                   class="form-control @if($errors->has('phone')) is-invalid @endif"
                                                   name="phone"
                                                   placeholder="Введите имя..." required
                                                   value="{{old('phone')}}">
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
                                </div>


                                <div class="row mt-3">
                                    <div class="col-md-12">
                                        <div class="form-group @if($errors->has('role_id')) is-invalid @endif">
                                            <label>Выберите должность: </label>
                                            <select class="js-example-basic-single is-invalid" name="role_id" id="role_id">
                                                @foreach($roles as $role)
                                                    <option value="{{$role->id}}">{{$role->name}}</option>
                                                @endforeach
                                            </select>
                                            @if($errors->has('role_id'))
                                                <div class="invalid-feedback">
                                                    <i class="bx bx-radio-circle"></i>
                                                    @foreach($errors->get('role_id') as $message)
                                                        {{$message}}<br>
                                                    @endforeach
                                                </div>
                                            @endif
                                        </div>
                                    </div>
                                </div>

                                <div class="col-12 mt-3">
                                    <button type="submit" class="btn btn-success">Сохранить</button>
                                </div>


                                <p class="mt-4">
                                    <sup class="text-danger">*</sup> <span class="text-opacity-50">Пароль для пользователя генерируется автоматически. Данные для авторизации в системе будут высланы на электронную почту указанную в <b>поле E-mail</b></span>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

@endsection
