<?php

use App\Models\Companies\Company;
use Illuminate\Database\Seeder;


/**
 * Class UserSeeder
 */
class CompaniesSeeder extends Seeder {

	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run()
	{
		factory('App\Models\Companies\Company', 4)->create();
		//$this->createCompany();
	}

	/**
	 *
	 */
	// private static function createCompany()
	// {
	// 	$user = Company::create([
	// 		'name'           => 'Marijuana Holdings LLC',
	// 		'type'           => 'Sole LLC', 
	// 		'ein'            => 4200420,
	// 		'phone'          => 7204200420,
	// 		'fax'            => 7204201420,
	// 		'address_street' => '1234 Colfax Ave.',
	// 		'address_city'   => 'Denver',
	// 		'address_state'  => 'Colorado',
	// 		'owner_id'       => 1,
	// 	]);

	// }


}
