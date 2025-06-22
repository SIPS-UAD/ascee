<?php

namespace Database\Seeders;

use App\Models\Events;
use App\Models\Admin;
use Illuminate\Database\Seeder;

class EventsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $admin = Admin::first();

        Events::create([
            'title' => 'ASCEE Annual Conference 2025',
            'date' => '2025-03-15',
            'description' => 'Join us for the biggest communication and education conference in Southeast Asia. Featuring keynote speakers, workshops, and networking opportunities.',
            'image' => 'annual-conference-2025.jpg',
            'admin_id' => $admin->id_admin
        ]);

        Events::create([
            'title' => 'Digital Learning Summit',
            'date' => '2025-04-20',
            'description' => 'Explore the future of digital learning with industry experts and thought leaders. Discover new technologies and methodologies.',
            'image' => 'digital-learning-summit.jpg',
            'admin_id' => $admin->id_admin
        ]);

        Events::create([
            'title' => 'Workshop: Effective Online Teaching',
            'date' => '2025-05-10',
            'description' => 'Interactive workshop focusing on best practices for online teaching and student engagement in virtual environments.',
            'image' => 'online-teaching-workshop.jpg',
            'admin_id' => $admin->id_admin
        ]);

        Events::create([
            'title' => 'Research Symposium: Communication Excellence',
            'date' => '2025-06-05',
            'description' => 'Academic symposium presenting latest research findings in communication and educational excellence.',
            'image' => 'research-symposium.jpg',
            'admin_id' => $admin->id_admin
        ]);

        Events::create([
            'title' => 'International Webinar Series',
            'date' => '2025-07-01',
            'description' => 'Monthly webinar series featuring international experts sharing insights on global communication trends.',
            'image' => 'webinar-series.jpg',
            'admin_id' => $admin->id_admin
        ]);

        Events::create([
            'title' => 'Student Competition: Innovation in Education',
            'date' => '2025-08-15',
            'description' => 'Annual student competition encouraging innovative solutions for educational challenges in the digital age.',
            'image' => 'student-competition.jpg',
            'admin_id' => $admin->id_admin
        ]);
    }
}
