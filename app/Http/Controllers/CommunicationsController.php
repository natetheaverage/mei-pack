<?php

namespace App\Http\Controllers;

use Mail;
use App\Http\Requests;
use Illuminate\Http\Request;
use App\Models\Conversations\Message;
use App\Models\Companies\Company;
use App\Events\Conversations\MessageSent;

class CommunicationsController extends Controller
{

  protected $message;
  protected $company;

  function __construct(Company $company, Message $message)
  {
    $this->message = $message;
    $this->company = $company;
  }

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
      $msg = $request->all();
      $msg['sent_on'] = \Carbon\Carbon::now()->toDateTimeString();
      $msg = $this->message->create($msg);
      $company = $this->company
        ->where('theme', config('app.theme'))
        ->first();
      Mail::queue('front.'.config('app.theme').'.emails.contact', 
        ['msg' => $msg, 'company' => $company], 
        function ($message) use ($msg, $company)  {

          $message->to($company->email1)
            ->bcc('natetheaverage@gmail.com',$company->email2);

          $message->from($msg->email, $msg->name);

          $message->subject('New message - '.$msg->subject);

      });

      Mail::queue('front.'.config('app.theme').'.emails.confirmation', 
        ['msg' => $msg, 'company' => $company], 
        function ($message) use ($msg, $company)  {

        $message->to($msg->email)->bcc('natetheaverage@gmail.com');

        $message->from($company->email1, $company->name);

        $message->subject('Thank you for contacting '.$company->name.'. We will get back to you promptly.');

        event(new MessageSent($msg));
      });
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
