@extends('layoutOne')
@section('title', 'FrontEnd')

@section('content')
    @parent

    <section id="Components">
        @include('front.TestingGrounds')
    </section><!--/#main-slider-->

    {{-- <header id="header">
        @include('front.partials.navbar') 
    </header><!--/header--> --}}

    <section id="Main-Slider">
        @include('front.components.slider')
    </section><!--/#main-slider-->

    <section id="CTA" class="wow fadeIn">
        @include('front.partials.intro')
    </section><!--/#cta-->

    <section id="Event-Boxes">
            @include('front.partials.events.details')
    </section><!--/#EventBoxes-->

    <section id="CTA-3">
        @include('front.partials.cta.cta3')
    </section> 

    <section id="Work-Process">
        @include('front.partials.info.work-process')
    </section><!--/#work-process-->

    <section id="Event-Details">
        @include('front.partials.events.vender-details')
        <div class="divider"></div>
        @include('front.partials.info.faq')
    </section><!--/#meet-team-->
 
    <section id="Services" >
        @include('front.partials.info.services')
    </section><!--/#services--> 

   <section id="About">
        @include('front.partials.info.about')
    </section><!--/#about-->

    <section id="CTA-2">
        @include('front.partials.cta.cta2')
    </section>
 
    <section id="Features">
        @include('front.partials.features.FeatureListOne')
    </section><!--/#features-->

    <section id="Gallery">
        @include('front.components.gallery')
    </section><!--/#gallery-->

    <section id="Denver-Highlight">
        @include('front.partials.highlights.kristen-apperance')
    </section><!--/#meet-team-->
    
     <section id="Features2">
         @include('front.partials.features.FeatureListTwo')
    </section>

    <section id="News">
        @include('front.partials.news.news')
    </section> 

    <section id="Pricing">
            @include('front.partials.info.pricing')
    </section> <!--/#pricing-->

    <section id="Animated-Number">
         @include('front.partials.info.facts') 
    </section>

    <section id="Testimonial">
        @include('front.partials.news.testimonials')
    </section>   <!-- #testimonial -->

   <section id="Services" >
            @include('front.partials.info.services')
    </section><!--/#services--> 

   <section id="Get-In-Touch" class="blue-hero">
        @include('front.partials.cta.get-in-touch')
    </section><!--/#get-in-touch-->

    <section id="Contact">
        @include('front.partials.contact.contact')
    </section>

    @include('front.partials.footers.footer')

@endsection
