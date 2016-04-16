<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta id="token" name="token" value="{!! csrf_token() !!}">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{!! config('app.name') !!} | @yield('page')</title>

    @include('dashboard.includes.header')
    @section('css')
    @show
</head> 
<body>
        <!--===================================================-->
        <div id="container" class="effect mainnav-lg">
            @include('dashboard.includes.navbar')
            <div class="boxed">
                <!--CONTENT CONTAINER-->
                <!--===================================================-->
                <div id="content-container">
                    <!--Page content-->
                    <!--===================================================-->
                    <!--VUE ROUTER checks for nested componants -->
                    <div id="page-content">
                        <div class="row">
                            <!-- <router-view></router-view> -->
                            @section('content')
                            <router-view></router-view>
                            @show
                        </div>
                        <pre v-if="dataMode">@{{ $data | json }}</pre>
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
        <!--===================================================-->
        <!-- END OF CONTAINER -->

    <!--NIFTY SETTINGS panel-->
    <!--=================================================-->
    @include('dashboard.includes.niftySettings')
    <!--=================================================-->
    <!-- END OF NIFTY SETTINGS -->
    @section('scripts')
    @show
    @yield('footer')
    @include('includes.php-to-js')
    <!--===================================================-->
    <!-- END OF VUE-BODY -->
</body>
</html>