<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta id="token" name="token" value="{!! csrf_token() !!}">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{!! config('app.name') !!} | @yield('page')</title>

    @include('dashboard.includes.header')

</head> 
<body>
    <!--===================================================-->
    <div id="container" class="effect mainnav-lg">
        @include('dashboard.includes.navbar')
        
        <script>
            window.mei = window.mei  || {};
            //mei.editMode = 1;
            //mei.currentUser = null;
            //mei.vueRoute = 'dashboard';
        </script>

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

                        <!-- <div v-if="settings.ticketsAdmin"> -->
                        
                            
                        <!-- </div> -->
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