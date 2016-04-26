<!--ASIDE-->
<!--===================================================-->
<aside id="aside-container">
	<div id="aside">
		<div class="nano">
			<div class="nano-content">

				<!--Nav tabs-->
				<!--================================-->
				<ul class="nav nav-tabs nav-justified">
					<li class="active">
						<a href="#asd-tab-1" data-toggle="tab">
							<i class="fa fa-comments"></i>
							<span class="badge badge-purple">7</span>
						</a>
					</li>
					<li>
						<a href="#asd-tab-2" data-toggle="tab">
							<i class="fa fa-info-circle"></i>
						</a>
					</li>
					<li>
						<a href="#asd-tab-3" data-toggle="tab">
							<i class="fa fa-wrench"></i>
						</a>
					</li>
				</ul>
				<!--================================-->
				<!--End nav tabs-->



				<!-- Tabs Content -->
				<!--================================-->
				<div class="tab-content">

					<!--First tab (Contact list)-->
					<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
					<div class="tab-pane fade in active" id="asd-tab-1">
						<contact-list></contact-list>
					</div>
					<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
					<!--End first tab (Contact list)-->


					<!--Second tab (Custom layout)-->
					<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
					<div id="asd-tab-2" class="tab-pane fade">
						@roles('Average')
						<small>Probably dont touch this if you happen to be able to see it. (or it doesnt work?!?)</small>
						<a 
							class="mtrl-btn mtrl-raised bg-purple"
							v-text="'Create DB:Seeds'"
						></a>
						<br />
						<br />
						<a 
							class="mtrl-btn mtrl-raised bg-purple"
							v-text="'Seed Database'"
						></a>
						@roles
						<!-- <div id="TaskSystem" class="bg-dark"></div> -->
						
					</div>
					<!--End second tab (Custom layout)-->
					<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->


					<!--Third tab (Settings)-->
					<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
					<div class="tab-pane fade" id="asd-tab-3">
						<aside-settings></aside-settings>
					</div>
					<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
					<!--Third tab (Settings)-->

				</div>
			</div>
		</div>
	</div>
</aside>
<!--===================================================-->
<!--END ASIDE-->