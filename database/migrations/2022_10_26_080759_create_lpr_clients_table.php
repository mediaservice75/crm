<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLprClientsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('lpr_clients', function (Blueprint $table) {
            $table->id();
            $table->string('surname', 80);
            $table->string('name', 80);
            $table->string('patron', 80);
            $table->string('phone', 20);
            $table->date('date_of_birth');
            $table->text('comment');
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
        Schema::dropIfExists('lpr_clients');
    }
}
