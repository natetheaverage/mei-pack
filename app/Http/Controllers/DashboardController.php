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
            'currentUser' => \Auth::user(),
            'vueRoute' => 'dashboard'
            ]);
        return view ('layouts.dashboard');

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
            'currentUser' => $this->user->collect('currentUserFull'),
            'vueRoute' => $component
        ]);
        return view ('layouts.dashboard');
    }


}
