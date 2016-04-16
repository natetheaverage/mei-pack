<?php

use Illuminate\Database\Seeder;

class PdfFilesTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('pdf_files')->delete();
        
        \DB::table('pdf_files')->insert(array (
            0 => 
            array (
                'id' => 19,
                'order_column' => 1,
                'tag_line' => '',
            'label' => 'Greeley(Spring_2016)',
            'link' => 'HomeAndGadgetExpo_Greeley(Spring_2016).pdf',
                'event_id' => 0,
                'created_at' => '2016-03-21 08:33:05',
                'updated_at' => '2016-03-21 08:33:05',
            ),
            1 => 
            array (
                'id' => 21,
                'order_column' => 3,
                'tag_line' => '',
            'label' => 'Denver(Spring_2016)',
            'link' => 'HomeAndGadgetExpo_Denver(Spring_2016).pdf',
                'event_id' => 0,
                'created_at' => '2016-03-21 08:34:04',
                'updated_at' => '2016-03-21 08:34:04',
            ),
            2 => 
            array (
                'id' => 26,
                'order_column' => 7,
                'tag_line' => '',
            'label' => 'Cheyenne_(Fall_2016)',
            'link' => 'HomeAndGadgetExpo_Cheyenne(Fall_2016).pdf',
                'event_id' => 0,
                'created_at' => '2016-03-21 08:41:43',
                'updated_at' => '2016-03-21 08:41:43',
            ),
            3 => 
            array (
                'id' => 28,
                'order_column' => 2,
                'tag_line' => '',
            'label' => 'Colorado_Springs(Spring_2016)',
            'link' => 'HomeAndGadgetExpo_ColoradoSprings(Spring_2016).pdf',
                'event_id' => 0,
                'created_at' => '2016-03-21 09:05:02',
                'updated_at' => '2016-03-21 09:05:02',
            ),
            4 => 
            array (
                'id' => 29,
                'order_column' => 4,
                'tag_line' => '',
            'label' => 'Des_Moines(Spring_2016)',
            'link' => 'HomeAndGadgetExpo_DesMoines(Spring_2016).pdf',
                'event_id' => 0,
                'created_at' => '2016-03-21 09:05:12',
                'updated_at' => '2016-03-21 09:05:12',
            ),
            5 => 
            array (
                'id' => 30,
                'order_column' => 8,
                'tag_line' => '',
            'label' => 'Des_Moines(Spring_2017)',
            'link' => 'HomeAndGadgetExpo_DesMoines(Spring_2017).pdf',
                'event_id' => 0,
                'created_at' => '2016-03-21 09:05:29',
                'updated_at' => '2016-03-21 09:05:29',
            ),
            6 => 
            array (
                'id' => 31,
                'order_column' => 6,
                'tag_line' => '',
            'label' => 'Grand_Junction_(Winter_2016)',
            'link' => 'HomeAndGadgetExpo_GrandJunction(Winter_2016).pdf',
                'event_id' => 0,
                'created_at' => '2016-03-21 09:05:42',
                'updated_at' => '2016-03-21 09:05:42',
            ),
            7 => 
            array (
                'id' => 32,
                'order_column' => 5,
                'tag_line' => '',
            'label' => 'Denver(Winter_2016)',
            'link' => 'HomeAndGadgetExpo_Denver(Winter_2016).pdf',
                'event_id' => 0,
                'created_at' => '2016-03-21 09:10:17',
                'updated_at' => '2016-03-21 09:10:17',
            ),
        ));
        
        
    }
}
