<?php

use Illuminate\Database\Seeder;

class FacilitiesTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('facilities')->delete();
        
        \DB::table('facilities')->insert(array (
            0 => 
            array (
                'id' => 1,
                'name' => 'Frosted Dreams',
                'type' => 'MMC',
                'license_number' => 7902126,
                'license_expiration' => 2018,
                'phone' => 0,
                'fax' => 87,
                'site_url' => 'http://www.frosteddreams.com',
                'address_street' => '420 East Colfax Avenue',
                'address_city' => 'Denver',
                'address_state' => 'Colorado',
                'address_zip' => 80231,
                'picture' => '/img/facilities/F/FrostedDreamsLLC/build',
                'company_id' => '1',
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:42',
                'updated_at' => '2016-04-17 19:32:42',
            ),
            1 => 
            array (
                'id' => 2,
                'name' => 'Frosted Dreams',
                'type' => 'RMC',
                'license_number' => 4732930,
                'license_expiration' => 2018,
                'phone' => 0,
                'fax' => 1,
                'site_url' => 'http://www.frosteddreams.com',
                'address_street' => '420 East Colfax Avenue',
                'address_city' => 'Denver',
                'address_state' => 'Colorado',
                'address_zip' => 80231,
                'picture' => '/img/facilities/F/FrostedDreamsLLC/build',
                'company_id' => '1',
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:42',
                'updated_at' => '2016-04-17 19:32:42',
            ),
            2 => 
            array (
                'id' => 3,
                'name' => 'Frosted Dreams',
                'type' => 'MMIP',
                'license_number' => 9844473,
                'license_expiration' => 2017,
                'phone' => 13,
                'fax' => 78,
                'site_url' => 'http://www.frosteddreams.com',
                'address_street' => '420 East Colfax Avenue',
                'address_city' => 'Denver',
                'address_state' => 'Colorado',
                'address_zip' => 80231,
                'picture' => '/img/facilities/F/FrostedDreamsLLC/build',
                'company_id' => '1',
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:42',
                'updated_at' => '2016-04-17 19:32:42',
            ),
            3 => 
            array (
                'id' => 4,
                'name' => 'Frosted Dreams',
                'type' => 'RMIP',
                'license_number' => 7360549,
                'license_expiration' => 2017,
                'phone' => 289037,
                'fax' => 1,
                'site_url' => 'http://www.frosteddreams.com',
                'address_street' => '420 East Colfax Avenue',
                'address_city' => 'Denver',
                'address_state' => 'Colorado',
                'address_zip' => 80231,
                'picture' => '/img/facilities/F/FrostedDreamsLLC/build',
                'company_id' => '1',
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:42',
                'updated_at' => '2016-04-17 19:32:42',
            ),
            4 => 
            array (
                'id' => 5,
                'name' => 'Frosted Dreams',
                'type' => 'MOPC',
                'license_number' => 2774782,
                'license_expiration' => 2017,
                'phone' => 0,
                'fax' => 1,
                'site_url' => 'http://www.frosteddreams.com',
                'address_street' => '420 East Colfax Avenue',
                'address_city' => 'Denver',
                'address_state' => 'Colorado',
                'address_zip' => 80231,
                'picture' => '/img/facilities/F/FrostedDreamsLLC/build',
                'company_id' => '1',
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:42',
                'updated_at' => '2016-04-17 19:32:42',
            ),
            5 => 
            array (
                'id' => 6,
                'name' => 'Frosted Dreams',
                'type' => 'ROPC',
                'license_number' => 2784993,
                'license_expiration' => 2019,
                'phone' => 1,
                'fax' => 326548,
                'site_url' => 'http://www.frosteddreams.com',
                'address_street' => '420 East Colfax Avenue',
                'address_city' => 'Denver',
                'address_state' => 'Colorado',
                'address_zip' => 80231,
                'picture' => '/img/facilities/F/FrostedDreamsLLC/build',
                'company_id' => '1',
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:42',
                'updated_at' => '2016-04-17 19:32:42',
            ),
        ));
        
        
    }
}
