<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Spatie\EloquentSortable\Sortable;
use Spatie\EloquentSortable\SortableTrait;

class Event extends Model
{

  use SortableTrait;

    public $sortable = [
        'order_column_name' => 'order_column',
        'sort_when_creating' => true,
    ];

	/**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'events';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
    'name',
		'city',
		'state',
		'details',
		'season',
		'date',
		'venue',
		'street',
		'zip',
		'features',
		'dates',
		'selected',
		'event_bright',
		'tickets',
		'parking',
    'prices',
    'application_id',
		'pdf_id',
    'order_column', 
    ];
 
    /* 
   * Builds event object with relations and sorted extras
   *
   * @return $event
   */
    public function buildAll(){
 
      $events = $this->with(['dates','prices', 'pdf', 'discounts', 'tickets', 'features'])
        ->orderBy('order_column', 'asc')
        ->get(); 
      foreach ($events as $key => $event) {
        $events[$key] = $this->setDateAndTimeSpan($event);
        $events[$key] = $this->setLatitudeAndLongitude($event);
      }
      return $events;
    }

  /* 
   * Builds event object with relations and sorted extras
   *
   * @return $event
   */
    public function buildOne($id=null){
 
      $event = $this
        ->with(['dates','prices', 'pdf', 'discounts'])
        ->whereId($id)
        ->first(); 
      $event = $this->setDateAndTimeSpan($event);
      return $event;
    }

  /* 
   * Returns $event object attached 'startDate' & 'endDate' variables 
   * as numbers with post fix (e.g. 10th, 2nd, 23rd)
   *
   * @var $event
   * @return $event
   */
  public function setDateAndTimeSpan($event)
  {
    $dates = $event->dates()->orderBy('order_column', 'asc')->get();
    $event['startDate'] = date( 'jS', strtotime( $dates->shift()->date ));
    $event['endDate'] = date('jS', strtotime($dates->pop()->date) );
    return $event;
  }

  /* 
   * Returns $event object attached 'startDate' & 'endDate' variables 
   * as numbers with post fix (e.g. 10th, 2nd, 23rd)
   *
   * @var $event
   * @return $event
   */
  public function setLatitudeAndLongitude($event)
  {
    $address = $event->venue.', '.$event->street.', '.$event->city.', '.$event->state.', '.$event->zip ;
    $latlong = \Geocoder::getCoordinatesForQuery($address);
    $event['latitude'] = $latlong['lat'];
    $event['longitude'] = $latlong['lng'];
    $event['mapAccuracy'] = $latlong['accuracy'];
    return $event;
  }

    public function dates()
    {
        return $this->belongsToMany('App\Models\Date', 'events_dates');
    }
    public function prices()
    {
        return $this->belongsToMany('App\Models\Price', 'events_prices');
    }
    public function tickets()
    {
        return $this->belongsToMany('App\Models\Ticket', 'events_tickets');
    }
    public function features()
    {
        return $this->belongsToMany('App\Models\Feature', 'events_features');
    }
    public function discounts()
    {
        return $this->belongsToMany('App\Models\Discount', 'events_discounts');
    }
    public function pdfFile()
    {
        return $this->belongsTo('App\Models\PdfFile');
    }
    public function pdf()
    {
        return $this->belongsTo('App\Models\Pdf');
    }

}
