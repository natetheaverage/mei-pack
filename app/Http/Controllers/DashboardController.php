<?php 

namespace App\Http\Controllers;

use App\Models\Users\User;
use Illuminate\Support\Facades\Session;
use Symfony\Component\HttpFoundation\Response;

class DashboardController extends Controller {

    public $user;

	/**
	 * Create a new controller instance.
	 *
	 * @return void 
	 */
	public function __construct(User $user)
	{
		$this->middleware('auth');
        $this->user = $user;
		//$this->middleware('repo.user');
	}

    /**
     * Show the application dashboard to the user.
     *
     * @return Response
     */
    public function index()
    {
		//$savedClasses = InterfaceObject::find(3)->objectClasses;
        //flash()->error('This is a message!', 'hey!!', 'floating')->timer(5000);
		//dd(Session::get('currentUser'));
       \JavaScript::put([
            'editMode' => 1, 
            'currentUser' => \Auth::user(),//Session::get('currentUser'),
            'vueRoute' => 'dashboard'
            ]);
        //$session = Session::get('currentUser');
        return view ('layouts.dashboard', compact('session'));

    }
 
    /**
     * Display the specified resource.
     *
     * @param  vue-router component $component
     * @return $component
     */
    public function show($component)
    {
        \JavaScript::put([
            'editMode' => 1, 
            'currentUser' => $this->user->collect('currentUserFull'),//Session::get('currentUser'),
            'vueRoute' => $component
            ]);
        $session = Session::get('currentUser');
        return view ('layouts.dashboard', compact('session'));
    }


}
