<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMessagesTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('messages', function(Blueprint $table)
		{
			$table->increments('id');
            $table->string('subject')->index();
            $table->string('body');
			$table->integer('body_height');
            $table->string('class');
			$table->integer('user_id')->index();
			$table->integer('conversation_id')->index();
			$table->integer('tagged_id');
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
		Schema::drop('messages');
	}

}
