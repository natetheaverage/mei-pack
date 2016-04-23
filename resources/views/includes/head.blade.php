<head>
  <title>{!! config('app.name') !!} | @section('title') @show</title>
  
  <link rel="icon" type="image/x-icon" href="/images/"{!! config('app.theme') !!}"/favicon.ico" />
	<link rel="icon" type="image/png" href="/images/"{!! config('app.theme') !!}"/favicon.png" />

  @include('includes.metaTags')
 	@include( 'front.'.config('app.theme').'.includes.metaTags' )

 	@include( 'front.'.config('app.theme').'.includes.linkTags' )
  @include('includes.linkTags')

 	@include( 'front.'.config('app.theme').'.includes.headScripts' )

	<!--Page Load Progress Bar [ OPTIONAL ]-->
	<link href=" {!! asset('plugins/pace/pace.min.css') !!}" rel="stylesheet">
	<script src=" {!! asset('plugins/pace/pace.min.js') !!}"></script> 
	
	<!-- <script src="/js/vendor/animatedLetters/segment.min.js"></script>
	<script src="/js/vendor/animatedLetters/d3-ease.v0.6.js"></script>
	<script src="/js/vendor/animatedLetters/letters.js"></script> -->
</head>