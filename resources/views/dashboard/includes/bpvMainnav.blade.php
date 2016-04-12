<!--MAIN NAVIGATION-->
<!--===================================================-->
<script type="text/x-template" id="mainnav-template">

<!--VUE TEMPLATES-->
<!--===================================================-->

<!--===================================================-->

<nav id="mainnav-container">
	<div id="mainnav">

		<!--Shortcut buttons-->
		<!--================================-->
		<div id="mainnav-shortcut">
			<ul class="list-unstyled">
				<li class="col-xs-4" data-content="Additional Sidebar">
					<a id="demo-toggle-aside" class="shortcut-grid" href="#">
						<i class="fa fa-magic"></i>
					</a>
				</li>
				<li class="col-xs-4" data-content="Notification">
					<a id="demo-alert" class="shortcut-grid" href="#">
						<i class="fa fa-bullhorn"></i>
					</a>
				</li>
				<li class="col-xs-4 pad-top" data-content="grrrrr">
					<a id="demo-alert" class="shortcut-grid" href="#">
						<i class="fa fa-youtube"></i>
						</a>
				</li>
			</ul>
		</div>
		<!--================================-->
		<!--End shortcut buttons-->


		<!--Menu--> 
		<!--================================-->
		<div id="mainnav-menu-wrap">
			<div class="nano">
				<div class="nano-content">

					<ul id="mainnav-menu" class="list-group">
						<li class="list-header">Navigation </li>
						<li v-repeat="button in menudata">
							<mainnavbutton 
							edit-mode="@{{ editMode }}" 
							button="@{{ button }}">
						  	</mainnavbutton>
					  	</li>
					  	<!-- TODO -->
					  	<li v-show="editMode" v-on="click: addButton"><a> + Create New Button</a></li>
					  	<!-- // <pre>@{{ editable | json }}</pre> -->
					  	<!-- // <objecteditor objectid="" button="{menu_id:'',label:''}"></objecteditor> -->
					</ul>


					<!--Widget-->
					<!--================================-->
					<div class="mainnav-widget">

						<!-- Show the button on collapsed navigation -->
						<div class="show-small">
							<a href="#" data-toggle="menu-widget" data-target="#demo-wg-server">
								<i class="fa fa-desktop"></i>
							</a>
						</div>

						<!-- Hide the content on collapsed navigation -->
						<div id="demo-wg-server" class="hide-small mainnav-widget-content">
							<ul class="list-group">
								<li class="list-header pad-no pad-ver">Server Status</li>
								<li class="mar-btm">
									<span class="label label-primary pull-right">15%</span>
									<p>CPU Usage</p>
									<div class="progress progress-sm">
										<div class="progress-bar progress-bar-primary" style="width: 15%;">
											<span class="sr-only">15%</span>
										</div>
									</div>
								</li>
								<li class="mar-btm">
									<span class="label label-purple pull-right">75%</span>
									<p>Bandwidth</p>
									<div class="progress progress-sm">
										<div class="progress-bar progress-bar-purple" style="width: 75%;">
											<span class="sr-only">75%</span>
										</div>
									</div>
								</li>
								<li class="pad-ver"><a href="#" class="btn btn-success btn-bock">View Details</a></li>
							</ul>
						</div>
					</div>
					<!--================================-->
					<!--End widget-->

				</div>
			</div>
		</div>
		<!--================================-->
		<!--End menu-->

	</div>
</nav>

</script>
<!--===================================================-->
<!--END MAIN NAVIGATION-->