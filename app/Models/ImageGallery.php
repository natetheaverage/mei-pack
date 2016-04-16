<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ImageGallery extends Model
{
    
    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'image_gallery';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['title', 'img', 'description', 'tags'];

}
