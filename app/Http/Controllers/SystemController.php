<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Jobs\UpdateJavascriptTruthFile; 

class SystemController extends Controller
{
     /**
     * Display the  index.
     *
     * @return Response
     */
    public function index()
    {
    	$job = new UpdateJavascriptTruthFile;

      $this->dispatch($job);

      return 'done d';
    }

}
