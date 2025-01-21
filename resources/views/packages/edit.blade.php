@extends('layout.layout')
@section('page-heading')
    <div class="row align-items-center">
        <div class="col-12 col-md-6">
            <h3>Управление пакетами услуг</h3>
        </div>
        <div class="col-12 col-md-6 text-end">
            <a href="{{route('packages.index')}}" class="btn btn-primary">Назад</a>
        </div>
    </div>
@endsection


@section('content')
    <div class="row">
        <div class="col-md-12">
            <div class="card">
                <div class="card-content">
                    <div class="card-body">
                        <h4 class="card-title mb-4 ">Редактирование пакета услуг</h4>

                        <form action="{{route('packages.update', ['package' => $package->id])}}" method="POST">
                            @csrf
                            @method('PUT')
                            <div class="form-body">
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="form-group @if($errors->has('service_id')) is-invalid @endif">
                                            <label>Выберите услугу: </label>
                                            <select class="js-example-basic-single is-invalid" name="service_id" id="service_id">
                                                @foreach($services as $service)
                                                    @if($package->service->id == $service->id)
                                                        <option value="{{$service->id}}" selected>{{$service->name}}</option>
                                                    @else
                                                        <option value="{{$service->id}}">{{$service->name}}</option>
                                                    @endif
                                                @endforeach
                                            </select>
                                            @if($errors->has('service_id'))
                                                <div class="invalid-feedback">
                                                    <i class="bx bx-radio-circle"></i>
                                                    @foreach($errors->get('service_id') as $message)
                                                        {{$message}}<br>
                                                    @endforeach
                                                </div>
                                            @endif
                                        </div>
                                    </div>
                                    <div class="col-md-12 mt-3">
                                        <div class="form-group">
                                            <label>Наименование пакета услуги: </label>
                                            <input type="text" id="name"
                                                   class="form-control @if($errors->has('name')) is-invalid @endif"
                                                   name="name"
                                                   placeholder="Введите наименование пакета услуги..." required
                                                   value="{{$package->name}}">
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
