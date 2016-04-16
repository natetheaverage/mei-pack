<?php

return array(

'title' => 'Image Gallery',

'single' => 'Image Gallery',

'model' => 'App\Models\ImageGallery',

'columns' => array(
    'title' => array(
        'title' => 'Vendor Name'
        ),
    'img' => array(
        'title' => 'Image',
        'output' => '<img src="/images/vendor/(:value)" height="100px"/>',
        ), 
    'description' => array(
        'title' => 'Description',
        ),
    'tags' => array(
        'title' => 'Tags',
        ),
    ),

'edit_fields' => array(
    'title' => array(
        'title' => 'Vendor Name',
        'type' => 'text'
        ),
    'img' => array(
        'title' => 'Image',
        'discription' => 'Prob dont use this yet... needs configuring',
        'location' => 'images',
        'type' => 'image'
        ),
    'description' => array(
        'title' => 'Description',
        'type' => 'text'
        ),
    'tags' => array(
        'title' => 'Tags',
        'type' => 'text'
        ),
    ),
);
