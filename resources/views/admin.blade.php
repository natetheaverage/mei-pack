<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta id="token" name="token" value="{!! csrf_token() !!}">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{!! config('app.name') !!} | @yield('page')</title>

    @include('dashboard.includes.header')
    @yield('stylesheets')
</head> 
<body>
    
    	<!-- <div id="vue-container" class="app"> -->
	      @section('container')
	      @show
    	<!-- </div> -->
    </div>

    
    <!-- END OF NIFTY SETTINGS -->
    @section('footer')
    	@include('includes.dash-scripts')
    @show
    @include('includes.php-to-js')
    <!--===================================================-->
    <!-- END OF VUE-BODY -->
    </body>
</html>
