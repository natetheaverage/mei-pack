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
                'name' => 'Strike 86 Industries',
                'type' => 'Sole LLC',
                'ein' => 4200420,
                'phone' => 2147483647,
                'fax' => 2147483647,
                'address_street' => '2668 Arden Crossroad Apt. 266',
                'address_city' => 'Metropolis',
                'address_state' => 'Co.',
                'address_zip' => 0,
                'owner_id' => '1',
                'deleted_at' => NULL,
                'created_at' => '2016-04-25 06:18:57',
                'updated_at' => '2016-04-25 06:18:57',
            ),
            1 => 
            array (
                'id' => 2,
                'name' => 'Strike 18 Industries',
                'type' => 'Sole LLC',
                'ein' => 4200420,
                'phone' => 2147483647,
                'fax' => 2147483647,
                'address_street' => '793 Gerhold Lodge',
                'address_city' => 'Metropolis',
                'address_state' => 'Co.',
                'address_zip' => 0,
                'owner_id' => '1',
                'deleted_at' => NULL,
                'created_at' => '2016-04-25 06:18:57',
                'updated_at' => '2016-04-25 06:18:57',
            ),
            2 => 
            array (
                'id' => 3,
                'name' => 'Strike 84 Industries',
                'type' => 'Sole LLC',
                'ein' => 4200420,
                'phone' => 2147483647,
                'fax' => 2147483647,
                'address_street' => '42111 Huel Forge',
                'address_city' => 'Metropolis',
                'address_state' => 'Co.',
                'address_zip' => 0,
                'owner_id' => '1',
                'deleted_at' => NULL,
                'created_at' => '2016-04-25 06:18:57',
                'updated_at' => '2016-04-25 06:18:57',
            ),
            3 => 
            array (
                'id' => 4,
                'name' => 'Strike 48 Industries',
                'type' => 'Sole LLC',
                'ein' => 4200420,
                'phone' => 2147483647,
                'fax' => 2147483647,
                'address_street' => '13649 Gutmann Mews',
                'address_city' => 'Metropolis',
                'address_state' => 'Co.',
                'address_zip' => 0,
                'owner_id' => '1',
                'deleted_at' => NULL,
                'created_at' => '2016-04-25 06:18:57',
                'updated_at' => '2016-04-25 06:18:57',
            ),
        ));
        
        
    }
}
