@extends('admin')
@section('title') 
	@parent @yield('page')
@stop

@section('stylesheets')
	@parent
	<link rel="stylesheet" type="text/css" href="/css/tickets.css">
@endsection

<!--Page content-->
<!--===================================================-->
<!--VUE ROUTER checks for nested componants -->

<!-- <router-view></router-view> -->
@section('content')
  @parent
@show
    
<!--===================================================-->
<!--End page content-->
