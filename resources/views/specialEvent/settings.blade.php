@extends('layout.layout')
@section('page-heading')
    <div class="row align-items-center">
        <div class="col-12 col-md-6">
            <h3>Мероприятия</h3>
        </div>
        <div class="col-12 col-md-6 text-end">
            <a href="{{route('special-event.index')}}" class="btn btn-sm btn-primary">Назад</a>
        </div>
    </div>
@endsection


@section('content')
    <div class="row">
        <div class="col-md-12">
            <div class="card">
                <div class="card-content">
                    <div class="card-body">
                        <h4 class="card-title mb-4 ">Настройка раздела мероприятия</h4>

                        <form action="{{route('special-event.settingsStore')}}" method="POST">
                            @csrf
                            <div class="form-body">
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <label>Введите количество строк: </label>
                                            <input type="number" id="name"
                                                   class="form-control @if($errors->has('count_rows')) is-invalid @endif"
                                                   name="count_rows"
                                                   placeholder="Введите количество строк..." required min="1"
                                                   value="{{($setting) ? $setting->count_rows : ''}}">
                                            @if($errors->has('count_rows'))
                                                <div class="invalid-feedback">
                                                    <i class="bx bx-radio-circle"></i>
                                                    @foreach($errors->get('count_rows') as $message)
                                                        {{$message}}<br>
                                                    @endforeach
                                                </div>
                                            @endif
                                        </div>
                                    </div>
                                </div>
                                <div class="row mt-3">
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <label>Введите количество столбцов: </label>
                                            <input type="number" id="name"
                                                   class="form-control @if($errors->has('count_columns')) is-invalid @endif"
                                                   name="count_columns" min="1"
                                                   placeholder="Введите количество строк..." required
                                                   value="{{($setting) ? $setting->count_columns : ''}}">
                                            @if($errors->has('count_columns'))
                                                <div class="invalid-feedback">
                                                    <i class="bx bx-radio-circle"></i>
                                                    @foreach($errors->get('count_columns') as $message)
                                                        {{$message}}<br>
                                                    @endforeach
                                                </div>
                                            @endif
                                        </div>
                                    </div>
                                </div>

                                <div class="col-12 mt-3">
                                    <button type="submit" class="btn btn-success">Сохранить</button>
                                </div>
                            </div>
                        </form>
{{--                        {{($setting) ? '1' : '0'}}--}}
                    </div>
                </div>
            </div>
        </div>
    </div>

@endsection
