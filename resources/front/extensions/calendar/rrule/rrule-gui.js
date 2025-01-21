function readRule(rrule) {

    rrule = typeof rrule !== 'undefined' ? rrule : '';

    if (rrule != '') {
        // Break down the rule by semi-colons first
        var items = rrule.split(';');
        var recur = [];
        for (i = 0; i < items.length; i++) {
            if (items[i] !== '') {
                temp = items[i].split('=');
            }
            recur[temp[0]] = temp[1];
        }
        console.log(recur);

        // See if the recurring rule has enough valid parts
        if (recur.FREQ && recur.DTSTART && (recur.COUNT || recur.UNTIL)) {
            recurringRule = {
                freq: recur.FREQ,
                dtstart: recur.DTSTART,
                interval: recur.INTERVAL,
                byday: "",
                bysetpos: "",
                bymonthday: "",
                bymonth: "",
                count: "",
                until: ""

            };

            // Set either COUNT or UNTIL
            if (typeof recur.COUNT == 'undefined' && recur.UNTIL) {
                recurringRule.until = recur.UNTIL;

            } else if (typeof recur.UNTIL == 'undefined' && recur.COUNT) {
                recurringRule.count = recur.COUNT;
            } else {
                // recurringRule.until = recur.UNTIL;
            }

            // Set INTERVAL
            $('input[name="interval"]').val(recur.INTERVAL);


            // Setup start-date picker
            startYear = recur.DTSTART.substring(0, 4);
            startMonth = recur.DTSTART.substring(4, 6);
            startDay = recur.DTSTART.substring(6, 8);
            //alert(startYear + startMonth + startDay);
            // $('#start-date').val(startYear + '-' + startMonth + '-' + startDay);
            // $('#start-date-hidden').val(startYear+startMonth+startDay + 'T040000z');
            //
            // // Setup start-date picker
            //   $( '#start-date' ).datepicker({
            //   	showOtherMonths: true,
            //   	selectOtherMonths: true,
            //   	dateFormat: 'yy-mm-dd',
            //   	onSelect: function(value) {
            //
            // 							dateSelected = new Date(value + ' 00:00:00');
            // 							dtstartString = dateSelected.getFullYear() + ('0' + (dateSelected.getMonth()+1)).slice(-2) + ('0' + dateSelected.getDate()).slice(-2);
            // 							$('#start-date-hidden').val(dtstartString + 'T040000z');
            // 							recurringRule.dtstart = dtstartString + 'T040000z';
            //
            // 							// Set minimum selected date on end-datepicker
            // 								minEndDate = dateSelected.getFullYear() + '-' + ('0' + (dateSelected.getMonth()+1)).slice(-2) + '-' + ('0' + dateSelected.getDate()).slice(-2);
            // 								$( '#end-date' ).datepicker('option', 'minDate', minEndDate);
            // 								// Reset the selected enddate
            // 								$('#end-date-hidden').val(dtstartString + 'T040000z');
            //
            // 							}
            // 	}).datepicker('setDate', 'today');
            //
            //
            //   // Setup the end-date picker
            //   $( '#end-date' ).datepicker({
            //   	showOtherMonths: true,
            //   	selectOtherMonths: true,
            //   	dateFormat: 'yy-mm-dd',
            //   	onSelect: function(value) {
            // 							dateSelected = new Date(value + ' 00:00:00');
            // 							untilString = dateSelected.getFullYear() + ('0' + (dateSelected.getMonth()+1)).slice(-2) + ('0' + dateSelected.getDate()).slice(-2);
            // 							$('#end-date-hidden').val(untilString + 'T040000z');
            // 							// Remove the count variable
            // 							recurringRule.count = '';
            // 							// Set until variable
            // 							recurringRule.until = untilString + 'T040000z';
            // 							}
            // 	}).datepicker('setDate', 'today');

            if (recur.UNTIL) {
                // Setup end date picker
                endYear = recur.UNTIL.substring(0, 4);
                endMonth = recur.UNTIL.substring(4, 6);
                endDay = recur.UNTIL.substring(6, 8);

                $('#end-date').val(endYear + '-' + endMonth + '-' + endDay);
                $('#end-date-hidden').val(endYear + endMonth + endDay + 'T040000z');

                // Set ENDDATE radio to yes
                $('input[name="end-select"]').prop('checked', true);
            }

            // Set Recurring event radio to yes
            $('input[name="event-recurring"]').prop('checked', true);

            // Show Recurring rules
            $('#recurring-rules').slideDown();

            // Show Until Rules
            $('#until-rules').show();


            switch (recur.FREQ) {

                case("DAILY"):

                    break;

                case("WEEKLY"):
                    // Selectbox FREQ = monthly
                    $('select[name="freq"]').val('weekly');

                    // Hide all DIVS
                    $('#recurring-rules > div').hide();

                    // Show selected DIV
                    $('div.' + 'weeks-choice').show();
                    $('span.freq-selection').text('неделя(ь)(и)');

                    // Show Until / Count Rules
                    $('#until-rules').show();

                    if (typeof recur.BYDAY !== 'undefined') {

                        // Split up the individual bymonthdays
                        bydays = recur.BYDAY.split(',');

                        // Loop through the BYDAYs
                        for (v = 0; v < bydays.length; v++) {
                            console.log(bydays[v]);
                            // Set select monthday buttons to active
                            $('#weekday-select button[id="' + bydays[v] + '"]').addClass('active')
                        }
                        recurringRule.byday = recur.BYDAY;

                        return true;
                    }

                    break;

                case("MONTHLY"):
                    // Selectbox FREQ = monthly
                    $('select[name="freq"]').val('monthly');

                    // Hide all DIVS
                    $('#recurring-rules > div').hide();

                    // Show selected DIV
                    $('div.' + 'months-choice').show();
                    $('span.freq-selection').text('month(s)');

                    // Show Until / Count Rules
                    $('#until-rules').show();

                    if (typeof recur.BYMONTHDAY !== 'undefined') {

                        // Split up the individual bymonthdays
                        bymonthdays = recur.BYMONTHDAY.split(',');

                        // Loop through the BYMONTHDAYs
                        for (v = 0; v < bymonthdays.length; v++) {
                            console.log(bymonthdays[v]);
                            // Set select monthday buttons to active
                            $('#monthday-select button[data-day-num="' + bymonthdays[v] + '"]').addClass('active')
                        }
                        recurringRule.bymonthday = recur.BYMONTHDAY;

                        return true;
                    }

                    if (typeof recur.BYSETPOS !== 'undefined' && typeof recur.BYDAY !== 'undefined') {

                        // Set Radio Button
                        $('input#month-byday-pos-selected').prop('checked', true);

//				alert(recur.BYDAY);
                        $('select[name^="month-byday"]').removeAttr('disabled');

                        // Set values
                        $('select[name="month-byday-pos"]').val(recur.BYSETPOS);
                        $('select[name="month-byday-pos-name"]').val(recur.BYDAY);


                        //Disable day buttons
                        $('#monthday-select button').attr('disabled', 'disabled');

                        recurringRule.bysetpos = recur.BYSETPOS;
                        recurringRule.byday = recur.BYDAY;

                        return true;
                    }


                    break;

                case("YEARLY"):
                    // Selectbox FREQ = monthly
                    $('select[name="freq"]').val('yearly');

                    // Hide all DIVS
                    $('#recurring-rules > div').hide();

                    // Show selected DIV
                    $('div.' + 'years-choice').show();
                    $('span.freq-selection').text('year(s)');

                    // Show Until / Count Rules
                    $('#until-rules').show();

                    // BYMONTH and BYMONTHDAY attributes are going to be set
                    if (typeof recur.BYMONTHDAY !== 'undefined' && typeof recur.BYMONTH !== 'undefined') {

                        // Set Radio Button
                        $('input#yearly-one-month').prop('checked', true);

//				alert(recur.BYDAY);
                        $('select[name="yearly-bymonth"]').removeAttr('disabled');
                        $('select[name="yearly-bymonthday"]').removeAttr('disabled');

                        // Set values
                        $('select[name="yearly-bymonth"]').val(recur.BYMONTH);
                        $('select[name="yearly-bymonthday"]').val(recur.BYMONTHDAY);


                        recurringRule.bymonth = recur.BYMONTH;
                        recurringRule.bymonthday = recur.BYMONTHDAY;

                        return true;
                    }

                    // Multiple Month Selection
                    if (typeof recur.BYMONTH !== 'undefined' && typeof recur.BYMONTHDAY == 'undefined') {
                        // Disable yearly select boxes
                        $('select[name^=yearly-').attr('disabled', 'disabled');
                        // Set Radio Button
                        $('input#yearly-multiple-months').prop('checked', true);

                        // Make buttons active
                        $('.yearly-multiple-months button').removeAttr('disabled');
                        // Split up the individual bymonthdays
                        bymonth = recur.BYMONTH.split(',');

                        // Loop through the BYMONTHDAYs
                        for (v = 0; v < bymonth.length; v++) {
                            console.log(bymonth[v]);
                            // Set select monthday buttons to active
                            $('.yearly-multiple-months button[data-month-num="' + bymonth[v] + '"]').addClass('active')
                        }
                        recurringRule.bymonth = recur.BYMONTH;

                        return true;
                    }

                    // Precise Yearly Selection
                    if (typeof recur.BYMONTH !== 'undefined' && typeof recur.BYDAY !== 'undefined' && typeof recur.BYSETPOS !== 'undefined') {
                        // Disable yearly select boxes
                        $('select[name^=yearly-').attr('disabled', 'disabled');

                        // Enable the right select
                        $('select[class=yearly-precise').removeAttr('disabled');

                        // Set Radio Button
                        $('input#yearly-precise').prop('checked', true);

                        // Set select values
                        $('select[name="yearly-byday"]').val(recur.BYDAY);
                        $('select[name="yearly-bysetpos"]').val(recur.BYSETPOS);

                        recurringRule.bymonth = recur.BYMONTH;
                        recurringRule.byday = recur.BYDAY;
                        recurringRule.bysetpos = recur.BYSETPOS;

                        return true;
                    }


                    break;

            }

        }
    }

    return false;

}

readRule = false;

function resetOptions() {

    startDate = $("#start-date-hidden").val();
    endDate = $("#end-date-hidden").val();

    recurringRule = {
        freq: "daily",
        dtstart: startDate,
        interval: "1",
        byday: "",
        bysetpos: "",
        bymonthday: "",
        bymonth: "",
        count: "",
        until: endDate
    };

    $('span.freq-selection').text('день(я,ей)');

    $('#monthday-select,#bymonth-select,#weekday-select').hide();

    $('input[name="interval"]').val("1");

    $('input[name="count"]').val("1");

    $('select[name="freq"]').val('daily');

    $('input[id="until-select"]').prop('checked', false);
    $('input[id="end-no"]').prop('checked', true).change();
    // $('#count').reset();
}

function rruleGenerate() {
    // Produce RRULE state to feed to rrule.js
    rrule = "";


    // Check to be sure there is a count value or until date selected
    if (recurringRule.count == "" && recurringRule.until == "") {
        // No end in sight, make it default to 1 occurence
        // recurringRule.count = "1";
        // delete
    }
    for (var key in recurringRule) {
        if (recurringRule.hasOwnProperty(key)) {
            if (recurringRule[key] != '') {
                rrule += key + '=' + recurringRule[key] + ';';
            }
        }
    }
    // Remove the last semicolon from the end of RRULE
    rrule = rrule.replace(/;\s*$/, "");

    // Convert to Uppercase and return
    return rrule.toUpperCase();
}

$(document).ready(function () {

    if (readRule == false) {
        resetOptions();
    }

    // $('button').click(function (e) {
    //     e.preventDefault;
    //     return false;
    // });

});

$('input[name="event-recurring"]').change(function () {
    resetOptions();

    if ($(this).prop('checked') == true) {
        $('#recurring-rules').slideDown();
        $('#until-rules').show();
    } else {
        $('#recurring-rules').hide();
    }

});

$(document).on('change', 'select[name="freq"]', function () {

    selectedFrequency = $('select[name="freq"] option:selected').attr('class');
    selectedFrequencyName = $('select[name="freq"] option:selected').attr('attr-name');

    $('#recurring-rules > div').hide();

    $('div.' + selectedFrequency + '-choice').show();
    $('span.freq-selection').text(selectedFrequencyName);

    $('#until-rules').show();

    recurringRule = {
        freq: "",
        dtstart: $('#start-date-hidden').val(),
        interval: "1",
        byday: "",
        bysetpos: "",
        bymonthday: "",
        bymonth: "",
        count: "",
        until: ""
    };

    $('input[id="end-no"]').prop('checked', true).change();
    recurringRule.freq = $('select[name="freq"] option:selected').val();

    if (recurringRule.freq == "yearly") {
        $('select[name="yearly-bymonth"]').change();
    }

});

$(document).on('change blur keyup', 'input[name="interval"]', function () {
    recurringRule.interval = $(this).val();
});

$('#weekday-select label').on('click', function () {
    var byday = [];

    setTimeout(function () {
        $('#weekday-select input:checked').each(function () {
            byday.push($(this).attr('id'));
        });
        recurringRule.byday = byday;
    }, 100);


});

$('#monthday-select label').on('click', function () {
    var bymonthday = [];

    setTimeout(function () {
        $('#monthday-select input:checked').each(function () {
            if ($(this).attr('data-day-num') != undefined) {
                bymonthday.push($(this).attr('data-day-num'));
            }
        });
        recurringRule.bymonthday = bymonthday;
        recurringRule.byday = "";
        recurringRule.bysetpos = "";
    }, 100);

});

$('#bymonth-select label').on('click', function () {
    var bymonth = [];

    setTimeout(function () {
        $('#bymonth-select input:checked').each(function () {
            if ($(this).attr('data-month-num') != undefined) {
                bymonth.push($(this).attr('data-month-num'));
            }
        });
        recurringRule.bymonth = bymonth;
    }, 100);
});

$('input[name="monthday-pos-select"]').change(function () {

    var selectedRadio = $(this).val();

    $('input[name="monthday-pos-select"]').each(function () {
        if ($(this).val() == selectedRadio) {
            switch ($(this).val()) {
                case "month-byday-pos-selected":
                    $('#monthday-select input[type=checkbox]').attr('disabled', 'disabled');
                    $('select[name^="month-byday"]').removeAttr('disabled');
                    $('select[name^="month-byday"]').change();
                    recurringRule.bymonthday = "";
                    break;
                case "monthday-selected":
                    $('#monthday-select input[type=checkbox]').removeAttr('disabled');
                    $('select[name^="month-byday"]').attr('disabled', 'disabled');
                    recurringRule.byday = "";
                    recurringRule.bysetpos = "";
                    break;
            }
        }
    });
});

$('input[name="yearly-options"]').change(function () {

    var selectedRadio = $(this).attr('id');
    $('input[name="yearly-options"]').each(function () {

        if ($(this).attr('id') == selectedRadio) {

            switch ($(this).attr('id')) {
                case "yearly-one-month":
                    // Example Pattern
                    // FREQ=YEARLY;BYMONTH=1;BYMONTHDAY=1;UNTIL=20150818;

                    recurringRule.bysetpos = "";
                    recurringRule.byday = "";

                    $('select[class*="yearly"]').attr('disabled', 'disabled');

                    $('.yearly-multiple-months input[type=checkbox]').attr('disabled', 'disabled');

                    $('select.yearly-one-month').removeAttr('disabled');

                    $('select[name="yearly-bymonth"]').change();

                    break;

                case "yearly-multiple-months":
                    // Example Pattern
                    // FREQ=YEARLY;INTERVAL=1;BYMONTH=1,3,4,10;COUNT=1

                    recurringRule.bymonthday = "";
                    recurringRule.byday = "";
                    recurringRule.bysetpos = "";

                    $('select[class*="yearly"]').attr('disabled', 'disabled');

                    $('.yearly-multiple-months input[type=checkbox]').removeAttr('disabled');

                    break;

                case "yearly-precise":
                    // Example Pattern
                    // FREQ=YEARLY;BYDAY=SU;BYSETPOS=1;BYMONTH=1;UNTIL=20150818;

                    recurringRule.bymonthday = "";

                    $('select[class*="yearly"]').attr('disabled', 'disabled');

                    $('.yearly-multiple-months input[type=checkbox]').attr('disabled', 'disabled');

                    $('select.yearly-precise').removeAttr('disabled');
                    $('select[name="yearly-bysetpos"]').change();
                    break;
            }
        }

    });
});

$(document).on('change', 'select[name^="yearly-bymonth"]', function () {
    var bymonth = $('select[name="yearly-bymonth"]').val();
    var bymonthday = $('select[name="yearly-bymonthday"]').val();

    recurringRule.bymonth = bymonth;
    recurringRule.bymonthday = bymonthday;
});

$(document).on('click', '.yearly-multiple-months label', function () {
    var bymonth = [];

    setTimeout(function () {
        $('.yearly-multiple-months input:checked').each(function () {
            if ($(this).attr('data-month-num') != undefined) {
                bymonth.push($(this).attr('data-month-num'));
            }
        });
        recurringRule.bymonth = bymonth;
    }, 100);

});

$(document).on('change', 'select[name="yearly-bysetpos"], select[name="yearly-byday"], select[name="yearly-bymonth-with-bysetpos-byday"]', function () {
    var bysetpos = $('select[name="yearly-bysetpos"]').val();
    var byday = $('select[name="yearly-byday"]').val().split(',');
    var bymonth = $('select[name="yearly-bymonth-with-bysetpos-byday"]').val();

    recurringRule.bymonthday = "";

    recurringRule.bymonth = bymonth;
    recurringRule.byday = byday;
    recurringRule.bysetpos = bysetpos;
});

$(document).on('change', 'select[name^="month-byday"]', function () {
    var bySetPos = $('select[name="month-byday-pos"]').val();
    var daysSelected = $('select[name="month-byday-pos-name"]').val().split(',');

    recurringRule.bysetpos = bySetPos;
    recurringRule.byday = daysSelected;
});

$(document).on('input change', 'input[name="count"]', function () {
    recurringRule.count = $(this).val();
});

$('input[name="end-select"]').change(function () {

    var selectedRadio = $(this).val();

    $('input[name="end-select"]').each(function () {
        // enable the input next to the selected radio button
        if ($(this).val() == selectedRadio) {
            $('input[name="' + selectedRadio + '"]').removeAttr('disabled');
            if ($(this).val() == 'until') {
                recurringRule.count = '';
                recurringRule.until = $('#end-date-hidden').val(); //replace hidden aircalendar
            } else if ($(this).val() == 'not') {
                recurringRule.count = '';
                recurringRule.until = '';
            } else if ($(this).val() == 'count') {
                recurringRule.count = $('input[name="count"]').val();
                recurringRule.until = '';
            }
        } else {
            //disable the inputs not selected.
            $(this).next('input').attr('disabled', 'disabled').val('');

            //reset the stored value in the recurringRule object
            var not_selected = $(this).next('input').attr('name');

            recurringRule[not_selected] = '';

        }
    });
});

const button = document.querySelector('#saveG');
button.addEventListener('click', function () {
    if ($('input[name="event-recurring"]').prop('checked') == true) {
        $("#rrule").val(rruleGenerate());
    } else {
        $("#rrule").val("");
    }

});
