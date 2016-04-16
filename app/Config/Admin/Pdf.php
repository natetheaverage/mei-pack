<?php

return array(

'title' => 'Dynamic Pdfs',

'single' => 'Dynamic Pdf',

'model' => 'App\Models\Pdf',

'form_width' => 800,

'columns' => array(
    'name' => array(
        'title' => 'Name',
        ),
    ),

'edit_fields' => array(
    'name' => array(
        'title' => 'Name',
        'type' => 'text',
        ),
    'company_name' => array(
        'title' => 'Company Name',
        'type' => 'text'
        ),
    'company_phone' => array(
        'title' => 'Company Phone',
        'type' => 'text'
        ),
    'company_cell' => array(
        'title' => 'Company Cell',
        'type' => 'text'
        ),
    'company_fax' => array(
        'title' => 'Company Fax',
        'type' => 'text'
        ),
    'company_address' => array(
        'title' => 'Company Address',
        'type' => 'text'
        ),
    'company_email' => array(
        'title' => 'Company Email',
        'type' => 'text'
        ),
    'document_title' => array(
        'title' => 'Document Title',
        'type' => 'text'
        ),
    'title_note' => array(
        'title' => 'Company Name',
        'type' => 'text'
        ),
    'contact_header' => array(
        'title' => 'Company Name',
        'type' => 'text'
        ),
	'details_header' => array(
        'title' => 'details header',
        'type' => 'text'
        ),
	'booth_header' => array(
        'title' => 'booth header',
        'type' => 'text'
        ),
    'payment_header' => array(
        'title' => 'payment header',
        'type' => 'text'
        ),
    'billing_text_one' => array(
        'title' => 'Billing Option One',
        'type' => 'text'
        ),
	'billing_text_two' => array(
        'title' => 'Billing Option Two',
        'type' => 'text'
        ),
	'signing_auth_one' => array(
        'title' => 'signing auth begining',
        'type' => 'textarea'
        ),
	'signing_auth_two' => array(
        'title' => 'signing autherize end',
        'type' => 'textarea'
        ),
	'mailto_header' => array(
        'title' => 'Mail to Header',
        'type' => 'text'
        ),
	'payment_terms' => array(
        'title' => 'payment terms',
        'type' => 'textarea'
        ),
	'signing_terms' => array(
        'title' => 'signing terms',
        'type' => 'textarea'
        ),
	'rules_header' => array(
        'title' => 'rules_header',
        'type' => 'text'
        ),
	'rules_sub_header' => array(
        'title' => 'rules sub header',
        'type' => 'text'
        ),
	'rules' => array(
        'title' => 'Rules',
        'type' => 'wysiwyg'
        ),
    'events' => array(
        'title' => 'Event',
        'type' => 'relationship',
        'name_field' => 'name'
        ),
    ),
);


			
			