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
		'name',
	  'email',
	  'from',
	  'to',
	  'cc',
	  'bcc',
	  'subject',
	  'body_message',
	  'message_type',
		'conversation_id',
		'body_height',
		'user_id',
		'class',
		'read',
		'sent_on',
		'recieved_on',
		'opened_on',
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
