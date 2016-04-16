<?php

return array(

'title' => 'Site Copy Text',

'single' => 'Site Copy',

'model' => 'App\Models\CopyText',

'columns' => array(
    'title' => array(
        'title' => 'Section',
        ),
    'content' => array(
        'title' => 'Text',
        ),
    'image' => array(
        'title' => 'Image',
        'type' => 'image'
        ),
    ),

'edit_fields' => array(
    'title' => array(
        'title' => 'Section',
        'type' => 'text'
        ),
    'content' => array(
        'title' => 'Text',
        'type' => 'text'
        ),
    'img' => array(
        'title' => 'Image',
        'location' => 'images/',
        'type' => 'image'
        ),
    ),
);
