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
        'news' => \App\Models\News::with('admin')->latest()->take(3)->get(),
        'events' => \App\Models\Events::with('admin')->latest()->take(3)->get(),
        'conferences' => \App\Models\Conferences::with('admin')->latest()->take(3)->get(),
        'journals' => \App\Models\Journal::with('admin')->latest()->take(3)->get(),
    ]);
})->name('homePage.index');

Route::get('landing/news' , function () {
    $news = \App\Models\News::with('admin')->latest()->paginate(10);
    return Inertia::render('Landing/news/index', ['news' => $news]);
})->name('public.news.index');

Route::get('landing/events', function () {
    $events = \App\Models\Events::with('admin')->latest()->paginate(10);
    return Inertia::render('Landing/events/index', ['events' => $events]);
})->name('public.events.index');

Route::get('landing/careers', function () {
    $careers = \App\Models\EducationAndCareers::with('admin')->latest()->paginate(10);
    return Inertia::render('Landing/careers/index', ['careers' => $careers]);
})->name('public.careers.index');

Route::get('landing/conference', function () {
    $conferences = \App\Models\Conferences::with('admin')->latest()->paginate(10);
    return Inertia::render('Landing/conference/index', ['conferences' => $conferences]);
})->name('public.conference.index');

Route::get('landing/journals', function () {
    $journals = \App\Models\Journal::with('admin')->latest()->paginate(10);
    return Inertia::render('Landing/journals/index', ['journals' => $journals]);
})->name('public.journals.index');

Route::middleware(['auth', 'verified'])->group(function () {
    // Dashboard
    Route::get('dashboard', function () {
        // Collect latest news
        $latestNews = \App\Models\News::select('id_news as id', 'title', \DB::raw("'news' as category"), 'created_at as date')
            ->orderBy('created_at', 'desc')
            ->take(5)
            ->get()
            ->map(function($item) {
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
            ->map(function($item) {
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
            ->map(function($item) {
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
            ->map(function($item) {
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

    // Admin Management Routes
    Route::resource('admins', AdminController::class);
    // Direct Inertia rendering route for admins
    Route::get('admin/admins', function () {
        $admins = \App\Models\Admin::latest()->paginate(10);
        return Inertia::render('admin/admins/index', ['admins' => $admins]);
    })->name('admin.admins');

    // Content Management Routes with Inertia rendering
    Route::resource('about-us', AboutUsController::class);
    Route::get('admin/about-us', function () {
    $aboutUs = \App\Models\AboutUs::with('admin')->latest()->paginate(10);
        return Inertia::render('admin/about-us/index', ['aboutUs' => $aboutUs]);
    })->name('admin.about-us');

    Route::resource('news', NewsController::class);
    Route::get('admin/news', function () {
        $news = \App\Models\News::with('admin')->latest()->paginate(10);
        return Inertia::render('admin/news/index', ['news' => $news]);
    })->name('admin.news');

    Route::resource('journal', JournalController::class);
    Route::get('admin/journal', function () {
        $journals = \App\Models\Journal::with('admin')->latest()->paginate(10);
        return Inertia::render('admin/journal/index', ['journals' => $journals]);
    })->name('admin.journal');

    Route::resource('events', EventsController::class);
    Route::get('admin/events', function () {
        $events = \App\Models\Events::with('admin')->latest()->paginate(10);
        return Inertia::render('admin/events/index', ['events' => $events]);
    })->name('admin.events');

    Route::resource('conferences', ConferencesController::class);
    Route::get('admin/conferences', function () {
        $conferences = \App\Models\Conferences::with('admin')->latest()->paginate(10);
        return Inertia::render('admin/conferences/index', ['conferences' => $conferences]);
    })->name('admin.conferences');

    Route::resource('careers', EducationAndCareersController::class)->parameters([
        'careers' => 'educationCareer'
    ]);
    Route::get('admin/education-careers', function () {
        $educations = \App\Models\EducationAndCareers::with('admin')->latest()->paginate(10);
        return Inertia::render('admin/education-careers/index', ['educations' => $educations]);
    })->name('admin.education-careers');

    // User Management Routes
    Route::resource('pencarian-members', PencarianMemberController::class);
    Route::get('admin/pencarian-members', function () {
        $members = \App\Models\PencarianMember::with('user')->latest()->paginate(10);
        return Inertia::render('admin/pencarian-members/index', ['members' => $members]);
    })->name('admin.pencarian-members');

    Route::resource('jenis-mitra', JenisMitraController::class);
    Route::get('admin/jenis-mitra', function () {
        $mitras = \App\Models\JenisMitra::with('user')->latest()->paginate(10);
        return Inertia::render('admin/jenis-mitra/index', ['mitras' => $mitras]);
    })->name('admin.jenis-mitra');

    Route::resource('contacts', ContactController::class);
    Route::get('admin/contacts', function () {
        $contacts = \App\Models\Contact::with(['pencarianMember', 'jenisMitra'])->latest()->paginate(10);
        return Inertia::render('admin/contacts/index', ['contacts' => $contacts]);
    })->name('admin.contacts');
});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
