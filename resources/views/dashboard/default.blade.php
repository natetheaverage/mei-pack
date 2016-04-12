<!DOCTYPE html>
<html lang="<?php echo config('application.language') ?>">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width">
	<meta id="token" name="token" value="{!! csrf_token() !!}">
	<title>{{ config('administrator.title') }}</title>

	@foreach ($css as $url)
		<link href="{{$url}}" media="all" type="text/css" rel="stylesheet">
	@endforeach

	<!--[if lte IE 9]>
		<link href="{{asset('packages/frozennode/administrator/css/browsers/lte-ie9.css')}}" media="all" type="text/css" rel="stylesheet">
	<![endif]-->

</head>
<body>

	<div id="vue-container" class="app">

		

		<script type="text/javascript">
	  	var mei = { 'currentUser ' : {!! $meiSettings['currentUser'] !!} }
	  	var frozenMenu = [];
		</script>
		@foreach ($menu as $key => $item)
			<script type="text/javascript">
		  	frozenMenu.push({'{!! $key !!}':'{!!$item!!}'} )
			</script>
		@endforeach



		{!! $content !!}

		
		
</div>
		<div id="wrapper">
			@include('administrator::partials.header')
	
			@include('administrator::partials.footer')
		</div>

	

	@foreach ($js as $url)
		<script src="{{$url}}"></script>
	@endforeach

</body>
</html>