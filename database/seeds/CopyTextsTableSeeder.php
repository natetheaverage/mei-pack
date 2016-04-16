<?php

use Illuminate\Database\Seeder;

class CopyTextsTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('copy_texts')->delete();
        
        \DB::table('copy_texts')->insert(array (
            0 => 
            array (
                'id' => 1,
                'owner' => '',
                'title' => 'introTitle',
                'content' => 'Welcome to Nationwide',
                'img' => '',
                'created_at' => '2016-03-01 22:39:51',
                'updated_at' => '2016-03-01 22:39:51',
            ),
            1 => 
            array (
                'id' => 2,
                'owner' => '',
                'title' => 'introSubTitle',
                'content' => 'Home & Gadgets Expo',
                'img' => '',
                'created_at' => '2016-03-01 22:40:18',
                'updated_at' => '2016-03-21 04:05:07',
            ),
            2 => 
            array (
                'id' => 3,
                'owner' => '',
                'title' => 'introText',
                'content' => 'Our Expo brings you all the good stuff a traditional home show does with a technology and gadget spin!
',
                'img' => '',
                'created_at' => '2016-03-01 22:40:45',
                'updated_at' => '2016-03-21 15:15:56',
            ),
            3 => 
            array (
                'id' => 4,
                'owner' => '',
                'title' => 'introButtonText',
                'content' => 'Learn More About US!',
                'img' => '',
                'created_at' => '2016-03-01 22:41:04',
                'updated_at' => '2016-03-01 22:41:04',
            ),
            4 => 
            array (
                'id' => 5,
                'owner' => '',
                'title' => 'vendorsTitle',
                'content' => 'FEATURED VENDORS',
                'img' => '',
                'created_at' => '2016-03-01 22:41:58',
                'updated_at' => '2016-03-01 22:41:58',
            ),
            5 => 
            array (
                'id' => 6,
                'owner' => '',
                'title' => 'vendorsSubTitle',
                'content' => 'Here are some of our amazing vendor highlights!',
                'img' => '',
                'created_at' => '2016-03-01 22:43:43',
                'updated_at' => '2016-03-02 15:39:05',
            ),
            6 => 
            array (
                'id' => 7,
                'owner' => '',
                'title' => 'eventsTitle',
                'content' => 'Upcomming Events',
                'img' => '',
                'created_at' => '2016-03-23 05:22:03',
                'updated_at' => '2016-03-23 05:22:03',
            ),
            7 => 
            array (
                'id' => 8,
                'owner' => '',
                'title' => 'eventsSubTitle',
                'content' => 'Here are the main details for the upcoming spring 2016-2017 show seasons.  Have any questions please ask.',
                'img' => '',
                'created_at' => '2016-03-23 05:22:16',
                'updated_at' => '2016-03-23 05:22:16',
            ),
            8 => 
            array (
                'id' => 9,
                'owner' => '',
                'title' => 'eventDetailsTitle',
                'content' => 'Event Details',
                'img' => '',
                'created_at' => '2016-03-23 06:26:50',
                'updated_at' => '2016-03-23 06:26:50',
            ),
            9 => 
            array (
                'id' => 10,
                'owner' => '',
                'title' => 'eventTicketsTitle',
                'content' => 'Event Tickets!',
                'img' => '',
                'created_at' => '2016-03-23 06:29:05',
                'updated_at' => '2016-03-23 06:29:05',
            ),
        ));
        
        
    }
}
