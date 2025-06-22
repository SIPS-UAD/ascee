<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */    public function run(): void
    {
        for ($i = 1; $i <= 10; $i++) {
            User::create([
                'email' => fake()->unique()->safeEmail(),
                'password' => Hash::make('password123'),
                'full_name' => fake()->name(),
                'address' => fake()->address(),
                'zip_code' => fake()->postcode(),
                'gender' => fake()->randomElement(['Male', 'Female']),
                'phone' => fake()->phoneNumber(),
                'birth_date' => fake()->date('Y-m-d', '-18 years')
            ]);
        }
    }
}
