<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateTicketitTables extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ticketit_statuses', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->string('color');
        });

        Schema::create('ticketit_priorities', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->string('color');
        });

        Schema::create('ticketit_categories', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->string('color');
        });

        Schema::create('ticketit_categories_users', function (Blueprint $table) {
            $table->integer('category_id')->unsigned();
            $table->integer('user_id')->unsigned();
        });

        Schema::create('ticketit', function (Blueprint $table) {
            $table->increments('id');
            $table->string('subject');
            $table->longText('content');
            $table->integer('status_id')->unsigned();
            $table->integer('priority_id')->unsigned();
            $table->integer('user_id')->unsigned();
            $table->integer('agent_id')->unsigned();
            $table->integer('category_id')->unsigned();
            $table->timestamps();
            $table->timestamp('completed_at')->nullable();
            $table->longText('html')->nullable();

            $table->index('subject');
            $table->index('status_id');
            $table->index('priority_id');
            $table->index('user_id');
            $table->index('agent_id');
            $table->index('category_id');
            $table->index('completed_at');
        });

        Schema::create('ticketit_comments', function (Blueprint $table) {
            $table->increments('id');
            $table->longText('content');
            $table->integer('user_id')->unsigned();
            $table->integer('ticket_id')->unsigned();
            $table->longText('html')->nullable();
            $table->timestamps();
        });

        Schema::create('ticketit_audits', function (Blueprint $table) {
            $table->increments('id');
            $table->text('operation');
            $table->integer('user_id')->unsigned();
            $table->integer('ticket_id')->unsigned();
            $table->timestamps();
        });

        Schema::create('ticketit_settings', function (Blueprint $table) {
            $table->increments('id');
            $table->string('lang')->unique()->nullable();
            $table->string('slug')->unique()->index();
            $table->mediumText('value');
            $table->mediumText('default');
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
        Schema::drop('ticketit_settings');
        Schema::drop('ticketit_audits');
        Schema::drop('ticketit_comments');
        Schema::drop('ticketit');
        Schema::drop('ticketit_categories_users');
        Schema::drop('ticketit_categories');
        Schema::drop('ticketit_priorities');
        Schema::drop('ticketit_statuses');

    }
}
