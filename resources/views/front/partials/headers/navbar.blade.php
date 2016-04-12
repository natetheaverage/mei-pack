<nav id="main-menu" class="navbar navbar-default navbar-fixed-top" role="banner">
    <div class="container">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="/">
                <img src="/images/logo/frs-logo-blue-50.png" alt="logo">
                <span class="logo-text">
                    <span>Home <span class="amp">&</span></span> 
                    <span class="logo-center">Gadget</span> 
                    <span>Expo</span>
                </span>
            </a>
        </div>
        <i v-if="saving" 
            style="margin: 20px 0 0 20px" 
            class="fa fa-refresh fa-2x fa-spin" 
            :class="[error ? text-danger : '']"
        ></i>
        <div class="collapse navbar-collapse navbar-right">
            <ul class="nav navbar-nav">
                <li class="scroll active"><a href="/">Home</a></li>
                <li class="scroll"><a href="/#events">Events</a></li>
                <li class="scroll"><a href="/features">Features</a></li>
                {{-- <li class="scroll"><a href="/info#services">Services</a></li> --}}
                <li class="scroll"><a href="/info#about">About</a></li>
                <li class="scroll"><a href="/vendors">Vendors</a></li>
                <li class="scroll"><a href="#get-in-touch">Contact</a></li>
            </ul>
        </div>
</div><!--/.container-->
</nav><!--/nav-->