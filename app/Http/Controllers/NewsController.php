<?php

namespace App\Http\Controllers;

use App\Models\News;
use App\Models\Admin;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class NewsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $news = News::with('admin')->latest()->paginate(10);

        // Append formatted_date to each news item
        $news->through(function ($item) {
            $item->formatted_date = $item->formattedDate;
            return $item;
        });

        $now = now();
        $totalNewsCount = News::count();
        $thisMonthCount = News::whereMonth('created_at', $now->month)->whereYear('created_at', $now->year)->count();
        $withImagesCount = News::whereNotNull('image')->count();
        $publishersCount = News::distinct('publisher')->count('publisher');

        return Inertia::render('admin/news/index', [
            'news' => $news,
            'stats' => [
                'total' => $totalNewsCount,
                'thisMonth' => $thisMonthCount,
                'withImages' => $withImagesCount,
                'publishers' => $publishersCount,
            ],
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $admins = Admin::all();
        return Inertia::render('admin/news/create', ['admins' => $admins]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'date' => 'required|date',
            'publisher' => 'required|string|max:255',
            'description' => 'required|string',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            'admin_id' => 'required|exists:admins,id_admin',
        ]);

        $data = $request->except('image');

        if ($request->hasFile('image')) {
            $data['image'] = $request->file('image')->store('news', 'public');
        }

        News::create($data);

        return redirect()->route('news.index')
            ->with('success', 'News created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(News $news)
    {
        $news->load('admin');
        $news->formatted_date = $news->formattedDate;
        return Inertia::render('admin/news/show', compact('news'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(News $news)
    {
        $admins = Admin::all();

        $news->date = $news->date->format('Y-m-d');

        return Inertia::render('admin/news/edit', [
            'news' => $news,
            'admins' => $admins
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, News $news)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'date' => 'required|date',
            'publisher' => 'required|string|max:255',
            'description' => 'required|string',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            'admin_id' => 'required|exists:admins,id_admin',
        ]);

        $data = $request->except('image');

        if ($request->hasFile('image')) {
            if ($news->image && Storage::disk('public')->exists($news->image)) {
                Storage::disk('public')->delete($news->image);
            }
            $data['image'] = $request->file('image')->store('news', 'public');
        }

        $news->update($data);

        return redirect()->route('news.index')
            ->with('success', 'News updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(News $news)
    {
        if ($news->image && Storage::disk('public')->exists($news->image)) {
            Storage::disk('public')->delete($news->image);
        }

        $news->delete();

        return redirect()->route('news.index')
            ->with('success', 'News deleted successfully.');
    }

    // Format date for public news show route
    public function publicShow($id)
    {
        $news = News::with('admin')->findOrFail($id);
        $news->formatted_date = $news->formattedDate;

        // Get related news with formatted dates
        $relatedNews = News::where('id_news', '!=', $id)
            ->latest()
            ->take(5)
            ->get()
            ->map(function ($item) {
                $item->formatted_date = $item->formattedDate;
                return $item;
            });

        return Inertia::render('details/news/index', [
            'news' => $news,
            'relatedNews' => $relatedNews
        ]);
    }
}
