<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCopyTextsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('copy_texts', function (Blueprint $table) {
            $table->increments('id');
            $table->mediumtext('copy');
            $table->integer('version');
            $table->text('versionList'); 
            $table->string('height');
            $table->string('parent_name');
            $table->integer('parent_id');
            $table->string('base_view');
            $table->integer('instance_number');
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
        Schema::drop('copy_texts');
    }
}
