<?php 
namespace App\Models\Employees;

use App\Lists;
use App\Models\Eventing\EventGenerator;
use Illuminate\Database\Eloquent\Model;

class Employee extends Model {

	use EventGenerator;
	/**
	 * The attributes that are mass assignable.
	 *
	 * @var array
	 */
	protected $fillable = [
		'title',
		'wage',
		'ss',
		'badge_number',
		'badge_type',
		'facility_id',
		'created_by',
		'active',
		'user_id',
		'company_id',
	];


	public function user()
	{
		$this->belongsTo('App\Models\Users\User');
	}

	public function facility()
	{
		$this->belongsToMany('App\Models\Facilities\Facility', 'facility_id');
	}

	public function company()
	{
		$this->belongsTo('App\Models\Companies\Company');
	}

	public function messages()
	{
		$this->hasMany('App\Models\Messages\message');
	}

	/**
	 * @param $title
	 * @param $wage
	 * @param $badgeNumber
	 * @param $badgeType
	 * @param $ss
	 */
	public function register($title, $wage, $badge_number, $badge_type, $ss)
	{
		$this->title = $this->getNameOfChosenListSelection($title);
		$this->wage = $wage;
		$this->badge_number = $badge_number;
		$this->badge_type = $badge_type;
		$this->ss = $ss;

		$this->save();

		$this->raise( new EmployeeWasRegistered($this));

		return $this;
	}

	/**
	 * @param $title
	 */
	protected function getNameOfChosenListSelection($title)
	{
		$jobTitle = Lists::where('title', 'jobTitleMenu')->get();
		return $jobTitle->get($title)->name;
	}

	public function remove()
	{
		//$this->delete();
		$this->raise(new EmployeeWasRemoved($this) );
	}
}
