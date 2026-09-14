<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddLegalFormToClaimsTable extends Migration {
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up() {
        Schema::table('claims', function (Blueprint $table) {
            $table->string('legal_form', 10)->nullable()->after('isInvoice');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down() {
        Schema::table('claims', function (Blueprint $table) {
            $table->dropColumn('legal_form');
        });
    }
}
