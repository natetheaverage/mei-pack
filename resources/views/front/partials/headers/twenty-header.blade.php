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
        <li class="scroll"><a href="#Features">Features</a></li>
        <li class="scroll"><a href="#Pricing">Price</a></li>
        <li class="scroll"><a href="#Contact">Contact</a></li>
        @hasrole('admin')
        <li class="scroll"><a v-on:click="login" href="#">Edit</a></li>
        <li class="scroll"><a href="tickets">Errors</a></li>
        <li class="scroll"><a href="modelAdmin">Admin</a></li>
        @else
        <li class="scroll"><a href="auth/login">Login</a></li>
        @endrole
        @hasrole('average')
        <li class="scroll"><a href="dashboard">Admin-2</a></li>
        @endrole
      </ul>
    </div>
    @hasrole('admin')
<a class="mtrl-btn mtrl-raised bg-orange"
style="position:fixed; top:120px; left:20px; width:100px"
v-if="settings.loggedIn"
href=""> SAVE </a>
@endrole
	</div><!--/.container-->
</nav><!--/nav-->


