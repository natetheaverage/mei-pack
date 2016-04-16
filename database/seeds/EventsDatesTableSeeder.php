<?php

use Illuminate\Database\Seeder;

class EventsDatesTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('events_dates')->delete();
        
        \DB::table('events_dates')->insert(array (
            0 => 
            array (
                'event_id' => 1,
                'date_id' => 12,
                'order_column' => 0,
            ),
            1 => 
            array (
                'event_id' => 1,
                'date_id' => 13,
                'order_column' => 0,
            ),
            2 => 
            array (
                'event_id' => 1,
                'date_id' => 14,
                'order_column' => 0,
            ),
            3 => 
            array (
                'event_id' => 2,
                'date_id' => 7,
                'order_column' => 0,
            ),
            4 => 
            array (
                'event_id' => 2,
                'date_id' => 8,
                'order_column' => 0,
            ),
            5 => 
            array (
                'event_id' => 2,
                'date_id' => 9,
                'order_column' => 0,
            ),
            6 => 
            array (
                'event_id' => 3,
                'date_id' => 6,
                'order_column' => 0,
            ),
            7 => 
            array (
                'event_id' => 3,
                'date_id' => 10,
                'order_column' => 0,
            ),
            8 => 
            array (
                'event_id' => 3,
                'date_id' => 11,
                'order_column' => 0,
            ),
            9 => 
            array (
                'event_id' => 4,
                'date_id' => 1,
                'order_column' => 0,
            ),
            10 => 
            array (
                'event_id' => 4,
                'date_id' => 3,
                'order_column' => 0,
            ),
            11 => 
            array (
                'event_id' => 4,
                'date_id' => 5,
                'order_column' => 0,
            ),
            12 => 
            array (
                'event_id' => 5,
                'date_id' => 2,
                'order_column' => 0,
            ),
            13 => 
            array (
                'event_id' => 5,
                'date_id' => 4,
                'order_column' => 0,
            ),
            14 => 
            array (
                'event_id' => 6,
                'date_id' => 19,
                'order_column' => 0,
            ),
            15 => 
            array (
                'event_id' => 6,
                'date_id' => 20,
                'order_column' => 0,
            ),
            16 => 
            array (
                'event_id' => 6,
                'date_id' => 21,
                'order_column' => 0,
            ),
            17 => 
            array (
                'event_id' => 6,
                'date_id' => 22,
                'order_column' => 0,
            ),
            18 => 
            array (
                'event_id' => 7,
                'date_id' => 15,
                'order_column' => 0,
            ),
            19 => 
            array (
                'event_id' => 7,
                'date_id' => 16,
                'order_column' => 0,
            ),
            20 => 
            array (
                'event_id' => 8,
                'date_id' => 17,
                'order_column' => 0,
            ),
            21 => 
            array (
                'event_id' => 8,
                'date_id' => 18,
                'order_column' => 0,
            ),
        ));
        
        
    }
}
