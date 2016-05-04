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
// Route::get('/redis', function(){
//   $data=[
//     'event' => 'thisHappened',
//     'data' => [
//       'userName' => 'Nathan',
//       'message' => 'this be nuts'
//     ]
//   ];
//   Redis::publish('message-channel', json_encode($data));
// });

Route::get('job', 'SystemController@index');

Route::auth();

//Route::get('/home', 'HomeController@index');

Route::get('/', function () {
  $user = \Auth::user();
  $theme = config('app.theme');

  \JavaScript::put([
    'currentUser' => $user,
    'vueRoute' => '/',
    'theme' => $theme,
  ]);
  return view('welcome', compact('user', 'theme'));
});

Route::get('/options', function () {
  return view('front.home');
});
Route::group(['prefix' => 'dashboard'], function () {
  Route::resource('/profile', 'DashboardController');
  Route::resource('/employees', 'DashboardController');
  Route::resource('/customers', 'DashboardController');
  Route::resource('/inventory', 'DashboardController');
  Route::resource('/components', 'DashboardController');
});
Route::resource('/dashboard', 'DashboardController');

/*
* API Routes
*/
Route::group(['prefix' => 'api'], function () {
  Route::resource('interfaceObjects', 'InterfaceObjectsController');
  Route::resource('mailForm', 'CommunicationsController');

  Route::post('state', function(\Illuminate\Http\Request $request){
    $expiresAt = Carbon\Carbon::now()->addMonths(3);
    Cache::put('state', $request->all(), $expiresAt);
    return 'success';
  });
  Route::get('state', function(){
    $value = Cache::pull('state');
    //dd($value);
    return $value;
  });
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


