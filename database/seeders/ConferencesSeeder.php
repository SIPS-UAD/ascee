<?php

namespace Database\Seeders;

use App\Models\Conferences;
use App\Models\Admin;
use Illuminate\Database\Seeder;

class ConferencesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $admin = Admin::first();

        Conferences::create([
            'title' => 'International Conference on Educational Technology',
            'date' => '2025-09-12',
            'description' => 'Premier conference focusing on the integration of technology in education, featuring presentations from leading researchers and practitioners.',
            'image' => 'edtech-conference.jpg',
            'admin_id' => $admin->id_admin
        ]);

        Conferences::create([
            'title' => 'Southeast Asian Communication Research Conference',
            'date' => '2025-10-18',
            'description' => 'Regional conference dedicated to advancing communication research and practice across Southeast Asian countries.',
            'image' => 'sea-comm-conference.jpg',
            'admin_id' => $admin->id_admin
        ]);

        Conferences::create([
            'title' => 'Global Summit on Distance Learning',
            'date' => '2025-11-22',
            'description' => 'International summit bringing together educators, policymakers, and technology leaders to discuss the future of distance learning.',
            'image' => 'distance-learning-summit.jpg',
            'admin_id' => $admin->id_admin
        ]);

        Conferences::create([
            'title' => 'Conference on Multicultural Education',
            'date' => '2025-12-08',
            'description' => 'Conference exploring best practices in multicultural education and cross-cultural communication in academic environments.',
            'image' => 'multicultural-education.jpg',
            'admin_id' => $admin->id_admin
        ]);

        Conferences::create([
            'title' => 'Annual Research Conference: Innovation in Learning',
            'date' => '2026-01-15',
            'description' => 'Annual research conference showcasing innovative approaches to learning and teaching methodologies.',
            'image' => 'innovation-learning-conf.jpg',
            'admin_id' => $admin->id_admin
        ]);
    }
}
