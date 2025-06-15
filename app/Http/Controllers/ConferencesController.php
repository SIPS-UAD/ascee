<?php

namespace App\Http\Controllers;

use App\Models\Conferences;
use App\Models\Admin;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ConferencesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $conferences = Conferences::with('admin')->latest()->paginate(10);
        return view('admin.conferences.index', compact('conferences'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $admins = Admin::all();
        return view('admin.conferences.create', compact('admins'));
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
            $data['image'] = $request->file('image')->store('conferences', 'public');
        }

        Conferences::create($data);

        return redirect()->route('conferences.index')
            ->with('success', 'Conference created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Conferences $conference)
    {
        $conference->load('admin');
        return view('admin.conferences.show', compact('conference'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Conferences $conference)
    {
        $admins = Admin::all();
        return view('admin.conferences.edit', compact('conference', 'admins'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Conferences $conference)
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
            if ($conference->image && Storage::disk('public')->exists($conference->image)) {
                Storage::disk('public')->delete($conference->image);
            }
            $data['image'] = $request->file('image')->store('conferences', 'public');
        }

        $conference->update($data);

        return redirect()->route('conferences.index')
            ->with('success', 'Conference updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Conferences $conference)
    {
        if ($conference->image && Storage::disk('public')->exists($conference->image)) {
            Storage::disk('public')->delete($conference->image);
        }

        $conference->delete();
        
        return redirect()->route('conferences.index')
            ->with('success', 'Conference deleted successfully.');
    }
}