<?php

use Illuminate\Database\Seeder;

class CompaniesTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('companies')->delete();
        
        \DB::table('companies')->insert(array (
            0 => 
            array (
                'id' => 1,
                'name' => 'Strike 53 Industries',
                'type' => 'Sole LLC',
                'ein' => 4200420,
                'phone' => 2147483647,
                'fax' => 2147483647,
                'address_street' => '818 Corwin Spur',
                'address_city' => 'Metropolis',
                'address_state' => 'Co.',
                'address_zip' => 0,
                'owner_id' => '1',
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:42',
                'updated_at' => '2016-04-17 19:32:42',
            ),
            1 => 
            array (
                'id' => 2,
                'name' => 'Strike 23 Industries',
                'type' => 'Sole LLC',
                'ein' => 4200420,
                'phone' => 2147483647,
                'fax' => 2147483647,
                'address_street' => '429 Lubowitz Plains',
                'address_city' => 'Metropolis',
                'address_state' => 'Co.',
                'address_zip' => 0,
                'owner_id' => '1',
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:42',
                'updated_at' => '2016-04-17 19:32:42',
            ),
            2 => 
            array (
                'id' => 3,
                'name' => 'Strike 80 Industries',
                'type' => 'Sole LLC',
                'ein' => 4200420,
                'phone' => 2147483647,
                'fax' => 2147483647,
                'address_street' => '589 Jast Land Apt. 285',
                'address_city' => 'Metropolis',
                'address_state' => 'Co.',
                'address_zip' => 0,
                'owner_id' => '1',
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:42',
                'updated_at' => '2016-04-17 19:32:42',
            ),
            3 => 
            array (
                'id' => 4,
                'name' => 'Strike 39 Industries',
                'type' => 'Sole LLC',
                'ein' => 4200420,
                'phone' => 2147483647,
                'fax' => 2147483647,
                'address_street' => '3179 Gerlach Springs',
                'address_city' => 'Metropolis',
                'address_state' => 'Co.',
                'address_zip' => 0,
                'owner_id' => '1',
                'deleted_at' => NULL,
                'created_at' => '2016-04-17 19:32:42',
                'updated_at' => '2016-04-17 19:32:42',
            ),
        ));
        
        
    }
}
