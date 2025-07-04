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
    return Inertia::render('Landing/homePage/index', [
    ])->with([
        'sharedNews' => \App\Models\News::with('admin')->latest()->take(6)->get(),
        'sharedEvents' => \App\Models\Events::with('admin')->latest()->take(3)->get(),
        'sharedConferences' => \App\Models\Conferences::with('admin')->latest()->take(6)->get(),
        'sharedJournals' => \App\Models\Journal::with('admin')->latest()->take(3)->get(),
    ]);
})->name('homePage.index');

Route::get('news' , function () {
    $news = \App\Models\News::with('admin')->latest()->paginate(10);
    return Inertia::render('Landing/news/index', ['news' => $news]);
})->name('public.news.index');

Route::get('events', function () {
    $events = \App\Models\Events::with('admin')->latest()->paginate(10);
    return Inertia::render('Landing/events/index', ['events' => $events]);
})->name('public.events.index');

Route::get('careers', function () {
    $careers = \App\Models\EducationAndCareers::with('admin')->latest()->paginate(10);
    return Inertia::render('Landing/careers/index', ['careers' => $careers]);
})->name('public.careers.index');

Route::get('conference', function () {
    $conferences = \App\Models\Conferences::with('admin')->latest()->paginate(10);
    return Inertia::render('Landing/conference/index', ['conferences' => $conferences]);
})->name('public.conference.index');

Route::get('journals', function () {
    $journals = \App\Models\Journal::with('admin')->latest()->paginate(10);
    return Inertia::render('Landing/journals/index', ['journals' => $journals]);
})->name('public.journals.index');

Route::get('about_us', function () {
    $about_us = \App\Models\AboutUs::first(); // atau AboutUs::with('admin')->first();
    return Inertia::render('Landing/about_us/index', [
        'aboutUs' => $about_us
    ]);
});

Route::get('team', function () {
    $team = \App\Models\Journal::with('admin')->latest()->paginate(10);
    return Inertia::render('Landing/team/index', ['team' => $team]);
})->name('public.team.index');

Route::middleware(['auth', 'verified'])->group(function () {
    // Dashboard
    Route::get('admin/dashboard', function () {
        // Collect latest news
        $latestNews = \App\Models\News::select('id_news as id', 'title', \DB::raw("'news' as category"), 'created_at as date')
            ->orderBy('created_at', 'desc')
            ->take(5)
            ->get()
            ->map(function ($item) {
                return [
                    'id' => $item->id,
                    'title' => $item->title,
                    'category' => 'news',
                    'date' => $item->date,
                    'url' => '/news/' . $item->id,
                ];
            });

        // Collect latest events
        $latestEvents = \App\Models\Events::select('id_events as id', 'title', \DB::raw("'events' as category"), 'created_at as date')
            ->orderBy('created_at', 'desc')
            ->take(5)
            ->get()
            ->map(function ($item) {
                return [
                    'id' => $item->id,
                    'title' => $item->title,
                    'category' => 'events',
                    'date' => $item->date,
                    'url' => '/events/' . $item->id,
                ];
            });

        // Collect latest conferences
        $latestConferences = \App\Models\Conferences::select('id_conferences as id', 'title', \DB::raw("'conferences' as category"), 'created_at as date')
            ->orderBy('created_at', 'desc')
            ->take(5)
            ->get()
            ->map(function ($item) {
                return [
                    'id' => $item->id,
                    'title' => $item->title,
                    'category' => 'conferences',
                    'date' => $item->date,
                    'url' => '/conferences/' . $item->id,
                ];
            });

        // Collect latest careers
        $latestCareers = \App\Models\EducationAndCareers::select('id_education as id', 'title', \DB::raw("'careers' as category"), 'created_at as date')
            ->orderBy('created_at', 'desc')
            ->take(5)
            ->get()
            ->map(function ($item) {
                return [
                    'id' => $item->id,
                    'title' => $item->title,
                    'category' => 'careers',
                    'date' => $item->date,
                    'url' => '/careers/' . $item->id,
                ];
            });

        // Merge all posts and sort by date
        $latestPosts = $latestNews->concat($latestEvents)
            ->concat($latestConferences)
            ->concat($latestCareers)
            ->sortByDesc('date')
            ->take(10)
            ->values()
            ->toArray();

        return Inertia::render('dashboard', [
            'counts' => [
                'news' => \App\Models\News::count(),
                'events' => \App\Models\Events::count(),
                'conferences' => \App\Models\Conferences::count(),
                'careers' => \App\Models\EducationAndCareers::count(),
            ],
            'recentActivity' => \App\Models\User::select('id_user as id', 'email', 'full_name', 'last_login_at')
                ->whereNotNull('last_login_at')
                ->orderBy('last_login_at', 'desc')
                ->take(5)
                ->get(),
            'latestPosts' => $latestPosts,
        ]);
    })->name('dashboard');

    // Content Management Routes with Inertia rendering
    Route::prefix('admin')->group(function () {
        // About Us routes
        Route::get('/about-us', [AboutUsController::class, 'index'])->name('about-us.index');
        Route::post('/about-us', [AboutUsController::class, 'store'])->name('about-us.store');

        // News routes
        Route::resource('news', NewsController::class)->names([
            'index' => 'news.index',
            'create' => 'news.create',
            'store' => 'news.store',
            'show' => 'news.show',
            'edit' => 'news.edit',
            'update' => 'news.update',
            'destroy' => 'news.destroy',
        ]);

        // Journal routes
        Route::resource('journal', JournalController::class);

        // Events routes
        Route::resource('events', EventsController::class);

        // Conferences routes
        Route::resource('conferences', ConferencesController::class);

        // Careers routes
        Route::resource('careers', EducationAndCareersController::class)
            ->parameters(['careers' => 'educationCareer']);

        // User Management Routes
        Route::resource('pencarian-members', PencarianMemberController::class);
        Route::resource('jenis-mitra', JenisMitraController::class);
        Route::resource('contacts', ContactController::class);

        // Admin Management Routes
        Route::resource('admins', AdminController::class);
    });
});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
