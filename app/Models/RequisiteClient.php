<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RequisiteClient extends Model
{
    use HasFactory;
    protected $table = 'requisites_clients';

    protected $fillable = [
        'fullName',
        'legalForm',
        'INN',
        'OGRN',
        'lawAddress',
        'checkingAccount',
        'correspondentAccount',
        'BIC',
        'nameBank',
        'KPP',
        'KPP_C',
        'KBK',
        'buhName',
        'phone',
        'client_id',
        'comment'
    ];

    public function client()
    {
        return $this->belongsTo(Client::class);
    }

}
