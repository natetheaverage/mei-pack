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
                'copy' => '20-20 Investing',
                'version' => 0,
                'versionList' => '{0:0}',
                'height' => '1',
                'parent_name' => 'BlueHero_1',
                'parent_id' => 0,
                'base_view' => 'front',
                'instance_number' => 0,
                'created_at' => '2016-04-18 02:41:49',
                'updated_at' => '2016-04-20 02:38:40',
            ),
            1 => 
            array (
                'id' => 2,
                'copy' => 'Your Vision into Pharmaceutical and Biotech Investing',
                'version' => 0,
                'versionList' => '{0:1}',
                'height' => '2',
                'parent_name' => 'BlueHero_1',
                'parent_id' => 0,
                'base_view' => 'front',
                'instance_number' => 1,
                'created_at' => '2016-04-18 02:42:01',
                'updated_at' => '2016-04-18 02:42:01',
            ),
            2 => 
            array (
                'id' => 3,
                'copy' => 'The prescription drug market is over $500 billion in global annual sales',
                'version' => 0,
                'versionList' => '{0:0}',
                'height' => '1',
                'parent_name' => 'MEiApp_0',
                'parent_id' => 0,
                'base_view' => 'front',
                'instance_number' => 0,
                'created_at' => '2016-04-18 02:42:09',
                'updated_at' => '2016-04-18 02:42:09',
            ),
            3 => 
            array (
                'id' => 4,
                'copy' => 'Need a way to sort through all of this information?',
                'version' => 0,
                'versionList' => '{0:1}',
                'height' => '2',
                'parent_name' => 'MEiApp_0',
                'parent_id' => 0,
                'base_view' => 'front',
                'instance_number' => 1,
                'created_at' => '2016-04-18 02:42:15',
                'updated_at' => '2016-04-18 02:42:15',
            ),
            4 => 
            array (
                'id' => 5,
                'copy' => '20-20 Investing has data for over 100 publicly traded drug companies; over 1,000 prescription drugs that treat over 300 medical conditions',
                'version' => 0,
                'versionList' => '{0:1}',
                'height' => '2',
                'parent_name' => 'MEiApp_0',
                'parent_id' => 0,
                'base_view' => 'front',
                'instance_number' => 2,
                'created_at' => '2016-04-18 02:42:31',
                'updated_at' => '2016-04-23 20:14:49',
            ),
            5 => 
            array (
                'id' => 6,
                'copy' => 'FOCUSED ON INVESTMENTS IN PHARMACEUTICAL AND BIOTECHNOLOGY COMPANIES',
                'version' => 0,
                'versionList' => '{0:0}',
                'height' => '1',
                'parent_name' => 'BlueHero_2',
                'parent_id' => 0,
                'base_view' => 'front',
                'instance_number' => 0,
                'created_at' => '2016-04-18 02:42:47',
                'updated_at' => '2016-04-18 02:42:47',
            ),
            6 => 
            array (
                'id' => 7,
                'copy' => 'Need a way to track of all the prescription drugs in the marketplace and which companies sell these drugs?',
                'version' => 0,
                'versionList' => '{0:1}',
                'height' => '2',
                'parent_name' => 'BlueHero_2',
                'parent_id' => 0,
                'base_view' => 'front',
                'instance_number' => 1,
                'created_at' => '2016-04-18 02:42:54',
                'updated_at' => '2016-04-18 02:42:54',
            ),
            7 => 
            array (
                'id' => 8,
                'copy' => 'Your <i class="fa purple fa-key"></i> to confident investing in biotech!',
                'version' => 0,
                'versionList' => '{0:0}',
                'height' => '1',
                'parent_name' => 'BlueHero_3',
                'parent_id' => 0,
                'base_view' => 'front',
                'instance_number' => 0,
                'created_at' => '2016-04-18 02:46:31',
                'updated_at' => '2016-04-18 02:46:31',
            ),
            8 => 
            array (
                'id' => 9,
                'copy' => 'Key information and metrics from large pharma to pre-clinical biotech companies',
                'version' => 0,
                'versionList' => '{0:1}',
                'height' => '2',
                'parent_name' => 'BlueHero_3',
                'parent_id' => 0,
                'base_view' => 'front',
                'instance_number' => 1,
                'created_at' => '2016-04-18 02:46:49',
                'updated_at' => '2016-04-20 02:41:16',
            ),
            9 => 
            array (
                'id' => 10,
                'copy' => 'PRICE',
                'version' => 0,
                'versionList' => '{0:0}',
                'height' => '1',
                'parent_name' => 'BlueHero_4',
                'parent_id' => 0,
                'base_view' => 'front',
                'instance_number' => 0,
                'created_at' => '2016-04-18 02:48:24',
                'updated_at' => '2016-04-18 02:48:24',
            ),
            10 => 
            array (
                'id' => 11,
                'copy' => 'The basic package is FREE',
                'version' => 0,
                'versionList' => '{0:1}',
                'height' => '2',
                'parent_name' => 'BlueHero_4',
                'parent_id' => 0,
                'base_view' => 'front',
                'instance_number' => 1,
                'created_at' => '2016-04-18 02:48:34',
                'updated_at' => '2016-04-18 02:48:34',
            ),
            11 => 
            array (
                'id' => 12,
                'copy' => 'GET IN TOUCH',
                'version' => 0,
                'versionList' => '{0:0}',
                'height' => '1',
                'parent_name' => 'BlueHero_5',
                'parent_id' => 0,
                'base_view' => 'front',
                'instance_number' => 0,
                'created_at' => '2016-04-18 02:49:02',
                'updated_at' => '2016-04-18 02:49:02',
            ),
            12 => 
            array (
                'id' => 13,
                'copy' => 'Send us a message',
                'version' => 0,
                'versionList' => '{0:1}',
                'height' => '2',
                'parent_name' => 'BlueHero_5',
                'parent_id' => 0,
                'base_view' => 'front',
                'instance_number' => 1,
                'created_at' => '2016-04-18 02:49:09',
                'updated_at' => '2016-04-18 02:49:09',
            ),
        ));
        
        
    }
}
