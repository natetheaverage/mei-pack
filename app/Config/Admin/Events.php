<?php

return array(

'title' => 'Events',

'single' => 'Event',

'model' => 'App\Models\Event',

'form_width' => 600,

'columns' => array(
    'order_column' => array(
        'title' => 'Order',
    ),
    'name' => array(
        'title' => 'Event Name',
    ),
    'date' => array(
        'title' => 'Date',
    ),
    'event_bright' => array(
        'title' => 'Event Bright Link',
        'output' => '<a href="(:value)" target="_blank">(:value)</a>',
    ),
),

'edit_fields' => array(
    'name' => array(
        'title' => 'Event Name',
        'type' => 'text'
        ),
    'city' => array(
        'title' => 'City',
        'type' => 'text'
        ),
    'state' => array(
        'title' => 'State',
        'type' => 'text'
        ),
    'season' => array(
        'title' => 'Season',
        'type' => 'enum',
        'options' => array('Winter', 'Spring', 'Summer', 'Fall'),
        ),
    'date' => array(
        'title' => 'Date',
        'type' => 'date',
        'format' => 'mm-dd-yyyy',
        ),
    'details' => array(
        'title' => 'Details',
        'type' => 'wysiwyg'
        ),
    
    'event_bright' => array(
        'title' => 'EventBright',
        'type' => 'text',
        ),
    'venue' => array(
        'title' => 'Venue',
        'type' => 'text'
        ),
    'street' => array(
        'title' => 'Street',
        'type' => 'text'
        ),
    'zip' => array(
        'title' => 'Zip',
        'type' => 'number',
        'thousands_separator' => '', //optional, defaults to ','
        ),
    'parking' => array(
        'title' => 'Parking Note',
        'type' => 'text'
        ),
    'features' => array(
        'title' => 'Features',
        'type' => 'relationship',
        'name_field' => 'title',
        ),
    'prices' => array(
        'title' => 'Prices',
        'type' => 'relationship',
        'name_field' => "tag_line"
        ),
    'discounts' => array(
        'title' => 'Discounts',
        'type' => 'relationship',
        'name_field' => 'tag_line',
        ),
    'tickets' => array(
        'title' => 'Tickets',
        'type' => 'relationship',
        'name_field' => 'tag_line',
        ),
    'dates' => array(
        'title' => 'Days',
        'type' => 'relationship',
        'name_field' => 'tag_line',
        ),
    'application' => array(
        'title' => 'Application',
        'type' => 'relationship',
        'name_field' => 'label',
        ),
    'pdf' => array(
        'title' => 'Dynamic PDF',
        'type' => 'relationship',
        'name_field' => 'name',
        ),
    ),

   /**
     * This is where you can define the model's custom actions
     */
    'actions' => array(

        'generate' => array(
            'title' => 'Generate a Pdf',

            'messages' => array(
                'active' => 'Creating PDF...',
                'success' => 'PDF Application Created!',
                'error' => 'There was an error while generating the PDF',
            ),
            //the settings data is passed to the function and saved if a truthy response is returned
            'action' => function(&$data)
            {
                return redirect('/pdf/'.$data->id);
            }
        ),

        //Clearing the site cache
        'order_up' => array(
            'title' => 'Move Up',

            'messages' => array(
                'active' => 'Saving new Order',
                'success' => "couldn't move object order",
                'error' => 'There was an error while moving the object',
            ),
            //the settings data is passed to the function and saved if a truthy response is returned
            'action' => function(&$data)
            {
                return $data->moveOrderUp();
            }
        ),

        'order_down' => array(
            'title' => 'Move Down',

            'messages' => array(
                'active' => 'Saving new Order',
                'success' => "couldn't move object order",
                'error' => 'There was an error while moving the object',
            ),
            //the settings data is passed to the function and saved if a truthy response is returned
            'action' => function(&$data)
            {
                return $data->moveOrderDown();
            }
        )
    )
);
