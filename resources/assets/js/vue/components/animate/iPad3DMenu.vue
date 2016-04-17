<template>
  <div class="ipad-3d-menu">

	  <div class="col-sm-6 wow fadeInLeft">
	    <div 
	    	class="ms-wrapper" 
	    	:class="[effect, open ? 'ms-view-layers' : '']"
	    >
				<div id="toggle-phone-animation"></div>
				 
				<div class="ms-perspective">
					<div class="ms-device">
						<div class="ms-object">
							<div class="ms-front"></div>
							<div class="ms-back"></div>
							<div class="ms-left ms-side"></div>
							<div class="ms-right ms-side"></div>
							<div class="ms-top ms-side"></div>
							<div class="ms-bottom ms-side"></div>
						</div><!-- /ms-object -->
						<div class="ms-screens">
							<a 
								v-for="(key, screen) in features"
								:class="'ms-screen-'+(key+1)"
								@click="activeScreen = (key+1)"
							></a>
							<!-- <a class="ms-screen-2"><div class="ms-label">Compose</div></a> -->
						</div>
					</div><!-- /ms-device -->
				</div><!-- /ms-perspective -->
			</div><!-- /ms-wrapper -->
	  </div>
  </div>
  <div class="col-sm-6">
    <div 
    	class="media service-box wow fadeInRight"
    	v-for="(key, detail) in features"
    	v-if="activeScreen == (key+1)"
    >
      <div class="pull-left">
        <i 
        	class="fa fa-2x"
        	:class="'fa-'+detail.icon"
        ></i>
      </div>
      <div class="media-body">
        <h4 
        	class="media-heading"
        	v-html="detail.title"
        >Company Search</h4>
        <span v-html="detail.content">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum..</span>
      </div>
    </div>
	</div>
	<div class="row">
	<div class="col-md-12">
			<center>
				<a 
					id="phone-toggle-btn" 
					class="mtrl-btn bg-purple mtrl-raised mtrl-btn-icon"
					@click="open = !open"
				> 
					<i class="fa fa-lg fa-caret-square-o-down"></i>
					<span style="margin: auto 2px"> View</span>
				</a>
			</center>
		</div>
	</div>
</div>
</template>

<script>



export default {
    name: 'IpadMenu',
    id: 0,
    changeTabTitle: false,
    logHooksToConsole: true,
    watchMode: true,

    props:['animationNumber'],
    data() {
      return {
      	activeScreen: 1,
      	pageTitle: '3D Ipad Menu', 
      	effect: "ms-effect-"+this.animationNumber,
      	open: false,
      }
    },

    vuex:{
    	getters:{ 
    		features: ( {features} ) => features.all
    	},
    },

    methods: {

    },

    ready() {
    	var that = this;
    	var waypoint = $('#toggle-phone-animation').waypoint(function(direction) {
			  that.open = !that.open
			}, {
			  offset: '25%',
		  })
    }
  }
</script>

<style lang="stylus">
.media
	position absolute
@media (min-width 500px)
	.media
		position inherit
		padding-top 100px
</style>