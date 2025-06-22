<?php

namespace App\Http\Controllers;

use App\Models\AboutUs;
use App\Models\Admin;
use Illuminate\Http\Request;

class AboutUsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $aboutUs = AboutUs::with('admin')->latest()->paginate(10);
        return view('admin.about-us.index', compact('aboutUs'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $admins = Admin::all();
        return view('admin.about-us.create', compact('admins'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'description' => 'required|string',
            'visi_misi' => 'required|string',
            'section' => 'required|string|max:255',
            'people' => 'nullable|string',
            'contact' => 'nullable|string',
            'admin_id' => 'required|exists:admins,id_admin',
        ]);

        AboutUs::create($request->all());

        return redirect()->route('about-us.index')
            ->with('success', 'About Us content created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(AboutUs $aboutUs)
    {
        $aboutUs->load('admin');
        return view('admin.about-us.show', compact('aboutUs'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(AboutUs $aboutUs)
    {
        $admins = Admin::all();
        return view('admin.about-us.edit', compact('aboutUs', 'admins'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, AboutUs $aboutUs)
    {
        $request->validate([
            'description' => 'required|string',
            'visi_misi' => 'required|string',
            'section' => 'required|string|max:255',
            'people' => 'nullable|string',
            'contact' => 'nullable|string',
            'admin_id' => 'required|exists:admins,id_admin',
        ]);

        $aboutUs->update($request->all());

        return redirect()->route('about-us.index')
            ->with('success', 'About Us content updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(AboutUs $aboutUs)
    {
        $aboutUs->delete();
        
        return redirect()->route('about-us.index')
            ->with('success', 'About Us content deleted successfully.');
    }
}