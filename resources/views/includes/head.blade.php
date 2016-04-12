<head>
  <title>{{!! config('app.name') !!}} | @section('title') @show</title>
  
  <link rel="icon" type="image/x-icon" href="images/logos/favicon.ico" />
	<link rel="icon" type="image/png" href="images/logos/favicon.png" />

  @include('includes.metaTags')

  @include('includes.linkTags')

	<!--Page Load Progress Bar [ OPTIONAL ]-->
	<link href=" {!! asset('plugins/pace/pace.min.css') !!}" rel="stylesheet">
	<script src=" {!! asset('plugins/pace/pace.min.js') !!}"></script> 
	
		<script>
			// document.documentElement.className = 'js';
		</script>
		<script src="js/vendor/animatedLetters/segment.min.js"></script>
		<script src="js/vendor/animatedLetters/d3-ease.v0.6.js"></script>
		<script src="js/vendor/animatedLetters/letters.js"></script>
</head>