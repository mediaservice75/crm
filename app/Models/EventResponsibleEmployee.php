<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EventResponsibleEmployee extends Model
{
    use HasFactory;

    protected $table = 'event_responsible_employees';

    protected $fillable = ['event_id', 'group_id', 'user_id'];

    public function event()
    {
        return $this->belongsTo(SpecialEvent::class, 'event_id');
    }
}
