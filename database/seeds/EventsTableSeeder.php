<?php

use Illuminate\Database\Seeder;

class EventsTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('events')->delete();
        
        \DB::table('events')->insert(array (
            0 => 
            array (
                'id' => 1,
                'order_column' => 1,
            'name' => 'Greeley (Spring 2016)',
                'city' => 'Greeley',
                'state' => 'Colorado',
                'details' => 'The Home and Gadget Expo in Greeley, CO features all of your favorite’s attractions a home show customarily brings you with a technical twist! <br />From home renovation ideas and amazing innovative tools to help maximize the use of your space, all the wa',
                'season' => 'Spring',
                'date' => '2016-05-13',
                'venue' => 'Island Grove Regional Park Events Center',
                'street' => '501 N 14th Ave.',
                'zip' => '80631',
                'features' => '',
                'selected' => '0',
                'event_bright' => 'http://www.eventbrite.com/e/colorado-springs-home-gadget-expo-tickets-21242014437?aff=SiteCOS',
                'application_id' => '1',
                'pdf_id' => '1',
                'parking' => 'Plenty of free parking will be available!',
                'created_at' => '2016-03-18 18:47:53',
                'updated_at' => '2016-03-21 03:57:21',
            ),
            1 => 
            array (
                'id' => 2,
                'order_column' => 2,
            'name' => 'Co. Springs (Spring 2016)',
                'city' => 'Colorado Springs',
                'state' => 'Colorado',
                'details' => 'The Home and Gadget Expo in Colorado Springs, CO features all of your favorite’s attractions a home show customarily brings you with a technical twist! <br />Our amazing vendors will be bringing you everything from home renovation ideas and tools you neve',
                'season' => 'Spring',
                'date' => '2016-05-20',
                'venue' => 'Mortgage Solutions Center  ',
                'street' => '3650 N Nevada Ave.',
                'zip' => '80907',
                'features' => '',
                'selected' => '0',
                'event_bright' => 'http://www.eventbrite.com/e/colorado-springs-home-gadget-expo-tickets-21242014437?aff=SiteCOS',
                'application_id' => '',
                'pdf_id' => '1',
                'parking' => 'Plenty of free parking will be available!',
                'created_at' => '2016-03-18 18:47:53',
                'updated_at' => '2016-03-23 09:06:52',
            ),
            2 => 
            array (
                'id' => 3,
                'order_column' => 3,
            'name' => 'Denver (Spring 2016)',
                'city' => 'Denver',
                'state' => 'Colorado',
                'details' => 'The Home and Gadget Expo in Colorado Springs, CO features all of your favorite’s attractions a home show customarily brings you with a technical twist! <br />Our amazing vendors will be bringing you everything from home renovation ideas and tools you neve',
                'season' => 'Spring',
                'date' => '2016-06-03',
                'venue' => 'National Western Complex ',
                'street' => '730 3rd St.',
                'zip' => '80216',
                'features' => '',
                'selected' => '0',
                'event_bright' => 'http://www.eventbrite.com/e/colorado-springs-home-gadget-expo-tickets-21242014437?aff=SiteCOS',
                'application_id' => '',
                'pdf_id' => '1',
                'parking' => 'Parking $10',
                'created_at' => '2016-03-18 18:47:53',
                'updated_at' => '2016-03-23 09:04:12',
            ),
            3 => 
            array (
                'id' => 4,
                'order_column' => 4,
            'name' => 'Des Moines (Spring 2016)',
                'city' => 'Des Moines',
                'state' => 'Iowa',
                'details' => 'The Home and Gadget Expo in Colorado Springs, CO features all of your favorite’s attractions a home show customarily brings you with a technical twist! <br />Our amazing vendors will be bringing you everything from home renovation ideas and tools you neve',
                'season' => 'Spring',
                'date' => '2016-06-23',
                'venue' => 'Iowa Events Center ',
                'street' => '730 3rd St.',
                'zip' => '50309',
                'features' => '',
                'selected' => '0',
                'event_bright' => 'http://www.eventbrite.com/e/colorado-springs-home-gadget-expo-tickets-21242014437?aff=SiteCOS',
                'application_id' => '',
                'pdf_id' => '1',
                'parking' => 'Plenty of free parking will be available!',
                'created_at' => '2016-03-18 18:47:53',
                'updated_at' => '2016-03-23 02:23:15',
            ),
            4 => 
            array (
                'id' => 5,
                'order_column' => 5,
            'name' => 'Denver Holiday Expo (Winter 2016)',
                'city' => 'Denver',
                'state' => 'Colorado',
                'details' => 'The Home and Gadget Expo in Colorado Springs, CO features all of your favorite’s attractions a home show customarily brings you with a technical twist! <br />Our amazing vendors will be bringing you everything from home renovation ideas and tools you neve',
                'season' => 'Winter',
                'date' => '2016-12-03',
                'venue' => 'National Western Complex ',
                'street' => '730 3rd St.',
                'zip' => '80216',
                'features' => '',
                'selected' => '0',
                'event_bright' => 'http://www.eventbrite.com/e/colorado-springs-home-gadget-expo-tickets-21242014437?aff=SiteCOS',
                'application_id' => '',
                'pdf_id' => '1',
                'parking' => 'Parking $10',
                'created_at' => '2016-03-18 18:47:53',
                'updated_at' => '2016-03-21 14:48:08',
            ),
            5 => 
            array (
                'id' => 6,
                'order_column' => 8,
            'name' => 'Des Moines (Spring 2017)',
                'city' => 'Des Moines',
                'state' => 'Iowa',
                'details' => '',
                'season' => 'Spring',
                'date' => '2017-05-04',
                'venue' => 'Iowa Events Center',
                'street' => '730 3rd Street,',
                'zip' => '50309',
                'features' => '',
                'selected' => '',
                'event_bright' => '',
                'application_id' => '',
                'pdf_id' => '1',
                'parking' => 'Parking $7',
                'created_at' => '2016-03-19 00:35:54',
                'updated_at' => '2016-03-23 10:43:23',
            ),
            6 => 
            array (
                'id' => 7,
                'order_column' => 6,
            'name' => 'Grand Junction Holiday Expo (Fall 2016)',
                'city' => 'Grand Junction ',
                'state' => 'Colorado',
                'details' => '',
                'season' => 'Winter',
                'date' => '2016-10-29',
                'venue' => 'Two Rivers Convention Center',
                'street' => '159 Main St',
                'zip' => '81501',
                'features' => '',
                'selected' => '',
                'event_bright' => '',
                'application_id' => '7',
                'pdf_id' => '1',
                'parking' => '',
                'created_at' => '2016-03-19 00:39:36',
                'updated_at' => '2016-03-23 02:26:52',
            ),
            7 => 
            array (
                'id' => 8,
                'order_column' => 7,
            'name' => 'Cheyenne Holiday Expo (Fall 2017)',
                'city' => 'Cheyenne ',
                'state' => 'Wyoming',
                'details' => '',
                'season' => 'Fall',
                'date' => '2016-11-12',
                'venue' => 'Cheyenne Ice & Events Center',
                'street' => '1530 W Lincolnway',
                'zip' => '82001',
                'features' => '',
                'selected' => '',
                'event_bright' => '',
                'application_id' => '',
                'pdf_id' => '1',
                'parking' => 'Free',
                'created_at' => '2016-03-19 00:59:00',
                'updated_at' => '2016-03-23 02:26:59',
            ),
        ));
        
        
    }
}
