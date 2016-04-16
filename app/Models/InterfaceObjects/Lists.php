<?php 

namespace App\Models\InterfaceObjects;

use App\Models\Events\RecordsUserActivity;
use Illuminate\Database\Eloquent\Model;

class Lists extends Model {

	use RecordsUserActivity;

	public function userInterface()
	{
		return $this->hasMany('App\Models\Users\UserInterface');
	}

	public function interfaceObject()
	{
		return $this->belongsToMany('App\Models\InterfaceObjects\InterfaceObject');
	}


}
