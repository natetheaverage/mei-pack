<?php 

namespace App\Models\Events;

use App\Models\Events\Event;
use Illuminate\Queue\SerializesModels;

class UserWasRegistered extends Event {

	use SerializesModels;

	/**
	 * Create a new event instance.
	 *
	 * @return void
	 */
	public function __construct()
	{
		//
	}

}
