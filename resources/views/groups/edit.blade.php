@extends('layout.layout')
@section('page-heading')
    <div class="row align-items-center">
        <div class="col-12 col-md-6">
            <h3>Управление отделами</h3>
        </div>
        <div class="col-12 col-md-6 text-end">
            <a href="{{route('groups.index')}}" class="btn btn-primary">Назад</a>
        </div>
    </div>
@endsection


@section('content')
    <div class="row">
        <div class="col-md-12">
            <div class="card">
                <div class="card-content">
                    <div class="card-body">
                        <h4 class="card-title mb-4 ">Редактирование отдела</h4>

                        <form action="{{route('groups.update', ['group' => $group->id])}}" method="POST">
                            @csrf
                            @method('PUT')
                            <div class="form-body">
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <label>Наименование отдела: </label>
                                            <input type="text" id="name"
                                                   class="form-control @if($errors->has('name')) is-invalid @endif"
                                                   name="name"
                                                   placeholder="Введите наименование отдела..." required
                                                   value="{{$group->name}}">
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
