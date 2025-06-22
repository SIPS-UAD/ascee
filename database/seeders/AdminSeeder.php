<?php

namespace Database\Seeders;

use App\Models\Admin;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */    public function run(): void
    {
        for ($i = 1; $i <= 5; $i++) {
            Admin::create([
                'email' => fake()->unique()->safeEmail(),
                'password' => Hash::make('password123'),
                'username' => fake()->unique()->userName()
            ]);
        }
    }
}
