<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EventsSetting extends Model
{
    use HasFactory;

    protected $fillable = [
        'count_rows',
        'count_columns',
    ];
}
