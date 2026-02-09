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
        .table-container {
            width: 100%;
            overflow-x: auto;
        }

        table {
            width: 100%;
            table-layout: fixed;
            border-collapse: collapse;
            font-size: 10px;
        }

        th,
        td {
            padding: 8px;
            text-align: left;
            border: 1px solid #ddd;
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
                                @php
                                    $radioImages = [
                                        'Русское Радио' => 'rr_logo.png',
                                        'Серебряный дождь' => 'sd_logo.png',
                                    ];
                                @endphp

                                @if ($event->radio)
                                    <div class="d-flex align-items-center gap-2 mb-3">
                                        @php
                                            $radioName = trim($event->radio);
                                            $imageFile = $radioImages[$radioName] ?? null;

                                            if ($imageFile && file_exists(public_path('images/radio/' . $imageFile))) {
                                                $radioImage = asset('images/radio/' . $imageFile);
                                            } else {
                                                $radioImage = asset('images/radio/default.png');
                                            }
                                        @endphp

                                        <img src="{{ $radioImage }}" alt="{{ $event->radio }}"
                                            style="width: 50px; height: 50px; 
            object-fit: contain;"
                                            class="me-2"
                                            onerror="this.onerror=null; this.src='{{ asset('images/radio/default.png') }}'">
                                        <span class="text-muted">{{ $event->radio }}</span>
                                    </div>
                                @endif
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
