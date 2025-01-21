@extends('layout.layout')
@section('page-heading')
    <div class="row align-items-center">
        <div class="col-12 col-md-6">
            <h3>Выполненные заявки</h3>
        </div>
    </div>
@endsection

@section('content')
    <div class="row">
        <div class="col-md-12">
            <div class="card">
                <div class="card-content">
                    <div class="card-body">
                        <h4 class="card-title mb-4 ">Выберите данные для поиска</h4>
                        @csrf
                        <div class="row mt-3 user-form show">
                            <div class="col-lg-4 col-md-12">
                                <div class="form-group">
                                    <label>Выберите отдел: </label>
                                    <select class="js-example-basic-single is-invalid" name="group_id"
                                            id="group_id">
                                        <option value="">Не выбрано</option>
                                        @foreach($groups as $group)
                                            <option value="{{$group->id}}">{{$group->name}}</option>
                                        @endforeach
                                    </select>

                                </div>
                            </div>

                            <div class="col-lg-4 col-md-12">
                                <div class="form-group">
                                    <label>Выберите сотрудника: </label>
                                    <select disabled="disabled" class="js-example-basic-single is-invalid"
                                            name="user_id" id="user_id">
                                        <option value="0">Выберите отдел</option>
                                    </select>
                                    <div class="invalid-feedback d-block">
                                        <span id="userError"></span>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-4">
                                <div class="form-group ">
                                    <label>Выберите месяц: </label>
                                    <div class="d-flex">
                                        <input type="hidden" name="month" id="month">
                                        <input type="text" id="month-f"
                                               class="form-control month-f"
                                               placeholder="Выберите месяц..." required>
                                        <button type="submit" class="btn btn-success ms-2" id="find-complete-claims">Найти</button>
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
