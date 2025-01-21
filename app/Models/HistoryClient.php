<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class HistoryClient extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'client_id',
        'user_id',
        'status_id',
        'comment',
    ];


    public function client()
    {
        return $this->belongsTo(Client::class)->withTrashed();
    }


    public function user()
    {
        return $this->belongsTo(UserM::class);
    }

    public function status()
    {
        return $this->belongsTo(StatusClient::class);
    }


    public function getDate(): string {
        return Carbon::parse($this->created_at)->format('d.m.Y H:i:s');
    }

    public function getTime(): string {
        return Carbon::parse($this->created_at)->format('H:i:s');
    }
}
