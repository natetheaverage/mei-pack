<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Post;
use App\Http\Requests;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class LikeController extends Controller
{
    private $user;
    private $post;
 
    function __construct(Post $post, User $user)
    {
        $this->user = $user;
        $this->post = $post;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        dd('likeController fireing index');
        return [];//, 'accepted_terms'
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
      
            $thisPost = $this->post->find($request['post']);
            $thisUser = $this->user->find($request['user']);
            return $thisUser->likes()->save($thisPost);

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {

        if($user = $this->user->find($id)){

            return $user->getLikesArray($user);

        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @param  int $request
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $thisUser = $this->user->find($request['user']);
        return $thisUser->likes()->detach($id);
    }

    
}
