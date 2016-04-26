<?php

use Illuminate\Database\Seeder;

class UserHasRolesTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('user_has_roles')->delete();
        
        \DB::table('user_has_roles')->insert(array (
            0 => 
            array (
                'role_id' => 1,
                'user_id' => 1,
            ),
            1 => 
            array (
                'role_id' => 2,
                'user_id' => 1,
            ),
            2 => 
            array (
                'role_id' => 2,
                'user_id' => 2,
            ),
            3 => 
            array (
                'role_id' => 2,
                'user_id' => 3,
            ),
            4 => 
            array (
                'role_id' => 4,
                'user_id' => 4,
            ),
            5 => 
            array (
                'role_id' => 2,
                'user_id' => 5,
            ),
            6 => 
            array (
                'role_id' => 6,
                'user_id' => 5,
            ),
        ));
        
        
    }
}
