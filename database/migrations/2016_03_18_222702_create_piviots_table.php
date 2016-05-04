<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePiviotsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('events_dates', function(Blueprint $table){
            $table->integer('event_id')->unsigned();
            $table->integer('date_id')->unsigned();
            $table->integer('order_column');
            $table->foreign('event_id')
                ->references('id')
                ->on('events')
                ->onDelete('cascade');

            $table->foreign('date_id')
                ->references('id')
                ->on('dates')
                ->onDelete('cascade');

            $table->primary(['event_id', 'date_id']);
        });

        Schema::create('events_features', function(Blueprint $table){
            $table->integer('event_id')->unsigned();
            $table->integer('feature_id')->unsigned();
            $table->integer('order_column');

            $table->foreign('event_id')
                ->references('id')
                ->on('events')
                ->onDelete('cascade');

            $table->foreign('feature_id')
                ->references('id')
                ->on('features')
                ->onDelete('cascade');

            $table->primary(['event_id', 'feature_id']);
        });

        Schema::create('events_prices', function(Blueprint $table){
            $table->integer('event_id')->unsigned();
            $table->integer('price_id')->unsigned();
            $table->integer('order_column');

            $table->foreign('event_id')
                ->references('id')
                ->on('events')
                ->onDelete('cascade');

            $table->foreign('price_id')
                ->references('id')
                ->on('prices')
                ->onDelete('cascade');

            $table->primary(['event_id', 'price_id']);
        });

        Schema::create('events_discounts', function(Blueprint $table){
            $table->integer('event_id')->unsigned();
            $table->integer('discount_id')->unsigned();
            $table->integer('order_column');

            $table->foreign('event_id')
                ->references('id')
                ->on('events')
                ->onDelete('cascade');

            $table->foreign('discount_id')
                ->references('id')
                ->on('discounts')
                ->onDelete('cascade');

            $table->primary(['event_id', 'discount_id']);
        });

        Schema::create('events_tickets', function(Blueprint $table){
            $table->integer('event_id')->unsigned();
            $table->integer('ticket_id')->unsigned();
            $table->integer('order_column');

            $table->foreign('event_id')
                ->references('id')
                ->on('events')
                ->onDelete('cascade');

            $table->foreign('ticket_id')
                ->references('id')
                ->on('tickets')
                ->onDelete('cascade');

            $table->primary(['event_id', 'ticket_id']);
        });

        Schema::create('events_pdfs', function(Blueprint $table){
            $table->integer('event_id')->unsigned();
            $table->integer('pdf_id')->unsigned();
            $table->integer('order_column');

            $table->foreign('event_id')
                ->references('id')
                ->on('events')
                ->onDelete('cascade');

            $table->foreign('pdf_id')
                ->references('id')
                ->on('pdfs')
                ->onDelete('cascade');

            $table->primary(['event_id', 'pdf_id']);
        });

        

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('events_dates');
        Schema::drop('events_features');
        Schema::drop('events_prices');
        Schema::drop('events_discounts');
        Schema::drop('events_tickets');
        Schema::drop('events_pdfs');
    }
}
