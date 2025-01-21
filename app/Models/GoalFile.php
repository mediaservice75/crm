<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GoalFile extends Model
{
    use HasFactory;

    protected $fillable = [
        'goal_id',
        'file',
    ];

    public function goal()
    {
        return $this->belongsTo(Goal::class);
    }
}
