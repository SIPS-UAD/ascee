<?php

namespace App\Http\Controllers;

use App\Models\Journal;
use App\Models\Admin;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class JournalController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $journals = Journal::with('admin')->latest()->paginate(9);
        return Inertia::render('admin/journal/index', ['journals' => $journals]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $admins = Admin::all();
        return Inertia::render('admin/journal/create', ['admins' => $admins]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            'admin_id' => 'required|exists:admins,id_admin',
        ]);

        $data = $request->all();

        if ($request->hasFile('image')) {
            $data['image'] = $request->file('image')->store('journal', 'public');
        }

        Journal::create($data);

        return redirect()->route('journal.index')
            ->with('success', 'Journal created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Journal $journal)
    {
        $journal->load('admin');
        return Inertia::render('admin/journal/show', ['journal' => $journal]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Journal $journal)
    {
        $admins = Admin::all();
        return Inertia::render('admin/journal/edit', [
            'journal' => $journal,
            'admins' => $admins
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Journal $journal)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            'admin_id' => 'required|exists:admins,id_admin',
        ]);

        $data = $request->all();

        if ($request->hasFile('image')) {
            if ($journal->image && Storage::disk('public')->exists($journal->image)) {
                Storage::disk('public')->delete($journal->image);
            }
            $data['image'] = $request->file('image')->store('journal', 'public');
        }

        $journal->update($data);

        return redirect()->route('journal.index')
            ->with('success', 'Journal updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Journal $journal)
    {
        if ($journal->image && Storage::disk('public')->exists($journal->image)) {
            Storage::disk('public')->delete($journal->image);
        }

        $journal->delete();
        
        return redirect()->route('journal.index')
            ->with('success', 'Journal deleted successfully.');
    }
}