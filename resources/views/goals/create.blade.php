@extends('layout.layout')
@section('page-heading')
    <div class="row align-items-center">
        <div class="col-12 col-md-6">
            <h3>Создать задачу</h3>
        </div>
        <div class="col-12 col-md-6 text-end">
            <a href="{{route('goals.send')}}" class="btn btn-secondary">Отправленные задачи</a>
            <a href="{{route('goals.index')}}" class="btn btn-primary">Назад</a>
        </div>
    </div>
@endsection


@section('content')

    <div class="row">
        <div class="col-md-12">
            <div class="card">
                <div class="card-content">
                    <div class="card-body">

                        <form action="{{route('goals.store')}}" method="POST">
                            @csrf

                            <div class="row">
                                <div class="col-12">
                                    <input class="form-check-input me-1" name="isMySelfC" id="isMySelfC" type="checkbox" value="" @if(old('isMySelf')) checked @endif> Задача
                                    самому себе
                                    <input type="hidden" name="isMySelf" value="@if(old('isMySelf')) 1 @else 0 @endif">
                                </div>
                            </div>


                            <div class="row mt-3 user-form @if(old('isMySelf') == '0') show @endif @if(old('isMySelf') === null) show @endif">
                                <div class="col-lg-6 col-md-12">
                                    <div class="form-group @if($errors->has('group_id')) is-invalid @endif">
                                        <label>Выберите отдел: </label>
                                        <select class="js-example-basic-single is-invalid" name="group_id"
                                                id="group_id">
                                            <option value="">Не выбрано</option>
                                            @foreach($groups as $group)
                                                <option value="{{$group->id}}">{{$group->name}}</option>
                                            @endforeach
                                        </select>
                                        @if($errors->has('group_id'))
                                            <div class="invalid-feedback">
                                                <i class="bx bx-radio-circle"></i>
                                                @foreach($errors->get('group_id') as $message)
                                                    {{$message}}<br>
                                                @endforeach
                                            </div>
                                        @endif
                                    </div>
                                </div>

                                <div class="col-lg-6 col-md-12">
                                    <div class="form-group @if($errors->has('user_id')) is-invalid @endif">
                                        <label>Выберите ответственного за данную задачу: </label>
                                        <select disabled="disabled" class="js-example-basic-single is-invalid"
                                                name="user_id" id="user_id">
                                            <option value="0">Выберите отдел</option>
                                        </select>
                                        @if($errors->has('user_id'))
                                            <div class="invalid-feedback">
                                                <i class="bx bx-radio-circle"></i>
                                                @foreach($errors->get('user_id') as $message)
                                                    {{$message}}<br>
                                                @endforeach
                                            </div>
                                        @endif
                                    </div>
                                </div>
                            </div>

                            <div class="row mt-3">
                                <div class="col-12">
                                    <div class="form-group">
                                        <label>Выберите дату выполнения: </label>
                                        <input type="hidden" name="deadline" id="deadline">
                                        <input type="text" id="deadline-datepicker"
                                               class="form-control datepicker @if($errors->has('deadline')) is-invalid @endif"
                                               name="deadline-datepicker"
                                               placeholder="Выберите дату выполнения задачи..." required
                                               value="{{old('deadline')}}">
                                        @if($errors->has('deadline'))
                                            <div class="invalid-feedback">
                                                <i class="bx bx-radio-circle"></i>
                                                @foreach($errors->get('deadline') as $message)
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
                                        <label>Введите описание задачи: </label>
                                        <textarea
                                            class="form-control @if($errors->has('text')) is-invalid @endif"
                                            id="text" name="text" rows="3"
                                            placeholder="Введите описание задачи...">{{old('text')}}</textarea>
                                        @if($errors->has('text'))
                                            <div class="invalid-feedback">
                                                <i class="bx bx-radio-circle"></i>
                                                @foreach($errors->get('text') as $message)
                                                    {{$message}}<br>
                                                @endforeach
                                            </div>
                                        @endif
                                    </div>
                                </div>
                            </div>

                            <div class="row mt-3 material-block">
                                <div class="col-12 ">
                                    <div class="form-group">
                                        <label>Загрузите дополнительные файлы: </label>
                                        <input type="file" class="filepond" id="goalFiles" name="filepond[]"
                                               multiple>
                                    </div>
                                </div>
                            </div>

                            <div class="row mt-4">
                                <div class="col-12 ">
                                    <button type="submit" class="btn btn-success">Сохранить</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
