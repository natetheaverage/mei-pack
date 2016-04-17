<?php

namespace App\Models\Details;

use Illuminate\Database\Eloquent\Model;
use Spatie\EloquentSortable\Sortable;
use Spatie\EloquentSortable\SortableTrait;

class Feature extends Model
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
    protected $table = 'features';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'order_column',
        'title',
        'content',
        'img',
        'link',
        'icon',
        'parent',
        'order_column', 
        'tag_line', 
    	];

    	public function events()
        {
            return $this->belongsToMany('App\Models\Event', 'events_features');
        }
}
