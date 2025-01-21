@extends('layout.layout')
@section('page-heading')
    <div class="row align-items-center">
        <div class="col-12 col-md-6">
            <h3>Отчеты сотрудников</h3>
        </div>
        <div class="col-12 col-md-6 text-end">
            <a href="{{route('calendar.index')}}" class="btn btn-primary">Назад</a>
        </div>
    </div>
@endsection

@section('content')
    <div class="row">
        <div class="col-md-12">
            <div class="card">
                <div class="card-content">
                    <div class="card-body">
                        <h4 class="card-title mb-4 ">Выберите данные для фильтрации</h4>
                        @csrf
                        <div class="row mt-3 user-form show">

                            <div class="col-lg-6 col-md-12">
                                <div class="form-group">
                                    <label>Выберите сотрудника: </label>
                                    <select class="js-example-basic-single is-invalid"
                                            name="user_id" id="user_id">
                                        <option value="0">Не выбрано</option>
                                        @if(count($users) != 0)
                                            @foreach($users as $group)
                                                @foreach($group->roles as $role)
                                                    @foreach($role->users as $user)
                                                        <option value="{{$user->id}}">{{$user->getFullName()}}</option>
                                                    @endforeach
                                                @endforeach
                                            @endforeach
                                        @endif
                                    </select>
                                    <div class="invalid-feedback d-block">
                                        <span id="userError"></span>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-6 col-md-12">
                                <div class="form-group ">
                                    <label>Выберите дату: </label>
                                    <div class="d-flex">
                                        <input type="hidden" name="selected_date" id="deadline">
                                        <input type="text"
                                               id="report-datepicker"
                                               class="form-control"
                                               placeholder="Выберите дату..."
                                               required>
                                        <button type="submit" class="btn btn-success ms-2" id="create-report">Найти</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>

    <div id="data" class="row">

    </div>


@endsection
