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
      $table->string('name')->index();
      $table->string('subject')->index();
      $table->string('email')->index();
      $table->string('from')->index();
      $table->string('to')->index();
      $table->string('cc')->index();
      $table->string('bcc')->index();
      $table->string('message_type');
      $table->string('body_message');
      $table->string('read');
			$table->string('sent_on');
			$table->string('recieved_on');
			$table->string('opened_on');
			$table->integer('body_height');
      $table->string('class');
			$table->integer('conversation_id')->index();
			$table->integer('user_id')->index();
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
