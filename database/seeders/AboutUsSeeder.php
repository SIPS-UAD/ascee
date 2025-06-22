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
            'description' => 'ASCEE (Association of Computer Science and Electrical Engineering) adalah organisasi yang didedikasikan untuk memajukan bidang ilmu komputer dan teknik elektro. Kami berkomitmen untuk menyediakan platform bagi para profesional, akademisi, dan mahasiswa untuk berbagi pengetahuan, mengembangkan keterampilan, dan membangun jaringan yang kuat dalam industri teknologi.',
            'visi_misi' => 'Visi: Menjadi organisasi terdepan dalam memfasilitasi inovasi dan kolaborasi di bidang ilmu komputer dan teknik elektro untuk menciptakan solusi teknologi yang berdampak positif bagi masyarakat. Misi: Menyelenggarakan kegiatan pendidikan, penelitian, dan pengembangan profesional yang berkualitas tinggi, memfasilitasi pertukaran pengetahuan antar anggota, dan mendorong inovasi teknologi yang berkelanjutan.',
            'section' => 'about',
            'people' => 'Tim ASCEE terdiri dari para ahli dan praktisi berpengalaman di bidang teknologi informasi, teknik elektro, dan industri terkait. Kami memiliki dewan penasehat yang terdiri dari akademisi terkemuka dan profesional industri yang berpengalaman lebih dari 10 tahun di bidangnya masing-masing.',
            'contact' => 'info@ascee.org atau hubungi +62 21 1234 5678',
            'admin_id' => $admins->random()->id_admin
        ]);
    }
}
