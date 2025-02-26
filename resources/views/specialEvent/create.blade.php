@extends('layout.layout')
@section('page-heading')
    <div class="row">
        <div class="col-12 col-md-4">
            <h3>Добавление мероприятия</h3>
        </div>
        <div class="col-12 col-md-8 text-end">
            <a href="{{ route('special-event.index') }}" class="btn btn-sm btn-primary">Назад</a>
        </div>
    </div>
@endsection

@section('content')
    <style>
    </style>
    <div class="row">
        <div class="col-md-12">
            <div class="card">
                <div class="card-content">
                    <div class="card-body">
                        <h4 class="card-title mb-4 ">Информация о мероприятии</h4>
                        <form action="{{ route('special-event.store') }}" method="POST" enctype="multipart/form-data">
                            @csrf
                            <div class="form-body">
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <label>Название:</label>
                                            <input type="text" id="title" class="form-control" name="title"
                                                placeholder="Введите название" value="{{ old('title') }}">
                                        </div>
                                        <div class="form-group">
                                            <label>Старт рекламной кампании:</label>
                                            <input type="date" id="campaign_start_date" class="form-control"
                                                name="campaign_start_date"
                                                placeholder="Выберите дату старта рекламной кампании"
                                                value="{{ old('campaign_start_date') }}">
                                        </div>
                                        <div class="form-group">
                                            <label>Конец рекламной кампании:</label>
                                            <input type="date" id="campaign_end_date" class="form-control"
                                                name="campaign_end_date"
                                                placeholder="Выберите дату конца рекламной кампании"
                                                value="{{ old('campaign_end_date') }}">
                                        </div>
                                    </div>
                                </div>
                                <br>
                                <h4 class="card-title mb-4">Сеансы мероприятия</h4>
                                <div id="sessions-container">
                                    <div class="session border p-3 mb-3">
                                        <div class="row">
                                            <div class="col-md-4">
                                                <div class="form-group">
                                                    <label>Дата проведения:</label>
                                                    <input type="date" class="form-control"
                                                        name="sessions[0][event_date]">
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="form-group">
                                                    <label>Место проведения:</label>
                                                    <input type="text" class="form-control" name="sessions[0][location]">
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="form-group">
                                                    <label>Время проведения:</label>
                                                    <input type="time" class="form-control"
                                                        name="sessions[0][event_time]">
                                                </div>
                                            </div>
                                        </div>
                                        <br>
                                        <button type="button" class="btn btn-danger remove-session">Удалить</button>
                                    </div>
                                </div>

                                <!-- add session buttion -->
                                <div class="d-flex justify-content-center mt-3">
                                    <button type="button" id="add-session" class="btn btn-success btn-sm">
                                        +
                                    </button>
                                </div>

                                <button type="submit" class="btn btn-success mt-3">Сохранить</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script>
        document.addEventListener('DOMContentLoaded', function() {
            let sessionIndex = 1;

            function handleDeleteSession(e) {
                const sessions = document.querySelectorAll('.session');
                if (sessions.length > 1) {
                    e.target.parentElement.remove();
                }
            }

            // Добавление сеанса
            document.getElementById('add-session').addEventListener('click', function() {
                let container = document.getElementById('sessions-container');
                let newSession = document.createElement('div');
                newSession.classList.add('session', 'border', 'p-3', 'mb-3');
                newSession.innerHTML = `
                    <div class="row">
                        <div class="col-md-4">
                            <div class="form-group">
                                <label>Дата проведения:</label>
                                <input type="date" class="form-control" name="sessions[${sessionIndex}][event_date]">
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label>Место проведения:</label>
                                <input type="text" class="form-control" name="sessions[${sessionIndex}][location]">
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label>Время проведения:</label>
                                <input type="time" class="form-control" name="sessions[${sessionIndex}][event_time]">
                            </div>
                        </div>
                    </div>
                    <br>
                    <button type="button" class="btn btn-danger remove-session">Удалить</button>
                `;
                container.appendChild(newSession);
                sessionIndex++;
            });

            // Удаление сеанса
            document.getElementById('sessions-container').addEventListener('click', function(e) {
                if (e.target.classList.contains('remove-session')) {
                    handleDeleteSession(e);
                }
            });
        });
    </script>
@endsection
