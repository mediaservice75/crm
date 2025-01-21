<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ClaimUsers extends Model
{
    use HasFactory;

    protected $fillable = [
        'claim_id',
        'user_id',
    ];

    public function claim()
    {
        return $this->belongsTo(Claim::class);
    }

    public function user()
    {
        return $this->belongsTo(UserM::class);
    }
}
