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
     */
    public function run(): void
    {
        $members = PencarianMember::all();
        $mitras = JenisMitra::all();

        // Contacts for PencarianMember
        foreach ($members as $index => $member) {
            Contact::create([
                'address_line' => 'Jl. Pendidikan No. ' . (100 + $index * 10) . ', Jakarta',
                'website_url' => 'https://profile' . ($index + 1) . '.ascee-member.org',
                'zip' => '1' . str_pad($index + 1, 4, '0', STR_PAD_LEFT),
                'province' => $this->getRandomProvince(),
                'country' => 'Indonesia',
                'pencarian_member_id' => $member->id_member,
                'jenis_mitra_id' => null
            ]);
        }

        // Contacts for JenisMitra
        foreach ($mitras as $index => $mitra) {
            Contact::create([
                'address_line' => 'Jl. Bisnis No. ' . (200 + $index * 15) . ', ' . $this->getRandomCity(),
                'website_url' => 'https://www.' . strtolower(str_replace(' ', '', $mitra->name)) . '.com',
                'zip' => '2' . str_pad($index + 1, 4, '0', STR_PAD_LEFT),
                'province' => $this->getRandomProvince(),
                'country' => $this->getRandomCountry(),
                'pencarian_member_id' => null,
                'jenis_mitra_id' => $mitra->id_mitra
            ]);
        }
    }

    private function getRandomProvince(): string
    {
        $provinces = [
            'DKI Jakarta',
            'Jawa Barat',
            'Jawa Tengah',
            'Jawa Timur',
            'Sumatera Utara',
            'Sumatera Barat',
            'Bali',
            'Yogyakarta'
        ];

        return $provinces[array_rand($provinces)];
    }

    private function getRandomCity(): string
    {
        $cities = [
            'Jakarta',
            'Bandung',
            'Surabaya',
            'Medan',
            'Yogyakarta',
            'Denpasar',
            'Semarang',
            'Palembang'
        ];

        return $cities[array_rand($cities)];
    }

    private function getRandomCountry(): string
    {
        $countries = [
            'Indonesia',
            'Malaysia',
            'Singapore',
            'Thailand',
            'Philippines',
            'Vietnam'
        ];

        return $countries[array_rand($countries)];
    }
}
