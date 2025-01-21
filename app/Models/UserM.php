<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class UserM extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;
    use SoftDeletes;

    protected $table = 'users';

    protected $fillable = [
        'name',
        'email',
        'password',
        'surname',
        'patron',
        'phone',
        'photo',
        'role_id',
        'userInvoice',
        'userLeader',
    ];

    public function role()
    {
        return $this->belongsTo(Role::class);
    }

    public function services()
    {
        return $this->hasMany(Service::class);
    }

    public function histories()
    {
        return $this->hasMany(HistoryClient::class);
    }

    public function historiesClaims()
    {
        return $this->hasMany(HistoryClaim::class);
    }

    public function historiesPayment()
    {
        return $this->hasMany(HistoryPayment::class)->orderBy('id', 'desc');
    }

    public function goals()
    {
        return $this->hasMany(Goal::class);
    }

    public function plans()
    {
        return $this->hasMany(SalesPlan::class);
    }

    public function workClaim()
    {
        return $this->hasMany(Claim::class, 'user_id');
    }

    public function myClaims()
    {
        return $this->hasMany(Claim::class, 'creator');
    }

    public function clients()
    {
        return $this->hasMany(Client::class);
    }

    public function activeAds()
    {
        return $this->hasMany(ActiveAd::class);
    }

    public function claimUsers()
    {
        return $this->hasMany(ClaimUsers::class);
    }

    public function pusherNotofications()
    {
        return $this->hasMany(PusherNotification::class);
    }

    public function dynamicsTable()
    {
        return $this->hasMany(DynamicTable::class);
    }

    public function getFullName() {
        return $this->surname . " " . $this->name . " " . $this->patron;
    }
}
