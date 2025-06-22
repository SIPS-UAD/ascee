<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;

class JenisMitra extends Model
{
    protected $primaryKey = 'id_mitra';

    protected $fillable = [
        'id_address',
        'name',
        'email_address',
        'business_type',
        'email_corporate',
        'user_id'
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id', 'id_user');
    }

    public function contact(): HasOne
    {
        return $this->hasOne(Contact::class, 'jenis_mitra_id', 'id_mitra');
    }
}
