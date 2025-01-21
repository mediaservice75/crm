<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DynamicTable extends Model
{
    use HasFactory;

    protected $table = 'dynamic_table';

    protected $fillable = ['row_id', 'column_name', 'value', 'user_id'];

    public function user() {
        return $this->belongsTo(UserM::class);
    }
}
