<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class StatusPayment extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'name',
        'color',
        'isVisible'
    ];

    public function historiesPayment()
    {
        return $this->hasMany(HistoryPayment::class)->orderBy('id', 'desc');
    }
}
