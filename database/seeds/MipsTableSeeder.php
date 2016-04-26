<?php

use Illuminate\Database\Seeder;

class MipsTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('mips')->delete();
        
        \DB::table('mips')->insert(array (
            0 => 
            array (
                'id' => 1,
                'facility_id' => 3,
                'deleted_at' => NULL,
                'created_at' => '2016-04-25 06:18:58',
                'updated_at' => '2016-04-25 06:18:58',
            ),
            1 => 
            array (
                'id' => 2,
                'facility_id' => 4,
                'deleted_at' => NULL,
                'created_at' => '2016-04-25 06:18:58',
                'updated_at' => '2016-04-25 06:18:58',
            ),
        ));
        
        
    }
}
