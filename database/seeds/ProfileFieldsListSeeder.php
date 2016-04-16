<?php

use Illuminate\Database\Seeder;
use App\Models\InterfaceObjects\InterfaceObject;

class ProfileFieldsListSeeder extends Seeder{

	public function run()
	{
		$listTitle = 'registrationFields';
		$listId = 2;
		$category = 'profile';

		$list = [
			'errorBox' => [ //name
				$listId ,	//'menu_id'
				$listTitle,	//'menu_name'
				'alert',	//'family'
				'errorBox',	//'type'
				'Uh Oh',	//'label'
				'statesMenu',//'value'
				'',//'hook '
				1,	//'owner_id'
				'Average',	//'owner_type
			],
			'first_name' => [ //name
				$listId ,	//'menu_id'
				$listTitle,	//'menu_name'
				'field',	//'family'
				'textBox',	//'type'
				'First',	//'label'
				'Joe',		//'value'
				'',			//'hook '
				1,			//'owner_id'
				'Average',	//'owner_type
			],
			'last_name' => [ //name
				$listId ,	//'menu_id'
				$listTitle,	//'menu_name'
				'field',	//'family'
				'textBox',	//'type'
				'Last',		//'label'
				'bloe',		//'value'
				'',			//'hook '
				1,			//'owner_id'
				'Average',	//'owner_type
			],
			'phone' => [ //name
				$listId ,	//'menu_id'
				$listTitle,	//'menu_name'
				'field',	//'family'
				'phoneMask',//'type'
				'Phone',	//'label'
				'123-123-1234',		//'value'
				'',			//'hook '
				1,			//'owner_id'
				'Average',	//'owner_type
			],
			'address_street' => [ //name
				$listId ,	//'menu_id'
				$listTitle,	//'menu_name'
				'field',	//'family'
				'textBox',	//'type'
				'Street',	//'label'
				'1234 Somewhere St.',		//'value'
				'',			//'hook '
				1,			//'owner_id'
				'Average',	//'owner_type
			],
			'address_city' => [ //name
				$listId ,	//'menu_id'
				$listTitle,	//'menu_name'
				'field',	//'family'
				'textBox',	//'type'
				'City',		//'label'
				'Denver',		//'value'
				'',			//'hook '
				1,			//'owner_id'
				'Average',	//'owner_type
			],
			'address_state' => [ //name
				$listId ,	 //'menu_id'
				$listTitle,	 //'menu_name'
				'field',	 //'family'
				'dropDown',	 //'type'
				'State',	 //'label'
				'statesMenu',//'value'
				'',			//'hook '
				1,			 //'owner_id'
				'Average',	 //'owner_type
				'27',		//'lists_id'
			],
			'address_zip' => [ //name
				$listId ,	//'menu_id'
				$listTitle,	//'menu_name'
				'field',	//'family'
				'textBox',	//'type'
				'Zip',		//'label'
				'12312',		//'value'
				'',			//'hook '
				1,			//'owner_id'
				'Average',	//'owner_type
			],
			'dob' => [ //name
				$listId ,	//'menu_id'
				$listTitle,	//'menu_name'
				'field',	//'family'
				'datePicker',	//'type'
				'D.O.B.',	//'label'
				'08/23/1979',	//'value'
				'dob-picker',	//'hook '
				1,			//'owner_id'
				'Average',	//'owner_type
			],
		];

		$this->save($list, $listTitle, $listId, $category);
	}

	public function save($list, $listTitle, $listId, $category)
	{
		$i = 0;
		foreach ($list as $key => $value)
		{
			//TODO extra1 is a horrible place to store this variable for organising lists
			$Objects = InterfaceObject::create([
				'menu_id'    => $listId,
				'menu_name'  => $listTitle,
				'menu_order' => $i,
				'name'       => $key,
				'family'     => $value[2],
				'type'       => $value[3],
				'label'      => $value[4],
				'value'      => $value[5],
				'owner_id'   => $value[6],
				'owner_type' => $value[7],
				'extra1'     => $category,
			]);
			$i++;
		}
	}
}