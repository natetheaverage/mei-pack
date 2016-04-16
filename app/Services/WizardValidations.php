<?php 

namespace App\Services;

use App\Models\Customers\CustomerRegistrar;
use App\Models\Employees\EmployeeRegistrar;
use App\Models\Profiles\ProfileRegistrar;

class WizardValidations {

	private $login;

	private $profile;

	private $employee;

	private $customer;

	private $wizardSteps;

	function __construct(
		Registrar $login,
		ProfileRegistrar $profile,
		EmployeeRegistrar $employee,
		CustomerRegistrar $customer,
		WizardSteps $wizardSteps)
	{
		$this->login = $login;
		$this->profile = $profile;
		$this->employee = $employee;
		$this->customer = $customer;
		$this->wizardSteps = $wizardSteps;
	}

	public function run(array $data, $categories){


		$this->wizardSteps->set();

		foreach($categories as $modelToValidate)
		{
			$model = key($modelToValidate);
			$validator = $this->$model->validator($data);
			if ($validator->fails()){return $validator;}
			$this->wizardSteps->update();
		}

		$this->wizardSteps->remove();

		Return $validator;
	}
}