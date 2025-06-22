<?php

namespace Database\Seeders;

use App\Models\Journal;
use App\Models\Admin;
use Illuminate\Database\Seeder;

class JournalSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $admin = Admin::first();

        Journal::create([
            'title' => 'Innovations in Digital Communication for Education',
            'image' => 'journal-digital-comm.jpg',
            'admin_id' => $admin->id_admin
        ]);

        Journal::create([
            'title' => 'Sustainable Learning Practices in Southeast Asia',
            'image' => 'journal-sustainable-learning.jpg',
            'admin_id' => $admin->id_admin
        ]);

        Journal::create([
            'title' => 'Cross-Cultural Communication in Academic Settings',
            'image' => 'journal-cross-cultural.jpg',
            'admin_id' => $admin->id_admin
        ]);

        Journal::create([
            'title' => 'Technology Integration in Modern Classroom',
            'image' => 'journal-tech-integration.jpg',
            'admin_id' => $admin->id_admin
        ]);

        Journal::create([
            'title' => 'Assessment Methods in Distance Learning',
            'image' => 'journal-assessment-methods.jpg',
            'admin_id' => $admin->id_admin
        ]);

        Journal::create([
            'title' => 'Professional Development for Educators',
            'image' => 'journal-prof-development.jpg',
            'admin_id' => $admin->id_admin
        ]);
    }
}
