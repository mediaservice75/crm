@extends('layout.layout')
@section('page-heading')
    Управление реквизитами <a href="{{route('clients.show', ['client' => $requisites->client_id])}}" class="btn btn-sm btn-primary">Назад</a>
@endsection


@section('content')
    <div class="row">
        <div class="col-md-12">
            <div class="card">
                <div class="card-content">
                    <div class="card-body">

                        @if(session()->has('infoClient'))
                            <div class="alert alert-danger alert-dismissible show fade mt-3">
                                Редактирование невозможно, клиент с таким ИНН уже существует. <br>
                                <b>Найден клиент - </b><a href="#">{{session('infoClient')['name']}}</a>
                                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                            </div>
                        @endif

                        <h4 class="card-title mb-4 ">Редактирование реквизитов</h4>
                        <form action="{{route('requisites.update', ['requisite' => $requisites->id])}}" method="POST">
                            @csrf
                            @method('PUT')
                            <div class="form-body">

                                <div class="row">
                                    <div class="col-md-6 col-sm-12">
                                        <div class="form-group">
                                            <label>Полное наименование организации: </label>
                                            <input type="text" id="fullName" class="form-control @if($errors->has('fullName')) is-invalid @endif" name="fullName"
                                                   placeholder="Введите полное наименование организации..."
                                                   @if(old('fullName')) value="{{old('fullName')}}" @else value="{{$requisites->fullName}}" @endif>
                                            @if($errors->has('fullName'))
                                                <div class="invalid-feedback">
                                                    <i class="bx bx-radio-circle"></i>
                                                    @foreach($errors->get('fullName') as $message)
                                                        {{$message}}<br>
                                                    @endforeach
                                                </div>
                                            @endif
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-sm-12">
                                        <div class="form-group">
                                            <label>Организацинно-правовая форма: </label>
                                            <input type="text" id="legalForm" class="form-control @if($errors->has('legalForm')) is-invalid @endif" name="legalForm"
                                                   placeholder="Введите организацинно-правовую форму организации..."
                                                   @if(old('legalForm')) value="{{old('legalForm')}}" @else value="{{$requisites->legalForm}}" @endif>
                                            @if($errors->has('legalForm'))
                                                <div class="invalid-feedback">
                                                    <i class="bx bx-radio-circle"></i>
                                                    @foreach($errors->get('legalForm') as $message)
                                                        {{$message}}<br>
                                                    @endforeach
                                                </div>
                                            @endif
                                        </div>
                                    </div>
                                </div>

                                <div class="row mt-3">
                                    <div class="col-md-6 col-sm-12">
                                        <div class="form-group">
                                            <label>ИНН организации: </label>
                                            <input type="text" id="INN" class="form-control @if($errors->has('INN')) is-invalid @endif" name="INN"
                                                   placeholder="Введите ИНН организации..."
                                                   @if(old('INN')) value="{{old('INN')}}" @else value="{{$requisites->INN}}" @endif>
                                            @if($errors->has('INN'))
                                                <div class="invalid-feedback">
                                                    <i class="bx bx-radio-circle"></i>
                                                    @foreach($errors->get('INN') as $message)
                                                        {{$message}}<br>
                                                    @endforeach
                                                </div>
                                            @endif
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-sm-12">
                                        <div class="form-group">
                                            <label>ОГРН/ОГРНИП: </label>
                                            <input type="text" id="OGRN" class="form-control @if($errors->has('OGRN')) is-invalid @endif" name="OGRN"
                                                   placeholder="Введите ОГРН/ОГРНИП организации..."
                                                   @if(old('OGRN')) value="{{old('OGRN')}}" @else value="{{$requisites->OGRN}}" @endif>
                                            @if($errors->has('OGRN'))
                                                <div class="invalid-feedback">
                                                    <i class="bx bx-radio-circle"></i>
                                                    @foreach($errors->get('OGRN') as $message)
                                                        {{$message}}<br>
                                                    @endforeach
                                                </div>
                                            @endif
                                        </div>
                                    </div>
                                </div>

                                <div class="row mt-3">
                                    <div class="col-md-12 col-sm-12">
                                        <div class="form-group">
                                            <label>КПП организации: </label>
                                            <input type="text" id="KPP_C" class="form-control @if($errors->has('KPP_C')) is-invalid @endif" name="KPP_C"
                                                   placeholder="Введите КПП организации..."
                                                   @if(old('KPP_C')) value="{{old('KPP_C')}}" @else value="{{$requisites->KPP_C}}" @endif>
                                            @if($errors->has('KPP_C'))
                                                <div class="invalid-feedback">
                                                    <i class="bx bx-radio-circle"></i>
                                                    @foreach($errors->get('KPP_C') as $message)
                                                        {{$message}}<br>
                                                    @endforeach
                                                </div>
                                            @endif
                                        </div>
                                    </div>
                                </div>

                                <div class="row mt-3">
                                        <div class="col-md-12 col-sm-12">
                                        <div class="form-group">
                                            <label>Юридический адрес организации: </label>
                                            <input type="text" id="lawAddress" class="form-control @if($errors->has('lawAddress')) is-invalid @endif" name="lawAddress"
                                                   placeholder="Введите юридический адрес организации..."
                                                   @if(old('lawAddress')) value="{{old('lawAddress')}}" @else value="{{$requisites->lawAddress}}" @endif>
                                            @if($errors->has('lawAddress'))
                                                <div class="invalid-feedback">
                                                    <i class="bx bx-radio-circle"></i>
                                                    @foreach($errors->get('lawAddress') as $message)
                                                        {{$message}}<br>
                                                    @endforeach
                                                </div>
                                            @endif
                                        </div>
                                    </div>
                                </div>

                                <h4 class="card-title mb-4 mt-4">Банковские реквизиты</h4>

                                <div class="row mt-3">
                                    <div class="col-md-6 col-sm-12">
                                        <div class="form-group">
                                            <label>Расчетный счет: </label>
                                            <input type="text" id="checkingAccount" class="form-control @if($errors->has('checkingAccount')) is-invalid @endif" name="checkingAccount"
                                                   placeholder="Введите расчетный счет организации..."
                                                   @if(old('checkingAccount')) value="{{old('checkingAccount')}}" @else value="{{$requisites->checkingAccount}}" @endif>
                                            @if($errors->has('checkingAccount'))
                                                <div class="invalid-feedback">
                                                    <i class="bx bx-radio-circle"></i>
                                                    @foreach($errors->get('checkingAccount') as $message)
                                                        {{$message}}<br>
                                                    @endforeach
                                                </div>
                                            @endif
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-sm-12">
                                        <div class="form-group">
                                            <label>Корреспондентский счет: </label>
                                            <input type="text" id="correspondentAccount" class="form-control @if($errors->has('correspondentAccount')) is-invalid @endif" name="correspondentAccount"
                                                   placeholder="Введите корреспондентский счет организации..."
                                                   @if(old('correspondentAccount')) value="{{old('correspondentAccount')}}" @else value="{{$requisites->correspondentAccount}}" @endif>
                                            @if($errors->has('correspondentAccount'))
                                                <div class="invalid-feedback">
                                                    <i class="bx bx-radio-circle"></i>
                                                    @foreach($errors->get('correspondentAccount') as $message)
                                                        {{$message}}<br>
                                                    @endforeach
                                                </div>
                                            @endif
                                        </div>
                                    </div>
                                </div>

                                <div class="row mt-3">
                                    <div class="col-md-12 col-sm-12">
                                        <div class="form-group">
                                            <label>Наименование банка: </label>
                                            <input type="text" id="nameBank" class="form-control @if($errors->has('nameBank')) is-invalid @endif" name="nameBank"
                                                   placeholder="Введите наименование банка..."
                                                   @if(old('nameBank')) value="{{old('nameBank')}}" @else value="{{$requisites->nameBank}}" @endif>
                                            @if($errors->has('nameBank'))
                                                <div class="invalid-feedback">
                                                    <i class="bx bx-radio-circle"></i>
                                                    @foreach($errors->get('nameBank') as $message)
                                                        {{$message}}<br>
                                                    @endforeach
                                                </div>
                                            @endif
                                        </div>
                                    </div>
                                </div>

                                <div class="row mt-3">
                                    <div class="col-md-4 col-sm-12">
                                        <div class="form-group">
                                            <label>БИК: </label>
                                            <input type="text" id="BIC" class="form-control @if($errors->has('BIC')) is-invalid @endif" name="BIC"
                                                   placeholder="Введите БИК..."
                                                   @if(old('BIC')) value="{{old('BIC')}}" @else value="{{$requisites->BIC}}" @endif>
                                            @if($errors->has('BIC'))
                                                <div class="invalid-feedback">
                                                    <i class="bx bx-radio-circle"></i>
                                                    @foreach($errors->get('BIC') as $message)
                                                        {{$message}}<br>
                                                    @endforeach
                                                </div>
                                            @endif
                                        </div>
                                    </div>
                                    <div class="col-md-4 col-sm-12">
                                        <div class="form-group">
                                            <label>КПП: </label>
                                            <input type="text" id="KPP" class="form-control @if($errors->has('KPP')) is-invalid @endif" name="KPP"
                                                   placeholder="Введите КПП..."
                                                   @if(old('KPP')) value="{{old('KPP')}}" @else value="{{$requisites->KPP}}" @endif>
                                            @if($errors->has('KPP'))
                                                <div class="invalid-feedback">
                                                    <i class="bx bx-radio-circle"></i>
                                                    @foreach($errors->get('KPP') as $message)
                                                        {{$message}}<br>
                                                    @endforeach
                                                </div>
                                            @endif
                                        </div>
                                    </div>
                                    <div class="col-md-4 col-sm-12">
                                        <div class="form-group">
                                            <label>КБК: </label>
                                            <input type="text" id="KBK" class="form-control @if($errors->has('KBK')) is-invalid @endif" name="KBK"
                                                   placeholder="Введите КБК..."
                                                   @if(old('KBK')) value="{{old('KBK')}}" @else value="{{$requisites->KBK}}" @endif>
                                            @if($errors->has('KBK'))
                                                <div class="invalid-feedback">
                                                    <i class="bx bx-radio-circle"></i>
                                                    @foreach($errors->get('KBK') as $message)
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
                                            <label>Дополнительный комментарий: </label>
                                            <textarea class="form-control " id="comment" name="comment" rows="3" placeholder="Например, дополнительные реквизиты...">@if(old('comment')){{old('comment')}}@else{{$requisites->comment}}@endif</textarea>
                                        </div>
                                    </div>
                                </div>

                                <h4 class="card-title mb-4 mt-4">Информация о бухгалтере клиента</h4>

                                <div class="row mt-3">
                                    <div class="col-md-6 col-sm-12">
                                        <div class="form-group">
                                            <label>ФИО бухгалтера: </label>
                                            <input type="text" id="buhName" class="form-control @if($errors->has('buhName')) is-invalid @endif" name="buhName"
                                                   placeholder="Введите ФИО бухгалтера организации..."
                                                   @if(old('buhName')) value="{{old('buhName')}}" @else value="{{$requisites->buhName}}" @endif>
                                            @if($errors->has('buhName'))
                                                <div class="invalid-feedback">
                                                    <i class="bx bx-radio-circle"></i>
                                                    @foreach($errors->get('buhName') as $message)
                                                        {{$message}}<br>
                                                    @endforeach
                                                </div>
                                            @endif
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-sm-12">
                                        <div class="form-group">
                                            <label>Телефон бухгалтера: </label>
                                            <input type="text" id="phone" class="form-control @if($errors->has('phone')) is-invalid @endif" name="phone"
                                                   placeholder="Введите телефон бухгалтера..."
                                                   @if(old('phone')) value="{{old('phone')}}" @else value="{{$requisites->phone}}" @endif>
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
                                </div>

                                <div class="col-12 mt-4">
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
