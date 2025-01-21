@extends('layout.layout')
@section('page-heading')
    Добавление клиента <a href="{{route('clients.index')}}" class="btn btn-sm btn-primary">Назад</a>
@endsection


@section('content')
    <div class="row">
        <div class="col-md-12">
            <div class="card">
                <div class="card-content">
                    <div class="card-body">

                        <h4 class="card-title mb-4 ">Информация о клиенте</h4>
                        <form action="{{route('clients.storeFast')}}" method="POST" enctype="multipart/form-data">
                            @csrf
                            <div class="form-body">
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <label>Наименование организации: </label>
                                            <input type="text" id="name" class="form-control typing-client @if($errors->has('name')) is-invalid @endif" name="name"
                                                   placeholder="Введите наименование..." required
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
                                        <div class="form-group">
                                            <label>Телефон: </label>
                                            <input type="tel" id="phone" class="form-control @if($errors->has('phone')) is-invalid @endif" name="phone"
                                                   placeholder="Введите телефон..." required
                                                   value="{{old('phone')}}">
                                            @if($errors->has('phone'))
                                                <div class="invalid-feedback">
                                                    <i class="bx bx-radio-circle"></i>
                                                    @foreach($errors->get('phone') as $message)
                                                        {{$message}}<br>
                                                    @endforeach
                                                </div>
                                            @endif
                                        </div>

                                        <div class="row mt-3 mb-3">
                                            <div class="col-12">
                                                <div class="form-group">
                                                    <label>Дополнительный комментарий: </label>
                                                    <textarea class="form-control " id="comment" name="comment" rows="3" placeholder="Например, дополнительные реквизиты...">{{old('comment')}}</textarea>
                                                </div>
                                            </div>
                                        </div>


                                        <button type="submit" class="btn btn-success">Сохранить</button>
                                    </div>
                                </div>
                            </div>
                        </form>

                        <div class="content-client mt-4">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
