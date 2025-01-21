@extends('layout.layout')
@section('page-heading')
    <div class="row align-items-center">
        <div class="col-12 col-md-6">
            <h3>Мероприятия</h3>
        </div>
        <div class="col-12 col-md-6 text-end">
            <button class="btn btn-sm btn-primary" id="addColumnTable">Добавить столбец</button>
            <button class="btn btn-sm btn-primary" id="addRowTable">Добавить строку</button>
            <button class="btn btn-sm btn-success" id="saveTable">Сохранить таблицу</button>
        </div>
    </div>
@endsection


@section('content')

    <style>

        body.theme-dark .modal {
            top: 50% !important;
            left: 50% !important;
        }
        .modal {
            display: none;
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            padding: 20px;
            background: #fff;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            z-index: 1000;
        }
        .modal-overlay {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            z-index: 999;
        }
        #editableTable p {
            margin: 0;
        }

        .editable-cell {
            cursor: text;
        }
    </style>
    <link href="https://cdn.jsdelivr.net/npm/quill@2.0.2/dist/quill.snow.css" rel="stylesheet" />

    <div class="modal-overlay"></div>

    <div id="quillModal" class="modal">
        <div class="form-group">
            <label>Выберите ответственного за данное мероприятие: </label>
            <select class="js-example-basic-single" id="user">
                <option value="0">Не выбран</option>
                @if(count($users) != 0)
                    @foreach($users as $user)
                        <option value="{{$user->id}}">{{$user->getFullName()}} ({{$user->role->name}})</option>
                    @endforeach
                @endif
            </select>
        </div>
        <div class="form-group">
            <label>Описание мероприятия: </label>
            <div id="quillEditorContainer" style="height: 400px;" class="mb-3"></div>
        </div>

        <button class="btn btn-success" id="saveButton">Сохранить</button>
        <button class="btn btn-danger" id="cancelButton">Отменить</button>
    </div>

    <div class="row">
        <div class="col-md-12">
            <div class="card">
                <div class="card-content">
                    <div class="card-body table-responsive">

                        <table id="editableTable" class="table table-bordered table-sm">

                            <thead>
                            <!-- Строка удаления столбцов -->
                            <tr id="removeRow">
                                @foreach ($headers as $index => $header)
                                    <th>
                                        <span class="btn btn-danger btn-sm remove-column-btn" attr-number="{{ $index }}">&#10006;</span>
                                    </th>
                                @endforeach
                                <th></th> <!-- Пустая ячейка для столбца действий -->
                            </tr>

                            <!-- Заголовки столбцов -->
                            <tr>
                                @foreach ($headers as $header)
                                    <th class="editable-cell" user_id="{{$header['user_id'] ? $header['user_id'] : 0}}">
                                        <div class="content">{!! $header['header'] !!}</div>
                                        <div class="user-info">
                                        </div>
                                    </th>
                                @endforeach
                                <th>Взаимодействие</th>
                            </tr>
                            </thead>
                            <tbody>
                            <!-- Данные строк -->

                            @foreach ($rows as $row)
                                <tr>
                                    @foreach ($headers as $header)
                                        <td class="editable-cell" user_id="{{$row[$header['header']]['user_id'] ? $row[$header['header']]['user_id'] : 0}}">
                                            <div class="content">{!! $row[$header['header']]['data'] ?? '' !!}</div>
                                            <div class="user-info">
                                                @if($row[$header['header']]['user_id'] != null && $row[$header['header']]['user_id'] != 0)
                                                    <p><b>Ответственный:</b> {{getUserById($row[$header['header']]['user_id'])}}</p>
                                                @endif
                                            </div>
                                        </td>
                                    @endforeach
                                    <td><button class="btn btn-danger btn-sm delete-row">&#10006;</button></td>
                                </tr>
                            @endforeach
                            </tbody>

{{--                            <thead>--}}

{{--                                <tr id="removeRow">--}}
{{--                                    <th><span class="remove-column-btn" attr-number="0">&#10006;</span></th>--}}
{{--                                    <th><span class="remove-column-btn" attr-number="1">&#10006;</span></th>--}}
{{--                                    <th><span class="remove-column-btn" attr-number="2">&#10006;</span></th>--}}
{{--                                    <th></th>--}}
{{--                                </tr>--}}
{{--                                <tr>--}}
{{--                                    <th contenteditable="true">Name</th>--}}
{{--                                    <th contenteditable="true">Quantity</th>--}}
{{--                                    <th contenteditable="true">Price</th>--}}
{{--                                    <th>Actions</th>--}}
{{--                            </tr>--}}
{{--                            </thead>--}}
{{--                            <tbody>--}}
{{--                                <tr>--}}
{{--                                    <td contenteditable="true">Item 2</td>--}}
{{--                                    <td contenteditable="true">20</td>--}}
{{--                                    <td contenteditable="true">$200</td>--}}
{{--                                    <td><button class="btn btn-danger btn-sm delete-row">&#10006;</button></td>--}}
{{--                                </tr>--}}
{{--                            </tbody>--}}
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/quill@2.0.2/dist/quill.js"></script>
    <script>

    </script>
@endsection
