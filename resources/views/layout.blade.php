@extends('nest')
@section('title') 
	@parent @yield('page')
@stop
@section('container')
	@parent
  
  <div id="header">
    @include('front.'.config('app.theme').'.header'  )
  </div>
  <div class="app-container pad-all">         
    <div class="app-content content pad-all" > 
      @section('content')

      @show
    </div>
    @include('front.'.config('app.theme').'.nav' )
    @include('front.'.config('app.theme').'.aside'  )
  </div>
  @include('front.'.config('app.theme').'.footer')

@stop