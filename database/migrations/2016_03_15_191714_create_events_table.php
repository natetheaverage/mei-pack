<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateEventsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('events', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('order_column');
            $table->string('name');
            $table->string('city');
            $table->string('state');
            $table->mediumText('details');
            $table->string('season');
            $table->date('date');
            $table->string('venue');
            $table->string('street');
            $table->string('zip');
            $table->string('features');
            $table->string('selected');
            $table->string('event_bright');
            $table->string('application_id');
            $table->string('pdf_id');
            $table->string('parking');
            $table->timestamps();
        });

        
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('events');
    }
}
