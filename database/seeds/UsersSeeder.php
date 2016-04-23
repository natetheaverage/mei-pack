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
      'ticketit_admin' => 1,
      'ticketit_agent' => 1,
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
			'name'                  => 'Doug.T',
			'email'                     => "dougmt_98@yahoo.com",
			'password'                  => bcrypt('my temporary password'),
		]);
    $user->assignRole('admin');

		$user = User::create([
			'name'                  => 'Brian.T',
			'email'                     => "bryanthompson@itwiseus.com",
			'password'                  => bcrypt('a temp password'),
		]);
    $user->assignRole('admin');

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
