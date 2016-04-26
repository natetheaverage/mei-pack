<?php

use Illuminate\Database\Seeder;

class UserActivitiesTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('user_activities')->delete();
        
        
        
    }
}
