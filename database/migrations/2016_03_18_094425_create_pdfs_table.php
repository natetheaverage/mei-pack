<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePdfsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pdfs', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->string('company_name');
            $table->string('company_phone');
            $table->string('company_cell');
            $table->string('company_fax');
            $table->string('company_address');
            $table->string('company_email');
            $table->string('document_title');
            $table->text('title_note');
            $table->string('contact_header');
            $table->string('details_header');
            $table->string('booth_header');
            $table->string('payment_header');
            $table->mediumText('payment_terms');
            $table->string('billing_text_one');
            $table->string('billing_text_two');
            $table->string('signing_auth_one');
            $table->string('signing_auth_two');
            $table->mediumText('mailto_header');
            $table->mediumText('signing_terms');
            $table->string('rules_header');
            $table->string('rules_sub_header');
            $table->mediumText('rules');
            $table->string('event_id');
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
        Schema::drop('pdfs');
    }
}
