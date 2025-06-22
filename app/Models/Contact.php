<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Contact extends Model
{
    protected $primaryKey = 'id_contact';

    protected $fillable = [
        'address_line',
        'website_url',
        'zip',
        'province',
        'country',
        'pencarian_member_id',
        'jenis_mitra_id'
    ];

    public function pencarianMember(): BelongsTo
    {
        return $this->belongsTo(PencarianMember::class, 'pencarian_member_id', 'id_member');
    }

    public function jenisMitra(): BelongsTo
    {
        return $this->belongsTo(JenisMitra::class, 'jenis_mitra_id', 'id_mitra');
    }
}
