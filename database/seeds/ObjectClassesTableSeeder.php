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
                'created_at' => '2016-04-17 19:32:38',
                'updated_at' => '2016-04-17 19:32:38',
            ),
            1 => 
            array (
                'id' => 2,
                'object_id' => 1,
                'object_type' => 'App\\Models\\InterfaceObjects\\InterfaceObject',
                'class_id' => 22,
                'user_id' => '1',
                'created_at' => '2016-04-17 19:32:38',
                'updated_at' => '2016-04-17 19:32:38',
            ),
            2 => 
            array (
                'id' => 3,
                'object_id' => 1,
                'object_type' => 'App\\Models\\InterfaceObjects\\InterfaceObject',
                'class_id' => 655,
                'user_id' => '1',
                'created_at' => '2016-04-17 19:32:38',
                'updated_at' => '2016-04-17 19:32:38',
            ),
            3 => 
            array (
                'id' => 4,
                'object_id' => 1,
                'object_type' => 'App\\Models\\InterfaceObjects\\InterfaceObject',
                'class_id' => 666,
                'user_id' => '1',
                'created_at' => '2016-04-17 19:32:38',
                'updated_at' => '2016-04-17 19:32:38',
            ),
            4 => 
            array (
                'id' => 5,
                'object_id' => 2,
                'object_type' => 'App\\Models\\InterfaceObjects\\InterfaceObject',
                'class_id' => 19,
                'user_id' => '1',
                'created_at' => '2016-04-17 19:32:38',
                'updated_at' => '2016-04-17 19:32:38',
            ),
            5 => 
            array (
                'id' => 6,
                'object_id' => 2,
                'object_type' => 'App\\Models\\InterfaceObjects\\InterfaceObject',
                'class_id' => 22,
                'user_id' => '1',
                'created_at' => '2016-04-17 19:32:38',
                'updated_at' => '2016-04-17 19:32:38',
            ),
            6 => 
            array (
                'id' => 7,
                'object_id' => 2,
                'object_type' => 'App\\Models\\InterfaceObjects\\InterfaceObject',
                'class_id' => 655,
                'user_id' => '1',
                'created_at' => '2016-04-17 19:32:38',
                'updated_at' => '2016-04-17 19:32:38',
            ),
            7 => 
            array (
                'id' => 8,
                'object_id' => 2,
                'object_type' => 'App\\Models\\InterfaceObjects\\InterfaceObject',
                'class_id' => 666,
                'user_id' => '1',
                'created_at' => '2016-04-17 19:32:38',
                'updated_at' => '2016-04-17 19:32:38',
            ),
            8 => 
            array (
                'id' => 9,
                'object_id' => 3,
                'object_type' => 'App\\Models\\InterfaceObjects\\InterfaceObject',
                'class_id' => 19,
                'user_id' => '1',
                'created_at' => '2016-04-17 19:32:38',
                'updated_at' => '2016-04-17 19:32:38',
            ),
            9 => 
            array (
                'id' => 10,
                'object_id' => 3,
                'object_type' => 'App\\Models\\InterfaceObjects\\InterfaceObject',
                'class_id' => 22,
                'user_id' => '1',
                'created_at' => '2016-04-17 19:32:38',
                'updated_at' => '2016-04-17 19:32:38',
            ),
            10 => 
            array (
                'id' => 11,
                'object_id' => 3,
                'object_type' => 'App\\Models\\InterfaceObjects\\InterfaceObject',
                'class_id' => 655,
                'user_id' => '1',
                'created_at' => '2016-04-17 19:32:38',
                'updated_at' => '2016-04-17 19:32:38',
            ),
            11 => 
            array (
                'id' => 12,
                'object_id' => 3,
                'object_type' => 'App\\Models\\InterfaceObjects\\InterfaceObject',
                'class_id' => 666,
                'user_id' => '1',
                'created_at' => '2016-04-17 19:32:38',
                'updated_at' => '2016-04-17 19:32:38',
            ),
            12 => 
            array (
                'id' => 13,
                'object_id' => 4,
                'object_type' => 'App\\Models\\InterfaceObjects\\InterfaceObject',
                'class_id' => 19,
                'user_id' => '1',
                'created_at' => '2016-04-17 19:32:38',
                'updated_at' => '2016-04-17 19:32:38',
            ),
            13 => 
            array (
                'id' => 14,
                'object_id' => 4,
                'object_type' => 'App\\Models\\InterfaceObjects\\InterfaceObject',
                'class_id' => 22,
                'user_id' => '1',
                'created_at' => '2016-04-17 19:32:38',
                'updated_at' => '2016-04-17 19:32:38',
            ),
            14 => 
            array (
                'id' => 15,
                'object_id' => 4,
                'object_type' => 'App\\Models\\InterfaceObjects\\InterfaceObject',
                'class_id' => 655,
                'user_id' => '1',
                'created_at' => '2016-04-17 19:32:38',
                'updated_at' => '2016-04-17 19:32:38',
            ),
            15 => 
            array (
                'id' => 16,
                'object_id' => 4,
                'object_type' => 'App\\Models\\InterfaceObjects\\InterfaceObject',
                'class_id' => 666,
                'user_id' => '1',
                'created_at' => '2016-04-17 19:32:38',
                'updated_at' => '2016-04-17 19:32:38',
            ),
            16 => 
            array (
                'id' => 17,
                'object_id' => 5,
                'object_type' => 'App\\Models\\InterfaceObjects\\InterfaceObject',
                'class_id' => 19,
                'user_id' => '1',
                'created_at' => '2016-04-17 19:32:38',
                'updated_at' => '2016-04-17 19:32:38',
            ),
            17 => 
            array (
                'id' => 18,
                'object_id' => 5,
                'object_type' => 'App\\Models\\InterfaceObjects\\InterfaceObject',
                'class_id' => 22,
                'user_id' => '1',
                'created_at' => '2016-04-17 19:32:38',
                'updated_at' => '2016-04-17 19:32:38',
            ),
            18 => 
            array (
                'id' => 19,
                'object_id' => 5,
                'object_type' => 'App\\Models\\InterfaceObjects\\InterfaceObject',
                'class_id' => 655,
                'user_id' => '1',
                'created_at' => '2016-04-17 19:32:38',
                'updated_at' => '2016-04-17 19:32:38',
            ),
            19 => 
            array (
                'id' => 20,
                'object_id' => 5,
                'object_type' => 'App\\Models\\InterfaceObjects\\InterfaceObject',
                'class_id' => 666,
                'user_id' => '1',
                'created_at' => '2016-04-17 19:32:38',
                'updated_at' => '2016-04-17 19:32:38',
            ),
            20 => 
            array (
                'id' => 21,
                'object_id' => 6,
                'object_type' => 'App\\Models\\InterfaceObjects\\InterfaceObject',
                'class_id' => 19,
                'user_id' => '1',
                'created_at' => '2016-04-17 19:32:39',
                'updated_at' => '2016-04-17 19:32:39',
            ),
            21 => 
            array (
                'id' => 22,
                'object_id' => 6,
                'object_type' => 'App\\Models\\InterfaceObjects\\InterfaceObject',
                'class_id' => 22,
                'user_id' => '1',
                'created_at' => '2016-04-17 19:32:39',
                'updated_at' => '2016-04-17 19:32:39',
            ),
            22 => 
            array (
                'id' => 23,
                'object_id' => 6,
                'object_type' => 'App\\Models\\InterfaceObjects\\InterfaceObject',
                'class_id' => 655,
                'user_id' => '1',
                'created_at' => '2016-04-17 19:32:39',
                'updated_at' => '2016-04-17 19:32:39',
            ),
            23 => 
            array (
                'id' => 24,
                'object_id' => 6,
                'object_type' => 'App\\Models\\InterfaceObjects\\InterfaceObject',
                'class_id' => 666,
                'user_id' => '1',
                'created_at' => '2016-04-17 19:32:39',
                'updated_at' => '2016-04-17 19:32:39',
            ),
            24 => 
            array (
                'id' => 25,
                'object_id' => 7,
                'object_type' => 'App\\Models\\InterfaceObjects\\InterfaceObject',
                'class_id' => 19,
                'user_id' => '1',
                'created_at' => '2016-04-17 19:32:39',
                'updated_at' => '2016-04-17 19:32:39',
            ),
            25 => 
            array (
                'id' => 26,
                'object_id' => 7,
                'object_type' => 'App\\Models\\InterfaceObjects\\InterfaceObject',
                'class_id' => 22,
                'user_id' => '1',
                'created_at' => '2016-04-17 19:32:39',
                'updated_at' => '2016-04-17 19:32:39',
            ),
            26 => 
            array (
                'id' => 27,
                'object_id' => 7,
                'object_type' => 'App\\Models\\InterfaceObjects\\InterfaceObject',
                'class_id' => 655,
                'user_id' => '1',
                'created_at' => '2016-04-17 19:32:39',
                'updated_at' => '2016-04-17 19:32:39',
            ),
            27 => 
            array (
                'id' => 28,
                'object_id' => 7,
                'object_type' => 'App\\Models\\InterfaceObjects\\InterfaceObject',
                'class_id' => 666,
                'user_id' => '1',
                'created_at' => '2016-04-17 19:32:39',
                'updated_at' => '2016-04-17 19:32:39',
            ),
        ));
        
        
    }
}
