@extends('nest')
@section('title', 'Cheyenne Spring 2016')

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
      <a href="/events/grandjunction-fall-2016">
      <i class="fa fa-icon fa-arrow-left"></i> Grand Junction fall 2016</a>
      <a href="/events/denver-winter-2016">Denver Holiday Expo 2016 
      <i class="fa fa-icon fa-arrow-right"></i></a>
    </div>

        {{-- Title, Dates & Calendar Links --}}
        @include('front.partials.events.dates.cheyenne-fall-2016')

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
                        <li><small>Adults(13+) __</small></li>
                        <li><small>Children __</small></li>
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
                        href="#"
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
                      <h4 class="media-heading">Parking details comming soon!</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div><!--/.row--> 
          </div>
          <br>
          

    {{-- Map and Address --}}
    @include('front.partials.events.maps.cheyenne')
  

      </div>
      
@endsection
