<?php

use Spatie\Permission\Models\Permission;
use Illuminate\Database\Seeder;

class PermissionsSeeder extends Seeder
{
    protected $permissionsArray = [
    'edit-text',
    'edit-layout',
    'edit-everything',
    'view-inventory',
    'edit-inventory',
    'manage-employee',
    'create-post',
];

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        

        foreach ($this->permissionsArray as $newPermission){
            $permission = Permission::create(['name' => $newPermission]);
        }
        //$permission->truncate();

        // foreach ($this->permissionsArray as $newPermission => $label) {
        //    $permission->create(['name' => $newPermission, 'label' => $label]);
        // }
    }
}
