<?php

namespace App\Http\Controllers;

use App\Models\InterfaceObjects\CopyText;
use Illuminate\Http\Request;
use App\Http\Requests;

class CopyTextController extends Controller
{
   public $copyText;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(CopyText $copyText)
    {
        //$this->middleware('auth');
        $this->copyText = $copyText;
    }

    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        return ['CopyTexts', $this->copyText->all()];
    }

    /**
     * Store a newly created resource in storage.
     *
     * @return Response
     */
    public function store(Request $request)
    {
        $newCopyText = $this->request->all();
        $this->copyText->create($newCopyText);
        return $this->copyText->all();
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  int  $id
     * @return Response
     */
  public function update($id, Request $request)
  {
    $copyText = $request->all();
    $existingRow = $this->copyText->
      where('parent_name', $copyText['data']['parent_name'])->
      where('instance_number', $copyText['data']['instance_number'])->
      get(); 

    if($existingRow->count() > 0){

      $this->copyText->where('id', $copyText['data']['id'])->update($copyText['data']);
      
    }else{
      $this->copyText->create($copyText['data']);
    }
    return $this->copyText->all();
  }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return Response
     */
    public function destroy($id, Request $request)
    {
        $copyText = $this->request->all();
        $this->copyText->where('id', $copyText['id'])->delete();
        return $this->copyText->all();
    }

}
