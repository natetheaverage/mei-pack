<?php

use Illuminate\Database\Seeder;

class EventsPricesTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('events_prices')->delete();
        
        \DB::table('events_prices')->insert(array (
            0 => 
            array (
                'event_id' => 1,
                'price_id' => 1,
                'order_column' => 0,
            ),
            1 => 
            array (
                'event_id' => 1,
                'price_id' => 2,
                'order_column' => 0,
            ),
            2 => 
            array (
                'event_id' => 1,
                'price_id' => 10,
                'order_column' => 0,
            ),
            3 => 
            array (
                'event_id' => 2,
                'price_id' => 1,
                'order_column' => 0,
            ),
            4 => 
            array (
                'event_id' => 2,
                'price_id' => 2,
                'order_column' => 0,
            ),
            5 => 
            array (
                'event_id' => 2,
                'price_id' => 10,
                'order_column' => 0,
            ),
            6 => 
            array (
                'event_id' => 3,
                'price_id' => 5,
                'order_column' => 0,
            ),
            7 => 
            array (
                'event_id' => 3,
                'price_id' => 6,
                'order_column' => 0,
            ),
            8 => 
            array (
                'event_id' => 3,
                'price_id' => 7,
                'order_column' => 0,
            ),
            9 => 
            array (
                'event_id' => 4,
                'price_id' => 5,
                'order_column' => 0,
            ),
            10 => 
            array (
                'event_id' => 4,
                'price_id' => 6,
                'order_column' => 0,
            ),
            11 => 
            array (
                'event_id' => 4,
                'price_id' => 10,
                'order_column' => 0,
            ),
            12 => 
            array (
                'event_id' => 5,
                'price_id' => 1,
                'order_column' => 0,
            ),
            13 => 
            array (
                'event_id' => 5,
                'price_id' => 2,
                'order_column' => 0,
            ),
            14 => 
            array (
                'event_id' => 5,
                'price_id' => 3,
                'order_column' => 0,
            ),
            15 => 
            array (
                'event_id' => 5,
                'price_id' => 4,
                'order_column' => 0,
            ),
            16 => 
            array (
                'event_id' => 5,
                'price_id' => 7,
                'order_column' => 0,
            ),
            17 => 
            array (
                'event_id' => 6,
                'price_id' => 5,
                'order_column' => 0,
            ),
            18 => 
            array (
                'event_id' => 6,
                'price_id' => 6,
                'order_column' => 0,
            ),
            19 => 
            array (
                'event_id' => 7,
                'price_id' => 8,
                'order_column' => 0,
            ),
            20 => 
            array (
                'event_id' => 7,
                'price_id' => 9,
                'order_column' => 0,
            ),
            21 => 
            array (
                'event_id' => 7,
                'price_id' => 10,
                'order_column' => 0,
            ),
            22 => 
            array (
                'event_id' => 8,
                'price_id' => 8,
                'order_column' => 0,
            ),
            23 => 
            array (
                'event_id' => 8,
                'price_id' => 9,
                'order_column' => 0,
            ),
            24 => 
            array (
                'event_id' => 8,
                'price_id' => 10,
                'order_column' => 0,
            ),
        ));
        
        
    }
}
