<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateInstallmentRemindersTable extends Migration {
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up() {
        Schema::create('installment_reminders', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('users')->cascadeOnDelete();
            $table->foreignId('claim_id')->constrained()->cascadeOnDelete();
            $table->date('installment_date');
            $table->decimal('amount', 10, 2);
            $table->boolean('is_read')->default(false);
            $table->timestamps();

            $table->unique(['claim_id', 'installment_date', 'user_id'], 'installment_reminders_unique');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down() {
        Schema::dropIfExists('installment_reminders');
    }
}
