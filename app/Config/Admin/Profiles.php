<?php

return [

    'title' => 'Profiles',

    'single' => 'Profile',

    'model' => 'App\Models\Profiles\Profile',

    'columns' => [
        'id',
        'first_name' => [
            'title' => 'First Name',
        ],
        'last_name' => [
            'title' => 'Last Name',
        ],
        'profile_picture' => [
            'title' => 'Avatar',
            'output' => '<img src="/img/avatars/(:value)" height="100" />',
        ],
        'phone' => [
            'title' => 'Phone',
        ],
        'address_street' => [
            'title' => 'Street',
        ],
    ],
    'edit_fields' => [
        'first_name' => [
            'title' => 'First Name',
            'type' => 'text',
        ],
        'last_name' => [
            'title' => 'Last Name',
            'type' => 'text',
        ],
        'profile_picture' => [
            'title' => 'Avatar',
            'type' => 'image',
            'location' => './img/avatars/',
        ],
        'phone' => [
            'title' => 'Phone',
            'type' => 'number',
            'thousands_separator' => '',
        ],
        'address_street' => [
            'title' => 'Street',
            'type' => 'text',
        ],
        'address_city' => [
            'title' => 'City',
            'type' => 'text',
        ],
        'address_state' => [
            'title' => 'State',
            'type' => 'text',
        ],
        'address_zip' => [
            'title' => 'Zip',
            'type' => 'text',
        ],
        'dob' => [
            'title' => 'D.O.B.',
            'type' => 'date',
            'date_format' => 'mm-dd-yy',
        ],
    ],


    /**
 * The filterable fields
 *
 * @type array
 */
// 'filters' => array(
    
//     'date' => array(
//         'type' => 'date',
//         'title' => 'Start/End',
//         'description' => 'Begining and End',
//         'start' => '01/01/1990',
//         'end' => '01/01/2005',
//     ),
// ),

];
