<?php

use Illuminate\Database\Seeder;

class TicketsTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('tickets')->delete();
        
        \DB::table('tickets')->insert(array (
            0 => 
            array (
                'id' => 1,
                'order_column' => 1,
                'tag_line' => '',
            'name' => 'Adult (13+)',
                'price' => 8,
                'description' => '',
                'created_at' => '2016-03-18 18:47:53',
                'updated_at' => '2016-03-19 01:35:54',
            ),
            1 => 
            array (
                'id' => 2,
                'order_column' => 4,
                'tag_line' => '',
                'name' => 'Children',
                'price' => 4,
                'description' => '',
                'created_at' => '2016-03-18 18:47:53',
                'updated_at' => '2016-03-19 01:35:31',
            ),
            2 => 
            array (
                'id' => 3,
                'order_column' => 6,
                'tag_line' => '',
                'name' => 'Senors FREE! ',
                'price' => 0,
            'description' => '(Friday Show) ',
                'created_at' => '2016-03-18 18:47:53',
                'updated_at' => '2016-03-19 01:41:07',
            ),
            3 => 
            array (
                'id' => 4,
                'order_column' => 7,
                'tag_line' => '',
                'name' => 'Military FREE!',
                'price' => 0,
            'description' => ' (Friday Show) ',
                'created_at' => '2016-03-18 18:47:53',
                'updated_at' => '2016-03-19 01:41:15',
            ),
            4 => 
            array (
                'id' => 5,
                'order_column' => 2,
                'tag_line' => '',
            'name' => 'Adult (14+)',
                'price' => 8,
                'description' => '',
                'created_at' => '2016-03-19 01:36:36',
                'updated_at' => '2016-03-19 01:36:36',
            ),
            5 => 
            array (
                'id' => 6,
                'order_column' => 3,
                'tag_line' => '',
            'name' => 'Adult (13+)',
                'price' => 5,
                'description' => '',
                'created_at' => '2016-03-19 01:37:30',
                'updated_at' => '2016-03-19 01:37:30',
            ),
            6 => 
            array (
                'id' => 7,
                'order_column' => 5,
                'tag_line' => '',
                'name' => 'Children Free!',
                'price' => 0,
                'description' => '',
                'created_at' => '2016-03-19 01:38:09',
                'updated_at' => '2016-03-19 01:41:28',
            ),
        ));
        
        
    }
}
