<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddAmountToInstallmentDatesTable extends Migration {
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up() {
        Schema::table('installment_dates', function (Blueprint $table) {
            $table->decimal('amount', 10, 2)->default(0)->after('installment_date');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down() {
        Schema::table('installment_dates', function (Blueprint $table) {
            $table->dropColumn('amount');
        });
    }
}
