<?php

namespace App\Http\Controllers;

use App\Models\Events;
use App\Models\Admin;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class EventsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $events = Events::with('admin')->orderBy('updated_at', 'desc')->paginate(9);

        $now = now();
        $totalEvents = Events::count();
        $upcoming = Events::whereDate('date', '>', $now->toDateString())->count();
        $today = Events::whereDate('date', $now->toDateString())->count();
        $withImages = Events::whereNotNull('image')->count();

        return Inertia::render('admin/events/index', [
            'events' => $events,
            'stats' => [
                'total' => $totalEvents,
                'upcoming' => $upcoming,
                'today' => $today,
                'withImages' => $withImages,
            ],
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $admins = Admin::all();
        return Inertia::render('admin/events/create', ['admins' => $admins]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'date' => 'required|date',
            'description' => 'required|string',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            'admin_id' => 'required|exists:admins,id_admin',
        ]);

        $data = $request->all();

        if ($request->hasFile('image')) {
            $data['image'] = $request->file('image')->store('events', 'public');
        }

        Events::create($data);

        return redirect()->route('events.index')
            ->with('success', 'Event created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Events $event)
    {
        $event->load('admin');
        return Inertia::render('admin/events/show', ['event' => $event]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Events $event)
    {
        $admins = Admin::all();
        return Inertia::render('admin/events/edit', [
            'event' => $event,
            'admins' => $admins
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Events $event)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'date' => 'required|date',
            'description' => 'required|string',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            'admin_id' => 'required|exists:admins,id_admin',
        ]);

        $data = $request->all();

        if ($request->hasFile('image')) {
            if ($event->image && Storage::disk('public')->exists($event->image)) {
                Storage::disk('public')->delete($event->image);
            }
            $data['image'] = $request->file('image')->store('events', 'public');
        }

        $event->update($data);

        return redirect()->route('events.index')
            ->with('success', 'Event updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Events $event)
    {
        if ($event->image && Storage::disk('public')->exists($event->image)) {
            Storage::disk('public')->delete($event->image);
        }

        $event->delete();
        
        return redirect()->route('events.index')
            ->with('success', 'Event deleted successfully.');
    }

    /**
     * Display the specified event for public view.
     */
    public function publicShow($id)
    {
        $event = Events::with('admin')->findOrFail($id);
        $event->formatted_date = $event->formattedDate;
        
        // Get related events with formatted dates
        $relatedEvents = Events::where('id_events', '!=', $id)
                    ->latest()
                    ->take(5)
                    ->get()
                    ->map(function ($item) {
                        $item->formatted_date = $item->formattedDate;
                        return $item;
                    });
        
        return Inertia::render('details/events/index', [
            'event' => $event,
            'relatedEvents' => $relatedEvents
        ]);
    }
}