<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('users')->delete();
        
        \DB::table('users')->insert(array (
            0 => 
            array (
                'id' => 1,
                'name' => 'NateTheAverage',
                'email' => 'iam@natetheaverage.com',
                'password' => '$2y$10$vpuTC0loV55jfIlmhsntze8k4sM6W5fu4q9bZuXN9cqxQnvVxUfiO',
                'remember_token' => 'GO7FUCK7URSELF',
                'created_at' => '2016-04-19 08:09:32',
                'updated_at' => '2016-04-19 08:09:32',
            ),
            1 => 
            array (
                'id' => 2,
                'name' => 'Doug.T',
                'email' => 'dougmt_98@yahoo.com',
                'password' => '$2y$10$yQizPegMIkkVjiLARWn36OntKf1jIn2Fnbb7p4QVF7GOz3thMzDKS',
                'remember_token' => NULL,
                'created_at' => '2016-04-19 08:09:32',
                'updated_at' => '2016-04-19 08:09:32',
            ),
            2 => 
            array (
                'id' => 3,
                'name' => 'Brian.T',
                'email' => 'bryanthompson@itwiseus.com',
                'password' => '$2y$10$HQbKh5nebcOqKxARyR.n0.bR41bG0eXJVj3hoEVTqZfe5E/u.w8CS',
                'remember_token' => NULL,
                'created_at' => '2016-04-19 08:09:32',
                'updated_at' => '2016-04-19 08:09:32',
            ),
            3 => 
            array (
                'id' => 4,
                'name' => 'Jett.Jones',
                'email' => 'demo3@natetheaverage.com',
                'password' => '$2y$10$Kr5up4SyylqhXtdLtxg9XOu8yyGT8W5q8erBTusRGv/gvh5M4.lPG',
                'remember_token' => NULL,
                'created_at' => '2016-04-19 08:09:32',
                'updated_at' => '2016-04-19 08:09:32',
            ),
            4 => 
            array (
                'id' => 5,
                'name' => 'SirJude',
                'email' => 'demo4@natetheaverage.com',
                'password' => '$2y$10$yxFBr8As01yjHGsUWcI3hOEAsi5JaOacVk/5OTNzfxX8WUXS8DZ5q',
                'remember_token' => NULL,
                'created_at' => '2016-04-19 08:09:32',
                'updated_at' => '2016-04-19 08:09:32',
            ),
            5 => 
            array (
                'id' => 6,
                'name' => 'Prof. Candice Waters',
                'email' => 'Lavada91@White.com',
                'password' => '$2y$10$zLy8z/HgUlzbhSchiFWyxe22.hKD5SxH.UnnMTxQk3qGipBnAv6mO',
                'remember_token' => 'ZVpfNie6e2',
                'created_at' => '2016-04-19 08:09:34',
                'updated_at' => '2016-04-19 08:09:34',
            ),
            6 => 
            array (
                'id' => 7,
                'name' => 'Dr. Marilie Schultz',
                'email' => 'Furman18@gmail.com',
                'password' => '$2y$10$DoIbEJ1go.5Dxcicg3F4z.TAfHSDd/zlrR0vEmjtdv9G1KH8.BaVu',
                'remember_token' => 'ntR02sU4SJ',
                'created_at' => '2016-04-19 08:09:34',
                'updated_at' => '2016-04-19 08:09:34',
            ),
            7 => 
            array (
                'id' => 8,
                'name' => 'Mr. Christ Reilly DDS',
                'email' => 'Skylar.Beier@yahoo.com',
                'password' => '$2y$10$86IJLelEj47BahOWtIZ/Pe0eBU6fHwpGxrSx4X7s3vdksf6KU8LfC',
                'remember_token' => 'b0mcYcrd67',
                'created_at' => '2016-04-19 08:09:34',
                'updated_at' => '2016-04-19 08:09:34',
            ),
            8 => 
            array (
                'id' => 9,
                'name' => 'Gus Block',
                'email' => 'Ernesto.Weissnat@yahoo.com',
                'password' => '$2y$10$DJr6fnQm6xCESkIDCqzXLOyCynlQOzCWFN549rFosQKLm4ZKAmfi.',
                'remember_token' => 'YdwYEqKust',
                'created_at' => '2016-04-19 08:09:34',
                'updated_at' => '2016-04-19 08:09:34',
            ),
            9 => 
            array (
                'id' => 10,
                'name' => 'Orville Cartwright',
                'email' => 'nHackett@hotmail.com',
                'password' => '$2y$10$VvikH3WtwqfhYqnJsgtdb.neXEl2FXFVU0FSsS4IxTdYAMKm0appO',
                'remember_token' => 'ph4vg4Eunj',
                'created_at' => '2016-04-19 08:09:34',
                'updated_at' => '2016-04-19 08:09:34',
            ),
            10 => 
            array (
                'id' => 11,
                'name' => 'Ursula Harris DDS',
                'email' => 'kPaucek@yahoo.com',
                'password' => '$2y$10$paRdjWU/R3pKeSGSNNFpPe4RsLlHJ/nwBtoPLdEx2rQKA4Vzl9eIa',
                'remember_token' => 'uHvL3CBTRG',
                'created_at' => '2016-04-19 08:09:34',
                'updated_at' => '2016-04-19 08:09:34',
            ),
            11 => 
            array (
                'id' => 12,
                'name' => 'Myriam Kemmer',
                'email' => 'nKub@Dach.com',
                'password' => '$2y$10$a3YE7AehKDhD7FCUCxmYUe8GTk/ftfBoU35aZcFsp5cIP505L6Upq',
                'remember_token' => '39cqUJkkrD',
                'created_at' => '2016-04-19 08:09:34',
                'updated_at' => '2016-04-19 08:09:34',
            ),
            12 => 
            array (
                'id' => 13,
                'name' => 'Earl Beatty',
                'email' => 'lJast@yahoo.com',
                'password' => '$2y$10$LC.1eKPKs19H.v7SS9LHn.HABjssin56vJ4BmFz6PrXyvxV68.KOi',
                'remember_token' => 'RetSMsg3VH',
                'created_at' => '2016-04-19 08:09:34',
                'updated_at' => '2016-04-19 08:09:34',
            ),
            13 => 
            array (
                'id' => 14,
                'name' => 'Kathryne Bartoletti',
                'email' => 'Robb72@hotmail.com',
                'password' => '$2y$10$fLWlp2QD18htImhz3o0QFu.PxXzrgNIop3knGd.1j8DxF2H/V3m/.',
                'remember_token' => '2maLHpdFOh',
                'created_at' => '2016-04-19 08:09:34',
                'updated_at' => '2016-04-19 08:09:34',
            ),
            14 => 
            array (
                'id' => 15,
                'name' => 'Cortez Kertzmann II',
                'email' => 'Gaylord.Rebeca@gmail.com',
                'password' => '$2y$10$O52pUhGUASiF7kcGGNg/we2wsM3Pcw8os1a7cEmB9H7FkIKHWeKzC',
                'remember_token' => 'lVLKxCIIog',
                'created_at' => '2016-04-19 08:09:34',
                'updated_at' => '2016-04-19 08:09:34',
            ),
        ));
        
        
    }
}
