@extends('nest')
@section('title', 'Event Page')

@section('content')
  @parent
  <header id="header">
      @include('partials.navbar')  
  </header><!--/#header-->

  <eventpage
    event-name="{{ $event }}"
  ></eventpage>
      
@endsection
