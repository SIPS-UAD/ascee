<?php

namespace Database\Seeders;

use App\Models\Conferences;
use App\Models\Admin;
use Illuminate\Database\Seeder;

class ConferencesSeeder extends Seeder
{    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $admins = Admin::all();

        for ($i = 1; $i <= 15; $i++) {
            Conferences::create([
                'title' => fake()->sentence(rand(4, 8)),
                'date' => fake()->dateTimeBetween('now', '+2 years')->format('Y-m-d'),
                'description' => fake()->paragraphs(rand(2, 4), true),
                'image' => fake()->image(null, 640, 480, null, false),
                'admin_id' => $admins->random()->id_admin
            ]);
        }
    }
}
