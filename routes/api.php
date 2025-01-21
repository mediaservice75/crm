<?php

use App\Http\Controllers\ServiceController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


//Route::group(['middleware' => ['web']], function () {
    Route::get('/get-statistics-by-year/{year}', [\App\Http\Controllers\SalesPlanController::class, 'getStatisticsByYear']);
    Route::get('/get-working-days/{month}', [\App\Http\Controllers\SalesPlanController::class, 'getWorkingDays']);
//});

//Route::post('/get-users-by-group', [ServiceController::class, 'usersByGroup'])->name('services.usersByGroup');
