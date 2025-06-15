<?php

namespace App\Http\Controllers;

use App\Models\EducationAndCareers;
use App\Models\Admin;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class EducationAndCareersController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $educations = EducationAndCareers::with('admin')->latest()->paginate(10);
        return view('admin.education-careers.index', compact('educations'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $admins = Admin::all();
        return view('admin.education-careers.create', compact('admins'));
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

        return redirect()->route('education-careers.index')
            ->with('success', 'Education & Career content created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(EducationAndCareers $educationCareer)
    {
        $educationCareer->load('admin');
        return view('admin.education-careers.show', compact('educationCareer'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(EducationAndCareers $educationCareer)
    {
        $admins = Admin::all();
        return view('admin.education-careers.edit', compact('educationCareer', 'admins'));
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

        return redirect()->route('education-careers.index')
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
        
        return redirect()->route('education-careers.index')
            ->with('success', 'Education & Career content deleted successfully.');
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
