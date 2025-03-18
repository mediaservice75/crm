<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css" />
<script src="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js"></script>

@extends('layout.layout')

@section('page-heading')
    <div class="row">
        <div class="col-12 col-md-4">
            <h3>Мероприятия</h3>
        </div>
        <div class="col-12 col-md-8 text-end">
            <a href="{{ route('special-event.archive') }}" class="btn btn-sm btn-secondary">Архив</a>
        </div>
    </div>
@endsection

@section('content')
    <style>
        .card-body {
            font-size: 14px;
            padding: 10px !important;
            /* Минимальные отступы */
        }

        .table-container {
            width: 100%;
            /* Таблица на всю ширину */
            margin: 0;
            padding: 0;
        }

        .card-body table {
            width: 100%;
            max-width: 100%;
            table-layout: auto;
            /* Автоматическая ширина колонок */
            border-collapse: collapse;
            font-size: 12px;
        }

        .card-body th,
        .card-body td {
            padding: 8px;
            /* Уменьшенные отступы */
            text-align: left;
            border: 1px solid #ddd;
        }

        .card-body th {
            background-color: #f8f9fa;
            font-weight: bold;
        }

        .card {
            padding: 0 !important;
            /* Убираем padding у карточки */
            margin: 0 !important;
            /* Минимальные внешние отступы */
        }

        .free {
            color: red;
        }
    </style>

    <div class="swiper" id="swiper">
        <div class="swiper-wrapper" style="height: auto">
            @foreach ($events->reverse() as $event)
                <div class="swiper-slide">
                    <div class="card">
                        <div class="card-content">
                            <div class="card-body">
                                <h5 class="title mb-4">{{ $event->title }}</h5>
                                <p> <b>Период:</b>

                                    {{ \Carbon\Carbon::parse($event->campaign_start_date)->format('d.m') }}
                                    -
                                    {{ \Carbon\Carbon::parse($event->campaign_end_date)->format('d.m') }}
                                </p>
                                @foreach ($event->sessions as $session)
                                    <p>
                                        <b>Дата:</b>
                                        {{ \Carbon\Carbon::parse($session->event_date)->format('d.m.Y') }}
                                        <br>
                                        <b>Место:</b>
                                        {{ $session->location }}
                                        <br>
                                        <b>Время:</b>
                                        {{ $session->event_time }}
                                    </p>
                                @endforeach

                                <!-- Таблица без отступов -->
                                <div class="table-container w-100">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Спонсор</th>
                                                <th>Менеджер</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            @foreach ($event->sponsors as $sponsor)
                                                <tr>
                                                    <td
                                                        class="{{ !$sponsor->name || $sponsor->name == 'Свободно' ? 'text-danger opacity-75' : '' }}">
                                                        @if ($sponsor->is_general)
                                                            <strong>{{ $sponsor->name ?? 'Свободно' }}
                                                                (Генеральный)
                                                            </strong>
                                                        @else
                                                            {{ $sponsor->name ?? 'Свободно' }}
                                                        @endif
                                                    </td>
                                                    <td
                                                        class="{{ !$sponsor->responsible_manager || $sponsor->responsible_manager == 'Свободно' ? 'text-danger opacity-75' : '' }}">
                                                        {{ $sponsor->responsible_manager ?? 'Свободно' }}
                                                    </td>
                                                </tr>
                                            @endforeach
                                        </tbody>
                                    </table>
                                </div>
                                <br>
                                <a href="{{ route('special-event.show', $event->id) }}"
                                    class="btn btn-sm icon btn-primary w-100">Подробнее</a>
                            </div>
                        </div>
                    </div>
                </div>
            @endforeach
        </div>
        <div class="swiper-scrollbar"></div>
    </div>
@endsection
