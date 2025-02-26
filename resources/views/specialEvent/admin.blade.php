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
        .card-body {
            font-size: 14px;
        }

        .card-body table {
            width: 100%;
            max-width: 100%;
            table-layout: fixed;
            border-collapse: collapse;
            font-size: 11px;
        }

        .card-body th,
        .card-body td {
            padding: 5px;
            text-align: left;
            border: 1px solid #ddd;
        }

        .card-body th {
            background-color: #f8f9fa;
            font-weight: bold;
        }
    </style>

    <div class="swiper" id="swiper">
        <div class="swiper-wrapper" style="height: auto">
            @foreach ($events as $event)
                <div class="swiper-slide">
                    <div class="card">
                        <div class="card-content">
                            <div class="card-body">
                                <h5 class="title mb-4">{{ $event->title }}</h5>
                                <p>
                                    {{ \Carbon\Carbon::parse($event->campaign_start_date)->format('d.m.Y') }}
                                    <br>
                                    {{ \Carbon\Carbon::parse($event->campaign_end_date)->format('d.m.Y') }}
                                </p>
                                @foreach ($event->sessions as $session)
                                    <p>
                                        {{ \Carbon\Carbon::parse($session->event_date)->format('d.m.Y') }}
                                        <br>
                                        {{ $session->location }}
                                        <br>
                                        {{ $session->event_time }}
                                    </p>
                                @endforeach

                                <!-- Оборачиваем таблицу в контейнер -->
                                <div class="table-container">
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
                                                    <td>
                                                        @if ($sponsor->is_general)
                                                            <strong>{{ $sponsor->name }} (Генеральный)</strong>
                                                        @else
                                                            {{ $sponsor->name }}
                                                        @endif
                                                    </td>
                                                    <td>
                                                        <!-- Здесь получаем имя и фамилию менеджера -->
                                                        {{ optional($sponsor->manager)->name }}
                                                        {{ optional($sponsor->manager)->surname }}
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
