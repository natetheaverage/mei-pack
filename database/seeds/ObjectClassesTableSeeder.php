<?php

use Illuminate\Database\Seeder;

class ObjectClassesTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('object_classes')->delete();
        
        \DB::table('object_classes')->insert(array (
            0 => 
            array (
                'id' => 1,
                'object_id' => 1,
                'object_type' => 'App\\Models\\InterfaceObjects\\InterfaceObject',
                'class_id' => 19,
                'user_id' => '1',
                'created_at' => '2016-04-19 08:09:34',
                'updated_at' => '2016-04-19 08:09:34',
            ),
            1 => 
            array (
                'id' => 2,
                'object_id' => 1,
                'object_type' => 'App\\Models\\InterfaceObjects\\InterfaceObject',
                'class_id' => 22,
                'user_id' => '1',
                'created_at' => '2016-04-19 08:09:34',
                'updated_at' => '2016-04-19 08:09:34',
            ),
            2 => 
            array (
                'id' => 3,
                'object_id' => 1,
                'object_type' => 'App\\Models\\InterfaceObjects\\InterfaceObject',
                'class_id' => 655,
                'user_id' => '1',
                'created_at' => '2016-04-19 08:09:34',
                'updated_at' => '2016-04-19 08:09:34',
            ),
            3 => 
            array (
                'id' => 4,
                'object_id' => 1,
                'object_type' => 'App\\Models\\InterfaceObjects\\InterfaceObject',
                'class_id' => 666,
                'user_id' => '1',
                'created_at' => '2016-04-19 08:09:34',
                'updated_at' => '2016-04-19 08:09:34',
            ),
            4 => 
            array (
                'id' => 5,
                'object_id' => 2,
                'object_type' => 'App\\Models\\InterfaceObjects\\InterfaceObject',
                'class_id' => 19,
                'user_id' => '1',
                'created_at' => '2016-04-19 08:09:34',
                'updated_at' => '2016-04-19 08:09:34',
            ),
            5 => 
            array (
                'id' => 6,
                'object_id' => 2,
                'object_type' => 'App\\Models\\InterfaceObjects\\InterfaceObject',
                'class_id' => 22,
                'user_id' => '1',
                'created_at' => '2016-04-19 08:09:34',
                'updated_at' => '2016-04-19 08:09:34',
            ),
            6 => 
            array (
                'id' => 7,
                'object_id' => 2,
                'object_type' => 'App\\Models\\InterfaceObjects\\InterfaceObject',
                'class_id' => 655,
                'user_id' => '1',
                'created_at' => '2016-04-19 08:09:34',
                'updated_at' => '2016-04-19 08:09:34',
            ),
            7 => 
            array (
                'id' => 8,
                'object_id' => 2,
                'object_type' => 'App\\Models\\InterfaceObjects\\InterfaceObject',
                'class_id' => 666,
                'user_id' => '1',
                'created_at' => '2016-04-19 08:09:34',
                'updated_at' => '2016-04-19 08:09:34',
            ),
            8 => 
            array (
                'id' => 9,
                'object_id' => 3,
                'object_type' => 'App\\Models\\InterfaceObjects\\InterfaceObject',
                'class_id' => 19,
                'user_id' => '1',
                'created_at' => '2016-04-19 08:09:34',
                'updated_at' => '2016-04-19 08:09:34',
            ),
            9 => 
            array (
                'id' => 10,
                'object_id' => 3,
                'object_type' => 'App\\Models\\InterfaceObjects\\InterfaceObject',
                'class_id' => 22,
                'user_id' => '1',
                'created_at' => '2016-04-19 08:09:34',
                'updated_at' => '2016-04-19 08:09:34',
            ),
            10 => 
            array (
                'id' => 11,
                'object_id' => 3,
                'object_type' => 'App\\Models\\InterfaceObjects\\InterfaceObject',
                'class_id' => 655,
                'user_id' => '1',
                'created_at' => '2016-04-19 08:09:34',
                'updated_at' => '2016-04-19 08:09:34',
            ),
            11 => 
            array (
                'id' => 12,
                'object_id' => 3,
                'object_type' => 'App\\Models\\InterfaceObjects\\InterfaceObject',
                'class_id' => 666,
                'user_id' => '1',
                'created_at' => '2016-04-19 08:09:34',
                'updated_at' => '2016-04-19 08:09:34',
            ),
            12 => 
            array (
                'id' => 13,
                'object_id' => 4,
                'object_type' => 'App\\Models\\InterfaceObjects\\InterfaceObject',
                'class_id' => 19,
                'user_id' => '1',
                'created_at' => '2016-04-19 08:09:34',
                'updated_at' => '2016-04-19 08:09:34',
            ),
            13 => 
            array (
                'id' => 14,
                'object_id' => 4,
                'object_type' => 'App\\Models\\InterfaceObjects\\InterfaceObject',
                'class_id' => 22,
                'user_id' => '1',
                'created_at' => '2016-04-19 08:09:34',
                'updated_at' => '2016-04-19 08:09:34',
            ),
            14 => 
            array (
                'id' => 15,
                'object_id' => 4,
                'object_type' => 'App\\Models\\InterfaceObjects\\InterfaceObject',
                'class_id' => 655,
                'user_id' => '1',
                'created_at' => '2016-04-19 08:09:34',
                'updated_at' => '2016-04-19 08:09:34',
            ),
            15 => 
            array (
                'id' => 16,
                'object_id' => 4,
                'object_type' => 'App\\Models\\InterfaceObjects\\InterfaceObject',
                'class_id' => 666,
                'user_id' => '1',
                'created_at' => '2016-04-19 08:09:34',
                'updated_at' => '2016-04-19 08:09:34',
            ),
            16 => 
            array (
                'id' => 17,
                'object_id' => 5,
                'object_type' => 'App\\Models\\InterfaceObjects\\InterfaceObject',
                'class_id' => 19,
                'user_id' => '1',
                'created_at' => '2016-04-19 08:09:34',
                'updated_at' => '2016-04-19 08:09:34',
            ),
            17 => 
            array (
                'id' => 18,
                'object_id' => 5,
                'object_type' => 'App\\Models\\InterfaceObjects\\InterfaceObject',
                'class_id' => 22,
                'user_id' => '1',
                'created_at' => '2016-04-19 08:09:34',
                'updated_at' => '2016-04-19 08:09:34',
            ),
            18 => 
            array (
                'id' => 19,
                'object_id' => 5,
                'object_type' => 'App\\Models\\InterfaceObjects\\InterfaceObject',
                'class_id' => 655,
                'user_id' => '1',
                'created_at' => '2016-04-19 08:09:34',
                'updated_at' => '2016-04-19 08:09:34',
            ),
            19 => 
            array (
                'id' => 20,
                'object_id' => 5,
                'object_type' => 'App\\Models\\InterfaceObjects\\InterfaceObject',
                'class_id' => 666,
                'user_id' => '1',
                'created_at' => '2016-04-19 08:09:34',
                'updated_at' => '2016-04-19 08:09:34',
            ),
            20 => 
            array (
                'id' => 21,
                'object_id' => 6,
                'object_type' => 'App\\Models\\InterfaceObjects\\InterfaceObject',
                'class_id' => 19,
                'user_id' => '1',
                'created_at' => '2016-04-19 08:09:34',
                'updated_at' => '2016-04-19 08:09:34',
            ),
            21 => 
            array (
                'id' => 22,
                'object_id' => 6,
                'object_type' => 'App\\Models\\InterfaceObjects\\InterfaceObject',
                'class_id' => 22,
                'user_id' => '1',
                'created_at' => '2016-04-19 08:09:34',
                'updated_at' => '2016-04-19 08:09:34',
            ),
            22 => 
            array (
                'id' => 23,
                'object_id' => 6,
                'object_type' => 'App\\Models\\InterfaceObjects\\InterfaceObject',
                'class_id' => 655,
                'user_id' => '1',
                'created_at' => '2016-04-19 08:09:34',
                'updated_at' => '2016-04-19 08:09:34',
            ),
            23 => 
            array (
                'id' => 24,
                'object_id' => 6,
                'object_type' => 'App\\Models\\InterfaceObjects\\InterfaceObject',
                'class_id' => 666,
                'user_id' => '1',
                'created_at' => '2016-04-19 08:09:34',
                'updated_at' => '2016-04-19 08:09:34',
            ),
            24 => 
            array (
                'id' => 25,
                'object_id' => 7,
                'object_type' => 'App\\Models\\InterfaceObjects\\InterfaceObject',
                'class_id' => 19,
                'user_id' => '1',
                'created_at' => '2016-04-19 08:09:34',
                'updated_at' => '2016-04-19 08:09:34',
            ),
            25 => 
            array (
                'id' => 26,
                'object_id' => 7,
                'object_type' => 'App\\Models\\InterfaceObjects\\InterfaceObject',
                'class_id' => 22,
                'user_id' => '1',
                'created_at' => '2016-04-19 08:09:34',
                'updated_at' => '2016-04-19 08:09:34',
            ),
            26 => 
            array (
                'id' => 27,
                'object_id' => 7,
                'object_type' => 'App\\Models\\InterfaceObjects\\InterfaceObject',
                'class_id' => 655,
                'user_id' => '1',
                'created_at' => '2016-04-19 08:09:34',
                'updated_at' => '2016-04-19 08:09:34',
            ),
            27 => 
            array (
                'id' => 28,
                'object_id' => 7,
                'object_type' => 'App\\Models\\InterfaceObjects\\InterfaceObject',
                'class_id' => 666,
                'user_id' => '1',
                'created_at' => '2016-04-19 08:09:34',
                'updated_at' => '2016-04-19 08:09:34',
            ),
        ));
        
        
    }
}
