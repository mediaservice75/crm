<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AlterServicesAddColumns extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('services', function (Blueprint $table) {
            $table->boolean('isRequiredMaterial')->nullable()->default(false);
            $table->boolean('isPackage')->nullable()->default(false);
            $table->boolean('isPeriod')->nullable()->default(false);
            $table->boolean('isBrif')->nullable()->default(false);
            $table->boolean('isOutput')->nullable()->default(false);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('services', function (Blueprint $table) {
            $table->dropColumn('isRequiredMaterial', 'isPackage', 'isPeriod', 'isBrif', 'isOutput');
        });
    }
}
