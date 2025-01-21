<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AlterAddColumns extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('claims', function (Blueprint $table) {
            $table->boolean('isInvoice')->default(0);
            $table->string('invoice', 150)->nullable();
            $table->text('materials')->nullable();
            $table->string('period',200)->nullable();
            $table->string('brif',200)->nullable();
            $table->string('output',200)->nullable();
            $table->foreignId('package_id')->nullable()->constrained('packages')->cascadeOnUpdate();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('claims', function (Blueprint $table) {
            $table->dropColumn('isInvoice', 'invoice', 'materials', 'period', 'brif', 'output');
            $table->dropForeign('package_id');
        });
    }
}
