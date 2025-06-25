<?php

namespace Database\Seeders;

use App\Models\PencarianMember;
use App\Models\User;
use Illuminate\Database\Seeder;

class PencarianMemberSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $users = User::all();
        $membershipTypes = ['Basic', 'Standard', 'Premium', 'VIP'];

        for ($i = 1; $i <= 15; $i++) {
            PencarianMember::create([
                'id_address' => 'ADDR' . str_pad($i, 3, '0', STR_PAD_LEFT),
                'name' => fake()->name(),
                'date_join' => fake()->dateTimeBetween('-2 years', 'now')->format('Y-m-d'),
                'membership_type' => fake()->randomElement($membershipTypes),
                'full_name' => fake()->name(),
                'gender' => fake()->randomElement(['Male', 'Female']),
                'phone' => fake()->phoneNumber(),
                'birth_date' => fake()->date('Y-m-d', '-25 years'),
                'user_id' => $users->random()->id_user
            ]);
        }
    }
}
