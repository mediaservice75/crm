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
                        <h4 class="card-title mb-4 ">Редактирование пользователя <sup class="text-danger">*</sup></h4>
                        <form action="{{route('users.update', ['user'=>$user->id])}}" method="POST" enctype="multipart/form-data">
                            @method('PUT')
                            @csrf
                            <div class="form-body">
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <label>Фотография пользователя: </label>
                                            @if(!empty($user->photo))
                                                <div class="avatar avatar-xl d-block text-start mb-3">
                                                    <img src="{{asset('storage').'/'.$user->photo}}" alt="Фото пользователя">
                                                </div>
                                            @else
                                                <p class="text-danger">Фото не загружено 🥺</p>
                                            @endif
                                            <input type="file" id="photo" class="form-control @if($errors->has('photo')) is-invalid @endif"
                                                   name="photo"
                                                   accept="image/*">
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
                                                   @if(old('surname')) value="{{old('surname')}}" @else value="{{$user->surname}}" @endif>
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
                                                   @if(old('name')) value="{{old('name')}}" @else value="{{$user->name}}" @endif>
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
                                                   @if(old('patron')) value="{{old('patron')}}" @else value="{{$user->patron}}" @endif>
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
                                                   @if(old('email')) value="{{old('email')}}" @else value="{{$user->email}}" @endif>
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
                                                   @if(old('phone')) value="{{old('phone')}}" @else value="{{$user->phone}}" @endif>
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
                                                    @if ($user->role_id == $role->id)
                                                        <option value="{{$role->id}}" selected>{{$role->name}}</option>
                                                    @else
                                                        <option value="{{$role->id}}">{{$role->name}}</option>
                                                    @endif
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
                                    <sup class="text-danger">*</sup> <span class="text-opacity-50">
                                        При изменении электронной почты, пароль для пользователя будет изменен и сгенерируется автоматически. Новые данные для авторизации в системе будут высланы на электронную почту указанную в <b>поле E-mail</b></span>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

@endsection
