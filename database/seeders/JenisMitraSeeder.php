<?php

namespace Database\Seeders;

use App\Models\JenisMitra;
use App\Models\User;
use Illuminate\Database\Seeder;

class JenisMitraSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $users = User::all();

        JenisMitra::create([
            'id_address' => 'CORP001',
            'name' => 'TechEdu Solutions',
            'email_address' => 'info@techedu.com',
            'business_type' => 'Technology',
            'email_corporate' => 'corporate@techedu.com',
            'user_id' => $users->first()->id_user
        ]);

        JenisMitra::create([
            'id_address' => 'CORP002',
            'name' => 'Global Learning Institute',
            'email_address' => 'contact@globallearning.org',
            'business_type' => 'Education',
            'email_corporate' => 'partnership@globallearning.org',
            'user_id' => $users->skip(1)->first()->id_user
        ]);

        JenisMitra::create([
            'id_address' => 'CORP003',
            'name' => 'Communication Excellence Hub',
            'email_address' => 'hello@commhub.asia',
            'business_type' => 'Consulting',
            'email_corporate' => 'business@commhub.asia',
            'user_id' => $users->skip(2)->first()->id_user
        ]);

        JenisMitra::create([
            'id_address' => 'CORP004',
            'name' => 'Digital Learning Partners',
            'email_address' => 'support@digitallearning.co',
            'business_type' => 'Technology',
            'email_corporate' => 'partnerships@digitallearning.co',
            'user_id' => $users->skip(3)->first()->id_user
        ]);

        JenisMitra::create([
            'id_address' => 'CORP005',
            'name' => 'Southeast Asia Education Network',
            'email_address' => 'info@seaednet.org',
            'business_type' => 'Non-Profit',
            'email_corporate' => 'collaboration@seaednet.org',
            'user_id' => $users->first()->id_user
        ]);
    }
}
