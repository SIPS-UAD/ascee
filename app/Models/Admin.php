<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Admin extends Model
{
    protected $primaryKey = 'id_admin';

    protected $fillable = [
        'email',
        'password',
        'username'
    ];

    protected $hidden = [
        'password'
    ];

    public function aboutUs(): HasMany
    {
        return $this->hasMany(AboutUs::class, 'admin_id', 'id_admin');
    }

    public function news(): HasMany
    {
        return $this->hasMany(News::class, 'admin_id', 'id_admin');
    }

    public function journal(): HasMany
    {
        return $this->hasMany(Journal::class, 'admin_id', 'id_admin');
    }

    public function events(): HasMany
    {
        return $this->hasMany(Events::class, 'admin_id', 'id_admin');
    }

    public function conferences(): HasMany
    {
        return $this->hasMany(Conferences::class, 'admin_id', 'id_admin');
    }

    public function educationAndCareers(): HasMany
    {
        return $this->hasMany(EducationAndCareers::class, 'admin_id', 'id_admin');
    }
}
