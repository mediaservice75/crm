@extends('layout.layout')
@section('page-heading')
    <div class="row align-items-center">
        <div class="col-12 col-md-6">
            <h3>Мероприятия</h3>
        </div>
    </div>
@endsection


@section('content')


    <div class="row">
        <div class="col-md-12">
            <div class="card">
                <div class="card-content">
                    <div class="card-body table-responsive">

                        <table class="table table-hover table-bordered table-sm">

                            <thead>
                            <tr>
                                @foreach ($headers as $header)
                                    <th>{!! $header['header'] !!}</th>
                                @endforeach
                            </tr>
                            </thead>
                            <tbody>
                            @foreach ($rows as $row)
                                <tr>
                                    @foreach ($headers as $header)
{{--                                        <td >{!! $row[$header] ?? '' !!}</td>--}}

                                        <td>
                                            <div class="content">{!! $row[$header['header']]['data'] ?? '' !!}</div>
                                            <div class="user-info">
                                                @if($row[$header['header']]['user_id'] != null && $row[$header['header']]['user_id'] != 0)
                                                    <p><b>Ответственный:</b> {{getUserById($row[$header['header']]['user_id'])}}</p>
                                                @endif
                                            </div>
                                        </td>
                                    @endforeach
                                </tr>
                            @endforeach
                            </tbody>


                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>

@endsection
