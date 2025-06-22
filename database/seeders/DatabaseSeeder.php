<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Run seeders in the correct order to respect foreign key constraints
        $this->call([
            AdminSeeder::class,
            UserSeeder::class,
            AboutUsSeeder::class,
            NewsSeeder::class,
            JournalSeeder::class,
            EventsSeeder::class,
            ConferencesSeeder::class,
            EducationAndCareersSeeder::class,
            PencarianMemberSeeder::class,
            JenisMitraSeeder::class,
            ContactSeeder::class,
        ]);
    }
}
