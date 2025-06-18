<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class AboutUs extends Model
{
    protected $table = 'about_us';
    protected $primaryKey = 'id_about';

    protected $fillable = [
        'description',
        'visi_misi',
        'section',
        'people',
        'contact',
        'admin_id'
    ];

    public function admin(): BelongsTo
    {
        return $this->belongsTo(Admin::class, 'admin_id', 'id_admin');
    }
}
