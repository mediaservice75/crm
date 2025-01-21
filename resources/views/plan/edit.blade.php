@extends('layout.layout')
@section('page-heading')
    <div class="row align-items-center">
        <div class="col-12 col-md-6">
            <h3>Управление планом продаж</h3>
        </div>
        <div class="col-12 col-md-6 text-end">
            <a href="{{route('plan.index')}}" class="btn btn-primary">Назад</a>
        </div>
    </div>
@endsection


@section('content')
    <div class="row">
        <div class="col-md-12">
            <div class="card">
                <div class="card-content">
                    <div class="card-body">
                        <h4 class="card-title mb-4 ">Редактирование плана</h4>

                        <form action="{{route('plan.update', ['plan' => $plan->id])}}" method="POST">
                            @csrf
                            @method('PUT')
                            <div class="form-body">
                                <div class="row mt-3">
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
                                            <label>Выберите сотрудника: </label>
                                            <select  class="js-example-basic-single is-invalid"
                                                    name="user_id" id="user_id">
                                                @foreach($users as $user)
                                                    @if($user->id == $plan->user_id)
                                                        <option value={{$user->id}} selected>{{$user->getFullName()}}</option>
                                                    @else
                                                        <option value={{$user->id}}>{{$user->getFullName()}}</option>
                                                    @endif
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

                                <div class="row mt-3">
                                    <div class="col-12">
                                        <div class="form-group">
                                            <label>Выберите месяц: </label>
                                            <input type="hidden" name="month" id="month" value="{{$plan->month}}">
                                            <input type="text" id="month-datepicker"
                                                   class="form-control month-datepicker @if($errors->has('month')) is-invalid @endif"
                                                   name="month-datepicker"
                                                   placeholder="Выберите месяц..." required
                                                   value="{{$plan->getDate()}}">
                                            @if($errors->has('month'))
                                                <div class="invalid-feedback">
                                                    <i class="bx bx-radio-circle"></i>
                                                    @foreach($errors->get('month') as $message)
                                                        {{$message}}<br>
                                                    @endforeach
                                                </div>
                                            @endif
                                        </div>
                                    </div>
                                </div>

                                <div class="row mt-3">
                                    <div class="col-12 ">
                                        <div class="form-group">
                                            <label>План продаж: </label>
                                            <input type="number" id="plan"
                                                   class="form-control @if($errors->has('plan')) is-invalid @endif"
                                                   name="plan" step="0.1"
                                                   placeholder="Введите план продаж..."
                                                   value="{{$plan->plan}}">
                                            @if($errors->has('plan'))
                                                <div class="invalid-feedback">
                                                    <i class="bx bx-radio-circle"></i>
                                                    @foreach($errors->get('plan') as $message)
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
                    </div>
                </div>
            </div>
        </div>
    </div>

@endsection
