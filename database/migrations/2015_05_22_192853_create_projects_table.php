<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProjectsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
		Schema::create('projects', function(Blueprint $table)
		{
			$table->increments('id');
			$table->string('title');
			$table->string('description');
			$table->integer('description_height');
			$table->string('class');
			$table->string('due_time');
			$table->date('due_date');
			$table->integer('conversation_id');
			$table->integer('task_id');
			$table->integer('delegated_id');
			$table->integer('facility_id');
			$table->integer('owner_id');
			$table->integer('creator_id');
			$table->boolean('deleted');
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
		Schema::drop('projects');
    }
}
