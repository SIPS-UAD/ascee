<?php

namespace Database\Seeders;

use App\Models\EducationAndCareers;
use App\Models\Admin;
use Illuminate\Database\Seeder;

class EducationAndCareersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $admins = Admin::all();

        for ($i = 1; $i <= 20; $i++) {
            EducationAndCareers::create([
                'title' => fake()->sentence(rand(4, 8)),
                'date' => fake()->dateTimeBetween('-3 months', '+6 months')->format('Y-m-d'),
                'publisher' => fake()->company(),
                'description' => fake()->paragraphs(rand(2, 4), true),
                'image' => null, // Leave as null for now, images can be added through admin panel
                'admin_id' => $admins->random()->id_admin
            ]);
        }
    }
}
