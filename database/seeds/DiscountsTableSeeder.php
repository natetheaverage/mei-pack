<?php

use Illuminate\Database\Seeder;

class DiscountsTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('discounts')->delete();
        
        \DB::table('discounts')->insert(array (
            0 => 
            array (
                'id' => 1,
                'order_column' => 1,
                'tag_line' => '',
                'name' => 'Pre-Pay',
                'type' => '%',
                'amount' => 5,
                'description' => '50% Required ',
                'created_at' => '2016-03-18 18:47:53',
                'updated_at' => '2016-03-21 08:31:25',
            ),
            1 => 
            array (
                'id' => 2,
                'order_column' => 2,
                'tag_line' => '',
                'name' => 'Multi-Booth',
                'type' => '%',
                'amount' => 5,
                'description' => '',
                'created_at' => '2016-03-18 18:47:53',
                'updated_at' => '2016-03-18 18:47:53',
            ),
            2 => 
            array (
                'id' => 3,
                'order_column' => 3,
                'tag_line' => '',
                'name' => 'Fall Earlybird',
                'type' => '%',
                'amount' => 5,
                'description' => 'By July 1st',
                'created_at' => '2016-03-19 01:00:51',
                'updated_at' => '2016-03-21 08:30:28',
            ),
            3 => 
            array (
                'id' => 4,
                'order_column' => 4,
                'tag_line' => '',
                'name' => 'Fall Multi-Booth  ',
                'type' => '%',
                'amount' => 5,
                'description' => '',
                'created_at' => '2016-03-19 01:01:54',
                'updated_at' => '2016-03-21 08:23:56',
            ),
            4 => 
            array (
                'id' => 5,
                'order_column' => 5,
                'tag_line' => '',
                'name' => 'Fall Prepay',
                'type' => '%',
                'amount' => 5,
                'description' => 'By July 1st, %50 Required ',
                'created_at' => '2016-03-19 01:02:34',
                'updated_at' => '2016-03-21 08:31:06',
            ),
        ));
        
        
    }
}
