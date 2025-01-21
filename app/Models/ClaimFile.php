<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ClaimFile extends Model
{
    use HasFactory;

    protected $fillable = [
        'claim_id',
        'file',
    ];

    public function claim()
    {
        return $this->belongsTo(Claim::class);
    }
}
