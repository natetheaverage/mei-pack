<?php 

namespace App\Models\Projects;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Project extends Model
{

	use SoftDeletes;

	/**
	 * The database table used by the model.
	 *
	 * @var string
	 */
	protected $table = 'projects';

	/**
	 * The attributes that are mass assignable.
	 *
	 * @var array
	 */
	protected $fillable = [
		'id',
		'title',
		'description',
		'description_height',
		'class',
		'due_date',
		'due_time',
		'owner_id',
		'facility_id',
		'task_id',
		'delegated_id',
		'conversation_id',
		'creator_id',
	];

	/**
	 * The attributes that should be mutated to dates.
	 *
	 * @var array
	 */
	protected $dates = ['deleted_at'];


	public function task()
	{
		return $this->hasMany('App\Models\Projects\Task');
	}

	public function user()
	{
		return $this->hasMany('App\Models\Users\User');
	}

	public function facility()
	{
		return $this->hasOne('App\Models\Facilities\Facility');
	}

	public function conversation()
	{
		return $this->hasMany('App\Models\Conversations\Conversation', 'owner_id');
	}
}
