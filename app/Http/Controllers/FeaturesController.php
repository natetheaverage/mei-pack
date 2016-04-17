<?php

namespace App\Http\Controllers;

use App\Models\Details\Feature;
use Illuminate\Http\Request;
use App\Http\Requests;

class FeaturesController extends Controller
{
   public $feature;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(Feature $feature)
    {
        //$this->middleware('auth');
        $this->feature = $feature;
    }

    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {

        return ['Features', $this->feature->all()];
    }

    /**
     * Store a newly created resource in storage.
     *
     * @return Response
     */
    public function store(Request $request)
    {
        $newFeature = $this->request->all();
        $this->feature->create($newFeature);
        return $this->feature->all();
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  int  $id
     * @return Response
     */
    public function update($id, Request $request)
    {
        $feature = $request->all();
        //dd($feature);
        $existingRow = $this->feature->where('id', $feature['data']['id'])->get(); 
        if($existingRow->count() > 0){
            $this->feature->where('id', $feature['data']['id'])->update($feature['data']);
        }else{
            $this->feature->create($feature['data']);
        }
        //$this->feature->create($feature);
        //$this->feature->firstOrNew($feature['data']);
        //$this->feature->update($feature['data']);
        return $this->feature->all();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return Response
     */
    public function destroy($id, Request $request)
    {
        $feature = $this->request->all();
        $this->feature->where('id', $feature['id'])->delete();
        return $this->feature->all();
    }

}
