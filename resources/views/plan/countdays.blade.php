@extends('layout.layout')
@section('page-heading')
    <div class="row align-items-center">
        <div class="col-12 col-md-4">
            <h3>Управление планом продаж</h3>
        </div>
        <div class="col-12 col-md-8 text-end">
            <a href="{{route('plan.index')}}" class="btn mb-2 btn-sm btn-primary">Назад</a>

        </div>
    </div>
@endsection


@section('content')
    <div class="row">
        <div class="col-lg-12 col-md-12">
            <div class="card">
                <div class="card-content">
                    <div class="card-body">
                        <h4 class="card-title">Рабочие дни</h4>
                        <p class="text-muted">В данном разделе вы можете установить рабочие дни по месяцам</p>

                        <form action="{{route('plan.countDaysPost')}}" method="POST">
                            @csrf
                            <div class="form-body">


                                <div class="row mt-3">
                                    <div class="col-12">
                                        <div class="form-group">
                                            <label>Выберите месяц: </label>
                                            <input type="hidden" name="month" id="month">
                                            <input type="text" id="month-datepicker"
                                                   class="form-control month-datepicker @if($errors->has('month')) is-invalid @endif"
                                                   name="month-datepicker"
                                                   placeholder="Выберите месяц..." required
                                                   value="{{old('month-datepicker')}}">
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
                                    <div class="col-12">
                                        <div class="form-group">
                                            <label>Выберите рабочие дни в месце: </label>
                                            <input type="hidden" name="selected_days" id="countDays">
                                            <input type="text" id="dates-datepicker"
                                                   class="form-control dates-datepicker"
                                                   name="dates-datepicker" disabled
                                                   placeholder="Выберите месяц..." required>
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
