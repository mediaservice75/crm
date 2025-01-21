const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.styles([
    'resources/front/css/main/app.css',
    'resources/front/css/main/app-dark.css',
    'resources/front/css/shared/iconly.css',
    'resources/front/css/main/select2.min.css',
], 'public/css/all.css');

mix.styles([
    'resources/front/css/main/custom.css',
], 'public/css/main.css');



mix.styles([
    'resources/front/extensions/simple-datatables/style.css',
    'resources/front/css/pages/simple-datatables.css',
], 'public/css/datatables.css');


mix.styles([
    'resources/front/css/pages/auth.css',
], 'public/css/auth.css');


mix.combine([
    'resources/front/js/bootstrap.js',
    'resources/front/js/app.js',
    'resources/front/js/imask.js',
], 'public/js/all.js');

mix.combine([
    'resources/front/extensions/apexcharts/apexcharts.min.js',
], 'public/js/apexcharts.js');

mix.combine([
    'resources/front/extensions/simple-datatables/umd/simple-datatables.js',
    'resources/front/js/pages/simple-datatables.js',
], 'public/js/datatables.js');

// mix.combine([
//     'resources/front/extensions/calendar/jquery-ui.min.js',
//     'resources/front/extensions/calendar/moment.min.js',
//     'resources/front/extensions/calendar/fullcalendar.min.js',
//     'resources/front/extensions/calendar/locale-all.min.js',
// ], 'public/js/calendar.js');

mix.combine([
    'resources/front/extensions/calendar/moment.min.js',
    'resources/front/extensions/calendar/rrule/rrule.min.js',
    'resources/front/extensions/calendar/index.global.min.js',
    'resources/front/extensions/calendar/ru.global.js',
    'resources/front/extensions/calendar/rrule/index.global.min.js',
], 'public/js/calendar.js');

mix.js([
    'resources/front/extensions/calendar/rrule/rrule-gui.js',
], 'public/js/rrule-gui.js');

mix.combine([
    'resources/front/extensions/popper/popper.min.js',
    'resources/front/extensions/popper/tooltip.min.js',
], 'public/js/popper.js');

mix.styles([
    'resources/front/extensions/toastify-js/src/toastify.css',
], 'public/css/toastify.css');

mix.combine([
    'resources/front/extensions/toastify-js/src/toastify.js',
], 'public/js/toastify.js');


mix.js([
    'resources/front/js/main.js',
], 'public/js/main.js');

mix.js([
    'resources/front/js/custom-calendar.js',
], 'public/js/custom-calendar.js');



mix.copyDirectory('resources/front/fonts', 'public/fonts');
mix.copyDirectory('resources/front/images', 'public/images');
