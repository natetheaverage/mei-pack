<?php

return [

    'title' => 'Permissions',

    'single' => 'Permission',

    'model' => 'Spatie\Permission\Models\Permission',

    'columns' => [
        'id',
        'name' => [
            'title' => 'Permission Name',
        ],
        'permissions_roles' => [
            'title' => 'Roles',
            'relationship' => 'roles',
            'select' => "COUNT((:table).id)",
        ],
    ],
    'edit_fields' => [
        'name' => [
            'title' => 'Permission Name',
            'type' => 'text'
        ],
        'roles' => [
            'type' => 'relationship',
            'title' => 'Roles',
            'name_field' => 'name', 
        ]
    ]

];
