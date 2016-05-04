<?php 

namespace App\Models\Companies;

use Illuminate\Database\Eloquent\Model;

class Company extends Model {

	protected $fillable = [
		'name',
		'type',
		'theme',
		'ein',
		'phone1',
		'phone2',
		'fax',
		'email1',
		'email2',
		'address_street',
		'address_unit',
		'address_city',
		'address_state',
		'address_zip',
		'owner_id'
	];

	public function facilities()
	{
		return $this->hasMany('App\Models\Facilities\Facility', 'company_id');
	}

	public function employees()
	{
		return $this->hasMany('App\Models\Employees\Employee', 'company_id');
	}

}
