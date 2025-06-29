<?php

namespace App\Http\Controllers;

use App\Models\EducationAndCareers;
use App\Models\Admin;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class EducationAndCareersController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $educations = EducationAndCareers::with('admin')->latest()->paginate(10);
        return Inertia::render('admin/education-careers/index', ['educations' => $educations]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $admins = Admin::all();
        return Inertia::render('admin/education-careers/create', ['admins' => $admins]);
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

        $data = $request->all();

        if ($request->hasFile('image')) {
            $data['image'] = $request->file('image')->store('education-careers', 'public');
        }

        EducationAndCareers::create($data);

        return redirect()->route('careers.index')
            ->with('success', 'Education & Career content created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(EducationAndCareers $educationCareer)
    {
        $educationCareer->load('admin');
        return Inertia::render('admin/education-careers/show', ['educationCareer' => $educationCareer]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(EducationAndCareers $educationCareer)
    {
        $admins = Admin::all();
        return Inertia::render('admin/education-careers/edit', [
            'educationCareer' => $educationCareer,
            'admins' => $admins
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, EducationAndCareers $educationCareer)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'date' => 'required|date',
            'publisher' => 'required|string|max:255',
            'description' => 'required|string',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            'admin_id' => 'required|exists:admins,id_admin',
        ]);

        $data = $request->all();

        if ($request->hasFile('image')) {
            if ($educationCareer->image && Storage::disk('public')->exists($educationCareer->image)) {
                Storage::disk('public')->delete($educationCareer->image);
            }
            $data['image'] = $request->file('image')->store('education-careers', 'public');
        }

        $educationCareer->update($data);

        return redirect()->route('careers.index')
            ->with('success', 'Education & Career content updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(EducationAndCareers $educationCareer)
    {
        if ($educationCareer->image && Storage::disk('public')->exists($educationCareer->image)) {
            Storage::disk('public')->delete($educationCareer->image);
        }

        $educationCareer->delete();
        
        return redirect()->route('careers.index')
            ->with('success', 'Education & Career content deleted successfully.');
    }
}