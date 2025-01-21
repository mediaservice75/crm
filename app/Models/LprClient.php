<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LprClient extends Model
{
    use HasFactory;
    protected $table = 'lpr_clients';

    protected $fillable = [
        'surname',
        'name',
        'patron',
        'phone',
        'date_of_birth',
        'post',
        'comment',
        'client_id'
    ];

    public function getDateBirth($date): string {
        if ($date == null) return '';
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

    public function getComment($comment): string
    {
        if (empty($comment)) return '-';
        else return $comment;
    }

    public function client()
    {
        return $this->belongsTo(Client::class);
    }
}
