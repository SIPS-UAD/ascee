<?php

namespace Database\Seeders;

use App\Models\Events;
use App\Models\Admin;
use Illuminate\Database\Seeder;

class EventsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */    public function run(): void
    {
        $admins = Admin::all();

        for ($i = 1; $i <= 20; $i++) {
            Events::create([
                'title' => fake()->sentence(rand(3, 6)),
                'date' => fake()->dateTimeBetween('now', '+1 year')->format('Y-m-d'),
                'description' => fake()->paragraphs(rand(2, 3), true),
                'image' => fake()->image(null, 640, 480, null, false),
                'admin_id' => $admins->random()->id_admin
            ]);
        }
    }
}
