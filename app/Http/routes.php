<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/
Route::get('auth/login', 'Auth\AuthController@getLogin');
Route::post('auth/login', 'Auth\AuthController@postLogin');
Route::get('auth/logout', 'Auth\AuthController@logout');

// Registration routes...
Route::get('auth/register', 'Auth\AuthController@getRegister');
Route::post('auth/register', 'Auth\AuthController@postRegister');

Route::get('/', function () {
  \JavaScript::put([
    'editMode' => 1, 
    'currentUser' => Session::get('currentUser'),
    'vueRoute' => 'welcome'
  ]);
  return view('welcome');
});

Route::get('/options', function () {
  return view('front.home');
});

Route::resource('/dashboard', 'DashboardController');

/*
* API Routes
*/
Route::group(['prefix' => 'api'], function () {
  Route::resource('interfaceObjects', 'InterfaceObjectsController');
  //Route::resource('conversations', 'ConversationController');
  //Route::resource('messages', 'MessageController');
  //Route::resource('projects', 'ProjectController');
  //Route::resource('tasks', 'TaskController');
  //Route::resource('inventories', 'InventoryController');
  //Route::resource('employees', 'EmployeeController');
  //Route::resource('customers', 'CustomerController');
  Route::resource('copyText', 'CopyTextController');
  Route::resource('feature', 'FeaturesController');
  //Route::get('tag', function(){
  //   $tags = App\Models\Tag::all();
  //   return $tags;
  // });
  // Route::post('images/upload', 'PostController@tempPhotos');
  // Route::resource('like', 'LikeController');
  // Route::resource('post', 'PostController');
});


Route::get('/faq', function () {
  // return view('legal/faq');
});
Route::get('/terms', function () {
  // return view('legal/terms');
});
Route::get('/copywrite', function () {
  // return view('legal/copywrite');
});
Route::get('/privacy-policy', function () {
  // return view('legal/privacy-policy');
});
