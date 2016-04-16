<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Conversations\Message;
use Illuminate\Http\Request;
use App\Http\Requests;

class MessageController extends Controller
{
    public $message;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(Message $message)
    {
        $this->middleware('auth');
        $this->message = $message;
    }

    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        return ['messages', $this->message->all()];
    }

    /**
     * Store a newly created resource in storage.
     *
     * @return Response
     */
    public function store(Request $request)
    {
        $newMessage = $this->request->all();
        $this->message->create($newMessage);
        return $this->message->all();
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  int  $id
     * @return Response
     */
    public function update($id, Request $request)
    {
        $message = $this->request->all();
        $this->message->where('id', $message['id'])->update($message);
        return $this->message->all();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return Response
     */
    public function destroy($id, Request $request)
    {
        $message = $this->request->all();
        $this->message->where('id', $message['id'])->delete();
        return $this->message->all();
    }
}
