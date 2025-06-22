<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::create([
            'email' => 'john.doe@example.com',
            'password' => Hash::make('password123'),
            'full_name' => 'John Doe',
            'address' => 'Jl. Sudirman No. 123, Jakarta',
            'zip_code' => '12345',
            'gender' => 'Male',
            'phone' => '081234567890',
            'birth_date' => '1990-01-15'
        ]);

        User::create([
            'email' => 'jane.smith@example.com',
            'password' => Hash::make('password123'),
            'full_name' => 'Jane Smith',
            'address' => 'Jl. Thamrin No. 456, Bandung',
            'zip_code' => '54321',
            'gender' => 'Female',
            'phone' => '081987654321',
            'birth_date' => '1992-05-20'
        ]);

        User::create([
            'email' => 'bob.wilson@example.com',
            'password' => Hash::make('password123'),
            'full_name' => 'Bob Wilson',
            'address' => 'Jl. Diponegoro No. 789, Surabaya',
            'zip_code' => '67890',
            'gender' => 'Male',
            'phone' => '081567890123',
            'birth_date' => '1988-11-30'
        ]);

        User::create([
            'email' => 'alice.brown@example.com',
            'password' => Hash::make('password123'),
            'full_name' => 'Alice Brown',
            'address' => 'Jl. Gatot Subroto No. 321, Yogyakarta',
            'zip_code' => '13579',
            'gender' => 'Female',
            'phone' => '081098765432',
            'birth_date' => '1995-03-10'
        ]);
    }
}
