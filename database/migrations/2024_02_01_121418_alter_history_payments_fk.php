<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AlterHistoryPaymentsFk extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('history_payments', function (Blueprint $table) {
            $table->dropForeign(['claim_id']);

            $table->foreign('claim_id')
                ->references('id')
                ->on('claims')
                ->onUpdate('cascade')
                ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('history_payments', function (Blueprint $table) {
            $table->dropForeign(['claim_id']);
            $table->foreign('claim_id')
                ->references('id')
                ->on('claims')
                ->onUpdate('cascade');
        });
    }
}
