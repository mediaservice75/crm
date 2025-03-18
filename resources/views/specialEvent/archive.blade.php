@extends('layout.layout')

@section('page-heading')
    <div class="row">
        <div class="col-12 col-md-4">
            <h3>Архив мероприятий</h3>
        </div>
        <div class="col-12 col-md-8 text-end">
            <a href="{{ route('special-event.index') }}" class="btn btn-sm btn-primary">Назад</a>
        </div>
    </div>
@endsection

@section('content')
    <table class="table table-striped">
        <thead>
            <tr>
                <th>Название</th>
                <th>Дата</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            @foreach ($events as $event)
                @php
                    $dates = $event->sessions
                        ->pluck('event_date')
                        ->unique()
                        ->map(function ($date) {
                            return \Carbon\Carbon::parse($date)->format('d.m.Y');
                        });
                @endphp

                <tr>
                    <td>{{ $event->title }}</td>
                    <td>{{ $dates->implode(', ') }}</td>
                    <td>
                        <a href="{{ route('special-event.show', $event->id) }}" class="btn btn-sm btn-primary">Подробнее</a>
                    </td>
                </tr>
            @endforeach
        </tbody>
    </table>
@endsection
