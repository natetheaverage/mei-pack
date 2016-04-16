<?php 

namespace App\Models\Users;

use Illuminate\Database\Eloquent\Model;

class UserActivity extends Model {

	public function user()
	{
		return $this->belongsTo('App\Models\Users\User');
	}

	public function object()
	{
		return $this->morphTo();
	}

}
