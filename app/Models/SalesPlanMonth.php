<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SalesPlanMonth extends Model
{
    use HasFactory;

    protected $fillable = [
      'month',
      'selected_days',
    ];
}
