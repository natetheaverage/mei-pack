<?php

use Illuminate\Database\Seeder;

class RolesTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('roles')->delete();
        
        \DB::table('roles')->insert(array (
            0 => 
            array (
                'id' => 1,
                'name' => 'average',
                'created_at' => '2016-04-17 19:32:37',
                'updated_at' => '2016-04-17 19:32:37',
            ),
            1 => 
            array (
                'id' => 2,
                'name' => 'admin',
                'created_at' => '2016-04-17 19:32:37',
                'updated_at' => '2016-04-17 19:32:37',
            ),
            2 => 
            array (
                'id' => 3,
                'name' => 'agent',
                'created_at' => '2016-04-17 19:32:37',
                'updated_at' => '2016-04-17 19:32:37',
            ),
            3 => 
            array (
                'id' => 4,
                'name' => 'user',
                'created_at' => '2016-04-17 19:32:37',
                'updated_at' => '2016-04-17 19:32:37',
            ),
            4 => 
            array (
                'id' => 5,
                'name' => 'owner',
                'created_at' => '2016-04-17 19:32:37',
                'updated_at' => '2016-04-17 19:32:37',
            ),
            5 => 
            array (
                'id' => 6,
                'name' => 'manager',
                'created_at' => '2016-04-17 19:32:37',
                'updated_at' => '2016-04-17 19:32:37',
            ),
            6 => 
            array (
                'id' => 7,
                'name' => 'shift_manager',
                'created_at' => '2016-04-17 19:32:37',
                'updated_at' => '2016-04-17 19:32:37',
            ),
            7 => 
            array (
                'id' => 8,
                'name' => 'clerk',
                'created_at' => '2016-04-17 19:32:37',
                'updated_at' => '2016-04-17 19:32:37',
            ),
            8 => 
            array (
                'id' => 9,
                'name' => 'patient',
                'created_at' => '2016-04-17 19:32:37',
                'updated_at' => '2016-04-17 19:32:37',
            ),
            9 => 
            array (
                'id' => 10,
                'name' => 'customer',
                'created_at' => '2016-04-17 19:32:37',
                'updated_at' => '2016-04-17 19:32:37',
            ),
        ));
        
        
    }
}
