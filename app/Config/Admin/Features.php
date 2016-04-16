<?php

return array(

'title' => 'Features',

'single' => 'Feature',

'model' => 'App\Models\Feature',

'form_width' => 600,

'columns' => array(
    'order_column' => array(
        'title' => 'Order',
    ),
    'title' => array(
        'title' => 'Title',
        ),
    'sub_title' => array(
        'title' => 'Sub Title',
        ),
    'img' => array(
        'title' => 'Image',
        'output' => '<img src="/images/cta3/(:value)" height="100px"/>',
        ),
    'description' => array(
        'title' => 'Description',
        ),
    'link' => array(
        'title' => 'Calandar Link',
        'output' => '<a href="(:value)"  target="_blank">(:value)</a>',
        ),
    'button_label' => array(
        'title' => 'Button Label',
        ),
    ),

'edit_fields' => array(
    'title' => array(
        'title' => 'Title',
        'type' => 'text',
        ),
    'sub_title' => array(
        'title' => 'Sub Title',
        'type' => 'text',
        ),
    'img' => array(
        'title' => 'Image',
        'type' => 'image',
        'location' => './images/cta3/',
        ),
    'description' => array(
        'title' => 'Description',
        'type' => 'wysiwyg',
        ),
    'link' => array(
        'title' => 'Calandar Link',
        'type' => 'text',
        ),
    'button_label' => array(
        'title' => 'Button Label',
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
