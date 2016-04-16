<?php 

namespace App\Models\InterfaceObjects;

use Illuminate\Database\Eloquent\Model;

class ObjectClasses extends Model {

	public function interfaceObject()
	{
		return $this->belongsToMany('App\Models\InterfaceObjects\InterfaceObject');
	}

}
