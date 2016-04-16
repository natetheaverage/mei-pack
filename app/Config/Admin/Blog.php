<?php

return array(

'title' => 'Blogs',

'single' => 'Blog',

'model' => 'App\Models\Blog',

'columns' => array(
    'title' => array(
        'title' => 'Blog Title'
        ),
    'body' => array(
        'title' => 'Body Text',
        ),
    'img' => array(
        'title' => 'Image',
        'location' => 'images/blog/',
        'type' => 'image'
        ),
    'tags' => array(
        'title' => 'Tags',
        ),
    ),
'edit_fields' => array(
    'title' => array(
        'title' => 'Blog Title',
        'type' => 'text'
        ),
    'body' => array(
            'type' => 'textarea',
            'title' => 'Body Text',
            'height' => 130, //optional, defaults to 100
        ),
    'img' => array(
        'title' => 'Image',
        'location' => 'images/blog/',
        'type' => 'image'
        ),
    'tags' => array(
        'title' => 'Tags',
        'type' => 'text'
        ),
    ),
);
