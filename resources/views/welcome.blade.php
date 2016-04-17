@extends('layout')
@section('title', 'Welcome')

@section('content')
	@parent

@include('TwentyTwenty')
<!-- <animated_words
	type="cao"
	words="If you don’t DO anything different, there won’t BE anything different!"
	:animate="true"
></animated_words> -->

	<!-- <section id="IntroFlyAway">
		<intro_fly_away></intro_fly_away>
	</section> -->

	<!-- <section id="IpadIntro" class="header-section align-left hero blue-hero">
		{{-- @include('front.partials.ipadIntro') --}}
	</section> -->
{{--}}
	<section id="Intro" class="header-section align-left hero blue-hero">
		@include('front.partials.intro')
	</section>

	<div class="divider"></div>
{{--}}
	<!-- <section id="Features">
		{{-- @include('front.partials.features.ipadFeatures') --}}
	</section> --><!--/#features-->

	<!-- <section id="Services" >
		{{-- @include('front.partials.info.ipadDetails') --}}
	</section> --><!--/#services--> 


	<!-- <section id="ipad-animate" class="body-section-600 container">
		<ipad_3d_menu></ipad_3d_menu> 
	</section> -->
	
<!-- 	<div class="divider"></div>
	<hr class="style-one" />
	<div class="divider"></div> -->

	<!-- <section id="Pricing">
		{{-- @include('front.partials.info.ipadPricing') --}}
	</section>  --><!--/#pricing-->

	<!-- <section id="Testimonial">
		{{-- @include('front.partials.news.testimonials') --}}
  </section>  -->  <!-- #testimonial -->

	<!-- <section id="get-in-touch" class="blue-hero">
		{{-- @include('front.partials.cta.get-in-touch') --}}
	</section> --><!--/#get-in-touch-->

	<!-- <div class="divider"></div> -->

	<!-- <section id="contact">
		{{-- @include('front.partials.contact.contact') --}}
	</section> -->

	<!-- <div class="divider"></div> -->

@endsection
