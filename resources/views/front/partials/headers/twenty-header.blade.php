<nav 
  id="main-menu" 
  class="navbar-default navbar-fixed-top" 
  :class="$root.settings.animateHeader ? 'navbar-in' : ''" 
  role="banner"
>
  <div class="container">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>

      <div class="brand">
      	<brand-box></brand-box>
      </div>

    </div>
    <i v-if="saving" 
      style="margin: 20px 0 0 20px" 
      class="fa fa-refresh fa-2x fa-spin" 
      :class="[error ? text-danger : '']"
    ></i>
    <div class="collapse navbar-collapse navbar-right">
      <ul class="nav navbar-nav">
        <li class="scroll active"><a href="/">Home</a></li>
        <li class="scroll"><a href="/info#services">Facts</a></li>
        <li class="scroll"><a href="/vendors">Details</a></li>
        <li class="scroll"><a href="#contact">Contact</a></li>
      </ul>
    </div>
	</div><!--/.container-->
</nav><!--/nav-->
