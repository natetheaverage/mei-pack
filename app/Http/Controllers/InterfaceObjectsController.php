<?php

namespace App\Http\Controllers;

use App\Http\Requests;
use Illuminate\Http\Request;
use App\Services\ObjectBuilder;
use App\Http\Controllers\Controller;
use App\Models\InterfaceObjects\InterfaceObject;
use Spatie\Permission\Models\Role;


class InterfaceObjectsController extends Controller
{

    public $build;

    public function __construct(ObjectBuilder $build)
    {
        $this->build = $build;
    }

    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        return view('This will be a dump of all the buttons and form fields etc...');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function create()
    {
        // We reffer to Vue to handel this 
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  Request  $request
     * @return Response
     */
    public function store(Request $request, InterfaceObject $object)
    {
        if(\Gate::allows('edit-bosspos')){
            $newButton = $object->create($request['newButton']);
           
            if($newButton)
            {
                $newButton = $object->whereType('navigation')->get();
                return $newButton->last();
            }
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return Response
     */
    public function show($collectionData)
    {
        $collectionData = explode('.', $collectionData);

        $menu = $this->build->collectionOf($collectionData);
        
        return $menu;
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
        $user = \Auth::user();
        if($user->hasRole('admin')){
            $object = InterfaceObject::find($id);
            $array = $request->all();
            foreach($array['objectData'] as $requestData){
                $object[$requestData['name']] = $requestData['value']; 
            }
            // $object->href           = $button['href'];
            // $object                 = $request->all();
            // $object->icon           = $button['icon'];
            // $object->label          = $button['label'];
            // $object->value          = $button['value'];
            // $object->name           = $button['name'];
            // $object->menu_id        = $button['menu_id'];
            // $object->menu_name      = $button['menu_name'];
            // $object->menu_order     = $button['menu_order'];
            // $object->family         = $button['family'];
            // $object->type           = $button['type'];
            // $object->owner_id       = $button['owner_id'];
            // $object->owner_type     = $button['owner_type'];
            

            if( $object->save() )
            {
                $saved = $object->find($id);
                return $saved;//$newButton->last();//$object->save($request->all()//$request->all();
            }
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return Response
     */
    public function destroy($id)
    {
        return InterfaceObject::destroy($id);
    }
}
