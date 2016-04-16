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

                    <!--Page Title-->
                    <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
                    {{-- <div id="page-title">
                        <h1 class="page-header text-overflow">@{{ viewTitle }}</h1>

                        <!--Searchbox-->
                        <div class="searchbox">
                            <div class="input-group custom-search-form">
                                <input type="text" class="form-control" placeholder="Search..">
                                    <span class="input-group-btn">
                                        <button class="text-muted" type="button"><i class="fa fa-search"></i></button>
                                    </span>
                            </div>
                        </div>
                    </div> --}}
                    <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
                    <!--End page title-->

                    <!--Page content-->
                    <!--===================================================-->
                    <!--VUE ROUTER checks for nested componants -->
                    <div id="page-content">
                        <div class="row">
                            <!-- <router-view></router-view> -->
                            @section('content')
                            @show
                        </div>
                        <pre v-if="dataMode">@{{ $data | json }}</pre>
                    </div> 
                    <!--===================================================-->
                    <!--End page content-->

            {{-- <pre v-show="showData">@{{ currentUser | json }}</pre> --}}

                </div>
                <!--===================================================-->
                <!--END CONTENT CONTAINER-->

                {{-- edit-mode="@{{ editMode }}" --}}

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

    {{-- </div> --}}
    <!--===================================================-->
    <!-- END OF VUE-BODY -->
</body>
</html>