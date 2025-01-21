<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Str;

class SalesPlan extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'user_id',
        'plan',
        'month',
    ];

    public function user()
    {
        return $this->belongsTo(UserM::class);
    }

    public function getDate() {
        return Str::title(Carbon::parse($this->month)->translatedFormat('F')) . " " . Carbon::parse($this->month)->format('Y');
    }
}
