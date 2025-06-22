<?php

namespace Database\Seeders;

use App\Models\JenisMitra;
use App\Models\User;
use Illuminate\Database\Seeder;

class JenisMitraSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $users = User::all();
        $businessTypes = ['Technology', 'Education', 'Consulting', 'Non-Profit', 'Healthcare', 'Finance'];

        for ($i = 1; $i <= 12; $i++) {
            JenisMitra::create([
                'id_address' => 'CORP' . str_pad($i, 3, '0', STR_PAD_LEFT),
                'name' => fake()->company(),
                'email_address' => fake()->companyEmail(),
                'business_type' => fake()->randomElement($businessTypes),
                'email_corporate' => fake()->companyEmail(),
                'user_id' => $users->random()->id_user
            ]);
        }
    }
}
