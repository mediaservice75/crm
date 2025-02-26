<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EventSession extends Model
{
    use HasFactory;

    protected $table = 'event_sessions';

    protected $fillable = [
        'event_id',
        'event_date',
        'event_time',
        'location',
    ];

    public function event()
    {
        return $this->belongsTo(SpecialEvent::class, 'event_id');
    }
}
