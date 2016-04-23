<?php

namespace App\Models\Users;

trait UserDetailsAndBindings 
{
    
    public function customerInfo()
    {
        return $this->hasOne('App\Models\Customers\Customer');
    }

    public function employeeInfo()
    {
        return $this->hasOne('App\Models\Employees\Employee');
    }

    public function profile()
    {
        return $this->hasOne('App\Models\Profiles\Profile');
    }

    public function membershipDetails()
    {
        return $this->hasOne('App\Models\Memberships\Membership');
    }


    /**
     * Relationship to Post model.
     * This is the "like/love" connection
     * @var array
     */
    public function likes()
    {
        return $this->belongsToMany('App\Models\Post');
    }

    /**
     * Relationship to Tag model.
     *
     * @var array
     */
    public function tags()
    {
        return $this->belongsTo('App\Models\Tag');
    }

}
