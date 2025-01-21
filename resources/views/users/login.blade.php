<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CRM Mediaservice | Авторизация</title>
    <link rel="stylesheet" href="{{@asset('css/all.css')}}">
    <link rel="stylesheet" href="{{@asset('css/auth.css')}}">
    <link rel="shortcut icon" href="{{asset('images/logo/favicon.svg')}}" type="image/x-icon">
    <link rel="shortcut icon" href="{{asset('images/logo/favicon.png')}}" type="image/png">

</head>

<body>
<div id="auth">

    <div class="row h-100">
        <div class="col-lg-5 col-12 d-flex align-items-center justify-content-center text-center flex-column">

            <div class="page-heading w-50">
                <h3>@yield('page-heading')</h3>
                @if(session()->has('success'))
                    <div class="alert alert-success alert-dismissible show fade mt-3">
                        {{session('success')}}
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                @endif

                @if(session()->has('error'))
                    <div class="alert alert-danger alert-dismissible show fade mt-3">
                        {{session('error')}}
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                @endif
            </div>
            <div id="auth-left">
                <div class="auth-logo">
                    <a href="{{route('home')}}"><img src="{{asset('images/logo/logo-black.png')}}" alt="Logo MediaService" srcset=""></a>
                </div>
                <h1 class="auth-title">Авторизация</h1>
                <p class="auth-subtitle mb-5">Введите данные для входа в систему</p>

                <form action="{{route('users.auth')}}" method="POST">
                    @csrf
                    <div class="form-group position-relative has-icon-left mb-4">
                        <input type="email" class="form-control form-control-xl @if($errors->has('email')) is-invalid @endif" placeholder="Электронная почта"
                        name="email" id="email" required value="{{old('email')}}">
                        <div class="form-control-icon">
                            <i class="bi bi-envelope"></i>
                        </div>
                        @if($errors->has('email'))
                            <div class="invalid-feedback">
                                <i class="bx bx-radio-circle"></i>
                                @foreach($errors->get('email') as $message)
                                    {{$message}}<br>
                                @endforeach
                            </div>
                        @endif
                    </div>
                    <div class="form-group position-relative has-icon-left mb-4">
                        <input type="password" class="form-control form-control-xl @if($errors->has('password')) is-invalid @endif" placeholder="Пароль"
                               name="password" id="password" required>
                        <div class="form-control-icon">
                            <i class="bi bi-shield-lock"></i>
                        </div>
                        @if($errors->has('password'))
                            <div class="invalid-feedback">
                                <i class="bx bx-radio-circle"></i>
                                @foreach($errors->get('password') as $message)
                                    {{$message}}<br>
                                @endforeach
                            </div>
                        @endif
                    </div>
                    <button class="btn btn-primary btn-block btn-lg shadow-lg mt-5">Войти</button>
                </form>
            </div>
        </div>
        <div class="col-lg-7 d-none d-lg-block">
            <div id="auth-right" style="background: url('{{asset('images/bg/4853433.png')}}'),linear-gradient(90deg,#2d499d,#3f5491)">

            </div>
        </div>
    </div>

</div>
</body>

</html>
