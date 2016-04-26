@extends('admin')
@section('title') 
	@parent @yield('page')
@stop

@section('container')
	@parent
	<div id="container" class="cls-container">
		<div id="vue-container" class="app">

			<!-- BACKGROUND IMAGE -->
			<!--===================================================-->
			<div id="bg-overlay" class="bg-img img-balloon" style="background-image: url(&quot;img/bg-img/bg-img-7.jpg&quot;);"></div>

			<!-- HEADER -->
			<!--===================================================-->
			<div class="cls-header cls-header-lg">
				<div class="cls-brand">
					<a class="box-inline" href="/">
						<!-- <img alt="Nifty Admin" src="img/logo.png" class="brand-icon"> -->
						<span class="brand-title" v-html="company.name"></span>
					</a>
				</div>
			</div>
			<!--===================================================-->
			@section('content')
		  @show

		</div> <!-- vue-container -->
	</div> <!-- container -->

@endsection
<!-- container -->

@section('footer')
	@parent
		@include('includes.dash-scripts')
@endsection

