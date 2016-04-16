<?php 

namespace App\Models\Employees;

class RemoveEmployeeCommand {

	public $employeeId;

	function __construct($employeeId)
	{
		$this->employeeId = $employeeId;
	}


}