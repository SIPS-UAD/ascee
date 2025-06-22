<?php

namespace Database\Seeders;

use App\Models\EducationAndCareers;
use App\Models\Admin;
use Illuminate\Database\Seeder;

class EducationAndCareersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $admin = Admin::first();

        EducationAndCareers::create([
            'title' => 'Master in Educational Technology - Full Scholarship',
            'date' => '2025-03-01',
            'publisher' => 'ASCEE Education Partners',
            'description' => 'Full scholarship opportunity for Master\'s degree in Educational Technology at top universities in Southeast Asia. Includes research assistantship and international exchange programs.',
            'image' => 'masters-scholarship.jpg',
            'admin_id' => $admin->id_admin
        ]);

        EducationAndCareers::create([
            'title' => 'Senior Communication Specialist Position',
            'date' => '2025-02-15',
            'publisher' => 'ASCEE Career Center',
            'description' => 'Exciting career opportunity for Senior Communication Specialist role at leading educational institution. Requires 5+ years experience in academic communication.',
            'image' => 'senior-comm-specialist.jpg',
            'admin_id' => $admin->id_admin
        ]);

        EducationAndCareers::create([
            'title' => 'PhD Fellowship in Cross-Cultural Communication',
            'date' => '2025-04-01',
            'publisher' => 'ASCEE Research Division',
            'description' => 'Prestigious PhD fellowship focusing on cross-cultural communication research. Full funding for 4 years including tuition, stipend, and research expenses.',
            'image' => 'phd-fellowship.jpg',
            'admin_id' => $admin->id_admin
        ]);

        EducationAndCareers::create([
            'title' => 'Educational Technology Consultant - Remote',
            'date' => '2025-02-28',
            'publisher' => 'ASCEE Consulting Services',
            'description' => 'Remote consulting position for Educational Technology expert. Work with international clients to implement digital learning solutions.',
            'image' => 'edtech-consultant.jpg',
            'admin_id' => $admin->id_admin
        ]);

        EducationAndCareers::create([
            'title' => 'Certificate Program in Digital Pedagogy',
            'date' => '2025-05-15',
            'publisher' => 'ASCEE Training Institute',
            'description' => 'Professional certificate program in digital pedagogy for educators. 6-month intensive program with hands-on training and certification.',
            'image' => 'digital-pedagogy-cert.jpg',
            'admin_id' => $admin->id_admin
        ]);

        EducationAndCareers::create([
            'title' => 'Research Assistant Position - Communication Studies',
            'date' => '2025-03-20',
            'publisher' => 'ASCEE Research Center',
            'description' => 'Research assistant position in communication studies department. Opportunity to work on cutting-edge research projects with international team.',
            'image' => 'research-assistant.jpg',
            'admin_id' => $admin->id_admin
        ]);
    }
}
