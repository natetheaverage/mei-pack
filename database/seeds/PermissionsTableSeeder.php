<?php

use Illuminate\Database\Seeder;

class PermissionsTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('permissions')->delete();
        
        \DB::table('permissions')->insert(array (
            0 => 
            array (
                'id' => 1,
                'name' => 'edit-text',
                'created_at' => '2016-04-25 06:18:53',
                'updated_at' => '2016-04-25 06:18:53',
            ),
            1 => 
            array (
                'id' => 2,
                'name' => 'edit-layout',
                'created_at' => '2016-04-25 06:18:53',
                'updated_at' => '2016-04-25 06:18:53',
            ),
            2 => 
            array (
                'id' => 3,
                'name' => 'edit-everything',
                'created_at' => '2016-04-25 06:18:53',
                'updated_at' => '2016-04-25 06:18:53',
            ),
            3 => 
            array (
                'id' => 4,
                'name' => 'view-inventory',
                'created_at' => '2016-04-25 06:18:53',
                'updated_at' => '2016-04-25 06:18:53',
            ),
            4 => 
            array (
                'id' => 5,
                'name' => 'edit-inventory',
                'created_at' => '2016-04-25 06:18:53',
                'updated_at' => '2016-04-25 06:18:53',
            ),
            5 => 
            array (
                'id' => 6,
                'name' => 'manage-employee',
                'created_at' => '2016-04-25 06:18:53',
                'updated_at' => '2016-04-25 06:18:53',
            ),
            6 => 
            array (
                'id' => 7,
                'name' => 'create-post',
                'created_at' => '2016-04-25 06:18:53',
                'updated_at' => '2016-04-25 06:18:53',
            ),
        ));
        
        
    }
}
