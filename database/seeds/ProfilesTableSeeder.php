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
                'created_at' => '2016-04-19 08:09:34',
                'updated_at' => '2016-04-19 08:09:34',
            ),
            1 => 
            array (
                'id' => 2,
                'first_name' => 'Kim',
                'last_name' => 'DuBuque',
                'profile_picture' => 'http://lorempixel.com/800/600/cats/',
                'phone' => 668,
                'address_street' => '345 Augustus Summit',
                'address_city' => 'Joanieview',
                'address_state' => 'Pennsylvania',
                'address_zip' => 27526,
                'dob' => 1918,
                'user_id' => '2',
                'deleted_at' => NULL,
                'created_at' => '2016-04-19 08:09:34',
                'updated_at' => '2016-04-19 08:09:34',
            ),
            2 => 
            array (
                'id' => 3,
                'first_name' => 'Jerrod',
                'last_name' => 'Eichmann',
                'profile_picture' => 'http://lorempixel.com/800/600/cats/',
                'phone' => 1,
                'address_street' => '7025 Gleichner Trail Apt. 506',
                'address_city' => 'Lake Berniece',
                'address_state' => 'Alaska',
                'address_zip' => 79354,
                'dob' => 1945,
                'user_id' => '3',
                'deleted_at' => NULL,
                'created_at' => '2016-04-19 08:09:34',
                'updated_at' => '2016-04-19 08:09:34',
            ),
            3 => 
            array (
                'id' => 4,
                'first_name' => 'Troy',
                'last_name' => 'Parker',
                'profile_picture' => 'http://lorempixel.com/800/600/cats/',
                'phone' => 0,
                'address_street' => '10818 Adela Square',
                'address_city' => 'Boyershire',
                'address_state' => 'Louisiana',
                'address_zip' => 73590,
                'dob' => 1961,
                'user_id' => '4',
                'deleted_at' => NULL,
                'created_at' => '2016-04-19 08:09:34',
                'updated_at' => '2016-04-19 08:09:34',
            ),
            4 => 
            array (
                'id' => 5,
                'first_name' => 'Adriana',
                'last_name' => 'Leffler',
                'profile_picture' => 'http://lorempixel.com/800/600/cats/',
                'phone' => 782,
                'address_street' => '0617 Kerluke Roads Suite 686',
                'address_city' => 'New Dylan',
                'address_state' => 'Maine',
                'address_zip' => 66702,
                'dob' => 1980,
                'user_id' => '5',
                'deleted_at' => NULL,
                'created_at' => '2016-04-19 08:09:34',
                'updated_at' => '2016-04-19 08:09:34',
            ),
            5 => 
            array (
                'id' => 6,
                'first_name' => 'Margarett',
                'last_name' => 'Dibbert',
                'profile_picture' => 'http://lorempixel.com/800/600/cats/',
                'phone' => 11,
                'address_street' => '60110 Caitlyn Pine',
                'address_city' => 'South Gabeshire',
                'address_state' => 'Maryland',
                'address_zip' => 65417,
                'dob' => 1984,
                'user_id' => '6',
                'deleted_at' => NULL,
                'created_at' => '2016-04-19 08:09:34',
                'updated_at' => '2016-04-19 08:09:34',
            ),
            6 => 
            array (
                'id' => 7,
                'first_name' => 'Eloisa',
                'last_name' => 'Legros',
                'profile_picture' => 'http://lorempixel.com/800/600/cats/',
                'phone' => 1,
                'address_street' => '811 McClure Manor Suite 311',
                'address_city' => 'Elouisefurt',
                'address_state' => 'Colorado',
                'address_zip' => 36652,
                'dob' => 2007,
                'user_id' => '7',
                'deleted_at' => NULL,
                'created_at' => '2016-04-19 08:09:34',
                'updated_at' => '2016-04-19 08:09:34',
            ),
            7 => 
            array (
                'id' => 8,
                'first_name' => 'Eva',
                'last_name' => 'Gottlieb',
                'profile_picture' => 'http://lorempixel.com/800/600/cats/',
                'phone' => 0,
                'address_street' => '81425 Legros Plain Apt. 948',
                'address_city' => 'Ebertstad',
                'address_state' => 'Missouri',
                'address_zip' => 30038,
                'dob' => 1924,
                'user_id' => '8',
                'deleted_at' => NULL,
                'created_at' => '2016-04-19 08:09:34',
                'updated_at' => '2016-04-19 08:09:34',
            ),
            8 => 
            array (
                'id' => 9,
                'first_name' => 'Dean',
                'last_name' => 'Fahey',
                'profile_picture' => 'http://lorempixel.com/800/600/cats/',
                'phone' => 2147483647,
                'address_street' => '857 Lindsay Brook Apt. 913',
                'address_city' => 'New Rocky',
                'address_state' => 'Illinois',
                'address_zip' => 21154,
                'dob' => 2009,
                'user_id' => '9',
                'deleted_at' => NULL,
                'created_at' => '2016-04-19 08:09:34',
                'updated_at' => '2016-04-19 08:09:34',
            ),
            9 => 
            array (
                'id' => 10,
                'first_name' => 'Desmond',
                'last_name' => 'Kshlerin',
                'profile_picture' => 'http://lorempixel.com/800/600/cats/',
                'phone' => 0,
                'address_street' => '93980 Kulas Estate Apt. 679',
                'address_city' => 'Lake Kaelaton',
                'address_state' => 'Kentucky',
                'address_zip' => 90167,
                'dob' => 2012,
                'user_id' => '10',
                'deleted_at' => NULL,
                'created_at' => '2016-04-19 08:09:34',
                'updated_at' => '2016-04-19 08:09:34',
            ),
            10 => 
            array (
                'id' => 11,
                'first_name' => 'Sherman',
                'last_name' => 'Streich',
                'profile_picture' => 'http://lorempixel.com/800/600/cats/',
                'phone' => 1,
                'address_street' => '3078 Donnie Key Suite 126',
                'address_city' => 'Leannonland',
                'address_state' => 'Indiana',
                'address_zip' => 74520,
                'dob' => 1976,
                'user_id' => '11',
                'deleted_at' => NULL,
                'created_at' => '2016-04-19 08:09:34',
                'updated_at' => '2016-04-19 08:09:34',
            ),
            11 => 
            array (
                'id' => 12,
                'first_name' => 'Adolphus',
                'last_name' => 'Emard',
                'profile_picture' => 'http://lorempixel.com/800/600/cats/',
                'phone' => 811,
                'address_street' => '874 Matteo Lodge',
                'address_city' => 'Floridaton',
                'address_state' => 'South Carolina',
                'address_zip' => 78912,
                'dob' => 1932,
                'user_id' => '12',
                'deleted_at' => NULL,
                'created_at' => '2016-04-19 08:09:34',
                'updated_at' => '2016-04-19 08:09:34',
            ),
            12 => 
            array (
                'id' => 13,
                'first_name' => 'Troy',
                'last_name' => 'Stanton',
                'profile_picture' => 'http://lorempixel.com/800/600/cats/',
                'phone' => 14,
                'address_street' => '1508 Rosetta Run',
                'address_city' => 'Jessikamouth',
                'address_state' => 'New Hampshire',
                'address_zip' => 29378,
                'dob' => 1943,
                'user_id' => '13',
                'deleted_at' => NULL,
                'created_at' => '2016-04-19 08:09:34',
                'updated_at' => '2016-04-19 08:09:34',
            ),
            13 => 
            array (
                'id' => 14,
                'first_name' => 'Hans',
                'last_name' => 'Predovic',
                'profile_picture' => 'http://lorempixel.com/800/600/cats/',
                'phone' => 942525238,
                'address_street' => '4836 Hudson View Apt. 902',
                'address_city' => 'Rodriguezburgh',
                'address_state' => 'New Hampshire',
                'address_zip' => 73532,
                'dob' => 1922,
                'user_id' => '14',
                'deleted_at' => NULL,
                'created_at' => '2016-04-19 08:09:34',
                'updated_at' => '2016-04-19 08:09:34',
            ),
            14 => 
            array (
                'id' => 15,
                'first_name' => 'Peyton',
                'last_name' => 'Dietrich',
                'profile_picture' => 'http://lorempixel.com/800/600/cats/',
                'phone' => 368270,
                'address_street' => '4446 Emmerich Via',
                'address_city' => 'West Hardy',
                'address_state' => 'Montana',
                'address_zip' => 80692,
                'dob' => 1949,
                'user_id' => '15',
                'deleted_at' => NULL,
                'created_at' => '2016-04-19 08:09:34',
                'updated_at' => '2016-04-19 08:09:34',
            ),
        ));
        
        
    }
}
