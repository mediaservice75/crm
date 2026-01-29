<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SpecialEvent extends Model
{
    use HasFactory;

    protected $table = 'special_events';

    protected $fillable = [
        'title',
        'radio',
        'campaign_start_date',
        'campaign_end_date',
        'is_archived',
    ];

    public function sessions()
    {
        return $this->hasMany(EventSession::class, 'event_id');
    }

    public function sponsors()
    {
        return $this->hasMany(EventSponsor::class, 'event_id');
    }

    public function responsibles()
    {
        return $this->hasMany(EventResponsibleEmployee::class, 'event_id');
    }
}
