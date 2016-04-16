<div class="app-header mtrl bg-primary pad-all-sm">

  <a 
  	@click="togglePrimary"
  	class="mtrl-btn mtrl-hover orange"
  ><i class="fa fa-bars fa-menu"></i></a>
  
  <brand-box></brand-box>
	
	<a  
		@click="toggleAside"
		class="mtrl-btn"
	><i class="fa fa-menu fa-comments-o"></i></a>

	<a 
		href="/modelAdmin"
		class="mtrl-btn"
		><i class="fa fa-menu fa-edit"></i>
	</a>
	<a 
		@click="login"
		class="mtrl-btn"
		><i class="fa fa-menu fa-sign-in"></i>
	</a>
	

</div>
