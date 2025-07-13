<?php

namespace App\Http\Controllers;

use App\Models\JenisMitra;
use App\Models\User;
use Illuminate\Http\Request;

class JenisMitraController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $mitras = JenisMitra::with('user')->latest()->paginate(10);
        return view('admin.jenis-mitra.index', compact('mitras'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $users = User::all();
        return view('admin.jenis-mitra.create', compact('users'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'id_address' => 'required|string|max:255',
            'name' => 'required|string|max:255',
            'email_address' => 'nullable|email',
            'business_type' => 'required|string',
            'email_corporate' => 'required|email',
            'user_id' => 'required|exists:users,id_user',
        ]);

        JenisMitra::create($request->all());

        return redirect()->route('jenis-mitra.index')
            ->with('success', 'Jenis Mitra created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(JenisMitra $jenisMitra)
    {
        $jenisMitra->load('user', 'contact');
        return view('admin.jenis-mitra.show', compact('jenisMitra'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(JenisMitra $jenisMitra)
    {
        $users = User::all();
        return view('admin.jenis-mitra.edit', compact('jenisMitra', 'users'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, JenisMitra $jenisMitra)
    {
        $request->validate([
            'id_address' => 'required|string|max:255',
            'name' => 'required|string|max:255',
            'email_address' => 'nullable|email',
            'business_type' => 'required|string',
            'email_corporate' => 'required|email',
            'user_id' => 'required|exists:users,id_user',
        ]);

        $jenisMitra->update($request->all());

        return redirect()->route('jenis-mitra.index')
            ->with('success', 'Jenis Mitra updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(JenisMitra $jenisMitra)
    {
        $jenisMitra->delete();
        
        return redirect()->route('jenis-mitra.index')
            ->with('success', 'Jenis Mitra deleted successfully.');
    }
}