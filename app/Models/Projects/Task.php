<?php 

namespace App\Models\Projects;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Task extends Model
{
	use SoftDeletes;
	/**
	 * The database table used by the model.
	 *
	 * @var string
	 */
	protected $table = 'tasks';

	/**
	 * The attributes that are mass assignable.
	 *
	 * @var array
	 */
	protected $fillable = [
		'title',
		'description',
		'class',
		'due_date',
		'due_time',
		'owner_id',
		'facility_id',
		'project_id',
		'conversation_id',
		'creator_id',
	];

	/**
	 * The attributes that should be mutated to dates.
	 *
	 * @var array
	 */
	protected $dates = ['deleted_at'];

	public function project()
	{
		return $this->hasOne('App\Models\Projects\Project');
	}

	public function user()
	{
		return $this->hasOne('App\Models\Users\User');
	}

	public function facility()
	{
		return $this->hasOne('App\Models\Facilities\Facility');
	}

	public function conversation()
	{
		return $this->hasOne('App\Models\Conversations\Conversation');
	}


}
