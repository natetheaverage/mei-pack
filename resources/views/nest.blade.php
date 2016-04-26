<!DOCTYPE html>
<html>
  @include('includes.head')
  <body data-spy="scroll">
    <div id="vue-container" class="app">
      @section('container')
      @show
    </div>
  @include('includes.scripts')
	@include( 'front.'.config('app.theme').'.includes.footScripts' )

	@yield('footer')
  @include('includes.php-to-js')
  @include('front.'.config('app.theme').'.footer')
  </body>
</html>
