<head>
  <title>{!! config('app.name') !!} | @section('title') @show</title>
  
	<link rel="apple-touch-icon" sizes="57x57" href="/images/{!! config('app.theme') !!}/logos/apple-icon-57x57.png">
	<link rel="apple-touch-icon" sizes="60x60" href="/images/{!! config('app.theme') !!}/logos/apple-icon-60x60.png">
	<link rel="apple-touch-icon" sizes="72x72" href="/images/{!! config('app.theme') !!}/logos/apple-icon-72x72.png">
	<link rel="apple-touch-icon" sizes="76x76" href="/images/{!! config('app.theme') !!}/logos/apple-icon-76x76.png">
	<link rel="apple-touch-icon" sizes="114x114" href="/images/{!! config('app.theme') !!}/logos/apple-icon-114x114.png">
	<link rel="apple-touch-icon" sizes="120x120" href="/images/{!! config('app.theme') !!}/logos/apple-icon-120x120.png">
	<link rel="apple-touch-icon" sizes="144x144" href="/images/{!! config('app.theme') !!}/logos/apple-icon-144x144.png">
	<link rel="apple-touch-icon" sizes="152x152" href="/images/{!! config('app.theme') !!}/logos/apple-icon-152x152.png">
	<link rel="apple-touch-icon" sizes="180x180" href="/images/{!! config('app.theme') !!}/logos/apple-icon-180x180.png">
	<link rel="icon" type="image/png" sizes="192x192"  href="/images/{!! config('app.theme') !!}/logos/android-icon-192x192.png">
	<link rel="icon" type="image/png" sizes="32x32" href="/images/{!! config('app.theme') !!}/logos/favicon-32x32.png">
	<link rel="icon" type="image/png" sizes="96x96" href="/images/{!! config('app.theme') !!}/logos/favicon-96x96.png">
	<link rel="icon" type="image/png" sizes="16x16" href="/images/{!! config('app.theme') !!}/logos/favicon-16x16.png">
	<link rel="manifest" href="/images/{!! config('app.theme') !!}/manifest.json">
	<meta name="msapplication-TileColor" content="#ffffff">
	<meta name="msapplication-TileImage" content="/ms-icon-144x144.png">
	<meta name="theme-color" content="#ffffff">

  @include('includes.metaTags')
 	@include( 'front.'.config('app.theme').'.includes.metaTags' )

  @include('includes.linkTags')
 	@include( 'front.'.config('app.theme').'.includes.linkTags' )

 	@include( 'front.'.config('app.theme').'.includes.headScripts' )

	<!--Page Load Progress Bar [ OPTIONAL ]-->
	<link href=" {!! asset('plugins/pace/pace.min.css') !!}" rel="stylesheet">
	<script src=" {!! asset('plugins/pace/pace.min.js') !!}"></script> 
	
	<!-- <script src="/js/vendor/animatedLetters/segment.min.js"></script>
	<script src="/js/vendor/animatedLetters/d3-ease.v0.6.js"></script>
	<script src="/js/vendor/animatedLetters/letters.js"></script> -->
</head>