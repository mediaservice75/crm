<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AlterSalesPlanType extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('sales_plan_months', function (Blueprint $table) {
            $table->text('count_days')->change();
            $table->renameColumn('count_days', 'selected_days');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('sales_plan_months', function (Blueprint $table) {
            $table->json('count_days')->change();
            $table->renameColumn('selected_days', 'count_days');
        });
    }
}
