<?php

return array(

'title' => 'Tickets',

'single' => 'Ticket',

'model' => 'App\Models\Ticket',

'columns' => array(
    'order_column' => array(
        'title' => 'Order',
    ),
    'tag_line' => array(
        'title' => 'Name',
        'type' => 'text',
        ),
    'name' => array(
        'title' => 'Label',
        ),
    'price' => array(
        'title' => 'Price',
        'output' => '$(:value).00',
        ),
    'description' => array(
        'title' => 'Details',
        ),
    ),

'edit_fields' => array(
    'tag_line' => array(
        'title' => 'Name',
        'type' => 'text',
    ),
    'name' => array(
        'title' => 'Label',
        'type' => 'text',
        ),
    'price' => array(
        'type' => 'number',
        'title' => 'Price',
        'symbol' => '$', //optional, defaults to ''
        'decimals' => 2, //optional, defaults to 0
        'thousands_separator' => ',', //optional, defaults to ','
        'decimal_separator' => '.', //optional, defaults to '.'
        ),
    'description' => array(
        'title' => 'Details',
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
