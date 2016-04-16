<?php

return [

    'title' => 'Users',

    'single' => 'User',

    'model' => 'App\Models\Users\User',

    'columns' => [
        'id',
        'name' => [
            'title' => 'Username',
        ],
        'email',
        'user_profile' => [
            'title' => 'First Name',
            'relationship' => 'profile',
            'select' => '(:table).first_name', 
        ],
        'user_profile' => [
            'title' => 'Last Name',
            'relationship' => 'profile',
            'select' => '(:table).last_name', 
        ],
        'user_profile' => [
            'title' => 'Avatar',
            'relationship' => 'profile',
            'select' => '(:table).profile_picture',
            'output' => '<img src="/img/avatars/(:value)" height="100" />',
        ],
    ],
    'edit_fields' => [
        'name' => [
            'title' => 'Username',
            'type' => 'text'
        ],
        'email' => [
            'title' => 'Email',
            'type' => 'text',
            'description' => 'make sure its a valid email'
        ],
        'roles' => [
            'type' => 'relationship',
            'title' => 'Role',
            'name_field' => 'name', 
        ]
    ]

];
