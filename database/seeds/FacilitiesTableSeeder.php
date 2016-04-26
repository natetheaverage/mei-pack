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
                'license_number' => 9529374,
                'license_expiration' => 2017,
                'phone' => 65,
                'fax' => 0,
                'site_url' => 'http://www.frosteddreams.com',
                'address_street' => '420 East Colfax Avenue',
                'address_city' => 'Denver',
                'address_state' => 'Colorado',
                'address_zip' => 80231,
                'picture' => '/img/facilities/F/FrostedDreamsLLC/build',
                'company_id' => '1',
                'deleted_at' => NULL,
                'created_at' => '2016-04-25 06:18:58',
                'updated_at' => '2016-04-25 06:18:58',
            ),
            1 => 
            array (
                'id' => 2,
                'name' => 'Frosted Dreams',
                'type' => 'RMC',
                'license_number' => 4018755,
                'license_expiration' => 2018,
                'phone' => 2147483647,
                'fax' => 1,
                'site_url' => 'http://www.frosteddreams.com',
                'address_street' => '420 East Colfax Avenue',
                'address_city' => 'Denver',
                'address_state' => 'Colorado',
                'address_zip' => 80231,
                'picture' => '/img/facilities/F/FrostedDreamsLLC/build',
                'company_id' => '1',
                'deleted_at' => NULL,
                'created_at' => '2016-04-25 06:18:58',
                'updated_at' => '2016-04-25 06:18:58',
            ),
            2 => 
            array (
                'id' => 3,
                'name' => 'Frosted Dreams',
                'type' => 'MMIP',
                'license_number' => 5966926,
                'license_expiration' => 2019,
                'phone' => 520,
                'fax' => 0,
                'site_url' => 'http://www.frosteddreams.com',
                'address_street' => '420 East Colfax Avenue',
                'address_city' => 'Denver',
                'address_state' => 'Colorado',
                'address_zip' => 80231,
                'picture' => '/img/facilities/F/FrostedDreamsLLC/build',
                'company_id' => '1',
                'deleted_at' => NULL,
                'created_at' => '2016-04-25 06:18:58',
                'updated_at' => '2016-04-25 06:18:58',
            ),
            3 => 
            array (
                'id' => 4,
                'name' => 'Frosted Dreams',
                'type' => 'RMIP',
                'license_number' => 2636752,
                'license_expiration' => 2018,
                'phone' => 0,
                'fax' => 762833,
                'site_url' => 'http://www.frosteddreams.com',
                'address_street' => '420 East Colfax Avenue',
                'address_city' => 'Denver',
                'address_state' => 'Colorado',
                'address_zip' => 80231,
                'picture' => '/img/facilities/F/FrostedDreamsLLC/build',
                'company_id' => '1',
                'deleted_at' => NULL,
                'created_at' => '2016-04-25 06:18:58',
                'updated_at' => '2016-04-25 06:18:58',
            ),
            4 => 
            array (
                'id' => 5,
                'name' => 'Frosted Dreams',
                'type' => 'MOPC',
                'license_number' => 2953633,
                'license_expiration' => 2019,
                'phone' => 0,
                'fax' => 0,
                'site_url' => 'http://www.frosteddreams.com',
                'address_street' => '420 East Colfax Avenue',
                'address_city' => 'Denver',
                'address_state' => 'Colorado',
                'address_zip' => 80231,
                'picture' => '/img/facilities/F/FrostedDreamsLLC/build',
                'company_id' => '1',
                'deleted_at' => NULL,
                'created_at' => '2016-04-25 06:18:58',
                'updated_at' => '2016-04-25 06:18:58',
            ),
            5 => 
            array (
                'id' => 6,
                'name' => 'Frosted Dreams',
                'type' => 'ROPC',
                'license_number' => 3336931,
                'license_expiration' => 2016,
                'phone' => 146127,
                'fax' => 2147483647,
                'site_url' => 'http://www.frosteddreams.com',
                'address_street' => '420 East Colfax Avenue',
                'address_city' => 'Denver',
                'address_state' => 'Colorado',
                'address_zip' => 80231,
                'picture' => '/img/facilities/F/FrostedDreamsLLC/build',
                'company_id' => '1',
                'deleted_at' => NULL,
                'created_at' => '2016-04-25 06:18:58',
                'updated_at' => '2016-04-25 06:18:58',
            ),
        ));
        
        
    }
}
