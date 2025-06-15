<?php

namespace App\Http\Controllers;

use App\Models\PencarianMember;
use App\Models\User;
use Illuminate\Http\Request;

class PencarianMemberController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $members = PencarianMember::with('user')->latest()->paginate(10);
        return view('admin.pencarian-members.index', compact('members'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $users = User::all();
        return view('admin.pencarian-members.create', compact('users'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'id_address' => 'required|string|max:255',
            'name' => 'required|string|max:255',
            'date_join' => 'required|date',
            'membership_type' => 'required|string|max:255',
            'full_name' => 'required|string|max:255',
            'gender' => 'required|in:male,female',
            'phone' => 'required|string|max:20',
            'birth_date' => 'required|date',
            'user_id' => 'required|exists:users,id_user',
        ]);

        PencarianMember::create($request->all());

        return redirect()->route('pencarian-members.index')
            ->with('success', 'Member created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(PencarianMember $pencarianMember)
    {
        $pencarianMember->load('user');
        return view('admin.pencarian-members.show', compact('pencarianMember'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(PencarianMember $pencarianMember)
    {
        $users = User::all();
        return view('admin.pencarian-members.edit', compact('pencarianMember', 'users'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, PencarianMember $pencarianMember)
    {
        $request->validate([
            'id_address' => 'required|string|max:255',
            'name' => 'required|string|max:255',
            'date_join' => 'required|date',
            'membership_type' => 'required|string|max:255',
            'full_name' => 'required|string|max:255',
            'gender' => 'required|in:male,female',
            'phone' => 'required|string|max:20',
            'birth_date' => 'required|date',
            'user_id' => 'required|exists:users,id_user',
        ]);

        $pencarianMember->update($request->all());

        return redirect()->route('pencarian-members.index')
            ->with('success', 'Member updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(PencarianMember $pencarianMember)
    {
        $pencarianMember->delete();
        
        return redirect()->route('pencarian-members.index')
            ->with('success', 'Member deleted successfully.');
    }
}
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
