<?php 

namespace App\Models\Facilities;

use Illuminate\Database\Eloquent\Model;

class Facility extends Model {


	protected $fillable = [
		'name',
		'type',
		'license_number',
		'license_expiration',
		'phone',
		'fax',
		'site_url',
		'address_street',
		'address_city',
		'address_state',
		'address_zip',
		'picture',
		'company_id'
	];

	public function company()
	{
		return $this->belongsTo('App\Models\Companies\Company');
	}

	public function employees()
	{
		return $this->hasMany('App\Models\Employees\Employee', 'facility_id');
	}

	public function users()
	{
		return $this->hasMany('App\Models\Users\User', 'facility_id');
	}

	public function customers()
	{
		return $this->hasMany('App\Models\Customers\Customers', 'facility_id');
	}




}
