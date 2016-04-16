<?php

namespace App\Models\Users;

trait HasRoles 
{

    public function roles()
    {
        return $this->belongsToMany('App\Models\Roles\Role');
    }

    public function hasRole($role)
    {
        if(is_string($role)){
            return $this->roles->contains('name', $role);
        }
        return !! $role->intersect($this->roles)->count();
    }

    public function assignRole($role)
    {
        return $this->roles()->save(
            Role::whereName($role)->firstOrFail());
    }

}