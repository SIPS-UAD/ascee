<?php

namespace Database\Seeders;

use App\Models\News;
use App\Models\Admin;
use Illuminate\Database\Seeder;

class NewsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $admin = Admin::first();

        News::create([
            'title' => 'ASCEE Mengadakan Konferensi Internasional 2025',
            'date' => '2025-01-15',
            'publisher' => 'ASCEE Media Team',
            'description' => 'ASCEE dengan bangga mengumumkan konferensi internasional tahunan yang akan diselenggarakan pada bulan Maret 2025. Konferensi ini akan membahas tren terbaru dalam komunikasi dan pendidikan digital.',
            'image' => 'conference-2025.jpg',
            'admin_id' => $admin->id_admin
        ]);

        News::create([
            'title' => 'Program Beasiswa ASCEE Dibuka untuk Mahasiswa Asia Tenggara',
            'date' => '2025-02-01',
            'publisher' => 'ASCEE Scholarship Committee',
            'description' => 'ASCEE membuka program beasiswa untuk mendukung mahasiswa berprestasi di bidang komunikasi dan pendidikan dari seluruh Asia Tenggara. Pendaftaran dibuka hingga 31 Maret 2025.',
            'image' => 'scholarship-program.jpg',
            'admin_id' => $admin->id_admin
        ]);

        News::create([
            'title' => 'Kemitraan Strategis ASCEE dengan Universitas Terkemuka',
            'date' => '2025-02-10',
            'publisher' => 'ASCEE Partnership Division',
            'description' => 'ASCEE menjalin kemitraan strategis dengan 15 universitas terkemuka di Asia Tenggara untuk mengembangkan program penelitian bersama dan pertukaran akademik.',
            'image' => 'university-partnership.jpg',
            'admin_id' => $admin->id_admin
        ]);

        News::create([
            'title' => 'Workshop Digital Communication Tools untuk Pendidik',
            'date' => '2025-02-20',
            'publisher' => 'ASCEE Training Center',
            'description' => 'ASCEE menyelenggarakan workshop intensif tentang penggunaan tools komunikasi digital untuk meningkatkan efektivitas pembelajaran online dan hybrid.',
            'image' => 'digital-workshop.jpg',
            'admin_id' => $admin->id_admin
        ]);

        News::create([
            'title' => 'Laporan Tahunan ASCEE 2024: Pencapaian dan Inovasi',
            'date' => '2025-01-30',
            'publisher' => 'ASCEE Executive Board',
            'description' => 'ASCEE merilis laporan tahunan 2024 yang mencakup pencapaian signifikan dalam penelitian, program pendidikan, dan ekspansi jaringan internasional.',
            'image' => 'annual-report-2024.jpg',
            'admin_id' => $admin->id_admin
        ]);
    }
}
