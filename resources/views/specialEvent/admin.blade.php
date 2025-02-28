<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css" />
<script src="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js"></script>

@extends('layout.layout')

@section('page-heading')
    <div class="row">
        <div class="col-12 col-md-4">
            <h3>Мероприятия</h3>
        </div>
        <div class="col-12 col-md-8 text-end">
            <a href="{{ route('special-event.create') }}" class="btn btn-sm btn-success">Добавить</a>
        </div>
    </div>
@endsection

@section('content')
    <style>
        .table-container {
            width: 100%;
            overflow-x: auto;
        }

        table {
            width: 100%;
            table-layout: fixed;
            border-collapse: collapse;
            /* Убирает двойные границы между ячейками */
            font-size: 10px;
        }

        th,
        td {
            padding: 8px;
            text-align: left;
            border: 1px solid #ddd;
            /* Добавляем рамки для ячеек */
        }

        th {
            background-color: #f4f4f4;
            font-weight: bold;
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

                                        @if (!empty($session->event_time))
                                            <br>
                                            <b>Время:</b>
                                            {{ $session->event_time }}
                                        @endif
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
