<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AlterDefUserId extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('claims', function (Blueprint $table) {
            $table->dropForeign(['user_id']);
            $table->dropForeign(['package_id']);
            $table->foreignId('user_id')->nullable()->change()->constrained('users')->cascadeOnUpdate();
            $table->foreignId('package_id')->nullable()->change()->constrained('packages')->cascadeOnUpdate();
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
            $table->dropForeign(['user_id']);
            $table->dropForeign(['package_id']);
            $table->foreignId('user_id')->change()->constrained('users')->cascadeOnUpdate();
            $table->foreignId('package_id')->nullable()->change()->constrained('packages')->cascadeOnUpdate();
        });
    }
}
