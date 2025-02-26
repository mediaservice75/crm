<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EventSponsor extends Model
{
    protected $table = 'event_sponsors';

    protected $fillable = [
        'name',
        'is_general',
        'has_logo',
        'has_leaflet',
        'has_feedback',
        'event_id',
        'gratitude_to',
        'responsible_manager',
    ];

    use HasFactory;

    public function event()
    {
        return $this->belongsTo(SpecialEvent::class, 'event_id');
    }

    public function manager()
    {
        return $this->belongsTo(User::class, 'responsible_manager_id');
    }
}
