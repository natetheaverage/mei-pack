<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Spatie\EloquentSortable\Sortable;
use Spatie\EloquentSortable\SortableTrait;

class Discount extends Model
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
    protected $table = 'discounts';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['order_column', 'tag_line', 'name', 'type', 'amount', 'description'];

    public function events()
    {
        return $this->belongsToMany('App\Models\Event', 'events_discounts');
    }
}
