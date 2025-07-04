<?php

namespace Database\Seeders;

use App\Models\AboutUs;
use App\Models\Admin;
use Illuminate\Database\Seeder;

class AboutUsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $admins = Admin::all();

        // Create only one About Us record (singleton)
        AboutUs::create([
            'overview' => 'ASCEE (Association of Computer Science and Electrical Engineering) adalah organisasi yang didedikasikan untuk memajukan bidang ilmu komputer dan teknik elektro. Kami berkomitmen untuk menyediakan platform bagi para profesional, akademisi, dan mahasiswa untuk berbagi pengetahuan, mengembangkan keterampilan, dan membangun jaringan yang kuat dalam industri teknologi.',
            'vision' => 'Menjadi organisasi terdepan dalam memfasilitasi inovasi dan kolaborasi di bidang ilmu komputer dan teknik elektro untuk menciptakan solusi teknologi yang berdampak positif bagi masyarakat.',
            'mission' => 'Menyelenggarakan kegiatan pendidikan, penelitian, dan pengembangan profesional yang berkualitas tinggi, memfasilitasi pertukaran pengetahuan antar anggota, dan mendorong inovasi teknologi yang berkelanjutan.',
            'corporate_offices' => 'Kantor Pusat: Jakarta, Indonesia. Email: info@ascee.org. Telepon: +62 21 1234 5678.',
            'section' => 'about',
            'admin_id' => $admins->random()->id_admin
        ]);
    }
}
