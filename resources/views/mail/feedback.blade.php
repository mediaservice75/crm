@component('mail::message')
    <p style="text-align: center !important; font-weight: bold; color: #222; margin-top: 25px;">
        Ваши регистрационные данные 📨
    </p>

@component('mail::panel')
    **Ваш логин:** {{$params['email']}}
    <br>
    **Ваш пароль:** {{$params['password']}}
@endcomponent

@component('mail::button', ['url' => config('app.url')])
Перейти на сайт
@endcomponent

@component('mail::subcopy')
    <p style="text-align: center !important;">
    С уважением,
    {{ config('app.name') }} 🫶
    </p>
@endcomponent


@endcomponent
