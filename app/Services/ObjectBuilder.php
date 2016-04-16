<?php

namespace App\Services;

use App\Models\InterfaceObjects\InterfaceObject;
use App\Models\Users\User;
use Gate;

class ObjectBuilder {
     
    public function collectionOf($collectionData)
    {
        $g = ''.$collectionData[0];
        $h = ''.$collectionData[1];
        return $this->$g($h) ;
    }


    /*
    * Handels the navigation collection of the InterfaceObjects Model
    * needs sub collection name passed through
    * Requires InterfaceObject
    */
   public function navpage($menuName)
   {
        $navPageItems = InterfaceObject::where('menu_name', $menuName)->get();
        
        return $navPageItems;
   }

    public function navigation($menuName){

        $baseObjects = InterfaceObject::where('owner_type', $menuName)->get();
        $i=0;
        $tier1=[];
        $tier2=[];
        $tier3=[];

        $tier1Collection = $baseObjects->where('menu_name', $menuName);

        foreach($tier1Collection as $object)
        {
            //if(Gate::allows('view-interfaceobject-'.$object->id))
            //{
                
                $tier1[$i] = $object;
                if($object->value === 'isFirstFolder')
                {
                    $j=0;
                    $tier2Collection = $baseObjects->where('menu_id', $object->id);

                    foreach($tier2Collection as $tier2Object)
                    {
                        //if(Gate::allows('view-interfaceobject-'.$tier2Object->id))
                        //{
                            $tier2[$j] = $tier2Object;
                            if($tier2Object->value === 'isSecondFolder')
                            {
                                $k=0;
                                $tier3Collection = $baseObjects->where('menu_id', $tier2Object->id);
                                foreach($tier3Collection as $tier3Object)
                                {
                                    //if(Gate::allows('view-interfaceobject-'.$tier3Object->id))
                                    //{
                                        $tier3[$k] = $tier3Object;
                                        $k++;
                                    //}
                                }
                                $tier2[$j]['submenu'] =  $tier3 ; $tier3 = [];
                            }
                            $j++;
                        //}
                    }
                    $tier1[$i]['submenu'] =  $tier2 ; $tier2 = [];

                }
                $i++;
            //}

        };
        return $tier1;
    }
}