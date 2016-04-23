<?php 

use Illuminate\Database\Seeder;
use App\Models\InterfaceObjects\InterfaceObject;

class MainNavigationSeeder extends Seeder  {


	public function run()
	{
		$firstTierOrder = 0;
		$Objects = InterfaceObject::create([
			'label'      => 'Dashboard',           // header / Label displayed
			'href'       => '/dashboard',          // path
			'on_click' => 'Welcome',          // named route
			'icon'       => 'fa-dashboard',                    // icon from fa-
			'name'		 => 'dashboard',
			'menu_id'    => 0,                 //id for The Menu this belongs to
			'menu_name'  => 'adminPrimary',               //-- its name
			'menu_order' => $firstTierOrder,              //-- where in the order doest this belong
			'value'      => 'isFirstTier',
			'family'     => 'button',                  // The family the object belongs to (box, form, button etc...
			'type'       => 'navigation',         // Type of object in the family
			'class'      => '',    // Class of the object
			'owner_id'   => 0,                 // id if this object requires an owner
			'owner_type' => 'adminPrimary',       //-- owner type ( this doesn't need to be a user)
		]);
		$firstTierOrder ++;

		$Objects = InterfaceObject::create([
			'label'      => 'Point of Sale',           // header / Label displayed
			'href'       => '/dashboard/pos',          // target for links
			'on_click' => 'Pos',          // named route
			'icon'       => 'fa-money',                    // icon from fa-
			'name'		 => 'point_of_sale',
			'menu_id'    => 0,                 //id for The Menu this belongs to
			'menu_name'  => 'adminPrimary',               //-- its name
			'menu_order' => $firstTierOrder,              //-- where in the order doest this belong
			'value'      => 'isFirstTier',
			'family'     => 'button',                  // The family the object belongs to (box, form, button etc...
			'type'       => 'navigation',         // Type of object in the family
			'class'      => '',    // Class of the object
			'owner_id'   => 0,                 // id if this object requires an owner
			'owner_type' => 'adminPrimary',       //-- owner type ( this doesn't need to be a user)
		]);
		$firstTierOrder ++;

				$Objects = InterfaceObject::create([
			'label'      => 'Profile',           // header / Label displayed
			'href'       => '/natetheaverage',          // target for links
			'on_click' => '',          // named route
			'icon'       => 'fa-user',                    // icon from fa-
			'name'		 => 'profile',
			'menu_id'    => '0',                 //id for The Menu this belongs to
			'menu_name'  => 'adminPrimary',               //-- its name
			'menu_order' => $firstTierOrder,              //-- where in the order doest this belong
			'value'      => 'isFirstFolder',
			'family'     => 'button',                  // The family the object belongs to (box, form, button etc...
			'type'       => 'navigation',         // Type of object in the family
			'class'      => '',    // Class of the object
			'owner_id'   => 0,                 // id if this object requires an owner
			'owner_type' => 'adminPrimary',       //-- owner type ( this doesn't need to be a user)
		]);
		$firstTierOrder ++;

		$Objects = InterfaceObject::create([
			'label'      => 'Profile',           // header / Label displayed
			'href'       => '/dashboard/profile',          // target for links
			'on_click' => '',          // named route
			'icon'       => 'fa-user',                    // icon from fa-
			'name'		 => 'profile',
			'menu_id'    => '0',                 //id for The Menu this belongs to
			'menu_name'  => 'adminPrimary',               //-- its name
			'menu_order' => $firstTierOrder,              //-- where in the order doest this belong
			'value'      => 'isFirstFolder',
			'family'     => 'button',                  // The family the object belongs to (box, form, button etc...
			'type'       => 'navigation',         // Type of object in the family
			'class'      => '',    // Class of the object
			'owner_id'   => 0,                 // id if this object requires an owner
			'owner_type' => 'adminPrimary',       //-- owner type ( this doesn't need to be a user)
		]);
		$firstTierOrder ++;
		$secondTierOrder = 0;
		$folderID = $Objects->id;
		$folderName = $Objects->name;

		$Objects = InterfaceObject::create([
			'label'      => 'Communications',           // header / Label displayed
			'href'       => '/dashboard/profile/communications',          // target for links
			'on_click' => 'Communications',          // named route
			'icon'       => 'fa-envelope',                    // icon from fa-
			'name'		 => 'new_customer',
			'menu_id'    => $folderID,                 //id for The Menu this belongs to
			'menu_name'  => $folderName,               //-- its name
			'menu_order' => $secondTierOrder,              //-- where in the order doest this belong
			'value'      => 'isSecondTier',
			'family'     => 'button',                  // The family the object belongs to (box, form, button etc...
			'type'       => 'navigation',         // Type of object in the family
			'class'      => '',    // Class of the object
			'owner_id'   => 0,                 // id if this object requires an owner
			'owner_type' => 'adminPrimary',       //-- owner type ( this doesn't need to be a user)
		]);
		$secondTierOrder ++;

		$Objects = InterfaceObject::create([
			'label'      => 'Projects',           // header / Label displayed
			'href'       => '/dashboard/profile/projects',          // target for links
			'on_click' => 'Projects',          // target for links
			'icon'       => 'fa-folder',                    // icon from fa-
			'name'		 => 'new_customer',
			'menu_id'    => $folderID,                 //id for The Menu this belongs to
			'menu_name'  => $folderName,               //-- its name
			'menu_order' => $secondTierOrder,              //-- where in the order doest this belong
			'value'      => 'isSecondTier',
			'family'     => 'button',                  // The family the object belongs to (box, form, button etc...
			'type'       => 'navigation',         // Type of object in the family
			'class'      => '',    // Class of the object
			'owner_id'   => 0,                 // id if this object requires an owner
			'owner_type' => 'adminPrimary',       //-- owner type ( this doesn't need to be a user)
		]);
		$secondTierOrder ++;

		$Objects = InterfaceObject::create([
			'label'      => 'Calendar',           // header / Label displayed
			'href'       => '/dashboard/profile/calendar',          // target for links
			'on_click' => 'Calendar',          // targe on_click
			'icon'       => 'fa-calendar',                    // icon from fa-
			'name'		 => 'calendar',
			'menu_id'    => $folderID,                 //id for The Menu this belongs to
			'menu_name'  => $folderName,               //-- its name
			'menu_order' => $secondTierOrder,              //-- where in the order doest this belong
			'value'      => 'isSecondTier',
			'family'     => 'button',                  // The family the object belongs to (box, form, button etc...
			'type'       => 'navigation',         // Type of object in the family
			'class'      => '',    // Class of the object
			'owner_id'   => 0,                 // id if this object requires an owner
			'owner_type' => 'adminPrimary',       //-- owner type ( this doesn't need to be a user)
		]);
		$secondTierOrder ++;

		$Objects = InterfaceObject::create([
			'label'      => 'Settings',           // header / Label displayed
			'href'       => '/dashboard/profile/settings',          // target for links
			'on_click' 	 => 'Settings',          // target for links
			'icon'       => 'fa-gears',                    // icon from fa-
			'name'		 	 => 'settings',
			'menu_id'    => $folderID,                 //id for The Menu this belongs to
			'menu_name'  => $folderName,               //-- its name
			'menu_order' => $secondTierOrder,              //-- where in the order doest this belong
			'value'      => 'isSecondTier',
			'family'     => 'button',                  // The family the object belongs to (box, form, button etc...
			'type'       => 'navigation',         // Type of object in the family
			'class'      => '',    // Class of the object
			'owner_id'   => 0,                 // id if this object requires an owner
			'owner_type' => 'adminPrimary',       //-- owner type ( this doesn't need to be a user)
		]);
		$secondTierOrder ++;

		

		$Objects = InterfaceObject::create([
			'label'      => 'Customers',           // header / Label displayed
			'href'       => '/dashboard/customers',          // target for links
			'icon'       => 'fa-users',                    // icon from fa-
			'name'		 => 'customers',
			'menu_id'    => '0',                 //id for The Menu this belongs to
			'menu_name'  => 'adminPrimary',               //-- its name
			'menu_order' => $firstTierOrder,              //-- where in the order doest this belong
			'value'      => 'isFirstFolder',
			'family'     => 'button',                  // The family the object belongs to (box, form, button etc...
			'type'       => 'navigation',         // Type of object in the family
			'class'      => '',    // Class of the object
			'owner_id'   => 0,                 // id if this object requires an owner
			'owner_type' => 'adminPrimary',       //-- owner type ( this doesn't need to be a user)
		]);
		$firstTierOrder ++;
		$secondTierOrder = 0;
		$folderID = $Objects->id;
		$folderName = $Objects->name;

		$Objects = InterfaceObject::create([
			'label'      => 'New Customer',           // header / Label displayed
			'href'       => '/dashboard/customers/new',          // target for links
			'on_click'   => 'CustomerNew',          // target for links
			'icon'       => 'fa-user-plus',                    // icon from fa-
			'name'		   => 'new_customer',
			'menu_id'    => $folderID,                 //id for The Menu this belongs to
			'menu_name'  => $folderName,               //-- its name
			'menu_order' => $secondTierOrder,              //-- where in the order doest this belong
			'value'      => 'isSecondTier',
			'family'     => 'button',                  // The family the object belongs to (box, form, button etc...
			'type'       => 'navigation',         // Type of object in the family
			'class'      => '',    // Class of the object
			'owner_id'   => 0,                 // id if this object requires an owner
			'owner_type' => 'adminPrimary',       //-- owner type ( this doesn't need to be a user)
		]);
		$secondTierOrder ++;

		$Objects = InterfaceObject::create([
			'label'      => 'Employees',           // header / Label displayed
			'href'       => '/dashboard/employees',          // target for links
			'icon'       => 'fa-users',                    // icon from fa-
			'name'		   => 'employees',
			'menu_id'    => 0,                 //id for The Menu this belongs to
			'menu_name'  => 'adminPrimary',               //-- its name
			'menu_order' => 3,              //-- where in the order doest this belong
			'value'      => 'isFirstFolder',
			'family'     => 'button',                  // The family the object belongs to (box, form, button etc...
			'type'       => 'navigation',         // Type of object in the family
			'class'      => '',    // Class of the object
			'owner_id'   => 0,                 // id if this object requires an owner
			'owner_type' => 'adminPrimary',       //-- owner type ( this doesn't need to be a user)
		]);
		$firstTierOrder ++;
		$secondTierOrder = 0;
		$folderID = $Objects->id;
		$folderName = $Objects->name;

		$Objects = InterfaceObject::create([
			'label'      => 'New Employee',           // header / Label displayed
			'href'       => '/dashboard/employees/new',          // target for links
			'on_click'   => 'EmployeeNew',          // target for links
			'icon'       => 'fa-user-plus',                    // icon from fa-
			'name'		   => 'new_employee',
			'menu_id'    => $folderID,                 //id for The Menu this belongs to
			'menu_name'  => $folderName,               //-- its name
			'menu_order' => $secondTierOrder,              //-- where in the order doest this belong
			'value'      => 'isSecondTier',
			'family'     => 'button',                  // The family the object belongs to (box, form, button etc...
			'type'       => 'navigation',         // Type of object in the family
			'class'      => '',    // Class of the object
			'owner_id'   => 0,                 // id if this object requires an owner
			'owner_type' => 'adminPrimary',       //-- owner type ( this doesn't need to be a user)
		]);
		$secondTierOrder ++;

		$Objects = InterfaceObject::create([
			'label'      => 'Employee Management',   // header / Label displayed
			'href'       => '/dashboard/employees/control',          // target for links
			'icon'       => 'fa-submit',                    // icon from fa-
			'name'		 => 'employee_request',
			'menu_id'    => $folderID,                 //id for The Menu this belongs to
			'menu_name'  => $folderName,               //-- its name
			'menu_order' => $secondTierOrder,              //-- where in the order doest this belong
			'value'      => 'isSecondFolder',
			'family'     => 'button',                  // The family the object belongs to (box, form, button etc...
			'type'       => 'navigation',         // Type of object in the family
			'class'      => '',    // Class of the object
			'owner_id'   => 0,                 // id if this object requires an owner
			'owner_type' => 'adminPrimary',       //-- owner type ( this doesn't need to be a user)
		]);
		$secondTierOrder ++;
		$thirdTierOrder = 0;
		$folderID = $Objects->id;
		$folderName = $Objects->name;

		$Objects = InterfaceObject::create([
			'label'      => 'Directory',           // header / Label displayed
			'href'       => '/dashboard/employee/directory',          // target for links
			'on_click'   => 'EmployeeDirectory',          // target for links
			'icon'       => 'fa-watch',                    // icon from fa-
			'name'		 => 'time_off_requests',
			'menu_id'    => $folderID,                 //id for The Menu this belongs to
			'menu_name'  => $folderName,               //-- its name
			'menu_order' => $thirdTierOrder,              //-- where in the order doest this belong
			'value'      => 'isThirdTier',
			'family'     => 'button',                  // The family the object belongs to (box, form, button etc...
			'type'       => 'navigation',         // Type of object in the family
			'class'      => '',    // Class of the object
			'owner_id'   => 0,                 // id if this object requires an owner
			'owner_type' => 'adminPrimary',       //-- owner type ( this doesn't need to be a user)
		]);
		$thirdTierOrder ++;

		$Objects = InterfaceObject::create([
			'label'      => 'Inventory',           // header / Label displayed
			'href'       => '/dashboard/inventory',          // target for links
			'on_click'   => 'Inventory',          // target for links
			'icon'       => 'fa-pencil',                    // icon from fa-
			'name'		 	 => 'something',
			'menu_id'    => 0,                 //id for The Menu this belongs to
			'menu_name'  => 'adminPrimary',               //-- its name
			'menu_order' => 4,              //-- where in the order doest this belong
			'value'      => 'isFirstFolder',
			'family'     => 'button',                  // The family the object belongs to (box, form, button etc...
			'type'       => 'navigation',         // Type of object in the family
			'class'      => '',    // Class of the object
			'owner_id'   => 0,                 // id if this object requires an owner
			'owner_type' => 'adminPrimary',       //-- owner type ( this doesn't need to be a user)
		]);
		$firstTierOrder ++;
		$secondTierOrder = 0;
		$folderID = $Objects->id;
		$folderName = $Objects->name;

		$Objects = InterfaceObject::create([
			'label'      => 'METRC Calculator',           // header / Label displayed
			'href'       => '/dashboard/inventory/calculator',          // target for links
			'on_click'   => 'InventoryCalculator',          // target for links
			'icon'       => 'fa-calculator',                    // icon from fa-
			'name'		 => 'metric_calculator',
			'menu_id'    => $folderID,                 //id for The Menu this belongs to
			'menu_name'  => $folderName,               //-- its name
			'menu_order' => $secondTierOrder,              //-- where in the order doest this belong
			'value'      => 'isSecondTier',
			'family'     => 'button',                  // The family the object belongs to (box, form, button etc...
			'type'       => 'navigation',         // Type of object in the family
			'class'      => '',    // Class of the object
			'owner_id'   => 0,                 // id if this object requires an owner
			'owner_type' => 'adminPrimary',       //-- owner type ( this doesn't need to be a user)
		]);
		$secondTierOrder ++;

		$Objects = InterfaceObject::create([
			'label'      => 'Projects',           // header / Label displayed
			'href'       => '/dashboard/projects',          // target for links
			'on_click'   => 'Projects',          // target for links
			'icon'       => 'fa-check',                    // icon from fa-
			'name'		   => 'projects',
			'menu_id'    => 0,                 //id for The Menu this belongs to
			'menu_name'  => 'adminPrimary',               //-- its name
			'menu_order' => $firstTierOrder,              //-- where in the order doest this belong
			'value'      => 'isfirstTier',
			'family'     => 'button',                  // The family the object belongs to (box, form, button etc...
			'type'       => 'navigation',         // Type of object in the family
			'class'      => '',    // Class of the object
			'owner_id'   => 0,                 // id if this object requires an owner
			'owner_type' => 'adminPrimary',       //-- owner type ( this doesn't need to be a user)
		]);
		$firstTierOrder ++;

		$Objects = InterfaceObject::create([
			'label'      => 'UI Components',           // header / Label displayed
			'href'       => '/dashboard/ui/',          // target for links
			'on_click'   => 'UiUx',          // target for links
			'icon'       => 'fa-diamond',                    // icon from fa-
			'name'		   => 'ui_components',
			'menu_id'    => 0,                 //id for The Menu this belongs to
			'menu_name'  => 'adminPrimary',               //-- its name
			'menu_order' => $firstTierOrder,              //-- where in the order doest this belong
			'value'      => 'isFirstFolder',
			'family'     => 'button',                  // The family the object belongs to (box, form, button etc...
			'type'       => 'navigation',         // Type of object in the family
			'class'      => '',    // Class of the object
			'owner_id'   => 0,                 // id if this object requires an owner
			'owner_type' => 'adminPrimary',       //-- owner type ( this doesn't need to be a user)
		]);
		$firstTierOrder ++;
		$secondTierOrder = 0;
		$folderID = $Objects->id;
		$folderName = $Objects->name;

		$Objects = InterfaceObject::create([
			'label'      => 'Buttons',           // header / Label displayed
			'href'       => '/dashboard/ui/buttons',          // target for links
			'on_click'   => 'UiUxButtons',          // target for links
			'icon'       => 'fa-neuter',                    // icon from fa-
			'name'		 => 'buttons',
			'menu_id'    => $folderID,                 //id for The Menu this belongs to
			'menu_name'  => $folderName,               //-- its name
			'menu_order' => $secondTierOrder,              //-- where in the order doest this belong
			'value'      => 'isSecondTier',
			'family'     => 'button',                  // The family the object belongs to (box, form, button etc...
			'type'       => 'navigation',         // Type of object in the family
			'class'      => '',    // Class of the object
			'owner_id'   => 0,                 // id if this object requires an owner
			'owner_type' => 'adminPrimary',       //-- owner type ( this doesn't need to be a user)
		]);
		$secondTierOrder ++;
		$Objects = InterfaceObject::create([
			'label'      => 'Charts',           // header / Label displayed
			'href'       => '/dashboard/ui/charts',          // target for links
			'on_click'   => 'UiUxCharts',          // target for links
			'icon'       => 'fa-check',                    // icon from fa-
			'name'		 	 => 'check_boxes',
			'menu_id'    => $folderID,                 //id for The Menu this belongs to
			'menu_name'  => $folderName,               //-- its name
			'menu_order' => $secondTierOrder,              //-- where in the order doest this belong
			'value'      => 'isSecondTier',
			'family'     => 'button',                  // The family the object belongs to (box, form, button etc...
			'type'       => 'navigation',         // Type of object in the family
			'class'      => '',    // Class of the object
			'owner_id'   => 0,                 // id if this object requires an owner
			'owner_type' => 'adminPrimary',       //-- owner type ( this doesn't need to be a user)
		]);
	}
}