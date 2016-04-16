<?php 

namespace App\Models\Conversations;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Message extends Model {
	use SoftDeletes;

	/**
	 * The attributes that are mass assignable.
	 *
	 * @var array
	 */
	protected $fillable = [
		'subject',
		'body',
		'body_height',
		'class',
		'conversation_id',
		'user_id'
	];

	/**
	 * The attributes that should be mutated to dates.
	 *
	 * @var array
	 */
	protected $dates = ['deleted_at'];

	public function user()
	{
		$this->belongsTo('App\Models\Conversations\Conversation');
	}



}
