<?php

use Illuminate\Database\Seeder;

class OpcsTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('opcs')->delete();
        
        \DB::table('opcs')->insert(array (
            0 => 
            array (
                'id' => 1,
                'facility_id' => 5,
                'deleted_at' => NULL,
                'created_at' => '2016-04-19 08:09:36',
                'updated_at' => '2016-04-19 08:09:36',
            ),
            1 => 
            array (
                'id' => 2,
                'facility_id' => 6,
                'deleted_at' => NULL,
                'created_at' => '2016-04-19 08:09:36',
                'updated_at' => '2016-04-19 08:09:36',
            ),
        ));
        
        
    }
}
