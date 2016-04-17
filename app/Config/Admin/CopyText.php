<?php

return array(

'title' => 'Site Copy Text',

'single' => 'Site Copy',

'model' => 'App\Models\InterfaceObjects\CopyText',

'form_width' => 600,

'columns' => array(
    'id',
    'copy',
    'base_view',
    'instance_number',
    ),

'edit_fields' => array(
    'id' => array(
        'title' => 'ID',
        'type' => 'text'
        ),
    'copy' => array(
        'title' => 'Copy Text',
        'type' => 'wysiwyg'
        ),
    'base_view' => array(
        'title' => 'Base View',
        'type' => 'text'
        ),
    'instance_number' => array(
        'title' => 'Instance number',
        'type' => 'text'
        ),
    'parent_name' => array(
        'title' => 'Parent name',
        'type' => 'text'
        ),
    'height' => array(
        'title' => 'Height',
        'description' => '(in rows eg 2)',
        'type' => 'number'
        ),
    ),
);
