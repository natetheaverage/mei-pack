<?php

namespace App\Http\Controllers;

use App\Models\Conversations\Conversation;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests;

class ConversationController extends Controller
{
    public $conversation;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(Conversation $conversation)
    {
        $this->middleware('auth');
        $this->conversation = $conversation;
    }

    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        return ['conversations', $this->conversation->all()];
    }

    /**
     * Store a newly created resource in storage.
     *
     * @return Response
     */
    public function store(Request $request)
    {
        $newConversation = $this->request->all();
        $this->conversation->create($newConversation);
        return $this->conversation->all();
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  int  $id
     * @return Response
     */
    public function update($id, Request $request)
    {
        $conversation = $this->request->all();
        $this->conversation->where('id', $conversation['id'])->update($conversation);
        return $this->conversation->all();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return Response
     */
    public function destroy($id, Request $request)
    {
        $conversation = $this->request->all();
        $this->conversation->where('id', $conversation['id'])->delete();
        return $this->conversation->all();
    }
}
