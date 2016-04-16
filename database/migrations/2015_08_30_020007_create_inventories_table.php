<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateInventoriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('inventories', function (Blueprint $table) {
            $table->increments('id');
			$table->string('name');
			$table->string('class');
			$table->string('rfid');
            $table->integer('unit_count');
			$table->string('unit_type');
			$table->integer('user_id');
			$table->integer('facility_id');
			$table->integer('conversation_id');
			$table->integer('project_id');
			$table->integer('history');
			$table->integer('deleted');
			$table->softDeletes();
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
        Schema::drop('inventories');
    }
}
