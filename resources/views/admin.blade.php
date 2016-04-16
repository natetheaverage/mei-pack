@extends('layout')
@section('title') 
	@parent Home 
@stop

<!-- BACKGROUND IMAGE -->
<!--===================================================-->
<div id="bg-overlay" class="bg-trns"></div>
@section('container')
	@parent

<!--JAVASCRIPT-->
<!--=================================================-->
<!--Nifty Admin [ RECOMMENDED ]-->
<script src="{!! '../js/nifty.js' !!}"></script>

@stop
