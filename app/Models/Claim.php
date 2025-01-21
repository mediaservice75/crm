<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Str;

class Claim extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'service_id',
        'user_id',
        'client_id',
        'amount',
        'deadline',
        'isInvoice',
        'invoice',
        'period',
        'brif',
        'output',
        'package_id',
        'creator',
        'comment',
        'notInclude',
        'number_invoice',
        'created_at',
        'close_user_id'
    ];

    public function getDate() {
        return Str::title(Carbon::parse($this->created_at)->translatedFormat('F')) . " " . Carbon::parse($this->created_at)->format('Y');
    }

    public function getCreateDate() {
        return Carbon::parse($this->created_at)->format('d.m.Y г.');
    }

    public function service()
    {
        return $this->belongsTo(Service::class);
    }

    public function client()
    {
        return $this->belongsTo(Client::class);
    }

    public function creatorUser()
    {
        return $this->belongsTo(UserM::class, 'creator');
    }

    public function user()
    {
        return $this->belongsTo(UserM::class, 'user_id');
    }

    public function histories()
    {
        return $this->hasMany(HistoryClaim::class)->orderBy('id', 'desc');
    }

    public function historiesPayment()
    {
        return $this->hasMany(HistoryPayment::class)->orderBy('id', 'desc');
    }

    public function files()
    {
        return $this->hasMany(ClaimFile::class);
    }

    public function claimUsers()
    {
        return $this->hasMany(ClaimUsers::class);
    }

    public function package()
    {
        return $this->belongsTo(Package::class)->withTrashed();
    }

    public function activeAd() {
        return $this->hasMany(ActiveAd::class)->orderBy('end_date', 'desc');
    }

    public function getDeadline(): string {
        return Carbon::parse($this->deadline)->format('d.m.Y г.');
    }

    public function pusherNotofications()
    {
        return $this->hasMany(PusherNotification::class);
    }

}
