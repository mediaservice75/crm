@extends('layout.layout')
@section('page-heading')
    <div class="row align-items-center">
        <div class="col-12 col-md-6">
            <h3>Управление статусами заявок</h3>
        </div>
        <div class="col-12 col-md-6 text-end">
            <a href="{{route('status-claim.index')}}" class="btn btn-primary">Назад</a>
        </div>
    </div>
@endsection


@section('content')
    <div class="row">
        <div class="col-md-12">
            <div class="card">
                <div class="card-content">
                    <div class="card-body">
                        <h4 class="card-title mb-4 ">Редактирование статуса заявки</h4>

                        <form action="{{route('status-claim.update', ['status_claim' => $statusClaim->id])}}" method="POST">
                            @csrf
                            @method('PUT')
                            <div class="form-body">
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <label>Наименование статуса заявки: </label>
                                            <input type="text" id="name"
                                                   class="form-control @if($errors->has('name')) is-invalid @endif"
                                                   name="name"
                                                   placeholder="Введите наименование статуса заявки..." required
                                                   value="{{$statusClaim->name}}">
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
                                                       @if($statusClaim->color == 'primary') checked @endif value="primary">
                                            </div>
                                            <div class="form-check form-check-secondary">
                                                <input class="form-check-input" type="radio" name="color"
                                                       id="color" value="secondary"  @if($statusClaim->color == 'secondary') checked @endif>
                                            </div>
                                            <div class="form-check form-check-info">
                                                <input class="form-check-input" type="radio" name="color"
                                                       id="color" value="info"  @if($statusClaim->color == 'info') checked @endif>
                                            </div>
                                            <div class="form-check form-check-warning">
                                                <input class="form-check-input" type="radio" name="color" id="color"
                                                       value="warning"  @if($statusClaim->color == 'warning') checked @endif>
                                            </div>
                                            <div class="form-check form-check-danger">
                                                <input class="form-check-input" type="radio" name="color" id="color"
                                                       value="danger"  @if($statusClaim->color == 'danger') checked @endif>
                                            </div>
                                            <div class="form-check form-check-success">
                                                <input class="form-check-input" type="radio" name="color" id="color"
                                                       value="success"  @if($statusClaim->color == 'success') checked @endif>
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
