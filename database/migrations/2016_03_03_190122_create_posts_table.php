<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePostsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('posts', function (Blueprint $table) {
            $table->increments('id');
            $table->string('type');
            $table->string('name');
            $table->string('email');
            $table->text('title', 50);
            $table->mediumText('body');
            $table->text('reply');
            $table->string('photo');
            $table->boolean('approval');
            $table->boolean('accepted_terms');
            $table->softDeletes();
            $table->timestamps();
        });
    

    Schema::create('post_user', function(Blueprint $table){
            $table->integer('post_id')->unsigned();
            $table->integer('user_id')->unsigned();

            $table->foreign('post_id')
                ->references('id')
                ->on('posts')
                ->onDelete('cascade');

            $table->foreign('user_id')
                ->references('id')
                ->on('users')
                ->onDelete('cascade');

            $table->primary(['post_id', 'user_id']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('post_user');
        Schema::drop('posts');
    }
}
