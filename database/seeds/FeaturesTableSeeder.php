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
                'order_column' => 0,
                'title' => 'Condition Report',
            'content' => '<p>For a selected medical condition, a detailed snapshot of the competing drugs (and their annual sales) that treat this condition, the companies that make these drugs</p>
',
                'image' => 'ipad-screen-twenty.png',
                'link' => '#',
                'icon' => 'area-chart',
                'parent' => '',
                'created_at' => NULL,
                'updated_at' => '2016-04-18 05:29:52',
            ),
            1 => 
            array (
                'id' => 2,
                'order_column' => 0,
                'title' => 'Drug Report',
            'content' => '<p>For a selected drug, a detailed snapshot of the last eight quarterly sales amounts, the company(ies) that make and sell the drug and the medical conditions they treat</p>
',
                'image' => 'ipad-screen-twenty.png',
                'link' => '#',
                'icon' => 'bar-chart',
                'parent' => '',
                'created_at' => NULL,
                'updated_at' => '2016-04-18 05:29:10',
            ),
            2 => 
            array (
                'id' => 3,
                'order_column' => 0,
                'title' => 'Company Drug Report',
                'content' => '<p>For a selected company, detailed snapshot of the drugs that company makes, along with their regulatory status and annual sales amounts</p>
',
                'image' => 'ipad-screen-twenty.png',
                'link' => '#',
                'icon' => 'pie-chart',
                'parent' => '',
                'created_at' => NULL,
                'updated_at' => '2016-04-18 05:27:50',
            ),
            3 => 
            array (
                'id' => 4,
                'order_column' => 0,
                'title' => 'Company Financial Report',
                'content' => '<p>Detailed snapshot of company stock price performance, last two years of financial income statement, other key financial metrics and a one-year stock chart</p>
',
                'image' => 'ipad-screen-twenty.png',
                'link' => '#',
                'icon' => 'line-chart',
                'parent' => '',
                'created_at' => NULL,
                'updated_at' => '2016-04-18 05:33:12',
            ),
            4 => 
            array (
                'id' => 5,
                'order_column' => 0,
                'title' => 'Company, Drug and Conditions Lists',
                'content' => '<p>Sortable list of over 100 companies by market cap, revenue, earnings multiples, margins and stock price changes;<br />
Sortable list of over 1,000 drugs by drug category, the company that makes the drug and annual sales amounts;<br />
Sortable list by medical condition; &nbsp;condition category, worldwide and U.S. prevalence and incidence rates</p>
',
                'image' => 'ipad-screen-twenty.png',
                'link' => '#',
                'icon' => 'list-alt',
                'parent' => '',
                'created_at' => NULL,
                'updated_at' => '2016-04-18 05:24:31',
            ),
        ));
        
        
    }
}
