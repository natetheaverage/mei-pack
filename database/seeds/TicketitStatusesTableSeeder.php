<?php

use Illuminate\Database\Seeder;

class TicketitStatusesTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('ticketit_statuses')->delete();
        
        
        
    }
}
