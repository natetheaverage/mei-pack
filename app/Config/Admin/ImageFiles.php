<?php

return array(

'title' => 'ImageFiles',

'single' => 'ImageFile',

'model' => 'App\Models\ImageFile',

'columns' => array(
    'label' => array(
        'title' => 'Label'
        ),
    'thumb' => array(
        'title' => 'Thumb',
        'output' => '<img src="/images/imagefiles/(:value)" height="100" />',
        ),
    'link' => array(
        'title' => 'Link',
        'output' => '<a href="(:value)" target="_blank">(:value)</a>',
        ),
    ),

    'edit_fields' => array(
        'label' => array(
            'title' => 'Label',
            'type' => 'text',
        ),
        'thumb' => array(
            'title' => 'Thumb',
            'type' => 'image',
            'naming' => 'keep',
            'size_limit' => 2,
            'location' => './images/imagefiles/',
        ),
        'link' => array(
            'title' => 'Upload New PDF',
            'type' => 'file',
            'naming' => 'keep',
            'size_limit' => 6,
            'location' => './images/imagefiles/',
        ),
        'active' => array(
            'title' => 'Active Status (leave alone)',
            'type' => 'bool',
        ),
    ),
);
