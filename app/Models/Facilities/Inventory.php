<?php

namespace App\Models\Facilities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Inventory extends Model
{
	use SoftDeletes;
	protected $fillable = [
		'name',
		'rfid',
		'class',
		'unit_count',
		'unit_type',
		'user_id',
		'facility_id',
		'conversation_id',
		'project_id',
		'history',
	];
	/**
	 * The attributes that should be mutated to dates.
	 *
	 * @var array
	 */
	protected $dates = ['deleted_at'];

	public function products()
	{
		return $this->hasMany('App\Models\Facilities\Product');
	}
}
