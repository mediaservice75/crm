<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Goal extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'text',
        'deadline',
        'exposed',
        'user_id',
        'client_id',
        'start_date',
        'color',
        'allDay',
        'rrule',
        'remind_at',
    ];

    public function exposed_user()
    {
        return $this->belongsTo(UserM::class, 'exposed');
    }

    public function user()
    {
        return $this->belongsTo(UserM::class);
    }

    public function client()
    {
        return $this->belongsTo(Client::class)->withTrashed();
    }

    public function files()
    {
        return $this->hasMany(GoalFile::class);
    }

    public function getDateCreate(): string {
        return Carbon::parse($this->created_at)->format('d.m.Y H:i:s');
    }

    public function getDeadline(): string {
        return Carbon::parse($this->deadline)->format('d.m.Y H:i:s');
    }

}
