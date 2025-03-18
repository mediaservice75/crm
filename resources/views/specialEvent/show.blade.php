@extends('layout.layout')
@section('page-heading')
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css">
    <div class="row">
        <div class="col-12 col-md-5">
            <h3>Информация о мероприятии</h3>
        </div>
        <div class="col-12 col-md-7 text-end">
            <a href="{{ route('special-event.index') }}" class="btn btn-sm btn-primary">Назад</a>
            @if (!$event->is_archived && (auth()->user()->role->level == 1 || auth()->user()->role->level == 2))
                <a href="{{ route('special-event.edit', $event->id) }}" class="btn btn-sm btn-success">Редактировать</a>

                <form action="{{ route('special-event.archiveEvent', $event->id) }}" method="POST" style="display: inline;">
                    @csrf
                    @method('PATCH')
                    <button type="submit" class="btn btn-sm btn-secondary" onclick="return confirm('Вы уверены?')">
                        Перенести в архив
                    </button>
                </form>
            @endif
        </div>
    </div>
@endsection

@section('content')
    <style>
        .checkmark {
            color: green;
            font-size: 1.7rem;
            font-weight: bold;
            display: inline-block;
            width: 100%;
            text-align: center;
        }

        td {
            vertical-align: middle;
        }
    </style>
    <div class="row">
        <div class="col-md-12">
            <div class="card">
                <div class="card-content">
                    <div class="card-body">
                        <h2 class="">{{ $event->title }}</h2>
                        <hr>
                        <div>
                            <h4 class="card-title mb-1">Период рекламной кампании</h4>
                            {{ \Carbon\Carbon::parse($event->campaign_start_date)->format('d.m.Y') }} –
                            {{ \Carbon\Carbon::parse($event->campaign_end_date)->format('d.m.Y') }}
                        </div>
                        <br>
                        <h4 class="card-title mb-1">Даты проведения</h4>
                        @foreach ($event->sessions as $session)
                            {{ $loop->iteration }}) {{ $session->location }} {{ $session->event_date }}
                            {{ $session->event_time }}
                            @unless ($loop->last)
                                <br>
                            @endunless
                        @endforeach

                        <div class="mb-3">
                            <br>
                            <h4 class="card-title mb-1">Спонсоры</h4>
                            <div class="table-responsive">
                                <table class="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th>Статус</th>
                                            <th>Наименование</th>
                                            <th>Менеджер</th>
                                            <th>Логотип</th>
                                            <th>Листовка</th>
                                            <th>Благодарность</th>
                                            <th>Отзыв</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        @foreach ($event->sponsors as $sponsor)
                                            <tr>
                                                <td>
                                                    {!! $sponsor->is_general ? '<strong>Генеральный</strong>' : 'Партнер' !!}
                                                </td>
                                                <td>{{ $sponsor->name }}</td>
                                                <td>
                                                    {{ $sponsor->responsible_manager ?? 'Свободно' }}
                                                </td>
                                                <td>{!! $sponsor->has_logo ? '<i class="bi bi-check-lg checkmark"></i>' : '' !!}</td>
                                                <td>{!! $sponsor->has_leaflet ? '<i class="bi bi-check-lg checkmark"></i>' : '' !!}</td>
                                                <td>{{ $sponsor->gratitude_to }}</td>
                                                <td>{!! $sponsor->has_feedback ? '<i class="bi bi-check-lg checkmark"></i>' : '' !!}</td>
                                            </tr>
                                        @endforeach
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div class="mb-3">
                            <br>
                            <h4 class="card-title mb-1">Ответственные сотрудники на мероприятии</h4>
                            <table class="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>Статус</th>
                                        <th>ФИО Сотрудника</th>
                                    </tr>
                                </thead>
                                <tbody id="responsibles-table-body">
                                    @foreach ($event->responsibles as $responsible)
                                        <tr>
                                            <td>
                                                {{ $responsible->group }}
                                            </td>
                                            <td>
                                                {{ $responsible->user }}
                                            </td>
                                        </tr>
                                    @endforeach
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
