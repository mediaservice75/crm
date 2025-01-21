<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AlterIsnullClients extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('clients', function (Blueprint $table) {
            $table->string('address', 100)->nullable()->change();
            $table->string('email', 50)->nullable()->change();
            $table->date('date_of_birth')->nullable()->change();
            $table->string('website', 100)->nullable()->change();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('clients', function (Blueprint $table) {
            $table->string('address', 100)->change();
            $table->string('email', 50)->change();
            $table->date('date_of_birth')->change();
            $table->string('website', 100)->change();
        });
    }
}
