<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class InstallmentReminder extends Model {
    use HasFactory;

    protected $fillable = [
        'user_id',
        'claim_id',
        'installment_date',
        'amount',
        'is_read',
    ];

    protected $casts = [
        'installment_date' => 'date',
        'amount' => 'decimal:2',
        'is_read' => 'boolean',
    ];

    public function user() {
        return $this->belongsTo(UserM::class, 'user_id');
    }

    public function claim() {
        return $this->belongsTo(Claim::class);
    }
}
