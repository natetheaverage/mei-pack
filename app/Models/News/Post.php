<?php

namespace App\Models\News;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\EloquentSortable\Sortable;
use Spatie\EloquentSortable\SortableTrait;

class Post extends Model
{

    use SoftDeletes;
    use SortableTrait;

    /**
    * The attributes that are for sorting .
    *
    * @var array
    */
    public $sortable = [
      'order_column_name' => 'order_column',
      'sort_when_creating' => true,
    ];

    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'posts';

    /**
     * The attributes that should be mutated to dates.
     *
     * @var array
     */
    protected $dates = ['deleted_at'];

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'type', 
        'name', 
        'email', 
        'title',
        'body',
        'photo',
        'reply',
        'approval',
        'accepted_terms',
    ];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [];

    public function tags()
    {
        return $this->belongsToMany('App\Models\Tag');
    }

    public function likes()
    {
        return $this->hasMany('App\Models\User');
    }

    

    public function addTag($tag)
    {
        // check to see if tag exists
        $new = Tag::firstOrCreate($tag);
        if( !$new['name'] )
        {  
            //if not create it and tag the post
            $new->name = $tag['name'];
            $new->type = $tag['type'];
            if( $new->update($tag) ){    
                return $this->tags()->save(
                Tag::whereName($tag['name'])->firstOrFail());
            }
        }
        // if tag exists add to piviot
        return $this->tags()->save(
                Tag::whereName($tag['name'])->firstOrFail());
    } 
}
