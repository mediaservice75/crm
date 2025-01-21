@extends('layout.layout')
@section('page-heading')
    Управление ЛПР <a href="{{route('clients.show', ['client' => $client_id])}}" class="btn btn-sm btn-primary">Назад</a>
@endsection


@section('content')
    <div class="row">
        <div class="col-md-12">
            <div class="card">
                <div class="card-content">
                    <div class="card-body">

                        <h4 class="card-title mb-4 ">Добавление ЛПР</h4>
                        <form action="{{route('lpr.storeLpr', ['client_id' => $client_id])}}" method="POST">
                            @csrf
                            <div class="form-body">
                                <div class="row">
                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <label>Фамилия: </label>
                                            <input type="text" id="surname"
                                                   class="form-control @if($errors->has('surname')) is-invalid @endif"
                                                   name="surname"
                                                   placeholder="Введите фамилию..." required
                                                   value="{{old('surname')}}">
                                            @if($errors->has('surname'))
                                                <div class="invalid-feedback">
                                                    <i class="bx bx-radio-circle"></i>
                                                    @foreach($errors->get('surname') as $message)
                                                        {{$message}}<br>
                                                    @endforeach
                                                </div>
                                            @endif
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <label>Имя: </label>
                                            <input type="text" id="name"
                                                   class="form-control @if($errors->has('name')) is-invalid @endif"
                                                   name="name"
                                                   placeholder="Введите имя..." required
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
                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <label>Отчество: </label>
                                            <input type="text" id="patron"
                                                   class="form-control @if($errors->has('patron')) is-invalid @endif"
                                                   name="patron"
                                                   placeholder="Введите отчество..."
                                                   value="{{old('patron')}}">
                                            @if($errors->has('patron'))
                                                <div class="invalid-feedback">
                                                    <i class="bx bx-radio-circle"></i>
                                                    @foreach($errors->get('patron') as $message)
                                                        {{$message}}<br>
                                                    @endforeach
                                                </div>
                                            @endif
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-12 mt-3">
                                    <div class="form-group">
                                        <label>Должность: </label>
                                        <input type="text" id="post"
                                               class="form-control @if($errors->has('post')) is-invalid @endif"
                                               name="post"
                                               placeholder="Введите должность..."
                                               value="{{old('post')}}">
                                        @if($errors->has('post'))
                                            <div class="invalid-feedback">
                                                <i class="bx bx-radio-circle"></i>
                                                @foreach($errors->get('post') as $message)
                                                    {{$message}}<br>
                                                @endforeach
                                            </div>
                                        @endif
                                    </div>
                                </div>

                                <div class="row mt-3">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label>Телефон: </label>
                                            <input type="tel" id="phone"
                                                   class="form-control @if($errors->has('phone')) is-invalid @endif"
                                                   name="phone"
                                                   placeholder="Введите телефон..."
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
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label>День рождения ЛПР: </label>
                                            <input type="text" id="date_of_birth"
                                                   class="form-control @if($errors->has('date_of_birth')) is-invalid @endif"
                                                   name="date_of_birth"
                                                   placeholder="Введите день рождения ЛПР..."
                                                   value="{{old('date_of_birth')}}">
                                            @if($errors->has('date_of_birth'))
                                                <div class="invalid-feedback">
                                                    <i class="bx bx-radio-circle"></i>
                                                    @foreach($errors->get('date_of_birth') as $message)
                                                        {{$message}}<br>
                                                    @endforeach
                                                </div>
                                            @endif
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-12 mt-3">
                                    <div class="form-group">
                                        <label>Дополнительные комменатрии: </label>
                                        <textarea class="form-control @if($errors->has('comment')) is-invalid @endif" id="comment" name="comment" rows="3" placeholder="Введите дополнительные комментарии...">{{old('comment')}}</textarea>
                                        @if($errors->has('comment'))
                                            <div class="invalid-feedback">
                                                <i class="bx bx-radio-circle"></i>
                                                @foreach($errors->get('comment') as $message)
                                                    {{$message}}<br>
                                                @endforeach
                                            </div>
                                        @endif
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


    @if($lprs->count() == 0)
        <h5 class="text-gray-500">К сожалению, ЛПР не найдено 😢</h5>
    @else
        <h5 class="text-gray-500">Список ЛПР</h5>
        <table class="table table-lg table-hover" id="datatables">
            <thead>
            <tr>
                <th>#</th>
                <th>ФИО</th>
                <th>Должность</th>
                <th>Дата рождения</th>
                <th>Комментарий</th>
                <th class="text-center">Действие</th>
            </tr>
            </thead>
            <tbody>
            @foreach($lprs as $key => $item)
                <tr>
                    <td>{{$key+1}}</td>
                    <td>{{$item->surname}} {{$item->name}} {{$item->patron}}</td>
                    <td>{{$item->post}}</td>
                    <td>{{$item->getDateBirth($item->date_of_birth)}}</td>
                    <td>{{$item->getComment($item->comment)}}</td>
                    <td class="text-center">
                        <a href="{{route('lpr.edit', ['lpr' => $item->id])}}" class="text-primary"><i class="bi bi-pen-fill"></i></a>
                        <form action="{{route('lpr.destroy', ['lpr' => $item->id])}}" method="POST" class="d-inline">
                            @csrf
                            @method('DELETE')
                            <a href="#" class="text-danger ms-2 delete"><i class="bi bi-trash-fill"></i></a>
                        </form>
                    </td>
                </tr>

            @endforeach
            </tbody>
        </table>
    @endif
@endsection
