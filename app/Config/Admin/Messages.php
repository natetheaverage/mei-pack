<?php

return array(

'title' => 'Messages',

'single' => 'Message',

'model' => 'App\Models\Communications\Message',

'form_width' => 1200,

'columns' => array(
    'name' => array(
        'title' => 'Name',
        ),
    'email' => array(
        'title' => 'Email',
        ),
    'subject' => array(
        'title' => 'Subject',
        ),
    'message' => array(
        'title' => 'Message',
        ),
    ),

'edit_fields' => array(
    'name' => array(
        'title' => 'Name',
        'type' => 'text',
        ),
    'email' => array(
        'title' => 'Email',
        'type' => 'text',
        ),
    'subject' => array(
        'title' => 'Subject',
        'type' => 'textarea',
        ),
    'message' => array(
        'title' => 'Message',
        'type' => 'textarea',
        ),
    ),
);
