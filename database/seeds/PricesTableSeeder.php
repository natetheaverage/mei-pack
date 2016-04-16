<?php

use Illuminate\Database\Seeder;

class PricesTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('prices')->delete();
        
        \DB::table('prices')->insert(array (
            0 => 
            array (
                'id' => 1,
                'order_column' => 1,
                'tag_line' => '',
                'name' => 'Regular Vendors',
                'type' => 'Inline Booth',
                'price' => 750,
                'description' => '',
                'created_at' => '2016-03-18 18:47:53',
                'updated_at' => '2016-03-19 01:29:08',
            ),
            1 => 
            array (
                'id' => 2,
                'order_column' => 2,
                'tag_line' => '',
                'name' => 'Regular Vendors',
                'type' => 'Corner Booth',
                'price' => 850,
                'description' => '',
                'created_at' => '2016-03-18 18:47:53',
                'updated_at' => '2016-03-19 01:29:15',
            ),
            2 => 
            array (
                'id' => 3,
                'order_column' => 3,
                'tag_line' => '',
                'name' => 'Craft Vendors',
                'type' => 'Inline Booth',
                'price' => 500,
                'description' => '',
                'created_at' => '2016-03-18 18:47:53',
                'updated_at' => '2016-03-19 01:29:48',
            ),
            3 => 
            array (
                'id' => 4,
                'order_column' => 4,
                'tag_line' => '',
                'name' => 'Craft Vendors',
                'type' => 'Corner Booth',
                'price' => 600,
                'description' => '',
                'created_at' => '2016-03-18 18:47:53',
                'updated_at' => '2016-03-19 01:29:37',
            ),
            4 => 
            array (
                'id' => 5,
                'order_column' => 5,
                'tag_line' => '',
                'name' => 'Regular Vendors',
                'type' => 'Inline Booth',
                'price' => 900,
                'description' => '',
                'created_at' => '2016-03-18 18:47:53',
                'updated_at' => '2016-03-19 01:29:22',
            ),
            5 => 
            array (
                'id' => 6,
                'order_column' => 6,
                'tag_line' => '',
                'name' => 'Regular Vendors',
                'type' => 'Corner Booth',
                'price' => 1000,
                'description' => '',
                'created_at' => '2016-03-18 18:47:53',
                'updated_at' => '2016-03-19 01:29:29',
            ),
            6 => 
            array (
                'id' => 7,
                'order_column' => 9,
                'tag_line' => '',
                'name' => 'Booth Features',
                'type' => 'Electrical',
                'price' => 75,
            'description' => '(paid at the venue)',
                'created_at' => '2016-03-18 18:47:53',
                'updated_at' => '2016-03-21 07:25:06',
            ),
            7 => 
            array (
                'id' => 8,
                'order_column' => 7,
                'tag_line' => '',
                'name' => 'Regular Vendor',
                'type' => 'Inline Booth',
                'price' => 600,
                'description' => '',
                'created_at' => '2016-03-19 00:54:43',
                'updated_at' => '2016-03-19 00:54:43',
            ),
            8 => 
            array (
                'id' => 9,
                'order_column' => 8,
                'tag_line' => '',
                'name' => 'Regular Vendor',
                'type' => 'Corner Booth',
                'price' => 650,
                'description' => '',
                'created_at' => '2016-03-19 00:56:28',
                'updated_at' => '2016-03-19 00:56:28',
            ),
            9 => 
            array (
                'id' => 10,
                'order_column' => 10,
                'tag_line' => '',
                'name' => 'Booth Features',
                'type' => 'Electrical',
                'price' => 75,
                'description' => '',
                'created_at' => '2016-03-19 01:27:52',
                'updated_at' => '2016-03-19 01:27:52',
            ),
        ));
        
        
    }
}
