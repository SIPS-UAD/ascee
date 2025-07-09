<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class AboutUs extends Model
{
    protected $table = 'about_us';
    protected $primaryKey = 'id_about';

    protected $fillable = [
        'overview',
        'vision',
        'mission',
        'corporate_offices',
        'section',
        'admin_id'
    ];

    public function admin(): BelongsTo
    {
        return $this->belongsTo(Admin::class, 'admin_id', 'id_admin');
    }
}
