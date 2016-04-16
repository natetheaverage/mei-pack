<?php

namespace App\Http\Composers;

class JsCssComposer {


	
	


	public function loadCoreJs()
	{
		return array(
			'jquery' => 'js/jquery-2.1.1.min.js',
			'jquery-ui' => 'packages/frozennode/administrator/js/jquery/jquery-ui-1.10.3.custom.min.js',
			'customscroll' => 'packages/frozennode/administrator/js/jquery/customscroll/jquery.customscroll.js',
		);
	}


}