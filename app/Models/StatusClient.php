<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class StatusClient extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'name',
        'color',
    ];

    public function histories()
    {
        return $this->hasMany(HistoryClient::class);
    }
}
