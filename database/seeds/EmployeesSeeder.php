<?php

use App\Models\Employees\Employee;
use Faker\Factory as Faker;
use Illuminate\Database\Seeder;

/**
 * Class UserSeeder
 */
class EmployeesSeeder extends Seeder {

	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run()
	{
		//Employee::truncate();

		$this->createNate();
		
		$this->createDemos();

		$this->createFakerUsers(11);
	}

	/**
	 *
	 */
	private static function createFakerUsers($amount)
	{
		$faker = Faker::create();

		for ($i = 2; $i <= $amount; $i ++)
		{
			$user = Employee::create([
				'title'                     => $faker->safeColorName,                    //30
				'wage'                      => $faker->numberBetween(10, 30),
				'ss'                        => 111222333,
				'badge_number'         		=> $faker->numberBetween(111111111, 999999999),
				'badge_type'       			=> $faker->safeColorName,
				'facility_id'               => $faker->numberBetween(111111111, 999999999),
				'created_by'                => $faker->numberBetween(111111111, 999999999),
				'active'             		=> $faker->numberBetween(0, 3),
				'user_id'       			 => $i,
				'company_id'       			 => 1,
			]);
		}
	}

	/**
	 * @param $faker
	 */
	private function createNate()
	{
		$user = Employee::create([
			'title'                     => 'Owner',
			'wage'                      => 30.50,
			'ss'                        => 111223333,
			'badge_number'         		=> 951032999,
			'badge_type'       			=> 'Owner',
			'facility_id'               => 1,
			'created_by'                => 'self',
			'active'       			    => true,
			'user_id'      				=> 1,
			'company_id'      			=> 1,
		]);
	}

	/**
	 * @param $faker
	 */
	private function createDemos()
	{
		$user = Employee::create([
			'title'                     => 'Owner',
			'wage'                      => 30.50,
			'ss'                        => 555667777,
			'badge_number'         		=> 951083599,
			'badge_type'       			=> 'Owner',
			'facility_id'               => 1,
			'created_by'                => 'self',
			'active'       			    => true,
			'user_id'      				=> 2,
			'company_id'      			=> 1,
		]);
		
		$user = Employee::create([
			'title'                     => 'Manager',
			'wage'                      => 30.50,
			'ss'                        => 444556666,
			'badge_number'         		=> 951236999,
			'badge_type'       			=> 'key',
			'facility_id'               => 1,
			'created_by'                => 'self',
			'active'       			    => true,
			'user_id'      				=> 3,
			'company_id'      			=> 1,
		]);
		$user = Employee::create([
			'title'                     => 'Clerk',
			'wage'                      => 11.00,
			'ss'                        => 333445555,
			'badge_number'         		=> 95765999,
			'badge_type'       			=> 'support',
			'facility_id'               => 1,
			'created_by'                => 'self',
			'active'       			    => true,
			'user_id'      				=> 4,
			'company_id'      			=> 1,
		]);
		$user = Employee::create([
			'title'                     => 'Supervisor',
			'wage'                      => 15.50,
			'ss'                        => 222334444,
			'badge_number'         		=> 951032679,
			'badge_type'       			=> 'key',
			'facility_id'               => 1,
			'created_by'                => 'self',
			'active'       			    => true,
			'user_id'      				=> 5,
			'company_id'      			=> 1,
		]);
	}

}
