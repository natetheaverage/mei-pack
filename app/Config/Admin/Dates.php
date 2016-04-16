<?php

return array(

'title' => 'Event Dates',

'single' => 'Event Date',

'model' => 'App\Models\Date',

'columns' => array(
    'order_column' => array(
        'title' => 'Order',
    ),
    'tag_line' => array(
        'title' => 'Name',
        'type' => 'text',
    ),
    'events' => array(
        'title' => 'Event',
        'relationship' => 'events',
        'select' => "(:table).name",
    ),
    'date' => array(
        'title' => 'Date',
        'output' => function($value){
            $d=strtotime($value);
            return date('m-d-Y', $d);
        }
    ),
    'start' => array(
        'title' => 'Start Time',
        'type' => 'time',
        'time_format' => 'HH:mm', //optional, will default to this value
    ),
    'end' => array(
        'title' => 'End Time',
        'type' => 'time',
        'time_format' => 'hh:mm', //optional, will default to this value
        ),
    'link' => array(
        'title' => 'Calandar Link',
        'output' => '<a href="(:value)" target="_blank">Calendar Link</a>',
    ),
),

'edit_fields' => array(
    'tag_line' => array(
        'title' => 'Name',
        'type' => 'text',
    ),
    'date' => array(
        'title' => 'Date',
        'type' => 'date',
    ),
    'start' => array(
        'title' => 'Start Time',
        'type' => 'time'
    ),
    'end' => array(
        'title' => 'End Time',
        'type' => 'time'
        ),
    'link' => array(
        'title' => 'Calandar Link',
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
