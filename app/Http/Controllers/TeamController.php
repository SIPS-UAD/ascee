<?php

namespace App\Http\Controllers;

use App\Models\Team;
use App\Models\Admin;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\Rule;

class TeamController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $team = Team::with('admin')->orderBy('category', 'asc')->paginate(10);
        return Inertia::render('admin/teams/index', ['team' => $team]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $admins = Admin::all();
        return Inertia::render('admin/teams/create', ['admins' => $admins]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'position' => 'required|string|max:255',
            'credentials' => 'nullable|string|max:255',
            'category' => 'required|string|max:255',
            'society' => 'nullable|string|max:255',
            'admin_id' => 'required|exists:admins,id_admin',
        ]);

        Team::create($validated);
        
        return redirect()->route('teams.index')->with('success', 'Team member created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Team $team)
    {
        $team->load('admin');
        return Inertia::render('admin/teams/show', ['team' => $team]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Team $team)
    {
        $admins = Admin::all();
        return Inertia::render('admin/teams/edit', ['team' => $team, 'admins' => $admins]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Team $team)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'position' => 'required|string|max:255',
            'credentials' => 'nullable|string|max:255',
            'category' => 'required|string|max:255',
            'society' => 'nullable|string|max:255',
            'admin_id' => 'required|exists:admins,id_admin',
        ]);

        $team->update($validated);
        
        return redirect()->route('teams.index')->with('success', 'Team member updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Team $team)
    {
        $team->delete();
        
        return redirect()->route('teams.index')->with('success', 'Team member deleted successfully.');
    }

    /**
     * Display the public team page.
     */
    public function publicIndex()
    {
        $team = Team::orderBy('category', 'asc')->get();
        return Inertia::render('Landing/team/index', ['team' => $team]);
    }
}