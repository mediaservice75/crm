<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEventSponsorsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('event_sponsors', function (Blueprint $table) {
            $table->id();
            $table->string('name')->nullable();
            $table->boolean('is_general');
            $table->string('responsible_manager');
            $table->boolean('has_logo');
            $table->boolean('has_leaflet');
            $table->string('gratitude_to')->nullable();
            $table->boolean('has_feedback');

            $table->foreignId('event_id')->constrained('special_events')->onDelete('cascade');

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
        Schema::dropIfExists('event_sponsors');
    }
}
