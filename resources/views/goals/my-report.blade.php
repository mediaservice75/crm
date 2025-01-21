@extends('layout.layout')
@section('page-heading')
    <div class="row align-items-center">
        <div class="col-12 col-md-6">
            <h3>Мой отчет</h3>
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
                                    <label>Сотрудник: </label>
                                    <select disabled class="js-example-basic-single is-invalid"
                                            name="user_id" id="user_id">
                                        <option value="{{auth()->user()->id}}">{{auth()->user()->getFullName()}}</option>
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
