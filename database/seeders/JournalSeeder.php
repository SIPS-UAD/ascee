<?php

namespace Database\Seeders;

use App\Models\Journal;
use App\Models\Admin;
use Illuminate\Database\Seeder;

class JournalSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */    public function run(): void
    {
        $admins = Admin::all();

        for ($i = 1; $i <= 12; $i++) {
            Journal::create([
                'title' => fake()->sentence(rand(3, 7)),
                'image' => fake()->image(null, 300, 400, null, false),
                'admin_id' => $admins->random()->id_admin
            ]);
        }
    }
}
