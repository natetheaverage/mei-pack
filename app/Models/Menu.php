<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\EloquentSortable\Sortable;
use Spatie\EloquentSortable\SortableTrait;

class Menu extends Model
{
  
  use SoftDeletes;
  use SortableTrait;

  /**
   * The attributes that are for sorting .
   *
   * @var array
   */
  public $sortable = [
      'order_column_name' => 'order_column',
      'sort_when_creating' => true,
  ];


  /**
   * The attributes that are mass assignable.
   *
   * @var array
   */
  protected $fillable = [
    'label', 
    'url', 
    'icon',  
    'owner',
  ];

}
