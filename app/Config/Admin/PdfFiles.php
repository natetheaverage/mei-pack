<?php

return array(

'title' => 'PdfFiles',

'single' => 'PdfFile',

'model' => 'App\Models\PdfFile',
 
'columns' => array(
    'order_column' => array(
        'title' => 'Order',
    ),
    'label' => array(
        'title' => 'Label'
        ),
    'link' => array(
        'title' => 'PDF',
        'output' => '<a href="/files/(:value)" target="_blank">Veiw in a seperate tab</a>',
        ),
    'event' => array(
        'title' => 'Event',
        'relationship' => 'event',
        'select' => "(:table).name",
        ),
    ),


'edit_fields' => array(
    'label' => array(
        'title' => 'Label',
        'type' => 'text'
        ),
    'link' => array(
        'title' => 'PDF',
        'type' => 'file',
        'naming' => 'keep',
        'size_limit' => 6,
        'location' => 'files/',
        ),
    'event' => array(
        'title' => 'event',
        'type' => 'relationship',
        'name_field' => 'name',
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

            'action' => function(&$model){
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
