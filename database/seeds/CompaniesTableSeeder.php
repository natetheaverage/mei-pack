<?php

use Illuminate\Database\Seeder;

class CompaniesTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        \DB::table('companies')->delete();
        
        \DB::table('companies')->insert(array (
            0 => 
            array (
                'id' => 1,
                'name' => '20-20 Investing',
                'type' => 'LLC',
                'theme' => 'twenty',
                'ein' => 00000000,
                'phone1' => 0000000000,
                'phone2' => 000000000,
                'fax' => 0000000000,
                'email1' => 'contactus@20-20investing.com',
                'email2' => 'dougmt_98@yahoo.com'
                'address_street' => '2759 Somewhere Grove Apt. 242',
                'address_city' => 'Metropolis',
                'address_state' => 'Co.',
                'address_zip' => 00000,
                'owner_id' => '2',
                'deleted_at' => NULL,
                'created_at' => '2016-04-19 08:09:36',
                'updated_at' => '2016-04-19 08:09:36',
            ),
            1 => 
            array (
                'id' => 2,
                'name' => 'MEi - NateTheAverage',
                'type' => 'Sole LLC',
                'theme' => 'nta',
                'ein' => 000000000,
                'phone1' => 7205606882,
                'phone2' => 000000000,
                'fax' => 0000000000,
                'email1' => 'nate@natetheaverage.com',
                'email2' => 'natetheaverage@gmail.com'
                'address_street' => '5324 Billings St.',
                'address_city' => 'Denver',
                'address_state' => 'Co.',
                'address_zip' => 80239,
                'owner_id' => '1',
                'deleted_at' => NULL,
                'created_at' => '2016-04-19 08:09:36',
                'updated_at' => '2016-04-19 08:09:36',
            ),
            2 => 
            array (
                'id' => 3,
                'name' => 'Strike 38 Industries',
                'type' => 'Sole LLC',
                'theme' => 'twenty',
                'ein' => 4200420,
                'phone1' => 2147483647,
                'phone2' => 000000000,
                'fax' => 2147483647,
                'email1' => 'this@that.com',
                'email2' => 'that@this.com'
                'address_street' => '68668 Ayana Shores',
                'address_city' => 'Metropolis',
                'address_state' => 'Co.',
                'address_zip' => 0,
                'owner_id' => '1',
                'deleted_at' => NULL,
                'created_at' => '2016-04-19 08:09:36',
                'updated_at' => '2016-04-19 08:09:36',
            ),
            3 => 
            array (
                'id' => 4,
                'name' => 'Strike 34 Industries',
                'type' => 'Sole LLC',
                'theme' => 'twenty',
                'ein' => 4200420,
                'phone1' => 2147483647,
                'phone2' => 000000000,
                'fax' => 2147483647,
                'email1' => 'this@that.com',
                'email2' => 'that@this.com'
                'address_street' => '934 Rudy Underpass',
                'address_city' => 'Metropolis',
                'address_state' => 'Co.',
                'address_zip' => 0,
                'owner_id' => '1',
                'deleted_at' => NULL,
                'created_at' => '2016-04-19 08:09:36',
                'updated_at' => '2016-04-19 08:09:36',
            ),
        ));
        
        
    }
}
