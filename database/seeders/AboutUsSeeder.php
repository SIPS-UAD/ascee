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
        $admin = Admin::first();

        AboutUs::create([
            'description' => 'ASCEE (Association of Southeast Asian Communication and Education Excellence) adalah organisasi profesional yang berfokus pada pengembangan komunikasi dan pendidikan di kawasan Asia Tenggara.',
            'visi_misi' => 'Visi: Menjadi organisasi terdepan dalam memajukan komunikasi dan pendidikan berkualitas di Asia Tenggara. Misi: Memfasilitasi pertukaran pengetahuan, penelitian, dan praktik terbaik dalam bidang komunikasi dan pendidikan.',
            'section' => 'about',
            'people' => 'Tim ASCEE terdiri dari para profesional berpengalaman di bidang komunikasi, pendidikan, dan teknologi yang berkomitmen untuk memajukan industri ini.',
            'contact' => 'Hubungi kami di info@ascee.org atau kunjungi kantor pusat kami di Jakarta, Indonesia.',
            'admin_id' => $admin->id_admin
        ]);

        AboutUs::create([
            'description' => 'Divisi Penelitian dan Pengembangan ASCEE berfokus pada inovasi dalam metode komunikasi dan pendidikan modern.',
            'visi_misi' => 'Mengembangkan standar baru dalam komunikasi pendidikan yang efektif dan berkelanjutan.',
            'section' => 'research',
            'people' => 'Dipimpin oleh para peneliti terkemuka dengan pengalaman internasional.',
            'contact' => 'research@ascee.org',
            'admin_id' => $admin->id_admin
        ]);
    }
}
