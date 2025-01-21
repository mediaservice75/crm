<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AlterTableDynamicTableAddColumnUser extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('dynamic_table', function (Blueprint $table) {
            $table->text('column_name')->nullable()->change();
            $table->integer('user_id')->nullable();
//            $table->foreignId('user_id')->constrained('users')->cascadeOnUpdate()->cascadeOnDelete();
//            $table->
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('dynamic_table', function (Blueprint $table) {
            $table->dropForeign(['user_id']);
            $table->varchar('column_name')->change();
        });
    }
}
