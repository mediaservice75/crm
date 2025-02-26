@extends('layout.layout')

@section('page-heading')
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
                            <h4 class="card-title mb-1">Период рекламной кампании</h4>
                            <div class="d-flex">
                                <input type="date" class="form-control me-2" name="campaign_start_date"
                                    value="{{ old('campaign_start_date', $event->campaign_start_date) }}">
                                <input type="date" class="form-control" name="campaign_end_date"
                                    value="{{ old('campaign_end_date', $event->campaign_end_date) }}">
                            </div>
                        </div>

                        <div class="mb-3">
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
                                                    class="form-control" value="{{ $sponsor->name }}" required>
                                            </td>
                                            <td>
                                                <select name="sponsors[{{ $index }}][responsible_manager_id]"
                                                    class="form-control">
                                                    @foreach ($users as $user)
                                                        <option value="{{ $user->id }}"
                                                            {{ $sponsor->responsible_manager_id == $user->id ? 'selected' : '' }}>
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
                        <button type="submit" class="btn btn-success">Сохранить изменения</button>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <script>
        function addSponsorRow() {
            let index = document.querySelectorAll('#sponsors-table-body tr').length;
            let row = document.createElement('tr');
            row.innerHTML = `
                <td>
                    <select name="sponsors[\${index}][is_general]" class="form-control">
                        <option value="0">Партнер</option>
                        <option value="1">Генеральный</option>
                    </select>
                </td>
                <td><input type="text" name="sponsors[\${index}][name]" class="form-control" required></td>
                <td>
                    <select name="sponsors[\${index}][responsible_manager_id]" class="form-control">
                        <option value="" selected>Свободно</option>
                        @foreach ($users as $user)
                            <option value="{{ $user->id }}">{{ $user->name }} {{ $user->surname }}</option>
                        @endforeach
                    </select>
                </td>
                <td>
                    <input type="hidden" name="sponsors[\${index}][has_logo]" value="0">
                    <input type="checkbox" name="sponsors[\${index}][has_logo]" value="1">
                </td>
                <td>
                    <input type="hidden" name="sponsors[\${index}][has_leaflet]" value="0">
                    <input type="checkbox" name="sponsors[\${index}][has_leaflet]" value="1">
                </td>
                <td><input type="text" name="sponsors[\${index}][gratitude_to]" class="form-control"></td>
                <td>
                    <input type="hidden" name="sponsors[\${index}][has_feedback]" value="0">
                    <input type="checkbox" name="sponsors[\${index}][has_feedback]" value="1">
                </td>
                <td><button type="button" class="btn btn-danger" onclick="removeSponsorRow(this)">-</button></td>
            `;
            document.getElementById('sponsors-table-body').appendChild(row);
        }

        function removeSponsorRow(button) {
            button.closest('tr').remove();
        }
    </script>
@endsection
