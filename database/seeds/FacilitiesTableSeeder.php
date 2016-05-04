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
                'license_number' => 7245172,
                'license_expiration' => 2017,
                'phone' => 0,
                'fax' => 842461,
                'site_url' => 'http://www.frosteddreams.com',
                'address_street' => '420 East Colfax Avenue',
                'address_city' => 'Denver',
                'address_state' => 'Colorado',
                'address_zip' => 80231,
                'picture' => '/img/facilities/F/FrostedDreamsLLC/build',
                'company_id' => '1',
                'deleted_at' => NULL,
                'created_at' => '2016-04-19 08:09:36',
                'updated_at' => '2016-04-19 08:09:36',
            ),
            1 => 
            array (
                'id' => 2,
                'name' => 'Frosted Dreams',
                'type' => 'RMC',
                'license_number' => 5259277,
                'license_expiration' => 2018,
                'phone' => 0,
                'fax' => 16,
                'site_url' => 'http://www.frosteddreams.com',
                'address_street' => '420 East Colfax Avenue',
                'address_city' => 'Denver',
                'address_state' => 'Colorado',
                'address_zip' => 80231,
                'picture' => '/img/facilities/F/FrostedDreamsLLC/build',
                'company_id' => '1',
                'deleted_at' => NULL,
                'created_at' => '2016-04-19 08:09:36',
                'updated_at' => '2016-04-19 08:09:36',
            ),
            2 => 
            array (
                'id' => 3,
                'name' => 'Frosted Dreams',
                'type' => 'MMIP',
                'license_number' => 5410983,
                'license_expiration' => 2016,
                'phone' => 807432,
                'fax' => 1,
                'site_url' => 'http://www.frosteddreams.com',
                'address_street' => '420 East Colfax Avenue',
                'address_city' => 'Denver',
                'address_state' => 'Colorado',
                'address_zip' => 80231,
                'picture' => '/img/facilities/F/FrostedDreamsLLC/build',
                'company_id' => '1',
                'deleted_at' => NULL,
                'created_at' => '2016-04-19 08:09:36',
                'updated_at' => '2016-04-19 08:09:36',
            ),
            3 => 
            array (
                'id' => 4,
                'name' => 'Frosted Dreams',
                'type' => 'RMIP',
                'license_number' => 6658471,
                'license_expiration' => 2016,
                'phone' => 335789,
                'fax' => 575,
                'site_url' => 'http://www.frosteddreams.com',
                'address_street' => '420 East Colfax Avenue',
                'address_city' => 'Denver',
                'address_state' => 'Colorado',
                'address_zip' => 80231,
                'picture' => '/img/facilities/F/FrostedDreamsLLC/build',
                'company_id' => '1',
                'deleted_at' => NULL,
                'created_at' => '2016-04-19 08:09:36',
                'updated_at' => '2016-04-19 08:09:36',
            ),
            4 => 
            array (
                'id' => 5,
                'name' => 'Frosted Dreams',
                'type' => 'MOPC',
                'license_number' => 8905540,
                'license_expiration' => 2017,
                'phone' => 1379700730,
                'fax' => 713,
                'site_url' => 'http://www.frosteddreams.com',
                'address_street' => '420 East Colfax Avenue',
                'address_city' => 'Denver',
                'address_state' => 'Colorado',
                'address_zip' => 80231,
                'picture' => '/img/facilities/F/FrostedDreamsLLC/build',
                'company_id' => '1',
                'deleted_at' => NULL,
                'created_at' => '2016-04-19 08:09:36',
                'updated_at' => '2016-04-19 08:09:36',
            ),
            5 => 
            array (
                'id' => 6,
                'name' => 'Frosted Dreams',
                'type' => 'ROPC',
                'license_number' => 8712024,
                'license_expiration' => 2017,
                'phone' => 592455,
                'fax' => 1,
                'site_url' => 'http://www.frosteddreams.com',
                'address_street' => '420 East Colfax Avenue',
                'address_city' => 'Denver',
                'address_state' => 'Colorado',
                'address_zip' => 80231,
                'picture' => '/img/facilities/F/FrostedDreamsLLC/build',
                'company_id' => '1',
                'deleted_at' => NULL,
                'created_at' => '2016-04-19 08:09:36',
                'updated_at' => '2016-04-19 08:09:36',
            ),
        ));
        
        
    }
}
