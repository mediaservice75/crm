<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class InstallmentDate extends Model {
    use HasFactory;

    protected $fillable = [
        'claim_id',
        'installment_date',
    ];

    public function claim() {
        return $this->belongsTo(Claim::class);
    }
}
