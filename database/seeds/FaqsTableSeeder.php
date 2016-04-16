<?php

use Illuminate\Database\Seeder;

class FaqsTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('faqs')->delete();
        
        \DB::table('faqs')->insert(array (
            0 => 
            array (
                'id' => 1,
                'order_column' => 1,
                'label' => 'When does exhibitor registration begin?',
                'content' => 'Registration for the Spring 2016 shows has begun! All booth space is first come first serve so register as soon as possible.',
                'active' => 'true',
                'created_at' => '2016-03-18 18:47:53',
                'updated_at' => '2016-03-18 18:47:53',
            ),
            1 => 
            array (
                'id' => 2,
                'order_column' => 2,
                'label' => 'What\'s included in booth space?',
                'content' => 'Booths include: -Standard pipe and draping -A basic exhibitor sign</li></ul> *Additional needs such as electricity are rented separately.',
                'active' => 'false',
                'created_at' => '2016-03-18 18:47:53',
                'updated_at' => '2016-03-18 18:47:53',
            ),
            2 => 
            array (
                'id' => 3,
                'order_column' => 3,
                'label' => 'What\'s required to reserve booth space?',
                'content' => '50% of booth fees are required upfront to reserve booth space with the remaining 50% due 30 days prior to each show.<br /> Enjoy a 5% discount off booth fees by paying total upfront.',
                'active' => 'false',
                'created_at' => '2016-03-18 18:47:53',
                'updated_at' => '2016-03-18 18:47:53',
            ),
            3 => 
            array (
                'id' => 4,
                'order_column' => 4,
                'label' => 'Are any booth discounts available?',
                'content' => 'YES! Multi-booth as well as multi-show discounts are available. Please contact us at 720-316-2757 for details.',
                'active' => 'false',
                'created_at' => '2016-03-18 18:47:53',
                'updated_at' => '2016-03-18 18:47:53',
            ),
        ));
        
        
    }
}
