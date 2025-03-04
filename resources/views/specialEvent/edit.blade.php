@extends('layout.layout')

@section('page-heading')
    <link href="https://cdn.jsdelivr.net/npm/select2@4.0.13/dist/css/select2.min.css" rel="stylesheet" />

    <div class="row align-items-center">
        <div class="col-md-5">
            <h3>Редактировать мероприятие</h3>
        </div>
        <div class="col-md-7 text-end">
            <a href="{{ route('special-event.show', $event->id) }}" class="btn btn-sm btn-primary">Назад</a>
        </div>
    </div>
@endsection

@section('content')
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-body">
                    <form action="{{ route('special-event.update', $event->id) }}" method="post">
                        @csrf
                        @method('PATCH')

                        <div class="mb-3">
                            <h4 class="card-title mb-1">Название мероприятия</h4>
                            <input type="text" class="form-control" name="title"
                                value="{{ old('title', $event->title) }}">
                        </div>

                        <div class="mb-3">
                            <br>
                            <h4 class="card-title mb-1">Период рекламной кампании</h4>
                            <div class="d-flex">
                                <input type="date" class="form-control me-2" name="campaign_start_date"
                                    value="{{ old('campaign_start_date', $event->campaign_start_date) }}">
                                <input type="date" class="form-control" name="campaign_end_date"
                                    value="{{ old('campaign_end_date', $event->campaign_end_date) }}">
                            </div>
                        </div>

                        <div class="mb-3">
                            <br>
                            <h4 class="card-title mb-1">Даты проведения</h4>
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th>Место</th>
                                        <th>Дата</th>
                                        <th>Время</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @foreach ($event->sessions as $index => $session)
                                        <tr>
                                            <td>
                                                <input type="hidden" name="sessions[{{ $index }}][id]"
                                                    value="{{ $session->id }}">
                                                <input type="text" class="form-control"
                                                    name="sessions[{{ $index }}][location]"
                                                    value="{{ old("sessions.$index.location", $session->location) }}">
                                            </td>
                                            <td>
                                                <input type="date" class="form-control"
                                                    name="sessions[{{ $index }}][event_date]"
                                                    value="{{ old("sessions.$index.event_date", $session->event_date) }}">
                                            </td>
                                            <td>
                                                <input type="time" class="form-control"
                                                    name="sessions[{{ $index }}][event_time]"
                                                    value="{{ old("sessions.$index.event_time", $session->event_time) }}">
                                            </td>
                                        </tr>
                                    @endforeach
                                </tbody>
                            </table>
                        </div>

                        <div class="mb-3">
                            <br>
                            <h4 class="card-title mb-1">Спонсоры</h4>
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
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody id="sponsors-table-body">
                                    @foreach ($event->sponsors as $index => $sponsor)
                                        <tr>
                                            <td>
                                                <select name="sponsors[{{ $index }}][is_general]"
                                                    class="form-control">
                                                    <option value="1" {{ $sponsor->is_general ? 'selected' : '' }}>
                                                        Генеральный</option>
                                                    <option value="0" {{ !$sponsor->is_general ? 'selected' : '' }}>
                                                        Партнер</option>
                                                </select>
                                            </td>
                                            <td>
                                                <input type="hidden" name="sponsors[{{ $index }}][id]"
                                                    value="{{ $sponsor->id }}">
                                                <input type="text" name="sponsors[{{ $index }}][name]"
                                                    class="form-control" value="{{ $sponsor->name }}">
                                            </td>
                                            <td>
                                                <select name="sponsors[{{ $index }}][responsible_manager]"
                                                    class="form-control select2">
                                                    <option value="Свободно"
                                                        {{ empty($sponsor->responsible_manager) ? 'selected' : '' }}>
                                                        Свободно
                                                    </option>
                                                    @foreach ($users as $user)
                                                        <option value="{{ $user->name }} {{ $user->surname }}"
                                                            {{ $sponsor->responsible_manager == $user->name . ' ' . $user->surname ? 'selected' : '' }}>
                                                            {{ $user->name }} {{ $user->surname }}
                                                        </option>
                                                    @endforeach
                                                </select>
                                            </td>
                                            <td>
                                                <input type="hidden" name="sponsors[{{ $index }}][has_logo]"
                                                    value="0">
                                                <input type="checkbox" name="sponsors[{{ $index }}][has_logo]"
                                                    value="1" {{ $sponsor->has_logo ? 'checked' : '' }}>
                                            </td>
                                            <td>
                                                <input type="hidden" name="sponsors[{{ $index }}][has_leaflet]"
                                                    value="0">
                                                <input type="checkbox" name="sponsors[{{ $index }}][has_leaflet]"
                                                    value="1" {{ $sponsor->has_leaflet ? 'checked' : '' }}>
                                            </td>
                                            <td>
                                                <input type="text" name="sponsors[{{ $index }}][gratitude_to]"
                                                    class="form-control" value="{{ $sponsor->gratitude_to }}">
                                            </td>
                                            <td>
                                                <input type="hidden" name="sponsors[{{ $index }}][has_feedback]"
                                                    value="0">
                                                <input type="checkbox" name="sponsors[{{ $index }}][has_feedback]"
                                                    value="1" {{ $sponsor->has_feedback ? 'checked' : '' }}>
                                            </td>
                                            <td>
                                                <button type="button" class="btn btn-danger"
                                                    onclick="removeSponsorRow(this)">-</button>
                                            </td>
                                        </tr>
                                    @endforeach
                                </tbody>
                            </table>
                            <div class="d-flex justify-content-center mt-3">
                                <button type="button" class="btn btn-primary" onclick="addSponsorRow()">+</button>
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
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody id="responsibles-table-body">
                                    @foreach ($event->responsibles as $responsible)
                                        <tr>
                                            <td>
                                                <select name="responsibles[{{ $loop->index }}][group]"
                                                    class="form-control">
                                                    @foreach ($groups as $group)
                                                        <option value="{{ $group->name }}"
                                                            {{ $responsible->group == $group->name ? 'selected' : '' }}>
                                                            {{ $group->name }}
                                                        </option>
                                                    @endforeach
                                                </select>
                                            </td>
                                            <td>
                                                <select name="responsibles[{{ $loop->index }}][user]"
                                                    class="form-control select2">
                                                    @foreach ($users as $user)
                                                        <option value="{{ $user->name }} {{ $user->surname }}"
                                                            {{ $responsible->user == $user->name . ' ' . $user->surname ? 'selected' : '' }}>
                                                            {{ $user->name }} {{ $user->surname }}
                                                        </option>
                                                    @endforeach
                                                </select>
                                            </td>
                                            <td>
                                                <button type="button" class="btn btn-danger"
                                                    onclick="removeResponsibleRow(this)">-</button>
                                            </td>
                                        </tr>
                                    @endforeach
                                </tbody>
                            </table>
                            <div class="d-flex justify-content-center mt-3">
                                <button type="button" class="btn btn-primary" onclick="addResponsibleRow()">+</button>
                            </div>
                        </div>
                        <button type="submit" class="btn btn-success">Сохранить изменения</button>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.13/js/select2.min.js"></script>

    <script>
        $(document).ready(function() {
            $('.select2').select2();
        });

        function addSponsorRow() {
            let index = document.querySelectorAll('#sponsors-table-body tr').length;
            let row = document.createElement('tr');
            row.innerHTML = `
        <td>
            <select name="sponsors[${index}][is_general]" class="form-control">
                <option value="0">Партнер</option>
                <option value="1">Генеральный</option>
            </select>
        </td>
        <td><input type="text" name="sponsors[${index}][name]" class="form-control"></td>
        <td>
            <select name="sponsors[${index}][responsible_manager]" class="form-control select2">
                <option value="Свободно" selected>Свободно</option>
                @foreach ($users as $user)
                    <option value="{{ $user->name }} {{ $user->surname }}">{{ $user->name }} {{ $user->surname }}</option>
                @endforeach
            </select>
        </td>
        <td>
            <input type="hidden" name="sponsors[${index}][has_logo]" value="0">
            <input type="checkbox" name="sponsors[${index}][has_logo]" value="1">
        </td>
        <td>
            <input type="hidden" name="sponsors[${index}][has_leaflet]" value="0">
            <input type="checkbox" name="sponsors[${index}][has_leaflet]" value="1">
        </td>
        <td><input type="text" name="sponsors[${index}][gratitude_to]" class="form-control"></td>
        <td>
            <input type="hidden" name="sponsors[${index}][has_feedback]" value="0">
            <input type="checkbox" name="sponsors[${index}][has_feedback]" value="1">
        </td>
        <td><button type="button" class="btn btn-danger" onclick="removeSponsorRow(this)">-</button></td>
    `;
            document.getElementById('sponsors-table-body').appendChild(row);

            $('.select2').select2();
        }

        function removeSponsorRow(button) {
            button.closest('tr').remove();
        }

        let groups = @json($groups);
        let users = @json($users);

        let currentIndex = @json($event->responsibles->count());

        function addResponsibleRow() {
            let index = currentIndex++;
            let row = document.createElement('tr');

            let groupOptions = groups.map(group =>
                `<option value="${group.name}">${group.name}</option>`
            ).join('');

            let userOptions = users.map(user =>
                `<option value="${user.name} ${user.surname}">${user.name} ${user.surname}</option>`
            ).join('');

            row.innerHTML = `
        <td>
            <select name="responsibles[${index}][group]" class="form-control">
                ${groupOptions}
            </select>
        </td>
        <td>
            <select name="responsibles[${index}][user]" class="form-control select2">
                ${userOptions}
            </select>
        </td>
        <td>
            <button type="button" class="btn btn-danger" onclick="removeResponsibleRow(this)">-</button>
        </td>
        `;

            document.getElementById('responsibles-table-body').appendChild(row);

            $(row).find('.select2').select2();
        }

        function removeResponsibleRow(button) {
            button.closest('tr').remove();
        }
    </script>
@endsection
