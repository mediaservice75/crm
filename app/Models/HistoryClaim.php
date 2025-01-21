<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;

class HistoryClaim extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'status_id',
        'comment' ,
        'claim_id',
        'created_at',
        'updated_at',
    ];

    public function claim()
    {
        return $this->belongsTo(Claim::class);
    }

    public function status()
    {
        return $this->belongsTo(StatusClaim::class);
    }

    public function user()
    {
        return $this->belongsTo(UserM::class, 'user_id');
    }

    public function getDate(): string {
        return Carbon::parse($this->created_at)->format('d.m.Y H:i:s');
    }
}
