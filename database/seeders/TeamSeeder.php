<?php

namespace Database\Seeders;

use App\Models\Team;
use App\Models\Admin;
use Illuminate\Database\Seeder;

class TeamSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $admins = Admin::all();

        // Executive Officers
        $executiveOfficers = [
            ['name' => 'Sutarman', 'position' => 'Chair', 'credentials' => 'Assoc. Prof., S.Kom., M.Kom., Ph.D.'],
            ['name' => 'Aji Prasetya Wibawa', 'position' => 'Vice-Chair', 'credentials' => 'Assoc. Prof., Ph.D.'],
            ['name' => 'Haviluddin', 'position' => 'Secretary', 'credentials' => 'Assist. Prof., Ph.D.'],
            ['name' => 'Nia Fitria', 'position' => 'Secretary', 'credentials' => 'SM., BBA'],
            ['name' => 'Intan Tri Wahyuningtyas', 'position' => 'Treasurer', 'credentials' => 'AS.'],
            ['name' => 'Andri Pranolo', 'position' => 'Publication Director', 'credentials' => 'Assist. Prof., S.Kom., M.Cs.'],
            ['name' => 'Silvia Santi', 'position' => 'Research and Development Director', 'credentials' => ''],
            ['name' => 'Adhi Prahara', 'position' => 'Research and Development Director', 'credentials' => 'Assist. Prof., M.Cs.'],
            ['name' => 'Supriyanto', 'position' => 'Research and Development Director', 'credentials' => 'Assist. Prof., M.Eng.'],
            ['name' => 'Tuti Purwaningsing', 'position' => 'Public Relation Director', 'credentials' => 'Assist. Prof., M.Stats.'],
            ['name' => 'Rifky Dora Wijayanti', 'position' => 'Public Relation Director', 'credentials' => 'Assist. Prof., M.Sc.'],
        ];

        // Sections
        $sections = [
            ['name' => 'Ahmad Azhari', 'position' => 'ASCEE Indonesia', 'credentials' => 'Assist. Prof., M.Eng.'],
            ['name' => 'Su Zhe', 'position' => 'ASCEE P.R. China', 'credentials' => 'Assist. Prof., M.Sn.'],
            ['name' => 'Anusua Ghosh', 'position' => 'ASCEE Australia', 'credentials' => 'Assoc. Prof., Ph.D.'],
            ['name' => 'Mahdillah', 'position' => 'ASCEE Japan', 'credentials' => ''],
            ['name' => 'Leonel Hernandez', 'position' => 'ASCEE Colombia', 'credentials' => 'Assist. Prof.'],
            ['name' => 'Misbah', 'position' => 'ASCEE Pakistan', 'credentials' => 'Ph.D.'],
            ['name' => 'Nazima Rangwala Kalita', 'position' => 'ASCEE India', 'credentials' => ''],
            ['name' => 'Sarina Sulaiman', 'position' => 'ASCEE Malaysia', 'credentials' => 'Assoc. Prof., Ph.D.'],
            ['name' => 'Roman Voliansky', 'position' => 'ASCEE Ukraine', 'credentials' => 'Assoc. Prof., Ph.D.'],
        ];

        // Branches and Chapters
        $branchesChapters = [
            ['name' => 'Farhan Hidayatullah', 'position' => 'ASCEE Student', 'credentials' => ''],
            ['name' => 'Fachrul Kurniawan', 'position' => 'ASCEE IoT and Smart Cities', 'credentials' => 'Dr.'],
        ];

        // Societies - Computer
        $computerSociety = [
            ['name' => 'Edi Sutoyo', 'position' => 'Executive Committee', 'credentials' => 'Assist. Prof.', 'society' => 'Computer'],
            ['name' => 'Rafal Drezewski', 'position' => 'Member', 'credentials' => 'Assoc. Prof.', 'society' => 'Computer'],
            ['name' => 'Siti Mariyam Shamsuddin', 'position' => 'Member', 'credentials' => 'Prof. Dr.', 'society' => 'Computer'],
            ['name' => 'Shi-Jinn Horng', 'position' => 'Member', 'credentials' => 'Prof. Dr.', 'society' => 'Computer'],
            ['name' => 'Yezid Donoso', 'position' => 'Member', 'credentials' => 'Prof. Dr.', 'society' => 'Computer'],
            ['name' => 'Leonel Hernandez', 'position' => 'Member', 'credentials' => 'Assoc. Prof.', 'society' => 'Computer'],
        ];

        // Societies - Visual and Performing Arts (Viperarts)
        $viperartsSociety = [
            ['name' => 'Yang Xifan', 'position' => 'Executive Committee', 'credentials' => 'Prof. Dr.', 'society' => 'Visual and Performing Arts'],
            ['name' => 'Aton Rustandi Mulyana', 'position' => 'Executive Committee', 'credentials' => 'Assoc. Prof.', 'society' => 'Visual and Performing Arts'],
            ['name' => 'Mumtaz Mokhtar', 'position' => 'Member', 'credentials' => 'Dr.', 'society' => 'Visual and Performing Arts'],
            ['name' => 'Ponimin Ponimin', 'position' => 'Member', 'credentials' => 'Assoc. Prof.', 'society' => 'Visual and Performing Arts'],
            ['name' => 'Kamarulzaman Muhamed Karim', 'position' => 'Member', 'credentials' => 'Dr.', 'society' => 'Visual and Performing Arts'],
            ['name' => 'Yulriawan Dafri', 'position' => 'Member', 'credentials' => 'Assoc. Prof.', 'society' => 'Visual and Performing Arts'],
            ['name' => 'Arsenio Nicolas', 'position' => 'Member', 'credentials' => 'Prof.', 'society' => 'Visual and Performing Arts'],
            ['name' => 'Zulkarnain Mistortoify', 'position' => 'Member', 'credentials' => 'Assoc. Prof.', 'society' => 'Visual and Performing Arts'],
            ['name' => 'Setyawan Jayantoro', 'position' => 'Member', 'credentials' => 'Assist. Prof.', 'society' => 'Visual and Performing Arts'],
            ['name' => 'Joko Aswoyo', 'position' => 'Member', 'credentials' => 'Assoc. Prof.', 'society' => 'Visual and Performing Arts'],
            ['name' => 'Peter Ardhianto', 'position' => 'Member', 'credentials' => 'S.Sn., M.Sn.', 'society' => 'Visual and Performing Arts'],
            ['name' => 'Aris Setiawan', 'position' => 'Member', 'credentials' => 'Assist. Prof.', 'society' => 'Visual and Performing Arts'],
        ];

        // Societies - Education
        $educationSociety = [
            ['name' => 'Zaidatun Tasir', 'position' => 'Executive Committee', 'credentials' => 'Prof., Ph.D.', 'society' => 'Education'],
            ['name' => 'Zalik Nuryana', 'position' => 'Executive Committee', 'credentials' => 'Assist. Prof.', 'society' => 'Education'],
            ['name' => 'Intisar Ambu-Saidi', 'position' => 'Member', 'credentials' => 'Ph.D.', 'society' => 'Education'],
            ['name' => 'Ika Maryani', 'position' => 'Member', 'credentials' => 'Assist. Prof.', 'society' => 'Education'],
            ['name' => 'Syarief Fajaruddin', 'position' => 'Member', 'credentials' => '', 'society' => 'Education'],
            ['name' => 'Aieman Ahmad Al-Omari', 'position' => 'Member', 'credentials' => 'Professor., Ph.D.', 'society' => 'Education'],
            ['name' => 'Ramlee Mustapha', 'position' => 'Member', 'credentials' => 'Prof., Ph.D.', 'society' => 'Education'],
            ['name' => 'Mahendran Maniam', 'position' => 'Member', 'credentials' => 'Assoc. Prof.', 'society' => 'Education'],
            ['name' => 'Shazia Malik', 'position' => 'Member', 'credentials' => 'Dr.', 'society' => 'Education'],
            ['name' => 'Godlove Ellioth Kiswaga', 'position' => 'Member', 'credentials' => '', 'society' => 'Education'],
        ];

        // Societies - Communication
        $communicationSociety = [
            ['name' => 'Luo Zhenglin', 'position' => 'Executive Committee', 'credentials' => 'Prof., PhD.', 'society' => 'Communication'],
            ['name' => 'Dani Fadillah', 'position' => 'Executive Committee', 'credentials' => 'Assist. Prof.', 'society' => 'Communication'],
            ['name' => 'Marie Nathalie Jauffret', 'position' => 'Member', 'credentials' => 'Prof., PhD.', 'society' => 'Communication'],
            ['name' => 'Hyung Jun Kim', 'position' => 'Member', 'credentials' => 'Prof., Ph.D.', 'society' => 'Communication'],
            ['name' => 'Nandini Lakshmikantha', 'position' => 'Member', 'credentials' => 'Prof., Dr.', 'society' => 'Communication'],
            ['name' => 'Estrella T Arroyo', 'position' => 'Member', 'credentials' => 'Prof., Ph.D.', 'society' => 'Communication'],
            ['name' => 'Georgios Tsourvakas', 'position' => 'Member', 'credentials' => 'Assoc. Prof., PhD.', 'society' => 'Communication'],
            ['name' => 'Padmakumar K', 'position' => 'Member', 'credentials' => 'Assoc. Prof., PhD.', 'society' => 'Communication'],
            ['name' => 'Abd El-Basit Ahmed Hashem Mahmoud', 'position' => 'Member', 'credentials' => 'Assoc. Prof., PhD.', 'society' => 'Communication'],
            ['name' => 'Muhammad Najih Farihanto', 'position' => 'Member', 'credentials' => 'Assist. Prof.', 'society' => 'Communication'],
            ['name' => 'Sherif Farouk Badran', 'position' => 'Member', 'credentials' => 'Assist. Prof., Dr.', 'society' => 'Communication'],
            ['name' => 'Sardar Ahmad Nazish', 'position' => 'Member', 'credentials' => 'Assist. Prof., PhD.', 'society' => 'Communication'],
            ['name' => 'Kevin Naidoo', 'position' => 'Member', 'credentials' => 'Dr.', 'society' => 'Communication'],
            ['name' => 'Tran Thi Ai Van', 'position' => 'Member', 'credentials' => '', 'society' => 'Communication'],
            ['name' => 'McMillan Mavuto Jere', 'position' => 'Member', 'credentials' => '', 'society' => 'Communication'],
            ['name' => 'Dong Hao', 'position' => 'Member', 'credentials' => '', 'society' => 'Communication'],
        ];

        // Societies - Medical
        $medicalSociety = [
            ['name' => 'Cicilia Marcella', 'position' => 'Executive Committee', 'credentials' => 'dr., MBBS, M.M', 'society' => 'Medical'],
            ['name' => 'Asep Santoso', 'position' => 'Executive Committee', 'credentials' => 'dr., SpOT.', 'society' => 'Medical'],
            ['name' => 'Shakeel Sarwar', 'position' => 'Member', 'credentials' => 'dr., MBBS, M.S(Orthopedics).', 'society' => 'Medical'],
            ['name' => 'Reviono', 'position' => 'Member', 'credentials' => 'Prof. Dr. dr., Sp.P(K).', 'society' => 'Medical'],
            ['name' => 'Muhammad Ikhwan Zein', 'position' => 'Member', 'credentials' => 'dr, Sp.KO.', 'society' => 'Medical'],
            ['name' => 'Andari Wuri Astuti', 'position' => 'Member', 'credentials' => 'S.SiT., MPH., Ph.D.', 'society' => 'Medical'],
        ];

        // ASCEE Staff
        $staff = [
            ['name' => 'Gema Antika', 'position' => 'Staff', 'credentials' => ''],
            ['name' => 'Muhammad Ryan', 'position' => 'Staff', 'credentials' => ''],
            ['name' => 'Qoni', 'position' => 'Staff', 'credentials' => ''],
            ['name' => 'Tri Andi', 'position' => 'Assistant', 'credentials' => ''],
        ];

        // Combine all groups
        $allTeamMembers = [
            ['category' => 'Executive Officers', 'members' => $executiveOfficers],
            ['category' => 'Sections', 'members' => $sections],
            ['category' => 'Branches and Chapters', 'members' => $branchesChapters],
            ['category' => 'Computer Society', 'members' => $computerSociety],
            ['category' => 'Visual and Performing Arts Society', 'members' => $viperartsSociety],
            ['category' => 'Education Society', 'members' => $educationSociety],
            ['category' => 'Communication Society', 'members' => $communicationSociety],
            ['category' => 'Medical Society', 'members' => $medicalSociety],
            ['category' => 'Staff', 'members' => $staff],
        ];

        // Insert all team members
        foreach ($allTeamMembers as $group) {
            foreach ($group['members'] as $member) {
                Team::create([
                    'name' => $member['name'],
                    'position' => $member['position'],
                    'credentials' => $member['credentials'],
                    'category' => $group['category'],
                    'society' => $member['society'] ?? null,
                    'admin_id' => $admins->random()->id_admin
                ]);
            }
        }
    }
}
