<?php 

namespace App\Models\Employees;

class EmployeeWasRegistered {

	public $employee;

	function __construct(Employee $employee)
	{
		$this->employee = $employee;
	}

}