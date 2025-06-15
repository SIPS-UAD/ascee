<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\AboutUsController;
use App\Http\Controllers\NewsController;
use App\Http\Controllers\JournalController;
use App\Http\Controllers\EventsController;
use App\Http\Controllers\ConferencesController;
use App\Http\Controllers\EducationAndCareersController;
use App\Http\Controllers\PencarianMemberController;
use App\Http\Controllers\JenisMitraController;
use App\Http\Controllers\ContactController;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

    // Admin Management Routes
    Route::resource('admins', AdminController::class);

    // Content Management Routes
    Route::resource('about-us', AboutUsController::class);
    Route::resource('news', NewsController::class);
    Route::resource('journal', JournalController::class);
    Route::resource('events', EventsController::class);
    Route::resource('conferences', ConferencesController::class);
    Route::resource('education-careers', EducationAndCareersController::class);

    // User Management Routes
    Route::resource('pencarian-members', PencarianMemberController::class);
    Route::resource('jenis-mitra', JenisMitraController::class);
    Route::resource('contacts', ContactController::class);
});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
