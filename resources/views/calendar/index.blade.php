@extends('layout.layout')
@section('page-heading')
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fullcalendar/3.4.0/fullcalendar.css"/>

    <div class="row align-items-center">
        <div class="col-12 col-md-4">
            <h3>Календарь задач</h3>

        </div>

        <div class="col-12 col-md-8 text-end">

            <a href="{{route('goals.deadline')}}" class="btn btn-sm btn-danger">Просроченные задачи <span
                    class="badge bg-transparent">{{countExpiredGoal()}}</span></a>
            <a href="{{route('goals.send')}}" class="btn btn-sm btn-primary">Отправленные задачи</a>
            <a id="createGoalWithoutCalendar" class="btn btn-sm btn-success">Создать задачу</a>
        </div>
    </div>
@endsection


@section('content')

<div class="modal fade" id="createGoal" tabindex="-1" aria-labelledby="createGoalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-scrollable modal-xl modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header border-bottom-0 pb-0">
                <h1 class="modal-title fs-5" id="createGoalLabel">Создание задачи</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">

                <form method="POST" enctype="multipart/form-data" id="newGoal">
                    @csrf

                    <div class="row">
                        <div class="col-lg-6 col-md-12">
                            <div class="row">
                                <div class="col-12">
                                    <div class="form-group">
{{--                                        <label>Выберите цвет отображения задачи: </label>--}}
                                        <input type="hidden"
                                               name="hidden-color" id="hidden-color" value="#1572e8">
                                        <div class="form-group">
                                            <p>Выберите цвет отображения задачи:</p>
                                            <div class="flex">
                                                <div class="form-check form-check-primary">
                                                    <input class="form-check-input" type="radio" name="color" id="color" checked="" value="#1572e8">
                                                </div>
                                                <div class="form-check form-check-secondary">
                                                    <input class="form-check-input" type="radio" name="color" id="color" value="#6861ce">
                                                </div>
                                                <div class="form-check form-check-info">
                                                    <input class="form-check-input" type="radio" name="color" id="color" value="#48abf7">
                                                </div>
                                                <div class="form-check form-check-warning">
                                                    <input class="form-check-input" type="radio" name="color" id="color" value="#ffad46">
                                                </div>
                                                <div class="form-check form-check-danger">
                                                    <input class="form-check-input" type="radio" name="color" id="color" value="#f25961">
                                                </div>
                                                <div class="form-check form-check-success">
                                                    <input class="form-check-input" type="radio" name="color" id="color" value="#31ce36">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="row mt-3">
                                <div class="col-12">
                                    <input class="form-check-input me-1" name="isMySelfC" id="isMySelfC" type="checkbox"
                                           value=""> Задача
                                    самому себе
                                    <input type="hidden" name="isMySelf" value="0">
                                </div>
                            </div>

                            <div class="row mt-3 user-form show">
{{--                                <div class="col-lg-12 col-md-12">--}}
{{--                                    <div class="form-group">--}}
{{--                                        <label>Выберите отдел: </label>--}}
{{--                                        <select class="js-example-basic-single is-invalid" name="group_id"--}}
{{--                                                id="group_id">--}}
{{--                                            <option value="">Не выбрано</option>--}}
{{--                                            @foreach($groups as $group)--}}
{{--                                                <option value="{{$group->id}}">{{$group->name}}</option>--}}
{{--                                            @endforeach--}}
{{--                                        </select>--}}

{{--                                    </div>--}}
{{--                                </div>--}}

                                <div class="col-lg-12 col-md-12 mt-3">
                                    <div class="form-group">
                                        <label>Выберите ответственного за данную задачу: </label>
                                        <select class="js-example-basic-single is-invalid"
                                                name="user_id[]" id="user_id" multiple="multiple">
{{--                                            <option value="0">Не выбрано</option>--}}
                                            @if(count($users) != 0)
                                                @foreach($users as $group)
                                                    @foreach($group->roles as $role)
                                                        @foreach($role->users as $user)
                                                            <option value="{{$user->id}}">{{$user->getFullName()}} ({{$user->role->name}})</option>
                                                        @endforeach
                                                    @endforeach
                                                @endforeach
                                            @endif
                                        </select>
                                        <div class="invalid-feedback d-block">
                                            <span id="userError"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="row mt-3">
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <label>Введите описание задачи: </label>
                                        <textarea
                                            class="form-control"
                                            id="text" name="text" rows="3"
                                            placeholder="Введите описание задачи..."></textarea>
                                        <div class="invalid-feedback d-block">
                                            <span id="textError"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div class="row mt-3">
                                <div class="col-12 ">
                                    <div class="form-group">
                                        <label>Загрузите дополнительные файлы: </label>
                                        <input type="file" class="filepond" id="goalFiles" name="filepond[]"
                                               multiple>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-6 col-md-12">

                            <p class="text-primary font-bold">Добавление повтора, напоминания задачи</p>

                            <div class="row mt-3">
                                <div class="col-12">
                                    <input class="form-check-input me-1" name="allDayC" id="allDayC" type="checkbox"
                                           value=""> Весь день
                                    <input type="hidden" name="allDay" value="0">
                                </div>
                            </div>

                            <div class="row mt-3">
                                <div class="col-lg-6 col-md-12">
                                    <label for="start-date-datepicker" class="mb-2">Выберите начало задачи:</label>
                                    <div id="start-date-datepicker"></div>
                                    <input type="hidden" name="start-date-hidden" id="start-date-hidden">
                                </div>
                                <div class="col-lg-6 col-md-12">
                                    <label for="end-date-datepicker" class="mb-2">Выберите конец задачи:</label>
                                    <div id="end-date-datepicker"></div>
                                </div>

                            </div>

                            <div class="mt-3">
                                <div class="form-check form-switch">
                                    <label class="form-check-label" for="remind-goal">Напоминание</label>
                                    <input class="form-check-input" name="remind-goal" type="checkbox">
                                </div>

                                <input type="hidden" name="remind-date-hidden" id="remind-date-hidden"
                                       value="{{now()->addDay()->format('Y-m-d H:00:00')}}"/>

                                <div id="remind-rules" class="mt-3" style="display: none;">
                                    <p class="font-bold mt-3 text-primary">Когда напомнить?</p>

                                    <div class="form-check ">
                                        <div class="d-flex align-items-center">
                                            <input class="form-check-input me-2" type="radio" name="remind-rules"
                                                   value="{{now()->addDay()->format('Y-m-d H:00:00')}}"
                                                   id="tomorrow" checked="checked">
                                            <span>Завтра в {{now()->format('H:00')}}</span>
                                        </div>
                                    </div>


                                    <div class="form-check mt-2">
                                        <div class="d-flex align-items-center">
                                            <input class="form-check-input me-2" type="radio" name="remind-rules"
                                                   value="{{now()->addWeek()->format('Y-m-d H:00:00')}}"
                                                   id="next-week">
                                            <span>Через неделю ({{now()->addWeek()->format('d.m.Y в H:00')}})</span>
                                        </div>
                                    </div>

                                    <div class="form-check mt-2">
                                        <div class="d-flex align-items-center">
                                            <input class="form-check-input me-2" type="radio" name="remind-rules"
                                                   value="another" id="remind-select">
                                            <span>Выбрать дату и время: </span>
                                            <input class="form-control-sm form-control d-inline ms-3 me-3 w-auto"
                                                   type="text" name="remind-datepicker" id="remind-datepicker" disabled="yes">

                                        </div>
                                    </div>
                                </div>

                            </div>


                            <div class="mt-3">

                                <div class="form-check form-switch">
                                    <label class="form-check-label" for="event-recurring">Повторяющаяся задача</label>
                                    <input class="form-check-input" name="event-recurring" type="checkbox">
                                </div>

                                <div id="recurring-rules" style="display:none;" class="mt-3">
                                    <p>Переодичность задачи
                                        <select name="freq" class="form-select">
                                            <option value="daily" class="days" attr-name="день(я,ей)">Каждый день
                                            </option>
                                            <option value="weekly" class="weeks" attr-name="неделя(ь)(и)">Каждую
                                                неделю
                                            </option>
                                            <option value="monthly" class="months" attr-name="месяц">Каждый месяц
                                            </option>
                                            <option value="yearly" class="years" attr-name="год">Каждый год</option>
                                        </select>
                                    </p>
                                    <div class="d-flex align-items-center">
                                        <span>Повоторять с интервалом</span>
                                        <input type="number" class="form-control d-inline w-25 ms-3 me-3"
                                               name="interval" value="1" min="1">
                                        <span class="freq-selection"> день(я,ей)</span>
                                    </div>


                                    <div id="weekday-select" class="weeks-choice mt-3" role="toolbar"
                                         style="display:none;">
                                        <p>Дни повторения</p>
                                        <input type="checkbox" class="btn btn-check" id="MO" name="MO">
                                        <label class="btn btn-outline-primary" for="MO">Пн</label>
                                        <input type="checkbox" class="btn btn-check" id="TU" name="TU">
                                        <label class="btn btn-outline-primary" for="TU">Вт</label>
                                        <input type="checkbox" class="btn btn-check" id="WE" name="WE">
                                        <label class="btn btn-outline-primary" for="WE">Ср</label>
                                        <input type="checkbox" class="btn btn-check" id="TH" name="TH">
                                        <label class="btn btn-outline-primary" for="TH">Чт</label>
                                        <input type="checkbox" class="btn btn-check" id="FR" name="FR">
                                        <label class="btn btn-outline-primary" for="FR">Пт</label>
                                        <input type="checkbox" class="btn btn-check" id="SA" name="SA">
                                        <label class="btn btn-outline-primary" for="SA">Сб</label>
                                        <input type="checkbox" class="btn btn-check" id="SU" name="SU">
                                        <label class="btn btn-outline-primary" for="SU">Вс</label>
                                    </div>


                                    <!-- BYMONTH -->
                                    <div id="bymonth-select" class="btn-toolbar years-choice" role="toolbar"
                                         style="display:none;">
                                        <p class="text-primary">В какой месяц(ы) года задача должна повторяться?</p>


                                        <div class="form-check mt-2 w-100">
                                            <div class="d-flex align-items-center">
                                                <input class="form-check-input me-2" type="radio" name="yearly-options"
                                                       id="yearly-one-month"
                                                       checked="checked"/>
                                                <span>Один месяц в году</span>
                                            </div>
                                        </div>

                                        <div class="d-flex align-items-center mt-2">
                                            <span>Каждое </span>
                                            <select
                                                class="form-select d-inline ms-3 w-auto form-control-sm yearly-one-month"
                                                name="yearly-bymonthday" id="yearly-bymonthday">
                                                @for($i=1; $i<=31; $i++)
                                                    @if($i == 1)
                                                        <option value="{{$i}}" selected="yes">{{$i}}</option>
                                                    @else
                                                        <option value="{{$i}}">{{$i}}</option>
                                                    @endif
                                                @endfor
                                            </select>
                                            <select
                                                class="form-select d-inline ms-3 w-auto form-control-sm yearly-one-month"
                                                name="yearly-bymonth" id="yearly-bymonth">
                                                @foreach(getMonths() as $key => $month)
                                                    @if ($loop->index == 0)
                                                        <option value="{{$key}}" selected="yes">{{$month}}</option>
                                                    @else
                                                        <option value="{{$key}}">{{$month}}</option>
                                                    @endif
                                                @endforeach
                                            </select>
                                        </div>

                                        <div class="form-check mt-3 w-100">
                                            <div class="d-flex align-items-center">
                                                <input class="form-check-input me-2" type="radio" name="yearly-options"
                                                       id="yearly-multiple-months"/>
                                                <span>Несколько месяцев в году</span>
                                            </div>
                                        </div>


                                        <div style="width: 100%;" class="mt-2 yearly-multiple-months">
                                            @foreach(getAbbrMonths() as $key => $month)
                                                @if ($loop->first)
                                                    <div style="width: 100%"> @endif

                                                        @if ($loop->index % 6 == 0 && !$loop->first)
                                                            <div class="clearfix"></div></div>
                                                    <div style="width: 100%"> @endif
                                                        <input type="checkbox" class="btn btn-check" id="yMonth{{$key}}"
                                                               name="yMonth{{$key}}" data-month-num="{{$key}}"
                                                               disabled="disabled">
                                                        <label class="btn btn-outline-primary" for="yMonth{{$key}}"
                                                               style="display: block; float: left; width: 14.5%; margin:3px; padding: 0; ">{{$month}}</label>


                                                        @if ($loop->last)
                                                            <div class="clearfix"></div></div> @endif
                                            @endforeach
                                        </div>


                                        <div class="form-check mt-3">
                                            <div class="d-flex align-items-center">
                                                <input class="form-check-input me-2" type="radio" name="yearly-options"
                                                       id="yearly-precise"/>
                                                <span>В след. дни: </span>
                                            </div>
                                        </div>
                                        <div class="d-flex align-items-center mt-2">
                                            <select
                                                class="form-select d-inline ms-2 w-auto form-control-sm yearly-precise"
                                                name="yearly-bysetpos" disabled="disabled">
                                                <option value="1" selected="selected">Первый</option>
                                                <option value="2">Второй</option>
                                                <option value="3">Третий</option>
                                                <option value="4">Четвертый</option>
                                                <option value="-1">Последний</option>
                                            </select>
                                            <select
                                                class="form-select d-inline ms-2 w-auto form-control-sm yearly-precise"
                                                name="yearly-byday" disabled="disabled">
                                                <option value="MO">Понедельник</option>
                                                <option value="TU">Вторник</option>
                                                <option value="WE">Среда</option>
                                                <option value="TH">Четверг</option>
                                                <option value="FR">Пятница</option>
                                                <option value="SA">Суббота</option>
                                                <option value="SU">Воскресенье</option>
                                                <option value="SU,MO,TU,WE,TH,FR,SA" selected="selected">День месяца
                                                </option>
                                                <option value="MO,TU,WE,TH,FR">Будние дни</option>
                                                <option value="SU,SA">Выходные дни</option>
                                            </select>
                                            <span class="ms-2">в</span>

                                            <select
                                                class="form-select d-inline ms-2 w-auto form-control-sm yearly-precise"
                                                name="yearly-bymonth-with-bysetpos-byday"
                                                id="yearly-bymonth-with-bysetpos-byday" disabled="disabled">
                                                @foreach(getMonths() as $key => $month)
                                                    @if ($loop->index == 0)
                                                        <option value="{{$key}}" selected="yes">{{$month}}</option>
                                                    @else
                                                        <option value="{{$key}}">{{$month}}</option>
                                                    @endif
                                                @endforeach
                                            </select>
                                        </div>
                                    </div>

                                    <!-- BYMONTHDAY -->
                                    <div id="monthday-select" class="btn-toolbar months-choice" role="toolbar"
                                         style="display:none;">


                                        <div class="form-check mt-2">
                                            <div class="d-flex align-items-center">
                                                <input class="form-check-input me-2" type="radio"
                                                       name="monthday-pos-select" value="monthday-selected"
                                                       id="monthday-selected" checked="checked"/>
                                                <span>В какой день(дни) событие должно повторяться?</span>
                                            </div>
                                        </div>

                                        <div style="width: 100%;" class="mt-3">
                                            @for($i=1; $i<=31; $i++)
                                                @if($i == 1)
                                                    <div style="width: 100%"> @endif

                                                        <input type="checkbox" class="btn btn-check" id="dMonth{{$i}}"
                                                               name="dMonth{{$i}}" data-day-num="{{$i}}">
                                                        <label class="btn btn-outline-primary" for="dMonth{{$i}}"
                                                               style="display: block; float: left; width: 12.5%; margin:3px; padding: 0; ">{{$i}}</label>
                                                        @if($i%7 == 0) </div>
                                                    <div style="width: 100%"> @endif
                                                        @if($i == 31) </div> @endif
                                            @endfor
                                        </div>
                                        <div class="form-check mt-2">
                                            <div class="d-flex align-items-center">
                                                <input class="form-check-input me-2" type="radio"
                                                       name="monthday-pos-select"
                                                       value="month-byday-pos-selected" id="month-byday-pos-selected"/>
                                                <span>В след. дни: </span>
                                                <select class="form-select d-inline ms-3 w-auto form-control-sm"
                                                        name="month-byday-pos" disabled="yes">
                                                    <option value="1" selected="selected">Первый</option>
                                                    <option value="2">Второй</option>
                                                    <option value="3">Третий</option>
                                                    <option value="4">Четвертый</option>
                                                    <option value="-1">Последний</option>
                                                </select>
                                                <select class="form-select d-inline ms-3 w-auto form-control-sm"
                                                        name="month-byday-pos-name" disabled="yes">
                                                    <option value="MO">Понедельник</option>
                                                    <option value="TU">Вторник</option>
                                                    <option value="WE">Среда</option>
                                                    <option value="TH">Четверг</option>
                                                    <option value="FR">Пятница</option>
                                                    <option value="SA">Суббота</option>
                                                    <option value="SU">Воскресенье</option>
                                                    <option value="SU,MO,TU,WE,TH,FR,SA" selected="selected">День
                                                        месяца
                                                    </option>
                                                    <option value="MO,TU,WE,TH,FR">Будние дни</option>
                                                    <option value="SU,SA">Выходные дни</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    <div id="until-rules" style="display:none;">
                                        <p class="font-bold mt-3 text-primary">Окончание задачи</p>

                                        <div class="form-check ">

                                            <div class="d-flex align-items-center">
                                                <input class="form-check-input me-2" type="radio" name="end-select"
                                                       value="not"
                                                       id="end-no" checked="checked">
                                                <span>Никогда</span>
                                            </div>
                                        </div>


                                        <div class="form-check mt-2">
                                            <div class="d-flex align-items-center">
                                                <input class="form-check-input me-2" type="radio" name="end-select"
                                                       value="count"
                                                       id="count-select">
                                                <span>После</span>
                                                <input autocomplete="off"
                                                       class="form-control-sm form-control d-inline ms-3 me-3 w-auto"
                                                       type="number" name="count" min="1" max="50" value="1" step="1">
                                                <span>потовра(ов)</span>
                                            </div>
                                        </div>

                                        <div class="form-check mt-2">
                                            <div class="d-flex align-items-center">
                                                <input class="form-check-input me-2" type="radio" name="end-select"
                                                       value="until" id="until-select">
                                                <span>Дата</span>
                                                <input class="form-control-sm form-control d-inline ms-3 me-3 w-auto"
                                                       type="text" name="until" id="end-date" disabled="yes">
                                                <input type="hidden" name="end-date-formatted" id="end-date-hidden"
                                                       value=""/>
                                            </div>
                                        </div>
                                    </div>

                                    <input type="hidden" name="rrule" value="" id="rrule"/>
                                </div>

                            </div>

                        </div>
                    </div>

                    <div class="row mt-3">
                        <div class="col-12 text-end">
                            <a class="btn btn-success me-2" id="saveG">Сохранить</a>
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Отмена</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>


<div class="modal fade" id="viewGoal" tabindex="-1" aria-labelledby="viewGoalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-scrollable modal-lg">
        <div class="modal-content">
            <div class="modal-header border-bottom-0 pb-0">
                <h1 class="modal-title fs-5" id="viewGoalLabel">Просмотр задачи</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <p>Текущий статус: <span class="badge bg-success ms-2" id="status-goal">Статус задачи</span></p>
                <p class="mb-1"><b class="text-primary">№ задачи: </b> <span id="idGoal"></span></p>
                <p class="mb-1"><b class="text-primary">Описание задачи: </b> <span id="textGoal"></span></p>
                <p class="mb-1"><b class="text-primary">Дата начала: </b> <span id="startGoal"></span></p>
                <p class="mb-1"><b class="text-primary">Дата конца: </b> <span id="endGoal"></span></p>
                <p class="mb-1"><b class="text-primary">Создал задачу: </b> <span id="exposedGoal"></span></p>
                <p class="mb-1"><b class="text-primary">Ответственный за задачу: </b> <span id="userGoal"></span></p>
                <p class="mb-1"><b class="text-primary">Клиент: </b> <span id="clientGoal"></span></p>
                <p class="mb-1"><b class="text-primary">Прикрепленные файлы: </b></p>
                <div id="files"></div>

                <div class="mt-4">
                    <a class="btn btn-success action-goal" attr-id="" id="completeGoal">Отметить как выполнено</a>
{{--                    <a class="btn btn-primary action-goal" attr-id="">Редактирование</a>--}}
                    <a class="btn btn-danger action-goal" attr-id="" id="deleteGoal">Удалить</a>
                </div>


                {{--                    <a class="btn btn-success download-zip" attr-id="">Скачать</a>--}}
            </div>
        </div>
    </div>
</div>


{{--    <div class="row">--}}
{{--        <div class="col-md-12">--}}
{{--            <div class="card">--}}
{{--                <div class="card-body">--}}
{{--                    --}}
{{--                </div>--}}
{{--            </div>--}}
{{--        </div>--}}
{{--    </div>--}}

    <div class="row">
        <div class="col-md-12">
            <div class="card">
                <div class="card-content">
                    <div class="card-body">
                        <div class="row mb-4 align-items-center">
                            <div class="col-lg-8 col-md-12">
                                <div class="form-check form-switch " style="font-size: 14px; font-weight: 400;">
                                    <label class="form-check-label" for="only-not-complete">Показывать только невыполненные задачи</label>
                                    <input class="form-check-input" name="only-not-complete" id="only-not-complete" type="checkbox">
                                </div>
                            </div>
                            <input type="hidden" id="calendar_user_hidden" value="{{auth()->user()->id}}">
{{--                            @if (auth()->user()->role->level <= 2)--}}
                            <div class="col-lg-4 col-md-12 text-end">
                                <div class="form-group">
{{--                                    <label>Выберите сотрудника: </label>--}}

                                    <select class="js-example-basic-single is-invalid form-select-sm"
                                            name="calendar_user" id="calendar_user" >
                                        @if(count($users) != 0)
                                            @foreach($users as $group)
                                                @foreach($group->roles as $role)
                                                    @foreach($role->users as $user)
                                                        @if(auth()->user()->id == $user->id)
                                                            <option value="{{$user->id}}" selected>{{$user->getFullName()}} ({{$user->role->name}})</option>
                                                        @else
                                                            <option value="{{$user->id}}">{{$user->getFullName()}} ({{$user->role->name}})</option>
                                                        @endif
                                                    @endforeach
                                                @endforeach
                                            @endforeach
                                        @endif
                                    </select>
                                </div>
                            </div>
{{--                            @endif--}}
                        </div>

                        <div id="calendar">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
<style>
    .select2-selection__rendered {
        padding-right: 28px !important;
    }
</style>

@endsection
