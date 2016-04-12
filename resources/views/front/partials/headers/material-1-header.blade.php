<div class="app-header mtrl bg-primary pad-all-sm">

  <a 
  	@click="setMainMenuOpen = !getMainMenuOpen"
  	class="mtrl-btn mtrl-hover orange"
  ><i class="fa fa-bars fa-menu"></i></a>
  
  <brand-box></brand-box>
	
	<a  
		@click="setAsideOpen = !getAsideOpen"
		class="mtrl-btn"
	><i class="fa fa-menu fa-comments-o"></i></a>

	<a 
		:click="signup"
		class="mtrl-btn"
		><i class="fa fa-menu fa-user-plus"></i>
	</a>
	<a 
		@click="login"
		class="mtrl-btn"
		><i class="fa fa-menu fa-sign-in"></i>
	</a>
	

</div>
