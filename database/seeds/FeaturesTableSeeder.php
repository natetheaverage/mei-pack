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
            0 => 
            array (
                'id' => 1,
                'order_column' => 1,
                'title' => '$2500 TARGET GIFT CARD GIVE AWAY',
                'sub_title' => 'Enter to win',
                'img' => 'image003.png',
                'description' => 'Thats Right $2500
<hr />
Look for your chance to enter at the Denver Spring 2016 show, or the Colorado Springs Spring 2016 show.',
                'button_label' => '',
                'link' => '',
                'created_at' => '2016-03-18 18:47:53',
                'updated_at' => '2016-03-18 18:47:53',
            ),
            1 => 
            array (
                'id' => 2,
                'order_column' => 2,
                'title' => 'CHEF KRISTIN SOLLENNE',
                'sub_title' => 'Special Apperance',
                'img' => 'penQu0WQ99s1lxVfhqkgTDZxo197Z88u.png',
                'description' => '<h3>Currently</h3>

<hr />

<p>She oversees the three kitchens of the New York City Restaurant Group&rsquo;s (NYCRG) Bocca Di Bacco.</p>

<p>Kristin is also an author with the release of her first cookbook Domestic Ch&iacute;c &ndash; A Fashionable Fabulo',
                'button_label' => 'The Drs: Fall Recipes',
                'link' => 'http://www.thedoctorstv.com/videos/tasty-recipes-to-enjoy-in-the-fall',
                'created_at' => '2016-03-19 01:25:23',
                'updated_at' => '2016-03-19 01:25:23',
            ),
        ));
        
        
    }
}
