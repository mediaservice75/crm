<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRequisitesClientsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('requisites_clients', function (Blueprint $table) {
            $table->id();
            $table->string('fullName', 100);
            $table->string('legalForm', 100);
            $table->integer('INN');
            $table->integer('OGRN');
            $table->string('lawAddress', 150);
            $table->string('checkingAccount', 50);
            $table->string('correspondentAccount', 50);
            $table->integer('BIC');
            $table->string('nameBank', 100);
            $table->integer('KPP');
            $table->integer('KBK');
            $table->string('buhName',100);
            $table->string('phone', 20);
            $table->foreignId('client_id')->constrained('clients')->cascadeOnUpdate();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('requisites_clients');
    }
}
