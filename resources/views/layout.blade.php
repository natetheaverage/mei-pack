@extends('nest')
@section('title') 
	@parent @yield('page')
@stop
@section('container')
	@parent
  <div id="header">
    @include('front.partials.headers.'.config('app.theme').'-header'  )
  </div>
  <div class="app-container pad-all">         
    <div class="app-content content pad-all" > 
      @section('content')
      
      @show
    </div>
    @include('front.partials.navs.'.config('app.theme').'-nav' )
    @include('front.partials.asides.'.config('app.theme').'-aside'  )
  </div>
  @include('front.partials.footers.'.config('app.theme').'-footer')
  @yield('footer')
  @include('includes.php-to-js')
@stop