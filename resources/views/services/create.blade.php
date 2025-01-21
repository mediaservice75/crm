@extends('layout.layout')
@section('page-heading')
    <div class="row align-items-center">
        <div class="col-12 col-md-6">
            <h3>Управление услугами</h3>
        </div>
        <div class="col-12 col-md-6 text-end">
            <a href="{{route('services.index')}}" class="btn btn-primary">Назад</a>
        </div>
    </div>
@endsection


@section('content')
    <div class="row">
        <div class="col-md-12">
            <div class="card">
                <div class="card-content">
                    <div class="card-body">
                        <h4 class="card-title mb-4 ">Добавление новой услуги</h4>

                        <form action="{{route('services.store')}}" method="POST">
                            @csrf
                            <div class="form-body">
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="form-group @if($errors->has('category_id')) is-invalid @endif">
                                            <label>Выберите категорию услуги: </label>
                                            <select class="js-example-basic-single is-invalid" name="category_id" id="category_id">
                                                @foreach($categories as $category)
                                                    <option value="{{$category->id}}">{{$category->name}}</option>
                                                @endforeach
                                            </select>
                                            @if($errors->has('category_id'))
                                                <div class="invalid-feedback">
                                                    <i class="bx bx-radio-circle"></i>
                                                    @foreach($errors->get('category_id') as $message)
                                                        {{$message}}<br>
                                                    @endforeach
                                                </div>
                                            @endif
                                        </div>
                                    </div>
                                </div>

                                <div class="row mt-3">
                                    <div class="col-lg-12 col-md-12">
                                        <div class="form-group">
                                            <label>Наименование услуги: </label>
                                            <input type="text" id="name"
                                                   class="form-control @if($errors->has('name')) is-invalid @endif"
                                                   name="name"
                                                   placeholder="Введите наименование услуги..." required
                                                   value="{{old('name')}}">
                                            @if($errors->has('name'))
                                                <div class="invalid-feedback">
                                                    <i class="bx bx-radio-circle"></i>
                                                    @foreach($errors->get('name') as $message)
                                                        {{$message}}<br>
                                                    @endforeach
                                                </div>
                                            @endif
                                        </div>
                                    </div>
                                </div>
                                <div class="row mt-3">

                                    <div class="col-lg-6 col-md-12">
                                        <div class="form-group @if($errors->has('group_id')) is-invalid @endif">
                                            <label>Выберите отдел: </label>
                                            <select class="js-example-basic-single is-invalid" name="group_id" id="group_id">
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
                                            <label>Выберите ответственного за распределение заявок: </label>
                                            <select class="js-example-basic-single is-invalid" name="user_id" id="user_id">
                                                <option value="0">Не выбрано</option>
                                                @foreach($users as $user)
                                                    <option value="{{$user->id}}">{{$user->getFullName()}} ({{$user->role->name}})</option>
                                                @endforeach
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

                                <div class="row mt-4">
                                    <div class="col-12">
                                        <ul class="list-group">
                                            <li class="list-group-item">
                                                <input class="form-check-input me-1" name="isRequiredMaterialC" type="checkbox" value=""> Обязательные материалы
                                                <input type="hidden" name="isRequiredMaterial" value="0">
                                            </li>
                                            <li class="list-group-item">
                                                <input class="form-check-input me-1" name="isPackageC" type="checkbox" value=""> Пакеты услуг
                                                <input type="hidden" name="isPackage" value="0">
                                            </li>
                                            <li class="list-group-item">
                                                <input class="form-check-input me-1" name="isPeriodC" type="checkbox" value=""> Срок размещения
                                                <input type="hidden" name="isPeriod" value="0">
                                            </li>
                                            <li class="list-group-item">
                                                <input class="form-check-input me-1" name="isBrifC" type="checkbox" value=""> Бриф
                                                <input type="hidden" name="isBrif" value="0">
                                            </li>
                                            <li class="list-group-item">
                                                <input class="form-check-input me-1" name="isOutputC" type="checkbox" value=""> Количество выходов
                                                <input type="hidden" name="isOutput" value="0">
                                            </li>
                                        </ul>
                                    </div>
                                </div>



                                <div class="col-12 mt-3">
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
