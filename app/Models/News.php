<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Casts\Attribute;

class News extends Model
{
    protected $primaryKey = 'id_news';

    protected $fillable = [
        'title',
        'date',
        'publisher',
        'description',
        'image',
        'admin_id'
    ];

    protected $casts = [
        'date' => 'datetime'
    ];
    
    /**
     * Format date attribute to DD-MM-YYYY
     */
    protected function formattedDate(): Attribute
    {
        return Attribute::make(
            get: function () {
                return $this->date->format('d-m-Y');
            }
        );
    }

    public function admin(): BelongsTo
    {
        return $this->belongsTo(Admin::class, 'admin_id', 'id_admin');
    }
}
