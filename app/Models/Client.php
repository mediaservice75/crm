<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


class Client extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $fillable = [
        'name',
        'phone',
        'address',
        'email',
        'date_of_birth',
        'website',
        'user_id',
        'isAllow',
        'comment'
    ];

    protected $dates = ['deleted_at'];

    public function lprs()
    {
        return $this->hasMany(LprClient::class);
    }

    public function requisite()
    {
        return $this->hasOne(RequisiteClient::class, 'client_id');
    }

    public function histories()
    {
        return $this->hasMany(HistoryClient::class)->orderBy('id', 'desc');
    }

    public function goals()
    {
        return $this->hasMany(Goal::class);
    }

    public function claims()
    {
        return $this->hasMany(Claim::class);
    }

    public function user()
    {
        return $this->belongsTo(UserM::class);
    }

    // Carbon

    public function getDateBirth($date): string {
        return Carbon::parse($date)->format('d.m.Y');
    }

    public function getFullName() {
        return $this->surname . " " . $this->name . " " . $this->patron;
    }

    public function getUntilBirthday()
    {
        $date = Carbon::make($this->date_of_birth);

        $date->setYear(now()->year);

        if ($date->isPast()) {
            $date->addYear();
        }

        if (($date->day == now()->day) && ($date->month == now()->month)){
            return 'Сегодня 🥳';
        }

        return $date->diffForHumans();
    }

}
