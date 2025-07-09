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
            'overview' => 'ASCEE (Association for Scientific Computing Electronics and Engineering) is a leading global non-governmental organization (NGO) focused on the development of Science and Technology. Officially registered in Indonesia since 2017 (Decree of the Minister of Law and Human Rights No. AHU-0000152.AH.01.07.YEAR 2017), ASCEE has expanded its network to various countries including Australia, Japan, India, China, and others, and hosts diverse specialized communities such as the ASCEE Viperarts Society and Computer Society. With the tagline "Science-Technology for Society", ASCEE is committed to delivering tangible benefits to the global community through:
                1. Scientific Publications: Nationally accredited journals (RISTEKDIKTI) and internationally indexed ones (Scopus, CNKI).
                2. International Conferences: A platform for scientists and practitioners to share knowledge.
                3. Research & Education Support: Assistance with research, scientific writing, scholarships, workshops, and seminars.',
            'vision' => 'To be a globally reputable consortium in the field of Science and Technology.',
            'mission' => '1. Pioneering research and development in the field of Science and Technology.
            2. Encompass cooperation with various universities, companies which managing Science and Technology to develop the theory, application and its implementation.
            3. Providing a forum for the world community to collaborate in the research and development of Science and Technology.
            4. Publish the results of research and development of Science and Technology through scientific periodical conferences and other media publications.
            5. Provide education to the global community through workshops, training sessions, seminars and consultations.
            6. Create an emotional connection between everyone involved, the experience itself and the one supporting the experience (a brand or a person).',
            'corporate_offices' => json_encode([
        [
            'country' => 'Indonesia',
            'address' => "Janti Street\nKarangjambe 130B\nBanguntapan, Bantul\nDI Yogyakarta",
            'email' => 'indonesia@ascee.org',
        ],
        [
            'country' => 'Australia',
            'address' => "1, Mia Street\nModbury North\nSouth Australia: 5092\nAdelaide, Australia",
            'email' => 'australia@ascee.org',
        ],
        [
            'country' => 'Colombia',
            'address' => "Carrera 26#3A-161\nBarranquilla, Colombia",
            'email' => ['colombia@ascee.org', 'lhernandez@ascee.org'],
        ],
        [
            'country' => 'P.R. China',
            'address' => "122 Ninghai Road\nGulou District\nNanjing City\nJiangsu Province, P.R. China",
            'email' => 'china@ascee.org',
        ],
        [
            'country' => 'Japan',
            'address' => "50-39-201, Rouji 5 Choume\nMinami-Ku, Fukuoka-Shi\nFukuoka-Ken, Japan",
            'email' => 'japan@ascee.org',
        ],]),
            'section' => 'about',
            'admin_id' => $admins->random()->id_admin
        ]);
    }
}
