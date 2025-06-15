<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use App\Models\PencarianMember;
use App\Models\JenisMitra;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $contacts = Contact::with(['pencarianMember', 'jenisMitra'])->latest()->paginate(10);
        return view('admin.contacts.index', compact('contacts'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $members = PencarianMember::all();
        $mitras = JenisMitra::all();
        return view('admin.contacts.create', compact('members', 'mitras'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'address_line' => 'required|string|max:255',
            'website_url' => 'nullable|url',
            'zip' => 'required|string|max:10',
            'province' => 'required|string|max:255',
            'country' => 'required|string|max:255',
            'pencarian_member_id' => 'nullable|exists:pencarian_members,id_member',
            'jenis_mitra_id' => 'nullable|exists:jenis_mitras,id_mitra',
        ]);

        // Ensure at least one relationship is provided
        if (!$request->pencarian_member_id && !$request->jenis_mitra_id) {
            return back()->withErrors(['error' => 'Please select either a member or a mitra.']);
        }

        Contact::create($request->all());

        return redirect()->route('contacts.index')
            ->with('success', 'Contact created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Contact $contact)
    {
        $contact->load(['pencarianMember', 'jenisMitra']);
        return view('admin.contacts.show', compact('contact'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Contact $contact)
    {
        $members = PencarianMember::all();
        $mitras = JenisMitra::all();
        return view('admin.contacts.edit', compact('contact', 'members', 'mitras'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Contact $contact)
    {
        $request->validate([
            'address_line' => 'required|string|max:255',
            'website_url' => 'nullable|url',
            'zip' => 'required|string|max:10',
            'province' => 'required|string|max:255',
            'country' => 'required|string|max:255',
            'pencarian_member_id' => 'nullable|exists:pencarian_members,id_member',
            'jenis_mitra_id' => 'nullable|exists:jenis_mitras,id_mitra',
        ]);

        // Ensure at least one relationship is provided
        if (!$request->pencarian_member_id && !$request->jenis_mitra_id) {
            return back()->withErrors(['error' => 'Please select either a member or a mitra.']);
        }

        $contact->update($request->all());

        return redirect()->route('contacts.index')
            ->with('success', 'Contact updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Contact $contact)
    {
        $contact->delete();
        
        return redirect()->route('contacts.index')
            ->with('success', 'Contact deleted successfully.');
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
