<?php

return array(

'title' => 'Discounts',

'single' => 'Discount',

'model' => 'App\Models\Discount',

'columns' => array(
    'order_column' => array(
        'title' => 'Order',
    ),
    'tag_line' => array(
        'title' => 'Name',
    ),
    'name' => array(
        'title' => 'Lable',
        'type' => 'text',
        ),
    'type' => array(
        'title' => 'Type',
        ),
    'amount' => array(
        'title' => 'Amount',
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
    'type' => array(
        'title' => 'Type',
        'type' => 'text',
        ),
    'amount' => array(
        'type' => 'number',
        'title' => 'Amount',
        'symbol' => '%', 
        ),
    'description' => array(
        'title' => 'Details',
        'type' => 'text',
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
