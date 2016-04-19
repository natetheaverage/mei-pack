## MEi Web Stack



## We use Laravel as our PHP framework
Documentation for the framework can be found on the [Laravel website](http://laravel.com/docs).
[![Build Status](https://travis-ci.org/laravel/framework.svg)](https://travis-ci.org/laravel/framework)
[![Total Downloads](https://poser.pugx.org/laravel/framework/d/total.svg)](https://packagist.org/packages/laravel/framework)
[![Latest Stable Version](https://poser.pugx.org/laravel/framework/v/stable.svg)](https://packagist.org/packages/laravel/framework)
[![Latest Unstable Version](https://poser.pugx.org/laravel/framework/v/unstable.svg)](https://packagist.org/packages/laravel/framework)
[![License](https://poser.pugx.org/laravel/framework/license.svg)](https://packagist.org/packages/laravel/framework)


# Laravel Admin stuff
- **FrozenNode Admin** ``http://administrator.frozennode.com/ ``
- **TicketIT** https://github.com/thekordy/ticketit

## We use Vue.js as our front end javascript library
**Visit:** http://Vuejs.org for official docs

## We use Stylus CSS pre-proccessor 
**Visit:** http://stylus-lang.com for official docs

### Other Components
- **Spatie/laravel Components:** https://spatie.be/opensource/laravel
	- spatie backup	https://docs.spatie.be/laravel-backup/v3/introduction
	- spatie permissions https://github.com/spatie/laravel-permission
- **laracast Utitlities** https://github.com/laracasts/PHP-Vars-To-Js-Transformer

# Data backups
- **iseed seed maker** https://github.com/orangehill/iseed
- **backup-manager** https://github.com/backup-manager/laravel

# File handeling
barryvdh snappy pdf/image creator https://github.com/barryvdh/laravel-snappy
Intervention Image control http://image.intervention.io/

```php
'providers' => [
    '...',
		Spatie\Geocoder\GeocoderServiceProvider::class,
		Spatie\EloquentSortable\SortableServiceProvider::class,
		Spatie\LaravelAnalytics\LaravelAnalyticsServiceProvider:class,
		Spatie\Backup\BackupServiceProvider::class,
		Spatie\Permission\PermissionServiceProvider::class,
		Spatie\Activitylog\ActivitylogServiceProvider:class,
		Barryvdh\Snappy\ServiceProvider::class,
		Intervention\Image\ImageServiceProvider::class,
		Laracasts\Utilities\JavaScript\JavaScriptServiceProvider::class,
		BackupManager\Laravel\Laravel5ServiceProvider::class,
		Kordy\Ticketit\TicketitServiceProvider::class
	)
```


```php
'aliases' => array(
    ...
    'Geocoder' => Spatie\Geocoder\GeocoderFacade::class,
    'LaravelAnalytics' => Spatie\LaravelAnalytics\LaravelAnalyticsFacade::class,
    'Activity' => Spatie\Activitylog\ActivitylogFacade::class,
    'PDF' => Barryvdh\Snappy\Facades\SnappyPdf::class,
		'SnappyImage' => Barryvdh\Snappy\Facades\SnappyImage::class,
		'InterventionImage' => Intervention\Image\Facades\Image::class
)
```

Run - vendor:publish it will do these automatic:
```php
	"php artisan vendor:publish --provider="Spatie\LaravelAnalytics\LaravelAnalyticsServiceProvider"
	"php artisan vendor:publish --provider="Spatie\Backup\BackupServiceProvider"
	"php artisan vendor:publish --provider="Spatie\Permission\PermissionServiceProvider" --tag="migrations"
	"php artisan vendor:publish --provider="Spatie\Permission\PermissionServiceProvider" --tag="config"
	"php artisan vendor:publish --provider="Spatie\Activitylog\ActivitylogServiceProvider" --tag="migrations"
	"php artisan vendor:publish --provider="Intervention\Image\ImageServiceProviderLaravel5"
	"php artisan config:publish intervention/image"
	php artisan vendor:publish --provider="BackupManager\Laravel\Laravel5ServiceProvider"

```

Next, the \Spatie\Authorize\Middleware\Authorize::class-middleware must be registered in the kernel:
```php
//app/Http/Kernel.php
protected $routeMiddleware = [
  ...
  'can' => \Spatie\Authorize\Middleware\Authorize::class,

];
```
Naming the middleware can is just a suggestion. You can give it any name you'd like.


```php
/*
 * You need to download a p12-certifciate from the Google API console
 * Be sure to store this file in a secure location.
 * READ CONFIG!!!
 */
```


```php
	Geocoder::getCoordinatesForQuery('Infinite Loop 1, Cupertino');
/* 
  This function returns an array with keys
  "lat" =>  37.331741000000001
  "lng" => -122.0303329
  "accuracy" => "ROOFTOP"
*/
```

```php
use Spatie\EloquentSortable\Sortable;
use Spatie\EloquentSortable\SortableTrait;

class MyModel extends Eloquent implements Sortable
{

    use SortableTrait;

    public $sortable = [
        'order_column_name' => 'order_column',
        'sort_when_creating' => true,
    ];

    ...
}
```



