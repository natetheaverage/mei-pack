@extends('nest')
@section('title') 
	@parent @yield('page')
@stop
<!--Page content-->
<!--===================================================-->
<!--VUE ROUTER checks for nested componants -->

        <!-- <router-view></router-view> -->
        @section('content')
          @parent
        @show
    
<!--===================================================-->
<!--End page content-->
