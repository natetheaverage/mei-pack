<?php

use Illuminate\Database\Seeder;

class McsTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('mcs')->delete();
        
        \DB::table('mcs')->insert(array (
            0 => 
            array (
                'id' => 1,
                'facility_id' => 1,
                'deleted_at' => NULL,
                'created_at' => '2016-04-19 08:09:36',
                'updated_at' => '2016-04-19 08:09:36',
            ),
            1 => 
            array (
                'id' => 2,
                'facility_id' => 2,
                'deleted_at' => NULL,
                'created_at' => '2016-04-19 08:09:36',
                'updated_at' => '2016-04-19 08:09:36',
            ),
        ));
        
        
    }
}
