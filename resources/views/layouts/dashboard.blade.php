@extends('admin')
@section('title') 
  @parent '@yield('page')'
@stop

@section('container')
  @parent

@include('dashboard.includes.navbar')
  <div id="container" class="mainnav-lg">
    <div id="vue-container" class="app">
    <script>window.mei = window.mei  || {};</script>
      <div class="boxed">
          <!--CONTENT CONTAINER-->
          <!--===================================================-->
          <div id="content-container">
              
              <!--Page content (if ticketsAdmin) -->
              <!--===================================================-->
              
              <!--===================================================-->
              <!--End page content-->

              <!--Page content ( if not TicketsAdmin-->
              <!--===================================================-->
              <div id="page-content" >
                  <div class="row">

                          <router-view></router-view>

                  </div>
              </div> 
              <!--===================================================-->
              <!--End page content-->

          </div>
          <!--===================================================-->
          <!--END CONTENT CONTAINER-->


          <mainnav></mainnav>
          @include('dashboard.includes.aside')
      </div><!-- END BOXED DIV -->

      @include('dashboard.includes.footer')

      <!-- SCROLL TOP BUTTON -->
      <!--===================================================-->
     <button id="scroll-top" class="btn"><i class="fa fa-chevron-up"></i></button>
     <!--===================================================-->
    </div>
  </div>
  <!--===================================================-->
  <!-- END OF CONTAINER -->
@endsection

@section('footer')
    @parent
    <!--NIFTY SETTINGS panel-->
    <!--=================================================-->
    @include('dashboard.includes.niftySettings')
    <!--=================================================-->
    <!-- END OF NIFTY SETTINGS -->

    @include('includes.dash-scripts')

@endsection