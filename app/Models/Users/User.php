<?php 

namespace App\Models\Users;

use App\Lists;
use Illuminate\Auth\Authenticatable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Auth\Passwords\CanResetPassword;
use Illuminate\Foundation\Auth\Access\Authorizable;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContract;
use Illuminate\Contracts\Auth\Access\Authorizable as AuthorizableContract;
use Illuminate\Contracts\Auth\CanResetPassword as CanResetPasswordContract;
use Spatie\Permission\Traits\HasRoles;
use Laravel\Cashier\Billable;

class User extends Model implements AuthenticatableContract, AuthorizableContract, CanResetPasswordContract
{
	use Authenticatable, Authorizable, CanResetPassword, HasRoles, UserDetailsAndBindings, Billable;


	/**
	 * The database table used by the model.
	 *
	 * @var string
	 */
	protected $table = 'users';

	/**
	 * The attributes that are mass assignable.
	 *
	 * @var array
	 */
	protected $fillable = [
				'name', 
        'email', 
        'password', 
        'facility_id',
        'preferences_id',
        'profile_id',
        'employee_id',
        'customer_id',
        'stripe_id',
    	'card_brand',
    	'card_last_four',
    	'trial_ends_at',
    	'ticketit_admin',
    	'ticketit_agent',
	];

	/**
	 * The attributes excluded from the model's JSON form.
	 *
	 * @var array
	 */
	protected $hidden = ['password', 'remember_token'];

	public function conversation()
	{
		return $this->hasMany('App\Models\Conversations\Conversation');
	}

	public function interfaceObject()
	{
		return $this->hasMany('App\Models\InterfaceObjects\InterfaceObject', 'owner_id');
	}

	public function project()
	{
		return $this->hasMany('App\Models\Projects\Project');
	}

	public function task()
	{
		return $this->hasMany('App\Models\Projects\Task');
	}

	public function userInterface()
	{
		return $this->hasMany('App\UserActivity');
	}


	public function registrationFields()
	{
		/* TODO: make columns generate my field list
		 * $columns = Schema::getColumnListing('users');
		 * $lists = Lists::where('item', $columns)->get();
		 */

		$fields = Lists::where('title', 'registrationFields')->get();
		if (env('TEST'))
		{
			$test = true;
			$fakeInfo = User::find(1)->toArray();
		}

		return compact('fields', 'fakeInfo', 'fieldOptions', 'test');
	}


	 /**
     * create array.
     *
     * @var array
     */
    public function getLikesArray($user)
    {
        $user->load(['likes' => function($query){$query->select('id');}]);
       $user = $user->likes->all();
       // dd(count($user) );
        if( count($user) > 0 ){
            foreach ($user as $key => $value) {
                $likesArray[$key] = $value->id;
            }
            return $likesArray;
        }
        return [];
    }


     /**
     * Implements model based method
     *
     * @param $model ('currentUser', 'objectClasses')
     * @param $id
     * @return Mixed Collection
     */
    public function collect($model, $id = null)
    {
        return $this->$model($id);
    }

    /**
     * Collects Eloquent User model and its relationships in one object
     * than saves it to a session object as user.
     *
     * @param $id
     * @return $this
     */
    public function currentUserFull()
    {
        return $this->completeUser(\Auth::user()->id);
    }

    public function completeUser($id)
    {
        $userWithRelations = User::find($id)->load(
            'profile',
            'customerInfo',
            'employeeInfo',
            'membershipDetails'
        );

        return $userWithRelations;
    }

    public function currentUserBasic()
    {
        $userWithBasic = User::all()->load('profile');//->get('id' ,['id','first_name','last_name','profile_pic']);
        return $userWithBasic;
    }


}
