<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Pdf extends Model
{
  /**
   * The database table used by the model.
   *
   * @var string
   */
  protected $table = 'pdf';

  /**
   * The attributes that are mass assignable.
   *
   * @var array
   */
  protected $fillable = [
  	'name', 
  	'company_name', 
		'company_phone',
		'company_cell',
		'company_fax',
		'company_address',
		'company_email',
		'document_title',
		'title_note',
		'contact_header',
		'details_header',
		'booth_header',
		'payment_header',
		'payment_terms',
		'signing_auth_one',
		'signing_auth_two',
		'signing_terms',
		'rules_header',
		'mailto_header',
		'rules_sub_header',
		'rules',
	];

  public function events()
  {
      return $this->belongsToMany('App\Models\Event', 'events_pdfs');
  }

  

  

  public function customBuild($data, $event, $useforms)
  {
  	if($useforms=='true'){$useforms=true;}else{$useforms=false;};
  
    $year = date('Y', strtotime($event->date) );
    $fileName = 'HomeAndGadgetExpo_'.$event->city.'('.$event->season.'_'.$year.').pdf';

    return \PDF::loadView('pdf.application', $data)
      ->setOption('enable-forms', $useforms)
      ->setOption('no-print-media-type', false)
      ->setOption('disable-smart-shrinking', true)
      ->setOption('run-script', "<script>alert('hi')</script>")
      ->setOption('javascript-delay', 1000)
      ->setOption('checkbox-checked-svg', base_path().'/images/check.svg')
      ->setOption('checkbox-svg', base_path().'/images/check.svg')
      ->setOption('footer-left', 'Initials_________  Date_________')
      ->setOption('footer-right', '[page]/[topage] ')
      ->setOption('margin-top', 3)
      ->setOption('margin-right', 2)
      ->setOption('margin-bottom', 8)
      ->setOption('margin-left', 2)
      ->save('files/'.preg_replace('/\s+/', '',$fileName), true)
      ->inline(preg_replace('/\s+/', '',$fileName));
  }
}
