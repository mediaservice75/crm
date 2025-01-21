<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AlterColumnsRequisites extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('requisites_clients', function (Blueprint $table) {
            $table->string('fullName', 100)->nullable()->change();
            $table->string('legalForm', 100)->nullable()->change();
            $table->string('INN', 50)->change();
            $table->string('OGRN', 50)->nullable()->change();
            $table->string('lawAddress', 150)->nullable()->change();
            $table->string('checkingAccount', 50)->nullable()->change();
            $table->string('correspondentAccount', 50)->nullable()->change();
            $table->string('BIC', 50)->nullable()->change();
            $table->string('nameBank', 100)->nullable()->change();
            $table->string('KPP', 50)->nullable()->change();
            $table->string('KBK', 50)->nullable()->change();
            $table->string('buhName',100)->nullable()->change();
            $table->string('phone', 20)->nullable()->change();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('requisites_clients', function (Blueprint $table) {
            $table->string('fullName', 100)->change();
            $table->string('legalForm', 100)->change();
            $table->integer('OGRN')->change();
            $table->string('lawAddress', 150)->change();
            $table->string('checkingAccount', 50)->change();
            $table->string('correspondentAccount', 50)->change();
            $table->integer('BIC')->change();
            $table->string('nameBank', 100)->change();
            $table->integer('KPP')->change();
            $table->integer('KBK')->change();
            $table->string('buhName',100)->change();
            $table->string('phone', 20)->change();
        });
    }
}
