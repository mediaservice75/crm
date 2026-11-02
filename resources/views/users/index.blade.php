@extends('layout.layout')
@section('page-heading')
    <div class="row align-items-center">
        <div class="col-12 col-md-6">
            <h3>Пользователи</h3>
        </div>
        <div class="col-12 col-md-6 text-end">
            @if (in_array(auth()->user()->role_id, [1, 4, 9, 13]))
                <button id="toggleFreelancersBtn" class="btn btn-primary">
                    Показать внештатных сотрудников
                </button>
                <a href="{{ route('users.archive') }}" class="btn btn-secondary">Архив</a>
            @endif
            <a href="{{ route('users.create') }}" class="btn btn-success">Добавление</a>
        </div>
    </div>
@endsection

@section('content')
    <div class="row">
        {{-- Отдельная группа Управление --}}
        <h4 class="card-title mb-4">Управление</h4>
        @foreach ($users->whereIn('role_id', [4, 9]) as $user)
            {{-- Вывод данных пользователя --}}
            <div class="col-md-4 col-sm-12">
                <div class="card">
                    <div class="card-header">
                        <div class="avatar avatar-lg me-3 align-items-center">
                            @if (empty($user->photo))
                                <img src="{{ asset('images/faces/2.jpg') }}" alt="Фотография отсутствует" srcset="">
                            @else
                                <img src="{{ asset('storage') . '/' . $user->photo }}" alt="Фотография организации">
                            @endif
                            <h4 class="ms-lg-3 mb-0 text-start">{{ $user->getFullName() }}</h4>

                        </div>

                    </div>
                    @if ($user->isBlocked == 1)
                        <span class="badge bg-danger mb-3 d-block">Заблокирован</span>
                    @endif

                    <div class="card-body">
                        <div class="divider divider-left mt-0">
                            <div class="divider-text">Дополнительная информация</div>
                        </div>
                        <p class="mb-1"><b>Должность: </b>{{ $user->role->name }}</p>
                        <p class="mb-1"><b>Телефон: </b><a href="tel:{{ $user->phone }}">{{ $user->phone }}</a></p>
                        <p class="mb-1"><b>E-Mail: </b><a href="mailto:{{ $user->email }}">{{ $user->email }}</a>
                        </p>


                        @if (auth()->user()->role->level <= 2 || auth()->user()->role->level == 5)
                            <div class="divider divider-left">
                                <div class="divider-text">Действия</div>

                            </div>

                            <div class="d-block">

                            </div>
                            <div class="d-inline-block w-100">
                                @if (auth()->user()->role->level <= 2)
                                    <a href="{{ route('users.repeat-password', ['user' => $user->id]) }}"
                                        class="btn btn-sm icon btn-success me-2 mb-2"><i class="bi bi-arrow-repeat"></i>
                                        Повторить пароль</a>
                                @endif
                                <a href="{{ route('users.show', ['user' => $user->id]) }}"
                                    class="btn btn-sm icon btn-primary me-2 mb-2"><i class="bi bi-eye-fill"></i>
                                    Открыть</a>

                                @if (auth()->user()->role->level <= 2)
                                    <a href="{{ route('users.edit', ['user' => $user->id]) }}"
                                        class="btn btn-sm icon btn-primary me-2 mb-2"><i class="bi bi-pencil"></i>
                                        Редактировать</a>
                                    <form action="{{ route('users.destroy', ['user' => $user->id]) }}" method="POST"
                                        class="d-inline">
                                        @csrf
                                        @method('DELETE')
                                        @if ($user->isBlocked == 1)
                                            <button type="submit" class="btn icon btn-success mb-2 block btn-sm"
                                                attr-block="1"><i class="bi bi-unlock-fill"></i> Разблокировать
                                            </button>
                                        @else
                                            <button type="submit" class="btn icon btn-danger mb-2 block btn-sm"
                                                attr-block="0"><i class="bi bi-lock-fill"></i> Заблокировать
                                            </button>
                                        @endif

                                    </form>
                                @endif
                            </div>
                        @endif
                    </div>
                </div>
            </div>
        @endforeach

        {{-- Другие группы --}}
        @foreach ($groups as $group)
            <h4 class="card-title mb-4">{{ $group->name }}</h4>
            @foreach ($users->filter(fn($user) => $user->getGroupID() === $group->id && $user->isBlocked != 1) as $user)
                {{-- Вывод данных пользователя --}}
                @php
                    $isFreelancer =
                        Str::endsWith($user->getFullName(), '0') ||
                        ($user->phone && Str::endsWith($user->phone, '99-99'));
                @endphp

                <div class="col-md-4 col-sm-12 user-card @if ($isFreelancer) freelancer d-none @endif">
                    <div class="card">
                        <div class="card-header">
                            <div class="avatar avatar-lg me-3 align-items-center">
                                @if (empty($user->photo))
                                    <img src="{{ asset('images/faces/2.jpg') }}" alt="Фотография отсутствует"
                                        srcset="">
                                @else
                                    <img src="{{ asset('storage') . '/' . $user->photo }}" alt="Фотография организации">
                                @endif
                                <h4 class="ms-lg-3 mb-0 text-start">{{ $user->getFullName() }}</h4>

                            </div>

                        </div>
                        @if ($user->isBlocked == 1)
                            <span class="badge bg-danger mb-3 d-block">Заблокирован</span>
                        @endif

                        <div class="card-body">
                            <div class="divider divider-left mt-0">
                                <div class="divider-text">Дополнительная информация</div>
                            </div>
                            <p class="mb-1"><b>Должность: </b>{{ $user->role->name }}</p>
                            <p class="mb-1"><b>Телефон: </b><a href="tel:{{ $user->phone }}">{{ $user->phone }}</a>
                            </p>
                            <p class="mb-1"><b>E-Mail: </b><a href="mailto:{{ $user->email }}">{{ $user->email }}</a>
                            </p>


                            @if (auth()->user()->role->level <= 2 || auth()->user()->role->level == 5)
                                <div class="divider divider-left">
                                    <div class="divider-text">Действия</div>

                                </div>

                                <div class="d-block">

                                </div>
                                <div class="d-inline-block w-100">
                                    @if (auth()->user()->role->level <= 2)
                                        <a href="{{ route('users.repeat-password', ['user' => $user->id]) }}"
                                            class="btn btn-sm icon btn-success me-2 mb-2"><i class="bi bi-arrow-repeat"></i>
                                            Повторить пароль</a>
                                    @endif
                                    @if (session('generated_password'))
                                        <div class="alert alert-info">
                                            Сгенерированный пароль: <strong>{{ session('generated_password') }}</strong>
                                            (сохраните его, он больше не будет показан)
                                        </div>
                                    @endif
                                    <a href="{{ route('users.show', ['user' => $user->id]) }}"
                                        class="btn btn-sm icon btn-primary me-2 mb-2"><i class="bi bi-eye-fill"></i>
                                        Открыть</a>

                                    @if (auth()->user()->role->level <= 2)
                                        <a href="{{ route('users.edit', ['user' => $user->id]) }}"
                                            class="btn btn-sm icon btn-primary me-2 mb-2"><i class="bi bi-pencil"></i>
                                            Редактировать</a>
                                        <form action="{{ route('users.destroy', ['user' => $user->id]) }}" method="POST"
                                            class="d-inline">
                                            @csrf
                                            @method('DELETE')
                                            @if ($user->isBlocked == 1)
                                                <button type="submit" class="btn icon btn-success mb-2 block btn-sm"
                                                    attr-block="1"><i class="bi bi-unlock-fill"></i> Разблокировать
                                                </button>
                                            @else
                                                <button type="submit" class="btn icon btn-danger mb-2 block btn-sm"
                                                    attr-block="0"><i class="bi bi-lock-fill"></i> Заблокировать
                                                </button>
                                            @endif

                                        </form>
                                    @endif
                                </div>
                            @endif
                        </div>
                    </div>
                </div>
            @endforeach
        @endforeach

        @if ($users->isEmpty())
            <h5 class="text-gray-500">К сожалению, пользователей не найдено 😢</h5>
        @else
        @endif
    </div>

    <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
    <script>
        $(document).ready(function() {
            $('#toggleFreelancersBtn').click(function() {
                $('.freelancer').toggleClass('d-none');

                // Переключаем текст кнопки
                $(this).text(function(i, text) {
                    return text.includes('Показать') ?
                        'Скрыть внештатных сотрудников' :
                        'Показать внештатных сотрудников';
                });
            });
        });
    </script>
@endsection
