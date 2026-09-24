import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';

const Swal = require('sweetalert2');
global.$ = global.jQuery = require('jquery');
require('select2');
import * as FilePond from 'filepond';
import 'filepond/dist/filepond.min.css';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
import { DataTable } from "../extensions/simple-datatables";
import th from "air-datepicker/locale/th";


import Echo from 'laravel-echo';
import { wind } from "../extensions/feather-icons/feather";
import Pusher from 'pusher-js';
window.Pusher = Pusher;
window.axios = require('axios');
window.axios.defaults.headers.common['X-CSRF-TOKEN'] = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

import Toastify from 'toastify-js';
import "toastify-js/src/toastify.css";

// Toastify({
//     text: "<h5>Title toast</h5><p>Создана новая заявка №76236, фыолра ло флдыов лдфоывдл</p>",
//     className: "customToast",
//     duration: -1,
//     close: true,
//     escapeMarkup: false,
//
// }).showToast();

// Toaster('This is a blank toast!');

window.Echo = new Echo({
    broadcaster: 'pusher',
    key: process.env.MIX_PUSHER_APP_KEY,
    cluster: process.env.MIX_PUSHER_APP_CLUSTER,
    forceTLS: true,
    encrypted: true,
    auth: {
        headers: {
            'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
        }
    }
});

// console.log(window.location.origin);

let userId = window.Laravel.userId;

window.Echo.private(`claimInfo.${userId}`)
    .listen('.updated-claim', (e) => {
        console.log(e);
        Toastify({
            text: "<h5>Новое уведомление 🔔</h5>" +
                "<p>" + e.claim.text + "</p>",
            className: "customToast",
            duration: -1,
            destination: window.location.origin + e.claim.url,
            close: true,
            escapeMarkup: false,
        }).showToast();
    });


// window.Echo.channel("my-channel").listen("form-submitted", (event) => {
//     console.log(event);
// });


FilePond.registerPlugin(FilePondPluginImagePreview);


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


function getSum() {
    let sum = 0;
    let series = [];
    let labels = [];
    let labelsMonth = [];
    let pie = [];
    $('#plan-table tr td').each(function (index) {
        if (index === 3) {
            sum += +$(this).attr('amount').slice(0, -5);
            series.push(+$(this).attr('amount').slice(0, -5));
        } else if (index % 5 === 3) {
            sum += +$(this).attr('amount').slice(0, -5);
            series.push(+$(this).attr('amount').slice(0, -5));
        }

        if (index === 2) {
            labels.push($(this).text());
        } else if (index % 5 === 2) {
            labels.push($(this).text());
        }

        if (index === 1) {
            labelsMonth.push($(this).text());
        } else if (index % 5 === 1) {
            labelsMonth.push($(this).text());
        }

    });

    pie.push(series);
    pie.push(labels);
    pie.push(sum);
    pie.push(labelsMonth);


    return pie;

}


const inputElement = document.querySelector('#filepond');


const pond = FilePond.create(inputElement, {
    'labelIdle': 'Перетащите свои файлы в эту область или <span class="filepond--label-action"> Нажмите сюда </span>',
    credits: false,
    server: {
        url: '/upload-filepond',
        headers: {
            'X-CSRF-TOKEN': $('input[name="_token"]').val()
        }
    }
});

let inputElement2 = document.querySelectorAll('.filepond');
for (const element of inputElement2) {
    let pond2 = FilePond.create(element, {
        'labelIdle': 'Перетащите свои файлы в эту область или <span class="filepond--label-action"> Нажмите сюда </span>',
        credits: false,
        storeAsFile: true,
        server: {
            // url: '/upload-filepond',
            // headers: {
            //     'X-CSRF-TOKEN': $('input[name="_token"]').val()
            // }
        }
    });
}


new AirDatepicker('.datepicker', {
    isMobile: true,
    autoClose: true,
    timepicker: true,
    minDate: $.now(),
    altFieldDateFormat: 'yyyy-MM-dd HH:mm:00',
    altField: '#deadline'
});

if (document.getElementById('updated_at-datepicker')) {
    new AirDatepicker('.updated_at-datepicker', {
        isMobile: true,
        autoClose: true,
        timepicker: true,
        selectedDates: [new Date()],
        // minDate: $.now(),
        altFieldDateFormat: 'yyyy-MM-dd HH:mm:00',
        altField: '#updated_at'
    });
}

if (document.getElementById('report-datepicker')) {
    new AirDatepicker('#report-datepicker', {
        isMobile: true,
        autoClose: true,
        altFieldDateFormat: 'yyyy-MM-dd',
        altField: '#deadline'
    });
}

if (document.getElementById('deadlineClaim-datepicker')) {
    new AirDatepicker('.deadlineClaim', {
        isMobile: true,
        autoClose: true,
        timepicker: true,
        // minDate: $.now(),
        altFieldDateFormat: 'yyyy-MM-dd HH:mm:00',
        altField: '#deadlineClaim'
    });
}

if (document.getElementById('created_at-datepicker')) {
    new AirDatepicker('#created_at-datepicker', {
        isMobile: true,
        autoClose: true,
        timepicker: true,
        altFieldDateFormat: 'yyyy-MM-dd HH:mm:00',
        altField: '#created_at'
    });
}

if (document.getElementById('datepicker-range')) {
    new AirDatepicker('.datepicker-range', {
        isMobile: true,
        autoClose: true,
        range: true,
        dynamicRange: true,
        multipleDatesSeparator: ' | ',
        altFieldDateFormat: 'yyyy-MM-dd',
        altField: '#period-range'
    });
}

if (document.getElementById('range-ad-datepicker')) {
    new AirDatepicker('#range-ad-datepicker', {
        isMobile: true,
        autoClose: true,
        range: true,
        dynamicRange: true,
        multipleDatesSeparator: ' | ',
        altFieldDateFormat: 'yyyy-MM-dd',
        altField: '#range-ad-hidden'
    });
}



let datesPicker;


if (document.getElementById('month-datepicker')) {
    let monthDatepicker = new AirDatepicker('.month-datepicker', {
        isMobile: true,
        autoClose: true,
        view: 'months',
        minView: 'months',
        dateFormat: 'MMMM yyyy',
        altFieldDateFormat: 'yyyy-MM-01',
        altField: '#month',
        onSelect: function onSelect(fd, date, inst) {


            if (document.getElementById('dates-datepicker')) {


                console.log(datesPicker);
                if (datesPicker) {
                    try {
                        datesPicker.destroy();
                    } catch ($e) {
                        // $('#dates-datepicker').addAttr('disabled');
                        // console.log('error');
                    }
                }
                console.log(datesPicker);
                $('#dates-datepicker').val('');
                $('#dates-datepicker').removeAttr('disabled');


                var url = '/api/get-working-days/' + $("#month").val();
                $.getJSON(url, function (response) {

                    let dates = [];
                    response.forEach((res) => {
                        dates.push(new Date(res));

                    });


                    datesPicker = new AirDatepicker('#dates-datepicker', {
                        isMobile: true,
                        autoClose: true,
                        altFieldDateFormat: 'yyyy-MM-dd',
                        multipleDates: true,
                        multipleDatesSeparator: ' | ',
                        startDate: fd.date,
                        altField: '#countDays',
                        selectedDates: dates,
                    });
                    datesPicker.minDate = fd.date;
                    datesPicker.maxDate = new Date(fd.date.getFullYear(), fd.date.getMonth() + 1, 0);
                });

                // localStorage.setItem("datesPicker", datesPicker);
            }


        },
        unselectDate: function unselectDate(fd, date, inst) {
            console.log('unselect' + fd.date);
        }
    });
}




let selector = '.sidebar-menu ul.menu .sidebar-item';
let fullUrl = window.location.href;
var url = new URL(fullUrl);

let currentUrl = url.pathname.split('/');


if (url.pathname.split('/')[1] === '') {
    url = url.origin;
} else {
    url = url.origin + '/' + url.pathname.split('/')[1];
}


$(selector).each(function () {
    if ($(this).find('a').attr('href') === url) {
        $(selector).removeClass('active');
        $(this).removeClass('active').addClass('active');
    }
});


if (document.getElementById('phone')) {
    var elPhone = document.getElementById('phone');
    var maskOptions = {
        mask: '+{7}(000)000-00-00',
        lazy: true
    };
    var mask = IMask(elPhone, maskOptions);
}

if (document.getElementById('amount')) {

    var amountMask = IMask(document.getElementById('amount'), {
        mask: Number,  // enable number mask

        // other options are optional with defaults below
        scale: 2,  // digits after point, 0 for integers
        signed: false,  // disallow negative
        thousandsSeparator: ' ',  // any single char
        padFractionalZeros: false,  // if true, then pads zeros at end to the length of scale
        normalizeZeros: true,  // appends or removes zeros at ends
        radix: '.',  // fractional delimiter
        mapToRadix: ['.'],  // symbols to process as radix
    });
}
// amount

if (document.getElementById('date_of_birth')) {
    var dateMask = IMask(
        document.getElementById('date_of_birth'),
        {
            mask: Date,
            blocks: {
                d: {
                    mask: IMask.MaskedRange,
                    from: 1,
                    to: 31,
                    maxLength: 2,
                },
                m: {
                    mask: IMask.MaskedRange,
                    from: 1,
                    to: 12,
                    maxLength: 2,
                },
                Y: {
                    mask: IMask.MaskedRange,
                    from: 1800,
                    to: 9999,
                }
            },
        });
}


$(document).on("click", ".delete", function (event) {
    var form = $(this).closest("form");
    event.preventDefault();
    Swal.fire({
        title: 'Вы действительно хотите удалить запись? 🥺',
        text: "Данное действие может привести к потери данных!",
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#31ce36',
        cancelButtonColor: '#f25961',
        confirmButtonText: 'Удалить',
        cancelButtonText: 'Отмена',
    }).then((result) => {
        if (result.isConfirmed) {
            form.submit();
        }
    })
});

$(document).on('select2:open', () => {
    document.querySelector('.select2-search__field').focus();
});

$(document).on("click", ".create-claim", function (event) {
    var form = $(this).closest("form");
    event.preventDefault();

    let submit = true;

    if ($(".service-group").val() == 0) {
        $(".service-group").parents('.form-group').addClass('is-invalid');
        submit = false;
    } else {
        $(".service-group").parents('.form-group').removeClass('is-invalid');
    }

    if ($("#anotherUserC").prop('checked')) {
        if ($("#creator").val() == 0) {
            $("#creator").parents('.form-group').addClass('is-invalid');
            submit = false;
        } else {
            $("#creator").parents('.form-group').removeClass('is-invalid');
        }
    }

    if ($("#anotherCreatedAt").prop('checked')) {
        if ($("#created_at").val() == 0) {
            $("#created_at").parents('.form-group').addClass('is-invalid');
            submit = false;
        } else {
            $("#created_at").parents('.form-group').removeClass('is-invalid');
        }
    }

    if ($("#deadlineClaim").val() == '') {
        $("#deadlineClaim-datepicker").addClass('is-invalid');
        submit = false;
    } else {
        $("#deadlineClaim-datepicker").removeClass('is-invalid');
    }

    // === НАША ПРОВЕРКА ===
    if ($("#isInvoiceC").prop('checked')) {
        if (!$('input[name="legal_form"]:checked').length) {
            $("#legal-form-block").find('.btn-group').addClass('is-invalid');
            submit = false;
        } else {
            $("#legal-form-block").find('.btn-group').removeClass('is-invalid');
        }
    } else {
        $("#legal-form-block").find('.btn-group').removeClass('is-invalid');
    }
    // === КОНЕЦ НАШЕЙ ПРОВЕРКИ ===

    if (submit) {
        form.submit();
    } else {
        showToast("Заполните обязательные поля!", "linear-gradient(to right, #ED213A, #93291E)");
    }
});


$(document).on("click", ".block", function (event) {
    var form = $(this).closest("form");
    event.preventDefault();
    Swal.fire({
        title: 'Вы действительно хотите заблокировать пользователя? 🥺',
        text: "Вы сможете разблокировать пользователя в любой момент!",
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#31ce36',
        cancelButtonColor: '#f25961',
        confirmButtonText: 'Заблокировать',
        cancelButtonText: 'Отмена',
    }).then((result) => {
        if (result.isConfirmed) {
            form.submit();
        }
    })
});

// table.on( 'draw', function () {
//     alert( 'Table redrawn' );
// } );

$('.js-example-basic-single').select2();

if (!currentUrl.includes('services') && !currentUrl.includes('edit') && !currentUrl.includes('distribution-claims') && !currentUrl.includes('distribution') && !currentUrl.includes('plan') && !currentUrl.includes('users') && !currentUrl.includes('reports') && !currentUrl.includes('calendar') && !currentUrl.includes('claims') && !currentUrl.includes('payments')) {
    $("#user_id").select2({
        'disabled': true,
    });
}


if (currentUrl.includes('distribution')) {
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('input[name="_token"]').val()
        }
    });

    $(document).on("change", ".user_id", function () {
        // $(".user_id").change(function () {
        let item = $(this);
        let user = $(this).val();
        let client_id = $(this).attr('attr-id');

        if (user == 0) user = null;

        $.ajax({
            url: '/all-clients/distribution/' + client_id,
            type: "PATCH",
            data: {
                'user_id': +user,
            },
            success: function (response) {
                item.parents('tr').find('td.user-td').html(response);
                showToast("Ответственный успешно назначен 👌", "linear-gradient(to right, #00B560, #00914D)");
            },
            error: function (error) {
                showToast("При обновлении ответственного, произошла ошибка 😢", "linear-gradient(to right, #ED213A, #93291E)");
            },

        });


    });
}


$("form").submit(function (event) {
    $(".overlay-spinner").addClass('show');
});

if (!currentUrl.includes('services')) {
    $("#group_id").change(function () {
        if ($(this).find(':selected').val() !== '') {
            let value = $(this).find(':selected').val();
            let _token = $('input[name="_token"]').val();

            $.ajax({
                url: "/get-users-by-group",
                method: "POST",
                data: {
                    'value': value,
                    '_token': _token,
                },
                success: function (result) {
                    $("#user_id").html(result);
                    $("#user_id").removeAttr('disabled');
                    $('#user_id').select2()
                },

            });
        }

    });
}

if (document.getElementById('month-f')) {
    let monthDatepicker = new AirDatepicker('.month-f', {
        isMobile: true,
        autoClose: true,
        view: 'months',
        minView: 'months',
        dateFormat: 'MMMM yyyy',
        altFieldDateFormat: 'yyyy-MM',
        altField: '#month',

    });
}

$("#group_idS").change(function () {
    if ($(this).find(':selected').val() !== '') {
        let value = $(this).find(':selected').val();
        let _token = $('input[name="_token"]').val();

        $.ajax({
            url: "/get-services-by-group",
            method: "POST",
            data: {
                'value': value,
                '_token': _token,
            },
            success: function (result) {
                $(".service-group").html(result);
                $(".service-group").removeAttr('disabled');
                $('.service-group').select2();
            },

        });
    }

});

function dNone(block) {
    if ($(block).hasClass('d-none')) {
        $(block).removeClass('d-none');
    } else {
        $(block).addClass('d-none');
    }
}

function dNoneAll() {
    if (!$('.package-block').hasClass('d-none')) {
        $('.package-block').addClass('d-none');
    }
    if (!$('.period-block').hasClass('d-none')) {
        $('.period-block').addClass('d-none');
    }
    if (!$('.brif-block').hasClass('d-none')) {
        $('.brif-block').addClass('d-none');
    }
    if (!$('.output-block').hasClass('d-none')) {
        $('.output-block').addClass('d-none');
    }
    if (!$('.material-block').hasClass('d-none')) {
        $('.material-block').addClass('d-none');
    }
}

$(".service-group").change(function () {
    dNoneAll();
    if ($(this).find(':selected').val() !== '') {
        let value = $(this).find(':selected').val();
        let _token = $('input[name="_token"]').val();

        $.ajax({
            url: "/get-package-by-service",
            method: "POST",
            data: {
                'value': value,
                '_token': _token,
            },
            success: function (result) {
                result = JSON.parse(result);


                if (result.service.isPeriod == 1) {
                    $('.period-block').removeClass('d-none');
                } else {
                    $('.period-block').addClass('d-none');
                }

                if (result.service.isPackage == 1) {
                    $('.package-block').removeClass('d-none');
                } else {
                    $('.package-block').addClass('d-none');
                }

                if (result.service.isBrif == 1) {
                    $('.brif-block').removeClass('d-none');
                } else {
                    $('.brif-block').addClass('d-none');
                }

                if (result.service.isOutput == 1) {
                    $('.output-block').removeClass('d-none');
                } else {
                    $('.output-block').addClass('d-none');
                }

                if (result.service.isRequiredMaterial == 1) {
                    $('.material-block').removeClass('d-none');
                } else {
                    $('.material-block').addClass('d-none');
                }

                $(".service-package").html(result.html);
                $(".service-package").removeAttr('disabled');
                $('.service-package').select2();
            },

        });
    }

});

$(".typing-client").keyup(function () {
    let client = $(this).val();
    let _token = $('input[name="_token"]').val();

    $.ajax({
        url: "/clients/typing",
        method: "POST",
        data: {
            'client': client,
            '_token': _token,
        },
        success: function (result) {
            $(".content-client").html(result);
        }
    });
});

$(".payment-store select#status_id").change(function () {
    if ($("#status_id option:selected").text() == 'Частично оплачен') {
        $(".amount-form").removeClass('d-none');
    } else {
        $(".amount-form").addClass('d-none');
        $(".amount-form").find('#amount').val('');
    }
});


$("input[type=checkbox]").change(function () {

    let nameCheckbox = $(this).attr('name');
    nameCheckbox = nameCheckbox.slice(0, -1);
    let currentVal = +$(this).prop('checked');

    $('input[name=' + nameCheckbox + ']').val(currentVal);

});

$("#anotherUserC").change(function () {

    if ($(this).prop("checked")) {
        $(".users-form").removeClass('d-none');
    } else {
        $(".users-form").addClass('d-none');
    }
});

$("#anotherCreatedAt").change(function () {

    if ($(this).prop("checked")) {
        $(".created-at-block").removeClass('d-none');

    } else {
        $(".created-at-block").addClass('d-none');
        $("#created_at").val(new Date().toISOString().slice(0, 19).replace('T', ' '));
    }
});


$("#goal").change(function () {
    let goalS = $('.goal-section');
    if (goalS.hasClass('show')) {
        goalS.removeClass('show');
    } else {
        goalS.addClass('show');
    }
});

$("#isMySelfC").change(function () {
    let goalS = $('.user-form');
    if (goalS.hasClass('show')) {
        goalS.removeClass('show');
    } else {
        goalS.addClass('show');
    }
});


$("#isInvoiceC").change(function () {
    // invoice-block

    let goalS = $('.invoice-block');
    if (goalS.hasClass('d-none')) {
        goalS.removeClass('d-none');
    } else {
        goalS.addClass('d-none');
    }
});

$(".btn-collapse").click(function () {

    let btn = $(this);
    let icon = btn.find('i');

    if (icon.hasClass('bi-caret-down-fill')) {
        icon.removeClass('bi-caret-down-fill');
        icon.addClass('bi-caret-up-fill');
    } else {
        icon.removeClass('bi-caret-up-fill');
        icon.addClass('bi-caret-down-fill');
    }


});


$(document).on("click", ".download-zip", function (e) {
    let value = $(this).attr('attr-id');
    let _token = $('input[name="_token"]').val();
    $.ajax({
        url: "/zip-download",
        method: "POST",
        data: {
            'id': value,
            '_token': _token,
        },
        success: function (result) {
            e.preventDefault();
            window.location.href = result;
        },
    });
});

$(document).on("click", ".download-zip-invoice", function (e) {
    let value = $(this).attr('attr-id');
    let _token = $('input[name="_token"]').val();

    $.ajax({
        url: "/zip-download-invoice",
        method: "POST",
        data: {
            'id': value,
            '_token': _token,
        },
        success: function (result) {
            e.preventDefault();
            window.location.href = '/' + result;
        },
    });
});




if (document.getElementById('plan-table')) {

    let planTable = new simpleDatatables.DataTable("#plan-table", {
        searchable: false,
        fixedHeight: false,
        labels: {
            placeholder: "Поиск...",
            perPage: "{select} записей на странице",
            noRows: "Ничего не найдено",
            info: "Показано с {start} по {end} из {rows} записей",
        },
    });

    planTable.on("datatable.init", function () {
        adaptPageDropdown(planTable)
        adaptPagination(planTable)
    });

    planTable.on("datatable.page", adaptPagination);


    if (document.getElementById('filter-month')) {
        let monthDatepicker = new AirDatepicker('.filter-month', {
            isMobile: true,
            autoClose: true,
            view: 'months',
            minView: 'months',
            dateFormat: 'MMMM yyyy',
            altFieldDateFormat: 'yyyy-MM-01',
            altField: '#month',
            onSelect: function onSelect(fd, date, inst) {

                let fullYear = fd.date.getFullYear();
                planTable.search(fd.formattedDate);
                planTable.draw;
                $("#sum").text(getSum()[2]);

                chart.updateOptions({
                    series: getSum()[0],
                    labels: getSum()[1],
                });

                var url = '/api/get-statistics-by-year/' + fullYear

                $.getJSON(url, function (response) {
                    chart2.updateSeries(response)
                });

                url = '/api/get-working-days/' + $("#month").val();
                $.getJSON(url, function (response) {

                    if (response.length == 0) {
                        $("#countDays").html("<span class='text-danger'>График работы не установлен</span>");
                        $("#everyDayPlan").html("<span class='text-danger'>Невозможно рассчитать, график работы не установлен</span>");
                    } else {
                        $("#countDays").html(response.length);
                        $("#everyDayPlan").html((+getSum()[2] / response.length) + ' руб.');
                    }


                });
            }
        });

        // console.log($(".filter-month").val());
        planTable.search($(".filter-month").val());
        planTable.draw;
    }

    var options = {
        series: getSum()[0],
        chart: {
            width: '100%',
            height: 350,
            type: 'pie',
        },
        legend: {
            position: 'top',
            horizontalAlign: 'center',
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            width: 1,
            colors: ["#35354f"]
        },
        toolbar: {
            show: true,
        },
        fill: {
            type: 'gradient',
        },

        labels: getSum()[3],
    };

    var chart = new ApexCharts(document.querySelector("#bar"), options);
    chart.render();

    let amount = new Intl.NumberFormat('ru-RU').format(getSum()[2]);
    $("#sum").text(amount);


    let RUMoneyFormat = new Intl.NumberFormat('ru-RU');

    var options = {
        series: [
        ],
        chart: {
            height: 350,
            type: 'line',
            dropShadow: {
                enabled: true,
                color: '#000',
                top: 18,
                left: 7,
                blur: 10,
                opacity: 0.2
            },
            toolbar: {
                show: false
            }
        },
        colors: ['#2ecc71', '#34495e'],
        dataLabels: {
            enabled: true,
        },
        stroke: {
            curve: 'smooth'
        },
        grid: {
            borderColor: '#e7e7e7',
            row: {
                colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                opacity: 0.5
            },
        },
        markers: {
            size: 1
        },
        xaxis: {
            categories: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
            title: {
                text: 'Месяца'
            }
        },
        yaxis: {
            labels: {
                formatter: function (val, index) {
                    return RUMoneyFormat.format(val.toFixed(2)) + ' р.';
                }
            }
        },
        noData: {
            text: 'Загружаем данные...'
        },
        legend: {
            position: 'top',
            horizontalAlign: 'right',
            floating: true,
            offsetY: -25,
            offsetX: -5
        }
    };

    var chart2 = new ApexCharts(document.querySelector("#statistics-bar"), options);
    chart2.render();

    let year = 0;
    if (document.getElementById('filter-month')) {
        year = +String($('#filter-month').val()).substr(-4, 4);
    }

    if (document.getElementById('month-f')) {
        year = +String($('#month-f').val()).substr(-4, 4);
    }

    var url = '/api/get-statistics-by-year/' + year;

    $.getJSON(url, function (response) {

        chart2.updateSeries(response)

    });

}




$(document).on("click", ".changeStatus", function (event) {
    let id = $(this).attr('attr-id');
    let amount = $(this).attr('attr-max-amount');

    $('#claim_id').val(id);
    $('#max-val').html(amount + ' руб.');
    amountMask.updateOptions({
        min: 1,
        max: amount
    });

    $("#amount").val('');
});


// $(document).ready(function () {
//
//     let myTable = $('#myTable').DataTable({
//         processing: true,
//         serverSide: true,
//         ajax: {
//             url: '/plan/statisticsAjax',
//             type: 'get',
//         },
//         columns: [
//             {data: 'id'},
//             {data: 'month'}
//             // {data: 'phone', name: 'phone'},
//             // {data: 'dob', name: 'dob'}
//         ],
//     });
//
//     myTable.on("datatable.init", function () {
//         // adaptPageDropdown(myTable)
//         // adaptPagination(myTable)
//     });
//
//     myTable.on("datatable.page", adaptPagination);
// });


if (document.getElementById('plan-statistics')) {

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    let paramMonth = urlParams.get('month');

    var options = {
        chart: {
            width: '100%',
            height: 300,
            type: 'pie',
        },
        series: [],
        noData: {
            text: 'Данные загружаются...',
            style: {
                color: '#FFC107',
            }
        },
        legend: {
            position: 'top',
            horizontalAlign: 'center',
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            width: 1,
            colors: ["#35354f"]
        },
        toolbar: {
            show: true,
        },
        fill: {
            type: 'gradient',
        },
        labels: [],
    }

    var chart = new ApexCharts(
        document.querySelector("#plan-statistics"),
        options
    );

    chart.render();

    var url = '/plan/statistics/remoteData';

    $.getJSON(url, { month: paramMonth }, function (response) {


        if (Object.keys(response.data).length === 0) {
            chart.updateOptions({
                noData: {
                    text: 'Данные о поступлениях не найдены!',
                    style: {
                        color: '#DC3545',
                    }
                },
            });
        } else {
            chart.updateOptions({
                series: Object.values(response.data),
                labels: Object.values(response.labels),
            });
        }


    });

    let RUMoneyFormat = new Intl.NumberFormat('ru-RU');

    var options = {
        series: [],
        chart: {
            height: 350,
            type: 'line',
            dropShadow: {
                enabled: true,
                color: '#000',
                top: 18,
                left: 7,
                blur: 10,
                opacity: 0.2
            },
            toolbar: {
                show: false
            }
        },
        colors: ['#2ecc71', '#34495e'],
        dataLabels: {
            enabled: true,
        },
        stroke: {
            curve: 'smooth'
        },
        grid: {
            borderColor: '#e7e7e7',
            row: {
                colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                opacity: 0.5
            },
        },
        markers: {
            size: 1
        },
        xaxis: {
            categories: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
            title: {
                text: 'Месяца'
            }
        },
        yaxis: {
            labels: {
                formatter: function (val, index) {
                    return RUMoneyFormat.format(val.toFixed(2)) + ' р.';
                }
            }
        },
        noData: {
            text: 'Загружаем данные...'
        },
        legend: {
            position: 'top',
            horizontalAlign: 'right',
            floating: true,
            offsetY: -25,
            offsetX: -5
        }
    };

    var chart2 = new ApexCharts(document.querySelector("#statistics-bar"), options);
    chart2.render();

    let year = 0;
    if (document.getElementById('filter-month')) {
        year = +String($('#filter-month').val()).substr(-4, 4);
    }

    if (document.getElementById('month-f')) {
        year = +String($('#month-f').val()).substr(-4, 4);
    }

    var url = '/api/get-statistics-by-year/' + year;

    $.getJSON(url, function (response) {

        chart2.updateSeries(response)

    });


    if (document.getElementById('month-f')) {
        let monthDatepicker = new AirDatepicker('.month-f', {
            isMobile: true,
            autoClose: true,
            view: 'months',
            minView: 'months',
            dateFormat: 'MMMM yyyy',
            altFieldDateFormat: 'yyyy-MM',
            altField: '#month',
            onSelect: function onSelect(fd, date, inst) {
                planTable.search(fd.formattedDate);
                planTable.draw;
                $("#sum").text(new Intl.NumberFormat('ru-RU').format(getSum()[2]));

                chart.updateOptions({
                    series: getSum()[0],
                    labels: getSum()[1],
                });

                let fullYear = fd.date.getFullYear();

                var url = '/api/get-statistics-by-year/' + fullYear

                $.getJSON(url, function (response) {
                    chart2.updateSeries(response)
                });

                // url = '/api/get-working-days/' + $("#month").val();
                // $.getJSON(url, function (response) {
                //
                //     if (response.length == 0) {
                //         $("#countDays").html("<span class='text-danger'>График работы не установлен</span>");
                //         $("#everyDayPlan").html("<span class='text-danger'>Невозможно рассчитать, график работы не установлен</span>");
                //     } else {
                //         $("#countDays").html(response.length);
                //         $("#everyDayPlan").html((+getSum()[2] / response.length) + ' руб.');
                //     }
                //
                //
                // });

            }
        });
    }
}

if (document.getElementById('plan-user')) {

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    let paramMonth = urlParams.get('month');
    let id = $("#id_user").val();

    var options = {
        chart: {
            width: '100%',
            height: '250px',
            type: 'bar',
        },
        series: [],
        noData: {
            text: 'Данные загружаются...',
            style: {
                color: '#FFC107',
            }
        },
        legend: {
            position: 'bottom',
            horizontalAlign: 'center',
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            width: 1,
            colors: ["#35354f"]
        },
        toolbar: {
            show: true,
        },
        fill: {
            type: 'gradient',
        },
        labels: [],
    }

    var chart = new ApexCharts(
        document.querySelector("#plan-user"),
        options
    );

    chart.render();

    var url = '/users/remoteData';

    $.getJSON(url, { month: paramMonth, id: id }, function (response) {
        chart.updateOptions({
            series: [
                {
                    name: 'План',
                    data: response.plan
                },
                {
                    name: 'Заявки',
                    data: response.claims
                },
                {
                    name: 'Поступления',
                    data: response.paid
                }
            ],
            xaxis: {
                categories: ["Статистика продаж"]
            }
        });
    });
}

$('input[name="active-adds"]').change(function () {
    if ($(this).prop('checked') == true) {
        $('.form-active-adds').slideDown();
    } else {
        $('.form-active-adds').slideUp();
    }
});

$('input[name="close-claim"]').change(function () {
    if ($(this).prop('checked') == true) {
        $('.form-close-claim').slideDown();
    } else {
        $('.form-close-claim').slideUp();
    }
});

$('input[name="store-users"]').change(function () {
    if ($(this).prop('checked') == true) {
        $('.form-store-users').slideDown();
    } else {
        $('.form-store-users').slideUp();
    }
});


$(document).on("click", ".delFile", function (event) {

    let link = $(this);
    let id = $(this).attr('attr-id');
    event.preventDefault();
    Swal.fire({
        title: 'Вы действительно хотите удалить файл? 🥺',
        text: "Данное действие невозможно!",
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#31ce36',
        cancelButtonColor: '#f25961',
        confirmButtonText: 'Удалить',
        cancelButtonText: 'Отмена',
    }).then((result) => {
        if (result.isConfirmed) {

            $.ajaxSetup({
                headers: {
                    'X-CSRF-TOKEN': $('input[name="_token"]').val()
                }
            });

            $.ajax({
                url: '/claim/file-delete/' + id,
                type: "DELETE",
                success: function (response) {
                    link.parents('li').remove();
                    showToast("Файл успешно удален 👌", "linear-gradient(to right, #00B560, #00914D)");
                },
                error: function (error) {
                    showToast(error.responseJSON.error, "linear-gradient(to right, #ED213A, #93291E)");
                },

            });
        }
    })
});

$(".datatables").each(function (index) {
    let dataTable = new simpleDatatables.DataTable($(this)[0], {
        searchable: true,
        fixedHeight: false,
        labels: {
            placeholder: "Поиск...",
            perPage: "{select} записей на странице",
            noRows: "Ничего не найдено",
            info: "Показано с {start} по {end} из {rows} записей",
        }
    });

    dataTable.on("datatable.init", function () {
        adaptPageDropdown(dataTable);
        adaptPagination(dataTable);
    });

    dataTable.on("datatable.page", adaptPagination);
});

$('#find-sales').click(function () {

    let validate = true;
    let user_id = $("#user_id").val();
    let month = $("#month").val();
    if (user_id == 0) {
        validate = false;
        $("#user_id").parents('.form-group').addClass('is-invalid');
    } else {
        $("#user_id").parents('.form-group').removeClass('is-invalid');
    }
    if (month == '') {
        validate = false;
        $("#month-f").addClass('is-invalid');
    } else {
        $("#month-f").removeClass('is-invalid');
    }

    if (validate) {
        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('input[name="_token"]').val()
            }
        });

        $.ajax({
            url: '/users/sales-category',
            type: "POST",
            data: {
                'user_id': user_id,
                'month': month,
            },
            success: function (response) {
                $("#data").html(response);
                showToast("Данные успешно загружены 👌", "linear-gradient(to right, #00B560, #00914D)");
            },
            error: function (error) {
                showToast("Данные не найдены 😢", "linear-gradient(to right, #ED213A, #93291E)");
            },

        });
    }

});

$('#find-complete-claims').click(function () {

    let validate = true;
    let user_id = $("#user_id").val();
    let month = $("#month").val();
    if (user_id == 0) {
        validate = false;
        $("#user_id").parents('.form-group').addClass('is-invalid');
    } else {
        $("#user_id").parents('.form-group').removeClass('is-invalid');
    }
    if (month == '') {
        validate = false;
        $("#month-f").addClass('is-invalid');
    } else {
        $("#month-f").removeClass('is-invalid');
    }

    if (validate) {
        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('input[name="_token"]').val()
            }
        });

        $.ajax({
            url: '/claims/complete',
            type: "POST",
            data: {
                'user_id': user_id,
                'month': month,
            },
            success: function (response) {
                $("#data").html(response);
                showToast("Данные успешно загружены 👌", "linear-gradient(to right, #00B560, #00914D)");
            },
            error: function (error) {
                showToast("Данные не найдены 😢", "linear-gradient(to right, #ED213A, #93291E)");
            },

        });
    }

});
$('#create-report').click(function () {

    let validate = true;
    let user_id = $("#user_id").val();
    let month = $("#deadline").val();
    if (user_id == 0) {
        validate = false;
        $("#user_id").parents('.form-group').addClass('is-invalid');
    } else {
        $("#user_id").parents('.form-group').removeClass('is-invalid');
    }
    if (month == '') {
        validate = false;
        $("#report-datepicker").addClass('is-invalid');
    } else {
        $("#report-datepicker").removeClass('is-invalid');
    }

    if (validate) {
        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('input[name="_token"]').val()
            }
        });

        $.ajax({
            url: '/goals/reports',
            type: "POST",
            data: {
                'user_id': user_id,
                'day': month,
            },
            success: function (response) {
                $("#data").html(response);
                showToast("Данные успешно загружены 👌", "linear-gradient(to right, #00B560, #00914D)");
            },
            error: function (error) {
                showToast("Данные не найдены 😢", "linear-gradient(to right, #ED213A, #93291E)");
            },

        });
    }

});

$('#invoice-complete').click(function () {

    let id = $(this).attr('attr-id');
    let number_invoice = null;
    if ($('input[name="number_invoice"]').val()) {
        number_invoice = $('input[name="number_invoice"]').val();
    }
    $(".overlay-spinner").addClass('show');

    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('input[name="_token"]').val()
        }
    });

    $.ajax({
        url: '/invoice/complete',
        type: "POST",
        data: {
            'id': id,
            'number_invoice': number_invoice
        },
        success: function (response) {
            if (response == 'success') location.reload();
            else showToast("Произошла ошибка 😢", "linear-gradient(to right, #ED213A, #93291E)");
        },
        error: function (error) {
            showToast("Произошла ошибка 😢", "linear-gradient(to right, #ED213A, #93291E)");
        },

    });


});

if (document.getElementById('swiper')) {
    const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        slidesPerView: 4,
        spaceBetween: 15,
        grabCursor: true,
        touchEventsTarget: 'container',

        breakpoints: {
            320: { // Очень маленькие экраны (iPhone SE)
                slidesPerView: 1,
                spaceBetween: 10,
            },
            480: { // Обычные мобильные (iPhone 14 Pro Max и др.)
                slidesPerView: 1,
                spaceBetween: 15,
            },
            768: { // Планшеты
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1024: { // Маленькие ноутбуки
                slidesPerView: 3,
                spaceBetween: 25,
            },
            1280: { // Большие экраны
                slidesPerView: 4,
                spaceBetween: 30,
            },
        },

        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });
}
