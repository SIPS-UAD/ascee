<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;

class PencarianMember extends Model
{
    protected $primaryKey = 'id_member';

    protected $fillable = [
        'id_address',
        'name',
        'date_join',
        'membership_type',
        'full_name',
        'gender',
        'phone',
        'birth_date',
        'user_id'
    ];

    protected $casts = [
        'date_join' => 'date',
        'birth_date' => 'date'
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id', 'id_user');
    }

    public function contact(): HasOne
    {
        return $this->hasOne(Contact::class, 'pencarian_member_id', 'id_member');
    }
}
