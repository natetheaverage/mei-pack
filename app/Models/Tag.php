<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{
    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'tags';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 
        'type', 
    ];

    public function posts()
    {
        return $this->belongsToMany('App\ModelsPost');
    }

    public function validateAndCreate(Array $tags)
    {
        $tagIdArray=[];
        foreach ($tags as $key => $value) {
            $newTag = Tag::firstOrCreate($value);
            
            if( $newTag['name'] == null )
            {
                $newTag->name = $value['name'];
                $newTag->type = $value['type'];
                $newTag->update();
            }else{
                $newTag; 
            }
            $tagIdArray[$key] = $newTag['id'];
        }
        return $tagIdArray;
    }
}
