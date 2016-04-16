<?php

use Illuminate\Database\Seeder;

class ImageFilesTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('image_files')->delete();
        
        \DB::table('image_files')->insert(array (
            0 => 
            array (
                'id' => 1,
                'order_column' => 1,
                'tag_line' => '',
                'label' => 'Greeley',
                'thumb' => 'greeley.png',
                'link' => 'GreeleyExpoFloorplan2016.pdf',
                'active' => '1',
                'created_at' => '2016-03-18 18:47:53',
                'updated_at' => '2016-03-18 18:47:53',
            ),
            1 => 
            array (
                'id' => 2,
                'order_column' => 2,
                'tag_line' => '',
                'label' => 'Co. Springs',
                'thumb' => 'colorado-springs.png',
                'link' => 'ColoradoSpringsExpoFloorplan2016.pdf',
                'active' => '0',
                'created_at' => '2016-03-18 18:47:53',
                'updated_at' => '2016-03-18 18:47:53',
            ),
            2 => 
            array (
                'id' => 3,
                'order_column' => 3,
                'tag_line' => '',
                'label' => 'Denver',
                'thumb' => 'denver.png',
                'link' => 'DenverExpoFloorplan2016.pdf',
                'active' => '0',
                'created_at' => '2016-03-18 18:47:53',
                'updated_at' => '2016-03-18 18:47:53',
            ),
            3 => 
            array (
                'id' => 4,
                'order_column' => 4,
                'tag_line' => '',
                'label' => 'Des Moines',
                'thumb' => 'desmoines2016.png',
                'link' => 'DesMoinesExpoFloorplan2016.pdf',
                'active' => '0',
                'created_at' => '2016-03-18 18:47:53',
                'updated_at' => '2016-03-18 18:47:53',
            ),
        ));
        
        
    }
}
