
{{-- 
@section('head')
  @parent
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta id="token" name="token" value="{!! csrf_token() !!}">
    @include('dashboard.includes.header')
    @section('css')
    @show 
@endsection
--}}


    <!--===================================================-->
    <div id="container" class="effect mainnav-lg">

    @include('dashboard.includes.navbar')

        <div class="boxed">
        
          <!--CONTENT CONTAINER-->
    		<!--===================================================-->
    		<div id="content-container">

    			<!--Page Title-->
    			<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
    			<div id="page-title">

                    <h1 
                        class="page-header text-overflow"
                        v-text="viewTitle"
                    ></h1>

    				<!-- Searchbox -->
    				<div class="searchbox">
    					<div class="input-group custom-search-form">
    						<input type="text" class="form-control" placeholder="Search..">
    							<span class="input-group-btn">
    								<button class="text-muted" type="button"><i class="fa fa-search"></i></button>
    							</span>
    					</div>
    				</div>
    			</div>
    			<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
    			<!--End page title-->

    			<!--Page content-->
    			<!--===================================================-->
    			<!--VUE ROUTER checks for nested componants -->
                <div id="page-content">
                    <div class="row">
                         
                        <div id="VueWindow">
                            <!-- <dashmainnav></dashmainnav> -->
                        </div>
                         {{--<router-view></router-view>
                        @section('content') --}}
                        {{-- @show --}}
                        @{{ currentView }}
                        <h1 
                            v-text="currentView"
                            v-on:click="click"
                        >HELLO</h1>
                    </div>
                    
                </div> 
    			<!--===================================================-->
    			<!--End page content-->

        {{-- <pre v-show="showData">@{{ currentUser | json }}</pre> --}}

        </div>
    		<!--===================================================-->
    		<!--END CONTENT CONTAINER-->

            {{-- edit-mode="@{{ editMode }}" --}}
            <h3 v-on:click="click">side menu</h3>
            <main-nav>@{{ currentView }}</main-nav>

                <component :is="currentView"></component>

            @include('dashboard.includes.aside')

        </div><!-- END BOXED DIV -->


    {{-- @include('dashboard.includes.footer') --}}

    	<!-- SCROLL TOP BUTTON -->
    	<!--===================================================-->
     <button id="scroll-top" class="btn"><i class="fa fa-chevron-up"></i></button>
     <!--===================================================-->

    </div>
    <!--===================================================-->
    <!-- END OF CONTAINER -->

<!--NIFTY SETTINGS panel-->
<!--=================================================-->
{{-- @include('dashboard.includes.niftySettings') --}}
<!--=================================================-->
<!-- END OF NIFTY SETTINGS -->



