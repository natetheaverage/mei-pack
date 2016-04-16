<?php

use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use Illuminate\Database\Seeder;

class RolesSeeder extends Seeder
{

protected $rolesArray = [
    'average',
    'admin',
    'agent',
    'user',
    'owner',
    'manager',
    'shift_manager',
    'clerk',
    'patient',
    'customer',
];

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        foreach ($this->rolesArray as $newRole) {
           $role = Role::create(['name' => $newRole]);
        }
        // $role = Role::whereName('average')->get()
        // ->givePermissionTo('edit-everything')
        // ->givePermissionTo('edit-layout')
        // ->givePermissionTo('edit-text');

        // $user = User::find(1)->get();
        // $user->hasAllRoles(Role::all());
    }
}
