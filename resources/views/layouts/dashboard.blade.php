@extends('admin')
@section('title') 
  @parent '@yield('page')'
@stop

@section('container')
  @parent

  <div id="container" class="effect mainnav-lg">
    @include('dashboard.includes.navbar')
    <script>window.mei = window.mei  || {};</script>
      <!-- <div class="boxed"> -->
        <!--CONTENT CONTAINER-->
        <!--===================================================-->
        <div id="content-container">

          <!--Search Box-->
          <!--===================================================-->
          <search-box></search-box>
          <!--===================================================-->
          <!--End Search Box-->

          <!--Page content-->
          <!--===================================================-->
              <router-view></router-view>
          <!-- <div id="page-content" >
            <div class="row">
            </div>
          </div>  -->
          <!--===================================================-->
          <!--End page content-->
        </div>
        <!--===================================================-->
        <!--END CONTENT CONTAINER-->

        <!--Main Nav-->
        <!--===================================================-->
        <main-nav></main-nav>
        <!--===================================================-->
        <!--END CONTENT CONTAINER-->

        @include('dashboard.includes.aside')

      <!-- </div>END BOXED DIV -->

      @include('dashboard.includes.footer')

    <!-- SCROLL TOP BUTTON -->
    <!--===================================================-->
    <button id="scroll-top" class="btn"><i class="fa fa-chevron-up"></i></button>
    <!--===================================================-->
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


@endsection