<?php

namespace Database\Seeders;

use App\Models\Contact;
use App\Models\PencarianMember;
use App\Models\JenisMitra;
use Illuminate\Database\Seeder;

class ContactSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */    public function run(): void
    {
        $members = PencarianMember::all();
        $mitras = JenisMitra::all();

        $provinces = [
            'DKI Jakarta', 'Jawa Barat', 'Jawa Tengah', 'Jawa Timur',
            'Sumatera Utara', 'Sumatera Barat', 'Bali', 'Yogyakarta'
        ];

        $countries = [
            'Indonesia', 'Malaysia', 'Singapore', 'Thailand', 'Philippines', 'Vietnam'
        ];

        // Contacts for PencarianMember
        foreach ($members as $member) {
            Contact::create([
                'address_line' => fake()->streetAddress(),
                'website_url' => fake()->url(),
                'zip' => fake()->postcode(),
                'province' => fake()->randomElement($provinces),
                'country' => fake()->randomElement($countries),
                'pencarian_member_id' => $member->id_member,
                'jenis_mitra_id' => null
            ]);
        }

        // Contacts for JenisMitra
        foreach ($mitras as $mitra) {
            Contact::create([
                'address_line' => fake()->streetAddress(),
                'website_url' => fake()->url(),
                'zip' => fake()->postcode(),
                'province' => fake()->randomElement($provinces),
                'country' => fake()->randomElement($countries),
                'pencarian_member_id' => null,
                'jenis_mitra_id' => $mitra->id_mitra
            ]);
        }
    }
}
