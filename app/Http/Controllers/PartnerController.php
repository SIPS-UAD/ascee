<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Partner;
use App\Models\Admin;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class PartnerController extends Controller
{
  public function index()
  {
    $partners = Partner::with('admin')->latest()->get();

    $stats = [
      'total' => $partners->count(),
    ];

    return Inertia::render('admin/partners/index', [
      'partners' => $partners,
      'stats' => $stats,
      'success' => session('success'),
    ]);
  }

  public function create()
  {
    $admins = Admin::all();

    return Inertia::render('admin/partners/create', [
      'admins' => $admins,
    ]);
  }

  public function store(Request $request)
  {
    $request->validate([
      'name' => 'required|string|max:255',
      'website' => 'nullable|url|max:255',
      'logo' => 'nullable|image|max:2048', 
      'admin_id' => 'required|exists:admins,id_admin',
    ]);

    $partner = new Partner;
    $partner->name = $request->name;
    $partner->website = $request->website;
    $partner->admin_id = $request->admin_id;

    if ($request->hasFile('logo')) {
      $path = $request->file('logo')->store('partners', 'public');
      $partner->logo = $path;
    }

    $partner->save();

    return redirect()->route('partners.index')
      ->with('success', 'Partner created successfully.');
  }

  public function edit(Partner $partner)
  {
    $admins = Admin::all();

    return Inertia::render('admin/partners/edit', [
      'partner' => $partner,
      'admins' => $admins,
    ]);
  }

  public function update(Request $request, Partner $partner)
  {
    $request->validate([
      'name' => 'required|string|max:255',
      'website' => 'nullable|url|max:255',
      'logo' => 'nullable|image|max:2048',
      'admin_id' => 'required|exists:admins,id_admin',
    ]);

    $partner->name = $request->name;
    $partner->website = $request->website;
    $partner->admin_id = $request->admin_id;

    if ($request->hasFile('logo')) {
      if ($partner->logo) {
        Storage::disk('public')->delete($partner->logo);
      }

      $path = $request->file('logo')->store('partners', 'public');
      $partner->logo = $path;
    }

    $partner->save();

    return redirect()->route('partners.index')
      ->with('success', 'Partner updated successfully.');
  }

  public function destroy(Partner $partner)
  {
    if ($partner->logo) {
      Storage::disk('public')->delete($partner->logo);
    }

    $partner->delete();

    return redirect()->route('partners.index')
      ->with('success', 'Partner deleted successfully.');
  }

  public function show(Partner $partner)
  {
    $partner->load('admin');

    return Inertia::render('admin/partners/show', [
      'partner' => $partner,
    ]);
  }
}
