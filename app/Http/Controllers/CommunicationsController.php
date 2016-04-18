<?php

namespace App\Http\Controllers;

use Mail;
use App\Http\Requests;
use Illuminate\Http\Request;
use App\Models\Communications\Message;

class CommunicationsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $msg = Message::create($request->all());

        Mail::send('mail.contact', ['msg' => $msg], 
            function ($m) use ($msg) {
                $m->to('contactus@20-20investing.com')
                    ->bcc(
                    'natetheaverage@gmail.com', 
                    //'info@frontrangeshows.com', 
                    'dougmt_98@yahoo.com'
                );

        $m->from($msg->email, '20-20 Investing');

        $m->subject('New message - '.$msg->subject);
    });

    Mail::send('mail.confirmation', ['msg' => $msg], function ($m) use ($msg)  {
        $m->to($msg->email)->bcc('natetheaverage@gmail.com');

        $m->from('contactus@20-20investing.com', '20-20 Investing');

        $m->subject('Thank you for contacting 20-20 Investing. We will get back to you promptly.');
    });
    }


        
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
