<?php

namespace App\Models\Facilities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Product extends Model
{
    use SoftDeletes;
    protected $fillable = [
        'inventory_id',
        'product_id',
        'unit_price',
    ];

    /*
     * The attributes that should be mutated to dates.
     *
     * @var array
     */
    protected $dates = ['deleted_at'];

    public function inventory()
    {
        return $this->belongsTo('App\Models\Facilities\Inventory');
    }

}
