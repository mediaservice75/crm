<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class HistoryPayment extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'claim_id',
        'user_id',
        'status_id',
        'comment',
        'amount',
        'created_at',
    ];

    public function claim()
    {
        return $this->belongsTo(Claim::class);
    }

    public function user()
    {
        return $this->belongsTo(UserM::class);
    }

    public function status()
    {
        return $this->belongsTo(StatusPayment::class);
    }

    public function getDate(): string {
        return Carbon::parse($this->created_at)->format('d.m.Y H:i:s');
    }
}
