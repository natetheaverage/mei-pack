<?php
namespace App\Models\InterfaceObjects;

//use App\Events\CreatePermission;
use Illuminate\Database\Eloquent\Model;
use App\Models\Events\RecordsUserActivity;
use Illuminate\Database\Eloquent\SoftDeletes;

class InterfaceObject extends Model {

	use RecordsUserActivity, softDeletes;
	//CreatePermission, 

	protected $fillable = [
		'menu_id',
		'menu_name',
    'menu_order',
    'family',
    'type',
    'class',
    'label',
    'icon',
    'href',
    'extra1',
    'extra2',
    'owner_id',
    'owner_type'
	];

	public function user()
	{
		return $this->belongsToMany('App\Models\Users\User');
	}

	public function  lists()
	{
		return $this->hasMany('App\Models\InterfaceObjects\Lists', 'owner_id');
	}

	public function  objectClasses()
	{
		return $this->hasMany('App\Models\ObjectClasses', 'object_id');
	}

	/**
	 * Uses optionList methods hasMany to locate sub list
	 * than iterate through each object to push values
	 * in to an array
	 *
	 * @return array
	 */
	public function optionList($listName)
	{

		$collection = Lists::where('title', $listName)->get();

		$menu = [];

		foreach($collection as $item)
		{
			array_push($menu, $item->name);
		};

		return $menu;
	}

}
