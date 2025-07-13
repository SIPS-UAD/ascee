<?php

namespace App\Http\Controllers;

use App\Models\AboutUs;
use App\Models\Admin;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AboutUsController extends Controller
{
    /**
     * Display the about us page.
     */
    public function index()
    {
        $aboutUs = AboutUs::with('admin')->first();
        $admins = Admin::all();
        
        return Inertia::render('admin/about-us/index', [
            'aboutUs' => $aboutUs,
            'admins' => $admins,
            'success' => session('success')
        ]);
    }

    /**
     * Store or update the about us information.
     */
    public function store(Request $request)
    {
        $request->validate([
            'overview' => 'required|string',
            'vision' => 'required|string',
            'mission' => 'required|string',
            'corporate_offices' => 'required|string',
            'admin_id' => 'required|exists:admins,id_admin',
        ]);

        $aboutUs = AboutUs::first();
        
        // Add default section value
        $data = $request->all();
        $data['section'] = 'about';
        
        if ($aboutUs) {
            // Update existing record
            $aboutUs->update($data);
            $message = 'About Us information updated successfully.';
        } else {
            // Create new record
            AboutUs::create($data);
            $message = 'About Us information created successfully.';
        }

        return redirect()->route('about-us.index')
            ->with('success', $message);
    }
}