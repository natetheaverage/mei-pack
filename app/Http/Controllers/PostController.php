<?php

namespace App\Http\Controllers;

use Gate;
use Mail;
use Storage;
use Carbon\Carbon;
use App\Models\Tag;
use App\Models\Post;
use App\Http\Requests;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Http\Requests\PhotoRequest;
use App\Http\Controllers\Controller;
use App\Http\Requests\CreatePostRequest;

class PostController extends Controller
{
    public $carbon;
    private $image;
    private $post;
    private $tag;

    function __construct(Tag $tag, Carbon $carbon, \InterventionImage $image, Post $post)
    {
        $this->carbon = $carbon;
        $this->image = $image;
        $this->post = $post;
        $this->tag = $tag;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($id)
    {

        
        if( Gate::allows('be-average') ){
            return $this->post
                ->where('id', '>', $id)
                ->take(5)
                ->get(['id','title','body','reply', 'photo', 'approval', 'accepted_terms']);
        } 
        return $this->post
            ->where('approval', 1)
            ->where('id' > $id)
            ->take(5)
            ->get(['id','title','body','reply', 'photo']);//, 'accepted_terms'
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */ 
    public function store(Request $request)
    {
        //$ghost = $this->ghost->loadGhost($request);

        $post = $this->post->create($request['post']);

        //$ghost->posts()->save($post);

        return $post->id;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {

        $post = $this->post->with('tags')->find($id);
        //dd($post);// = unserialize($post->photo);
        return $post;
        //return $this->post->with('tags')->find($id);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
         if( Gate::allows('be-average') ){
            return $this->post
                ->where('id', '>', $id)
                ->take(5)
                ->get(['id','title','body','reply', 'photo', 'approval', 'accepted_terms']);
        } 
        return $this->post
            ->where('approval', 1)
            ->where('id' > $id)
            ->take(5)
            ->get(['id','title','body','reply', 'photo']);//, 'accepted_terms'
    }

    /**
     * Mail to Nate.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  CreatePostRequest $postRequest
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $post = $this->post->find($id);
        $requestData = $request->all()['post'];
        $tagIdArray = $this->tag->validateAndCreate( $requestData['tags'] );
        $post->tags()->sync($tagIdArray);

        if ($requestData->accepted_terms) {
            Mail::send('mail.notify', ['msg' => $requestData], function ($m) use ($requestData)  {

                $m->to('natetheaverage@gmail.com');

                $m->from('natetheaverage@gmail.com', 'MEi App');

                $m->subject('New App post');
            
            });
        }

        if( $post->update( $requestData ) )
        {
            return 'Success';
        } else { return 'ERRrrrRRR Failure'; }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Post::destroy($id);
        return $id;
    }


    /**
     * Store temp photos.
     * Notes available in boss-pos profileController -NTA
     * 
     * @param  int  $request
     * @return \Illuminate\Http\Response
     */
    public function tempPhotos(Request $request, Response $response)
    {
        $publicStorage = Storage::disk('local_post_photos');
        $postId = $request->all();

        $directory = $postId['hook'];
        $publicStorage->makeDirectory($directory);

        $file = $request->file('file');
        
        $extension =$file->getClientOriginalExtension();
        $time = $this->carbon->now()->toDateTimeString();
        $filename = $postId['hook'].'_'.$time.'.'.$extension;
        $upload_success = $image->make($file)->save('./crudimg/'.$directory.'/'.$filename);
        
        // respond
        if( $upload_success ) {
            return $filename;//$response->header('success', 100);
        } else {
            return $response->header('error', 400);
        }
    }
}
