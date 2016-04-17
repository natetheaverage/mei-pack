<?php

use Illuminate\Database\Seeder;

class FeaturesTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {

        \DB::table('features')->delete();
        
        \DB::table('features')->insert(array (
            0=>
            array (
                'title' => 'Welcome',
                'image' => 'ipad-screen-twenty.png',
                'link' => '#',
                'icon' => 'link',
                'content' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            ),
            1=>
            array (
                'title' => "Company's",
                'image' => 'ipad-screen-twenty.png',
                'link' => '#',
                'icon' => 'link',
                'content' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'      
            ),
            2=>
                array (
                'title' => 'Ailments',
                'image' => 'ipad-screen-twenty.png',
                'link' => '#',
                'icon' => 'link',
                'content' => ' Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'     
            ),
            3=>
            array (
                'title' => 'Company content',
                'image' => 'ipad-screen-twenty.png',
                'link' => '#',
                'icon' => 'link',
                'content' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'      
            ),
            4=>
            array (
                'title' => 'Company Details 2',
                'image' => 'ipad-screen-twenty.png',
                'link' => '#',
                'icon' => 'link',
                'content' => ' Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'     
            )
        )
    );
    }
}
