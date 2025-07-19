<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Partner extends Model
{
  protected $primaryKey = 'id_partner';

  protected $fillable = [
    'name',
    'logo',
    'website',
    'admin_id',
  ];

  public function admin()
  {
    return $this->belongsTo(Admin::class, 'admin_id', 'id_admin');
  }
}
