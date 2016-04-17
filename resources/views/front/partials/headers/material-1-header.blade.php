<div class="app-header mtrl bg-primary pad-all-sm">

  <a 
		v-if="settings.primaryOn"
  	@click="togglePrimary"
  	class="mtrl-btn mtrl-hover orange"
  ><i class="fa fa-bars fa-menu"></i></a>
  
  <brand-box></brand-box>
	
	<a  
		v-if="settings.asideOn"
		v-on:click="toggleAside"
		class="mtrl-btn"
	><i class="fa fa-menu fa-comments-o"></i></a>

@role('average')
	<a 
		href="/modelAdmin"
		class="mtrl-btn"
		><i class="fa fa-menu fa-edit"></i>
	</a>
@endrole

@role('admin')
	<a 
		@click="login"
		class="mtrl-btn"
		><i class="fa fa-menu fa-sign-in"></i>
	</a>
@endrole
	

</div>
