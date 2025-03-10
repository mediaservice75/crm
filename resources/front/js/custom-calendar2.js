import * as FilePond from 'filepond';
import 'filepond/dist/filepond.min.css';

import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';
import {user} from "../extensions/feather-icons/feather";
const Swal = require('sweetalert2');

if (document.getElementById('calendar')) {


    let goalFile = document.querySelector('#goalFiles');
    const goalsFile = FilePond.create(goalFile, {
        'labelIdle': 'Перетащите свои файлы в эту область или <span class="filepond--label-action"> Нажмите сюда </span>',
        credits: false,
        allowMultiple: true,
        instantUpload: false,
        allowProcess: true,
    });


    function resetCreateEvent() {
        document.getElementById("newGoal").reset();
        if (!$(".user-form").hasClass('show')) {
            $(".user-form").addClass('show');
        }
        $("#user_id").select2();
        goalsFile.removeFiles();
        startDatePicker.update({
            timepicker: true,
        });
        endDatePicker.update({
            timepicker: true,
        });
        $("#remind-rules").css('display', 'none');
        $("#remind-datepicker").attr('disabled', 'yes');
        $("#remind-datepicker").val('');
        $('#remind-date-hidden').val($("#tomorrow").val());
        $("#recurring-rules").css('display', 'none');
        $('span.freq-selection').text('день(я,ей)');
        $('#monthday-select,#bymonth-select,#weekday-select').hide();
        $('input[name="interval"]').val("1");
        $('input[name="count"]').val("1");
        $('select[name="freq"]').val('daily');
        $('input[id="until-select"]').prop('checked', false);
        $('input[id="end-no"]').prop('checked', true).change();

    }

    function showToast(text, color) {
        Toastify({
            text: text,
            duration: 2000,
            close: true,
            gravity: "top",
            position: "right",
            backgroundColor: color,
        }).showToast();
    }

    let startDatePicker = new AirDatepicker('#start-date-datepicker', {
        timepicker: true,
        inline: true,
        altFieldDateFormat: 'yyyy-MM-dd',
        altField: '#start-date-hidden',
        onSelect: function onSelect(fd, date, inst) {
            let dateSelected = fd.date;
            let dtstartString = dateSelected.getFullYear() + ('0' + (dateSelected.getMonth() + 1)).slice(-2) + ('0' + dateSelected.getDate()).slice(-2);
            let timeStartString = 'T' + ('0' + dateSelected.getHours()).slice(-2) + '' + ('0' + dateSelected.getMinutes()).slice(-2) + '00Z';

            $("#start-date-hidden").val(dtstartString + timeStartString);
        }
    });

    let endDatePicker = new AirDatepicker('#end-date-datepicker', {
        inline: true,
        timepicker: true,
        // startDate:
    });

    let endDatePickerModal = new AirDatepicker('#end-date', {
        isMobile: true,
        autoClose: true,
        dateFormat: 'dd.MM.yyyy',
        onSelect: function onSelect(fd, date, inst) {
            let dateSelected = fd.date;
            let dtEndString = dateSelected.getFullYear() + ('0' + (dateSelected.getMonth() + 1)).slice(-2) + ('0' + dateSelected.getDate()).slice(-2);
            let timeEndString = 'T' + ('0' + dateSelected.getHours()).slice(-2) + '' + ('0' + dateSelected.getMinutes()).slice(-2) + '00Z';

            $("#end-date-hidden").val(dtEndString + timeEndString);
        }
    });

    let today = new Date();
    today.setMinutes(0);

    let remindDate = new AirDatepicker('#remind-datepicker', {
        isMobile: true,
        autoClose: true,
        timepicker: true,
        minDate: today,
        minutesStep: 30,
        dateFormat: 'dd.MM.yyyy',
        altFieldDateFormat: 'yyyy-MM-dd HH:mm:00',
        altField: '#remind-date-hidden'
    });


    $("#repeatGoalC").change(function (event) {

        if ($("#recurring").hasClass('d-none')) {
            $("#recurring").removeClass('d-none');
        } else {
            $("#recurring").addClass('d-none');
        }
    });

    $("input[name='color']").change(function () {
        $("#hidden-color").val($(this).val());
    });


    document.addEventListener('DOMContentLoaded', function () {

        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('input[name="_token"]').val()
            }
        });

        var calendarEl = document.getElementById('calendar');
        var url = '/calendar/getGoals';
        var calendar = new FullCalendar.Calendar(calendarEl, {
            locale: 'ru',
            firstDay: 1,

            weekNumbers: true,
            headerToolbar: {
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth'
            },
            initialView: 'timeGridWeek',
            // eventDidMount: function(info) {
            //     var tooltip = new Tooltip(info.el, {
            //         title: info.event.extendedProps.exposed,
            //         placement: 'top',
            //         trigger: 'hover',
            //         container: 'body'
            //     });
            // },
            eventContent: function (arg) {
                let container = document.createElement('div')
                container.className = 'm-1'

                let time = document.createElement('p')
                time.className = 'mb-0 font-bold'
                let title = document.createElement('p')
                title.className = 'mb-2'
                let status = document.createElement('span')


                time.innerHTML = arg.timeText;
                container.appendChild(time)
                title.innerHTML = arg.event.title;
                container.appendChild(title)


                if (arg.event.extendedProps.customRrule == 0) {
                    if (arg.event.extendedProps.status == 0) {
                        status.innerHTML = 'Статус: Не выполнена';
                    } else if (arg.event.extendedProps.status == 1) {
                        status.innerHTML = 'Статус: Выполнена';
                    } else {
                        status.innerHTML = 'Статус: Просрочена';
                    }
                } else {
                    status.innerHTML = 'Повторяющаяся задача';
                }

                container.appendChild(status)

                let arrayOfDomNodes = [container]
                return {domNodes: arrayOfDomNodes}
            },
            events: {
                url: url,
                extraParams: function () {
                    return {
                        view: localStorage.getItem('viewCalendar'),
                        idU: $("#calendar_user_hidden").val(),
                    };
                }
            },
            eventTimeFormat: {
                hour: '2-digit',
                minute: '2-digit',
                meridiem: false
            },
            nowIndicator: true,
            displayEventEnd: true,
            dayMaxEventRows: true,
            selectable: true,
            selectMirror: true,
            select: function (start) {

                $('#createGoal').modal('toggle');

                if (calendar.view.type === 'dayGridMonth') {
                    endDatePicker.selectDate(moment(moment(start.end).subtract(1, 'days')).add(1, 'h'), {
                        updateTime: true
                    });
                } else {
                    endDatePicker.selectDate(start.end, {
                        updateTime: true
                    });
                }

                let checked = 0;
                startDatePicker.selectDate(start.start, {
                    updateTime: true
                });


                document.getElementById("allDayC").addEventListener("change", function () {
                    if (this.checked == true) {
                        startDatePicker.update({
                            timepicker: false,
                        });
                        endDatePicker.update({
                            timepicker: false,
                        });
                        checked = 1;
                    } else {
                        startDatePicker.update({
                            timepicker: true,
                        });
                        endDatePicker.update({
                            timepicker: true,
                        });
                        checked = 0;
                    }
                });


                document.getElementById("saveG").onclick = function () {

                    let start_date, end_date;

                    if (checked) {
                        start_date = moment(startDatePicker.selectedDates[0]).format('YYYY-MM-DD 00:00:00');
                        end_date = moment(moment(endDatePicker.selectedDates[0]).add(1, 'days')).format('YYYY-MM-DD 00:00:00');
                    } else {
                        start_date = moment(startDatePicker.selectedDates[0]).format('YYYY-MM-DD HH:mm:ss');
                        end_date = moment(endDatePicker.selectedDates[0]).format('YYYY-MM-DD HH:mm:ss');
                    }

                    if (end_date < start_date) {
                        showToast("Дата конца задачи не может быть меньше начала", "linear-gradient(to right, #ED213A, #93291E)");
                        return;
                    }

                    let isMySelf = $("input[name='isMySelf']").val();
                    let user_id = $("#user_id").val();
                    let color = $("#hidden-color").val();
                    let rrule = $("#rrule").val();

                    if (isMySelf == 0 && user_id == 0) {
                        showToast("Выберите для кого создается задача!", "linear-gradient(to right, #ED213A, #93291E)");
                        return;
                    }

                    if (color == '#ffffff') {
                        showToast("Белый цвет запрещен 😢", "linear-gradient(to right, #ED213A, #93291E)");
                        return;
                    }

                    let text = $("#text").val();
                    let fd = new FormData();
                    let pondFiles = goalsFile.getFiles();

                    if (pondFiles.length > 0) {
                        for (var i = 0; i < pondFiles.length; i++) {
                            fd.append('filepond[]', pondFiles[i].file);
                        }
                    }

                    if ($('input[name="remind-goal"]').prop("checked") == true) {
                        fd.append('remind_at', $("#remind-date-hidden").val());
                    } else {
                        fd.append('remind_at', '0');
                    }

                    fd.append('isMySelf', isMySelf);
                    fd.append('deadline', end_date);
                    fd.append('start_date', start_date);
                    fd.append('user_id', user_id);
                    fd.append('text', text);
                    fd.append('color', color);
                    fd.append('allDay', checked);
                    fd.append('rrule', rrule);

                    $.ajax({
                        url: '/goals',
                        type: "POST",
                        contentType: false,
                        processData: false,
                        cache: false,
                        data: fd,
                        success: function (response) {
                            $('#createGoal').modal('toggle');
                            $('#newGoal').trigger('reset');
                            $('.user-form').addClass('show');
                            $("input[name='isMySelf']").val(0);
                            calendar.refetchEvents();
                            resetCreateEvent();

                            showToast("Задача успешно создана 👌", "linear-gradient(to right, #00B560, #00914D)");
                            calendar.unselect();
                        },
                        error: function (error) {
                            if (error.responseJSON.errors) {
                                $("#userError").html(error.responseJSON.errors.user_id);
                                $("#textError").html(error.responseJSON.errors.text);
                            }
                        },

                    });
                };

            },
            editable: true,
            eventDrop: function (info) {
                let id = info.event.id;

                let start_date;
                let end_date;

                if (info.event.allDay) {
                    start_date = moment(info.event.start).format('YYYY-MM-DD');
                    end_date = moment(info.event.end).format('YYYY-MM-DD');
                } else {
                    start_date = moment(info.event.start).format('YYYY-MM-DD HH:mm:ss');
                    end_date = moment(info.event.end).format('YYYY-MM-DD HH:mm:ss');
                }


                $.ajax({
                    url: '/calendar/goal-update/' + id,
                    type: "PATCH",
                    data: {
                        'start_date': start_date,
                        'deadline': end_date,
                    },
                    success: function (response) {
                        showToast("Задача успешно обновлена 👌", "linear-gradient(to right, #00B560, #00914D)");
                    },
                    error: function (error) {
                        showToast("При обновлении задачи, произошла ошибка 😢", "linear-gradient(to right, #ED213A, #93291E)");
                    },

                });
            },
            eventClick: function (info) {

                let id = info.event.id;
                $.ajax({
                    url: '/calendar/getGoal/' + id,
                    type: "GET",
                    success: function (response) {

                        $("#idGoal").html(response.id);
                        $("#textGoal").html(response.title);
                        $("#startGoal").html(moment(response.start).format('DD.MM.YYYY г. / HH:mm'));
                        $("#endGoal").html(moment(response.end).format('DD.MM.YYYY г. / HH:mm'));
                        $("#exposedGoal").html(response.exposed);
                        $("#userGoal").html(response.user);
                        $("#clientGoal").html(response.client);
                        if (response.files == 0) {
                            $("#files").html("<span class='text-danger'>Файлы не были загружены</span>")
                        } else {
                            $("#files").html("<a class='btn btn-success download-zip mt-2' attr-id='" + response.id + "'>Скачать</a>")
                        }
                        if (response.status == 1) {
                            $("#status-goal").html("Выполнено");
                            if ($("#status-goal").hasClass('bg-danger')) {
                                $("#status-goal").removeClass('bg-danger');
                                $("#status-goal").addClass('bg-success');
                            }
                            $("#completeGoal").attr('disabled', 'disabled');
                            $("#completeGoal").addClass('disabled');
                        } else if (response.status == 0) {
                            $("#status-goal").html("Не выполнено");
                            if ($("#status-goal").hasClass('bg-success')) {
                                $("#status-goal").removeClass('bg-success');
                                $("#status-goal").addClass('bg-danger');
                            }
                            $("#completeGoal").removeAttr('disabled');
                            if ($("#completeGoal").hasClass('disabled')) {
                                $("#completeGoal").removeClass('disabled');
                            }
                        } else {
                            $("#status-goal").html("Просрочена");
                            if ($("#status-goal").hasClass('bg-success')) {
                                $("#status-goal").removeClass('bg-success');
                                $("#status-goal").addClass('bg-danger');
                            }
                            $("#completeGoal").attr('disabled', 'disabled');
                            $("#completeGoal").addClass('disabled');
                        }
                        $(".action-goal").each(function (index) {
                            $(this).attr('attr-id', response.id);
                        });
                        $('#viewGoal').modal('toggle');
                    },
                    error: function (error) {
                        showToast("Неожиданная ошибка, при просмотре задачи. Обратитесь к администратору 😢", "linear-gradient(to right, #ED213A, #93291E)");
                    },

                });

                document.getElementById("deleteGoal").onclick = function () {
                    Swal.fire({
                        title: 'Вы действительно хотите удалить задачу? 🥺',
                        text: "Данное действие невозможно отменить!",
                        icon: 'question',
                        showCancelButton: true,
                        confirmButtonColor: '#31ce36',
                        cancelButtonColor: '#f25961',
                        confirmButtonText: 'Удалить',
                        cancelButtonText: 'Отмена',
                    }).then((result) => {
                        if (result.isConfirmed) {
                            let id = $(this).attr('attr-id');
                            $.ajax({
                                url: '/calendar/goal-delete/' + id,
                                type: "DELETE",
                                success: function (response) {
                                    calendar.refetchEvents();
                                    $('#viewGoal').modal('toggle');
                                    showToast("Задача успешно удалена 👌", "linear-gradient(to right, #00B560, #00914D)");
                                },
                                error: function (error) {
                                    showToast(error.responseJSON.error, "linear-gradient(to right, #ED213A, #93291E)");
                                },

                            });
                        }
                    })
                }

                document.getElementById("completeGoal").onclick = function () {
                    let id = $(this).attr('attr-id');
                    $.ajax({
                        url: '/goals/complete/' + id,
                        type: "POST",
                        success: function (response) {
                            showToast("Задача успешно обновлена 👌", "linear-gradient(to right, #00B560, #00914D)");
                            $("#status-goal").html("Выполнено");
                            if ($("#status-goal").hasClass('bg-danger')) {
                                $("#status-goal").removeClass('bg-danger');
                                $("#status-goal").addClass('bg-success');
                            }
                            $("#completeGoal").attr('disabled', 'disabled');
                            $("#completeGoal").addClass('disabled');
                            calendar.refetchEvents();
                        },
                        error: function (error) {
                            showToast("При обновлении задачи, произошла ошибка 😢", "linear-gradient(to right, #ED213A, #93291E)");
                        },

                    });
                }

            },
            eventResizableFromStart: true,
            eventDurationEditable: true,
            eventResize: function (info) {
                let id = info.event.id;
                let start_date = moment(info.event.start).format('YYYY-MM-DD HH:mm:ss');
                let end_date = moment(info.event.end).format('YYYY-MM-DD HH:mm:ss');
                $.ajax({
                    url: '/calendar/goal-update/' + id,
                    type: "PATCH",
                    data: {
                        'start_date': start_date,
                        'deadline': end_date,
                    },
                    success: function (response) {
                        showToast("Задача успешно обновлена 👌", "linear-gradient(to right, #00B560, #00914D)");
                    },
                    error: function (error) {
                        showToast("При обновлении задачи, произошла ошибка 😢", "linear-gradient(to right, #ED213A, #93291E)");
                    },

                });
            }
        });

        calendar.render();
        console.log($('.fc-toolbar-chunk')[2]);
        if ($(window).width() < 500) {
            calendar.changeView('timeGridDay');
            $(".fc-today-button").css('display', 'none');

            $('.fc-toolbar-chunk').each(function (index) {

                if (index == 2) $(this).css('display', 'none');
            });
            calendar.setOption('height', 800);
        }


        $("#createGoalWithoutCalendar").click(function () {
            let currentDate = new Date();
            calendar.select(currentDate);
        });

        $('input[name="remind-goal"]').change(function () {

            if ($(this).prop('checked') == true) {
                $('#remind-rules').slideDown();
            } else {
                $('#remind-rules').hide();
            }

        });

        $('input[name="remind-rules"]').change(function () {

            var selectedRadio = $(this).val();

            $('input[name="remind-rules"]').each(function () {

                if ($(this).val() === selectedRadio) {

                    $('#remind-date-hidden').val(selectedRadio);

                    if ($(this).val() === 'another') {
                        $("#remind-datepicker").removeAttr('disabled');
                    } else {
                        $("#remind-datepicker").attr('disabled', 'yes');
                        $("#remind-datepicker").val('');
                    }
                }
            });
        });


        if (localStorage.getItem('viewCalendar') == null) {
            $("#only-not-complete").attr('checked', false);
        } else {
            if (localStorage.getItem('viewCalendar') == 0) {
                $("#only-not-complete").attr('checked', true);
            } else {
                $("#only-not-complete").attr('checked', false);
            }
        }

        $("#only-not-complete").change(function () {
            let check = $(this).prop('checked');
            if (check) {
                localStorage.setItem('viewCalendar', 0);
                calendar.refetchEvents();
            } else {
                localStorage.setItem('viewCalendar', 1);
                calendar.refetchEvents();
            }
        });

        $("#calendar_user").change(function () {
            $("#calendar_user_hidden").val($(this).val());
            calendar.refetchEvents();
        })

    });

}