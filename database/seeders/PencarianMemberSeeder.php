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

        PencarianMember::create([
            'id_address' => 'ADDR001',
            'name' => 'Dr. Sarah Johnson',
            'date_join' => '2023-01-15',
            'membership_type' => 'Premium',
            'full_name' => 'Dr. Sarah Elizabeth Johnson',
            'gender' => 'Female',
            'phone' => '081234567890',
            'birth_date' => '1985-03-20',
            'user_id' => $users->first()->id_user
        ]);

        PencarianMember::create([
            'id_address' => 'ADDR002',
            'name' => 'Prof. Michael Chen',
            'date_join' => '2022-08-10',
            'membership_type' => 'Standard',
            'full_name' => 'Professor Michael Chen Wei Ming',
            'gender' => 'Male',
            'phone' => '081567890123',
            'birth_date' => '1978-11-15',
            'user_id' => $users->skip(1)->first()->id_user
        ]);

        PencarianMember::create([
            'id_address' => 'ADDR003',
            'name' => 'Dr. Maria Santos',
            'date_join' => '2023-05-22',
            'membership_type' => 'Premium',
            'full_name' => 'Dr. Maria Esperanza Santos',
            'gender' => 'Female',
            'phone' => '081098765432',
            'birth_date' => '1982-07-08',
            'user_id' => $users->skip(2)->first()->id_user
        ]);

        PencarianMember::create([
            'id_address' => 'ADDR004',
            'name' => 'Ahmad Rahman',
            'date_join' => '2024-01-03',
            'membership_type' => 'Basic',
            'full_name' => 'Ahmad Rahman bin Abdullah',
            'gender' => 'Male',
            'phone' => '081876543210',
            'birth_date' => '1990-12-25',
            'user_id' => $users->skip(3)->first()->id_user
        ]);
    }
}
