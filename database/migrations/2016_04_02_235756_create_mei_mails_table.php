<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMeiMailsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('mei_mails', function (Blueprint $table) {
            $table->increments('id');
            $table->string('recipient');          
            $table->string('sender');             
            $table->string('from');               
            $table->text('subject');            
            $table->longText('body-plain');         
            $table->longText('stripped-text');      
            $table->string('stripped-signature'); 
            $table->longText('body-html');          
            $table->longText('stripped-html');      
            $table->integer('attachment-count');       
            //$table->text('attachment-');       
            $table->integer('timestamp');          
            $table->string('token');              
            $table->text('signature');          
            $table->text('message-headers');    
            $table->text('content-id-map');     
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
        Schema::drop('mei_mails');
    }
}
