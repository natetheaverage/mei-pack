<?php

use Illuminate\Database\Seeder;

class ProfilesTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('profiles')->delete();
        
        \DB::table('profiles')->insert(array (
            0 => 
            array (
                'id' => 1,
                'first_name' => 'Nathan',
                'last_name' => 'leite',
                'profile_picture' => 'http://lorempixel.com/800/600/fashion/',
                'phone' => 2147483647,
                'address_street' => '1234 some st.',
                'address_city' => 'Denver',
                'address_state' => 'Co.',
                'address_zip' => 80223,
                'dob' => 12241979,
                'user_id' => '1',
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:38',
                'updated_at' => '2016-04-17 19:32:38',
            ),
            1 => 
            array (
                'id' => 2,
                'first_name' => 'Reyna',
                'last_name' => 'Berge',
                'profile_picture' => 'http://lorempixel.com/800/600/cats/',
                'phone' => 0,
                'address_street' => '0682 Shanahan Union Apt. 656',
                'address_city' => 'Marcotown',
                'address_state' => 'Colorado',
                'address_zip' => 34645,
                'dob' => 1945,
                'user_id' => '2',
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:38',
                'updated_at' => '2016-04-17 19:32:38',
            ),
            2 => 
            array (
                'id' => 3,
                'first_name' => 'Herminia',
                'last_name' => 'Rolfson',
                'profile_picture' => 'http://lorempixel.com/800/600/cats/',
                'phone' => 1,
                'address_street' => '27022 Reanna Terrace',
                'address_city' => 'West Elza',
                'address_state' => 'New Mexico',
                'address_zip' => 48094,
                'dob' => 1930,
                'user_id' => '3',
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:38',
                'updated_at' => '2016-04-17 19:32:38',
            ),
            3 => 
            array (
                'id' => 4,
                'first_name' => 'Maiya',
                'last_name' => 'Johns',
                'profile_picture' => 'http://lorempixel.com/800/600/cats/',
                'phone' => 1,
                'address_street' => '936 Miller Haven',
                'address_city' => 'Lake Lionelland',
                'address_state' => 'New Jersey',
                'address_zip' => 92458,
                'dob' => 1974,
                'user_id' => '4',
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:38',
                'updated_at' => '2016-04-17 19:32:38',
            ),
            4 => 
            array (
                'id' => 5,
                'first_name' => 'Callie',
                'last_name' => 'Mosciski',
                'profile_picture' => 'http://lorempixel.com/800/600/cats/',
                'phone' => 1,
                'address_street' => '228 Hilpert Groves Apt. 379',
                'address_city' => 'Donnellyton',
                'address_state' => 'Georgia',
                'address_zip' => 81671,
                'dob' => 1958,
                'user_id' => '5',
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:38',
                'updated_at' => '2016-04-17 19:32:38',
            ),
            5 => 
            array (
                'id' => 6,
                'first_name' => 'Alize',
                'last_name' => 'Schiller',
                'profile_picture' => 'http://lorempixel.com/800/600/cats/',
                'phone' => 50,
                'address_street' => '9823 Susanna Path Apt. 568',
                'address_city' => 'New Julio',
                'address_state' => 'Vermont',
                'address_zip' => 99570,
                'dob' => 1967,
                'user_id' => '6',
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:38',
                'updated_at' => '2016-04-17 19:32:38',
            ),
            6 => 
            array (
                'id' => 7,
                'first_name' => 'Breanna',
                'last_name' => 'O\'Hara',
                'profile_picture' => 'http://lorempixel.com/800/600/cats/',
                'phone' => 13,
                'address_street' => '887 Norma Views Suite 909',
                'address_city' => 'Greenmouth',
                'address_state' => 'Texas',
                'address_zip' => 26714,
                'dob' => 1935,
                'user_id' => '7',
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:38',
                'updated_at' => '2016-04-17 19:32:38',
            ),
            7 => 
            array (
                'id' => 8,
                'first_name' => 'Felicita',
                'last_name' => 'Krajcik',
                'profile_picture' => 'http://lorempixel.com/800/600/cats/',
                'phone' => 2147483647,
                'address_street' => '86081 Aubrey Forks',
                'address_city' => 'Lake Marianeborough',
                'address_state' => 'Alaska',
                'address_zip' => 54161,
                'dob' => 1945,
                'user_id' => '8',
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:38',
                'updated_at' => '2016-04-17 19:32:38',
            ),
            8 => 
            array (
                'id' => 9,
                'first_name' => 'Fritz',
                'last_name' => 'Dicki',
                'profile_picture' => 'http://lorempixel.com/800/600/cats/',
                'phone' => 1,
                'address_street' => '413 Beer Valley',
                'address_city' => 'New Shyanne',
                'address_state' => 'Mississippi',
                'address_zip' => 85552,
                'dob' => 1991,
                'user_id' => '9',
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:38',
                'updated_at' => '2016-04-17 19:32:38',
            ),
            9 => 
            array (
                'id' => 10,
                'first_name' => 'Presley',
                'last_name' => 'Lesch',
                'profile_picture' => 'http://lorempixel.com/800/600/cats/',
                'phone' => 871,
                'address_street' => '96981 Lesch Ports Suite 977',
                'address_city' => 'Langoshbury',
                'address_state' => 'Louisiana',
                'address_zip' => 18413,
                'dob' => 2002,
                'user_id' => '10',
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:38',
                'updated_at' => '2016-04-17 19:32:38',
            ),
            10 => 
            array (
                'id' => 11,
                'first_name' => 'Alysa',
                'last_name' => 'Moore',
                'profile_picture' => 'http://lorempixel.com/800/600/cats/',
                'phone' => 1,
                'address_street' => '90368 Ramona Mountains Suite 616',
                'address_city' => 'Trishashire',
                'address_state' => 'Rhode Island',
                'address_zip' => 81202,
                'dob' => 1916,
                'user_id' => '11',
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:38',
                'updated_at' => '2016-04-17 19:32:38',
            ),
            11 => 
            array (
                'id' => 12,
                'first_name' => 'Leo',
                'last_name' => 'Dach',
                'profile_picture' => 'http://lorempixel.com/800/600/cats/',
                'phone' => 1,
                'address_street' => '2380 Noemie Grove',
                'address_city' => 'Rogahnside',
                'address_state' => 'West Virginia',
                'address_zip' => 15931,
                'dob' => 1972,
                'user_id' => '12',
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:38',
                'updated_at' => '2016-04-17 19:32:38',
            ),
            12 => 
            array (
                'id' => 13,
                'first_name' => 'Hailee',
                'last_name' => 'Barton',
                'profile_picture' => 'http://lorempixel.com/800/600/cats/',
                'phone' => 517,
                'address_street' => '6815 Augustine Lock Suite 908',
                'address_city' => 'Lomaport',
                'address_state' => 'Kansas',
                'address_zip' => 56720,
                'dob' => 1976,
                'user_id' => '13',
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:38',
                'updated_at' => '2016-04-17 19:32:38',
            ),
            13 => 
            array (
                'id' => 14,
                'first_name' => 'Delbert',
                'last_name' => 'Johnston',
                'profile_picture' => 'http://lorempixel.com/800/600/cats/',
                'phone' => 265734537,
                'address_street' => '093 Raven Neck Apt. 445',
                'address_city' => 'Margaretfurt',
                'address_state' => 'Oregon',
                'address_zip' => 62234,
                'dob' => 1971,
                'user_id' => '14',
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:38',
                'updated_at' => '2016-04-17 19:32:38',
            ),
            14 => 
            array (
                'id' => 15,
                'first_name' => 'Jarrell',
                'last_name' => 'Wuckert',
                'profile_picture' => 'http://lorempixel.com/800/600/cats/',
                'phone' => 0,
                'address_street' => '812 Donavon Underpass Suite 649',
                'address_city' => 'West Marjorieshire',
                'address_state' => 'Indiana',
                'address_zip' => 59265,
                'dob' => 1990,
                'user_id' => '15',
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:38',
                'updated_at' => '2016-04-17 19:32:38',
            ),
        ));
        
        
    }
}