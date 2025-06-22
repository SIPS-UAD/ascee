<?php

namespace Database\Seeders;

use App\Models\Admin;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Admin::create([
            'email' => 'admin@ascee.com',
            'password' => Hash::make('password123'),
            'username' => 'superadmin'
        ]);

        Admin::create([
            'email' => 'admin2@ascee.com',
            'password' => Hash::make('password123'),
            'username' => 'admin2'
        ]);

        Admin::create([
            'email' => 'editor@ascee.com',
            'password' => Hash::make('password123'),
            'username' => 'editor'
        ]);
    }
}
