<?php

use Illuminate\Database\Seeder;

class EventsPdfsTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('events_pdfs')->delete();
        
        \DB::table('events_pdfs')->insert(array (
            0 => 
            array (
                'event_id' => 1,
                'pdf_id' => 1,
                'order_column' => 0,
            ),
            1 => 
            array (
                'event_id' => 2,
                'pdf_id' => 1,
                'order_column' => 0,
            ),
            2 => 
            array (
                'event_id' => 3,
                'pdf_id' => 1,
                'order_column' => 0,
            ),
            3 => 
            array (
                'event_id' => 4,
                'pdf_id' => 1,
                'order_column' => 0,
            ),
            4 => 
            array (
                'event_id' => 5,
                'pdf_id' => 1,
                'order_column' => 0,
            ),
        ));
        
        
    }
}
