<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Storage;
use App\Http\Requests;
use Maatwebsite\Excel\Excel;
use Illuminate\Http\Response;
use App\Http\Controllers\Controller;
use App\Models\Facilities\Inventory;
use App\Models\Facilities\Product;

class InventoryController extends Controller
{

	/**
	 * Create a new controller instance.
	 *
	 * @return void
	 */
	public function __construct()
	{
		$this->middleware('auth');
	}

    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {

        return ['inventories', Product::with('inventory')->take(10)->get()];
		//return view('pages.facility.inventory.complianceCalculatorJsTest');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  Request  $request
     * @return Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  Request  $request
     * @param  int  $id
     * @return Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return Response
     */
    public function destroy($id)
    {
        //
    }

	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function compliance()
	{
		$currentFacility = 1;
		return view('.pages.facility.inventory.complianceCalculator', compact('currentFacility'));//->;
	}

	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function uploadSpreadsheet(Request $request, Response $response, Excel $excel)
	{
		 \JavaScript::put(['usersBasic' => $request ]);
		$file = $request->file('file');
		$path = 'facility/documents/';
		$folder = Storage::disk('localPublic');
		$folder->makeDirectory($path);
		$name = time().'-'.$file->getClientOriginalName();
		$file->move($path, $name);


		$inventories = $excel->load($path.$name, $response, 'UTF-8' );

		/*if($file->getClientOriginalExtension() == 'xls'){
			$item = [];
			$i = 0;
			$inventories->convert('csv');
			foreach($inventories as $row){
				$item->push($i);
				$i++;
			}
			//return 'hi';//$item;
		}*/
		$inventories->convert('csv')->all();
		//return 'hi';
		return $inventories->get();//return $folder->files($path);
	}
}
