<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AlterLprNull extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('lpr_clients', function (Blueprint $table) {
            $table->string('patron', 80)->nullable()->change();
            $table->string('phone', 20)->nullable()->change();
            $table->date('date_of_birth')->nullable()->change();
            $table->text('comment')->nullable()->change();
            $table->string('post', 80)->nullable()->change();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('lpr_clients', function (Blueprint $table) {
            $table->string('patron', 80)->change();
            $table->string('phone', 20)->change();
            $table->date('date_of_birth')->change();
            $table->text('comment')->change();
            $table->string('post', 80)->change();
        });
    }
}
