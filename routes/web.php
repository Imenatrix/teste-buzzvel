<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\CartaoController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return redirect()->route('cartao.create');
});

Route::resource('cartao', CartaoController::class)->except('create');
Route::get('/generate', [CartaoController::class, 'create'])->name('cartao.create');
Route::get('/{cartao:slug}', [CartaoController::class, 'showLandingPage'])->name('cartao.show_landing_page');