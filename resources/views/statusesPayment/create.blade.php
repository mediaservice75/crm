@extends('layout.layout')
@section('page-heading')
    <div class="row align-items-center">
        <div class="col-12 col-md-6">
            <h3>Управление статусами оплаты</h3>
        </div>
        <div class="col-12 col-md-6 text-end">
            <a href="{{route('status-payment.index')}}" class="btn btn-primary">Назад</a>
        </div>
    </div>
@endsection


@section('content')
    <div class="row">
        <div class="col-md-12">
            <div class="card">
                <div class="card-content">
                    <div class="card-body">
                        <h4 class="card-title mb-4 ">Добавление статуса оплаты</h4>

                        <form action="{{route('status-payment.store')}}" method="POST">
                            @csrf
                            <div class="form-body">
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <label>Наименование статуса оплаты: </label>
                                            <input type="text" id="name"
                                                   class="form-control @if($errors->has('name')) is-invalid @endif"
                                                   name="name"
                                                   placeholder="Введите статуса оплаты..." required
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
                                    <div class="form-group">
                                        <p>Выберите цвет отображения статуса:</p>
                                        <div class="flex">
                                            <div class="form-check form-check-primary">
                                                <input class="form-check-input" type="radio" name="color" id="color"
                                                       checked="" value="primary">
                                            </div>
                                            <div class="form-check form-check-secondary">
                                                <input class="form-check-input" type="radio" name="color"
                                                       id="color" value="secondary">
                                            </div>
                                            <div class="form-check form-check-info">
                                                <input class="form-check-input" type="radio" name="color"
                                                       id="color" value="info">
                                            </div>
                                            <div class="form-check form-check-warning">
                                                <input class="form-check-input" type="radio" name="color" id="color"
                                                       value="warning">
                                            </div>
                                            <div class="form-check form-check-danger">
                                                <input class="form-check-input" type="radio" name="color" id="color"
                                                       value="danger">
                                            </div>
                                            <div class="form-check form-check-success">
                                                <input class="form-check-input" type="radio" name="color" id="color"
                                                       value="success">
                                            </div>
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
