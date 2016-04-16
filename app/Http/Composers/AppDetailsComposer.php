<?php 

namespace App\Http\Composers;

use Carbon\Carbon;
use Illuminate\Contracts\View\View;

class AppDetailsComposer {

    public function repo(View $view)
    {

		/*
		 *  TODO make system wide vars
		 */
		$app = [
			'title' => env('COMPANY_NAME'), 
			'date' => new Carbon(),
			'metaDescription' => 'this app blaa blaa',
			'metaKeywords' => 'this app blaa blaa',

			// Layout
			'theme' => env('THEME'),
			'header' => env('THEME'),
			'leftNav' => env('THEME'),
			'aside' => env('THEME'),
			'footer' => env('THEME'),
		];
        $view->with('app', $app);
    }


}