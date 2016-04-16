<?php

return [

    'title' => 'Roles',

    'single' => 'Role',

    'model' => 'Spatie\Permission\Models\Role',

    /**
     * The width of the model's edit form
     *
     * @type int
     */
    'form_width' => 500,


    'columns' => [
        'id',
        'name' => [
            'title' => 'Role Name',
        ],
        'roles_permissions' => [
            'title' => 'Permissions',
            'relationship' => 'permissions',
            'select' => "COUNT((:table).id)",
        ],
    ],
    'edit_fields' => [
        'name' => [
            'title' => 'Role Name',
            'type' => 'text'
        ],
        'permissions' => [
            'type' => 'relationship',
            'title' => 'Permissions',
            'name_field' => 'name', 
        ]
    ]

];
