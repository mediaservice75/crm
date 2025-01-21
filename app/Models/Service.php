<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Service extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'name',
        'category_id',
        'group_id',
        'isRequiredMaterial',
        'isPackage',
        'isPeriod',
        'isBrif',
        'isOutput',
        'user_id',
    ];

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function group()
    {
        return $this->belongsTo(Group::class);
    }

    public function user()
    {
        return $this->belongsTo(UserM::class);
    }

    public function packages()
    {
        return $this->hasMany(Package::class);
    }

    public function claims()
    {
        return $this->hasMany(Claim::class, 'service_id');
    }
}
