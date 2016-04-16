<?php 

namespace App\Models\Conversations;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Conversation extends Model
{
	use SoftDeletes;
	/**
	 * The database table used by the model.
	 *
	 * @var string
	 */
	protected $table = 'conversations';

	/**
	 * The attributes that are mass assignable.
	 *
	 * @var array
	 */
	protected $fillable = [
		'title',
		'description',
		'description_height',
		'class',
		'owner_id',
		'owner_type',
		'facility_id',
		'tagged_id',
		'user_id',
	];

	/**
	 * The attributes that should be mutated to dates.
	 *
	 * @var array
	 */
	protected $dates = ['deleted_at'];


	public function message()
	{
		return $this->hasMany('App\Models\Conversations\Message');
	}

	public function user()
	{
		return $this->hasMany('App\Models\Users\User');
	}

	public function project()
	{
		return $this->belongsTo('App\Models\Projects\Project');
	}
}
