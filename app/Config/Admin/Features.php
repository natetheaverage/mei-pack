<?php

return array(

'title' => 'Features',

'single' => 'Feature',

'model' => 'App\Models\Details\Feature',

'form_width' => 600,

'columns' => array(
    'order_column' => array(
        'title' => 'Order',
    ),
    'title',
    'content',
    'img' => array(
        'title' => 'Image',
        'output' => '<img src="/images/features/(:value)" height="100px"/>',
        ),
    'link' => array(
        'title' => 'Link',
        'output' => '<a href="(:value)" target="_blank">(:value)</a>',
        ),
    'icon' => array(
        'title' => 'Icon',
        ),
    'parent' => array(
        'title' => 'Parent',
        ),
    ),

'edit_fields' => array(
    'title' => array(
        'title' => 'Title',
        'type' => 'text',
        ),
    'content' => array(
        'title' => 'Content',
        'type' => 'wysiwyg',
        ),
    'img' => array(
        'title' => 'Image',
        'type' => 'image',
        'location' => './images/features/',
        ),
    'icon' => array(
        'title' => 'Icon',
        'type' => 'text',
        ),
    'link' => array(
        'title' => 'Link',
        'type' => 'text',
        ),
    'parent' => array(
        'title' => 'Parent',
        'type' => 'text',
        ),
    'events' => array(
        'title' => 'Event',
        'type' => 'relationship',
        'name_field' => 'name'
        ),
    ),

/**
     * This is where you can define the model's custom actions
     */
    'actions' => array(

        //Clearing the site cache
        'order_up' => array(
            'title' => 'Move Up',

            'messages' => array(
                'active' => 'Saving new Order',
                'success' => "couldn't move object order",
                'error' => 'There was an error while moving the object',
            ),
            //the settings data is passed to the function and saved if a truthy response is returned
            'action' => function(&$model)
            {
                return $model->moveOrderUp();
            }
        ),

        'order_down' => array(
            'title' => 'Move Down',

            'messages' => array(
                'active' => 'Saving new Order',
                'success' => "couldn't move object order",
                'error' => 'There was an error while moving the object',
            ),
            
            'action' => function(&$model){
                return $model->moveOrderDown();
            }
        )
    )
);
