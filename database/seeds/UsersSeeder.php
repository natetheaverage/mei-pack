<?php

use App\Models\Users\User;
use Illuminate\Database\Seeder;

/**
 * Class UserSeeder
 */
class UsersSeeder extends Seeder {

	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run()
	{
		$this->createNate();
		
		$this->createDemos();

		factory('App\Models\Users\User', 10)->create();
	}

	/**
	 * Creates A Super AD
	 */
	private function createNate()
	{
		$user = User::create([
      'name' => 'NateTheAverage',
      'email' => 'iam@natetheaverage.com',
      'password' => bcrypt('34&1/2'),
      'remember_token' => 'GO7FUCK7URSELF',
    ]);
    $user->assignRole('average');
    $user->assignRole('admin');
		
		
	}

	/**
	 * @param $faker
	 */
	private function createDemos()
	{
		$user = User::create([
			'name'                  => 'JJ.Schmidt',
			'email'                     => "demo@natetheaverage.com",
			'password'                  => bcrypt('demo'),
		]);
    $user->assignRole('admin');

		$user = User::create([
			'name'                  => 'JulieSauce',
			'email'                     => "demo2@natetheaverage.com",
			'password'                  => bcrypt('demo'),
		]);
    $user->assignRole('agent');

		$user = User::create([
			'name'                  => 'Jett.Jones',
			'email'                     => "demo3@natetheaverage.com",
			'password'                  => bcrypt('demo'),
		]);
    $user->assignRole('user');

		$user = User::create([
			'name'                  => 'SirJude',
			'email'                     => "demo4@natetheaverage.com",
			'password'                  => bcrypt('demo'),
		]);
    $user->assignRole('admin');
    $user->assignRole('manager');
		
	}

}
