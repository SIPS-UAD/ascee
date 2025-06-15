<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class EducationAndCareers extends Model
{
    protected $primaryKey = 'id_education';

    protected $fillable = [
        'title',
        'date',
        'publisher',
        'description',
        'image',
        'admin_id'
    ];

    protected $casts = [
        'date' => 'date'
    ];

    public function admin(): BelongsTo
    {
        return $this->belongsTo(Admin::class, 'admin_id', 'id_admin');
    }
}
