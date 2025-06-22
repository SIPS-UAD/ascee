<?php

namespace Database\Seeders;

use App\Models\AboutUs;
use App\Models\Admin;
use Illuminate\Database\Seeder;

class AboutUsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */    public function run(): void
    {
        $admins = Admin::all();
        $sections = ['about', 'research', 'services', 'mission', 'vision'];

        for ($i = 1; $i <= 8; $i++) {
            AboutUs::create([
                'description' => fake()->paragraphs(3, true),
                'visi_misi' => 'Visi: ' . fake()->sentence(12) . ' Misi: ' . fake()->sentence(15),
                'section' => fake()->randomElement($sections),
                'people' => fake()->paragraph(2),
                'contact' => fake()->email() . ' atau hubungi ' . fake()->phoneNumber(),
                'admin_id' => $admins->random()->id_admin
            ]);
        }
    }
}
