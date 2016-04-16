<?php

use Illuminate\Database\Seeder;

class EventsFeaturesTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('events_features')->delete();
        
        \DB::table('events_features')->insert(array (
            0 => 
            array (
                'event_id' => 2,
                'feature_id' => 1,
                'order_column' => 0,
            ),
            1 => 
            array (
                'event_id' => 2,
                'feature_id' => 2,
                'order_column' => 0,
            ),
            2 => 
            array (
                'event_id' => 3,
                'feature_id' => 2,
                'order_column' => 0,
            ),
            3 => 
            array (
                'event_id' => 5,
                'feature_id' => 1,
                'order_column' => 0,
            ),
        ));
        
        
    }
}
