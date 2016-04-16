<?php 

namespace App\Http\Controllers;

use App\Facility;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use Storage;
use Excel;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Intervention\Image;

class FacilityController extends Controller {

	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function index(Facility $facilities)
	{
		$facilities = $facilities->with('users.profile', 'users.employeeInfo')->get();
		//dd($facilities);
		return view('.pages.facility.directory', compact('facilities'));
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
	 * @return Response
	 */
	public function store()
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
	 * @param  int  $id
	 * @return Response
	 */
	public function update($id)
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
	 * Upload resource files.
	 *
	 * @param  Request $uploading, Response $response
	 * @return Response
	 */
	public function fileUpload(Request $request, Response $response)
	{
		$file = $request->file('file');
		$path = 'facility/documents/';
		$folder = Storage::disk('localPublic');
		$folder->makeDirectory($path);

		$name = time().'-'.$file->getClientOriginalName();

		$file->move($path, $name);

		Excel::load($path.$name, function($reader) {
			$results = $reader->get();
			dd($results->toArray());
		});

		return $folder->files($path);
	}

}
