<?php

namespace App\Models\InterfaceObjects;

use Illuminate\Database\Eloquent\Model;

class CopyText extends Model
{
  	 /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'copy_texts';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'copy', 
        'version', 
        'versionList', 
        'height',
        'parent_name',
        'parent_id',
        'base_view',
        'instance_number',
    ];
}
