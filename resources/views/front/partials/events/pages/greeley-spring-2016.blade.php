@extends('nest')
@section('title', 'Greeley Spring 2016')

@section('content')
    @parent
    <header id="header">
        @include('partials.navbar')  
    </header><!--/#header-->

<div 
    class="team-member wow fadeInUp" 
    data-wow-duration="400ms" 
    data-wow-delay="0ms"
  >
    <div class="team-info">

    <div 
      class="row"
      style="display:flex; justify-content:space-between;"
    >
      <a href="/events/desmoines-spring-2017">
      <i class="fa fa-icon fa-arrow-left"></i> Des Moines Spring 2017</a>
      <a href="/events/springs-spring">Colorado Springs
      <i class="fa fa-icon fa-arrow-right"></i></a>
    </div>

        {{-- Title, Dates & Calendar Links --}}
        @include('partials.events.dates.greeley-spring-2016')

          <div class="container" style="border-bottom: 1px solid #dbdbdb">
            <div class="section-header">
              <h2 class="section-title text-center wow fadeInDown">Event Details</h2>
              <p class="text-center wow fadeInDown" v-html="truth.events[1].details"></p>
            </div>
            <div class="row">
              <div class="features">
                <div 
                  class="col-md-4 col-sm-12 wow fadeInUp" 
                  data-wow-duration="300ms" 
                  data-wow-delay="0ms"
                >
                  <div class="media service-box">
                    <div class="pull-left">
                      <i class="fa fa-dollar"></i>
                    </div>
                    <div class="media-body">
                      <h4 class="media-heading">Ticket Price!</h4>
                      <ul>
                        <li><small>Adults(13+) $5</small></li>
                        <li><small>Children Free</small></li>
                        <li><small>(Friday Show) Senors FREE!</small></li>
                        <li><small>(Friday Show) Military FREE!</small></li>
                      </ul>
                    </div>
                  </div>
                </div><!--/.col-md-4-->

                <div 
                  class="col-md-4 col-sm-12 wow fadeInUp" 
                  data-wow-duration="300ms" 
                  data-wow-delay="0ms"
                >
                  <div class="media service-box">
                    <div class="pull-left">
                      <i class="fa fa-ticket"></i>
                    </div>
                    <div class="media-body">
                      <h4 class="media-heading">Get Your Ticket Now!</h4>
                      <a 
                        class="btn btn-success"
                        target="_blank"
                        href="http://www.eventbrite.com/e/greeley-home-gadget-expo-tickets-21235080698?aff=SiteGreeley"
                      >www.EventBright.com</a>
                    </div>
                  </div>
                </div><!--/.col-md-4-->

                <div 
                  class="col-md-4 col-sm-12 wow fadeInUp" 
                  data-wow-duration="300ms" 
                  data-wow-delay="100ms">
                  <div class="media service-box">
                    <div class="pull-left">
                      <i class="fa fa-car"></i>
                    </div>
                    <div class="media-body">
                    <br>
                      <h4 class="media-heading">Plenty of free parking will be available!</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div><!--/.row--> 
          </div>
          <header id="header">
              @include('partials.highlights.kristen-apperance')  
          </header><!--/#header-->
          <br>
          

    {{-- Map and Address --}}
    @include('partials.events.maps.greeley')
  

      </div>
      
@endsection
