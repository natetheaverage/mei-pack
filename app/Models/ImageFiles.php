<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Spatie\EloquentSortable\Sortable;
use Spatie\EloquentSortable\SortableTrait;

class ImageFiles extends Model
{
    use SortableTrait;

    public $sortable = [
        'order_column_name' => 'order_column',
        'sort_when_creating' => true,
    ];
    
    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'floorplans';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['order_column', 'tag_line', 'label', 'thumb', 'link', 'active'];

    
}
