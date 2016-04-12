<template>
  <div 
  	class="intro-fly-away" 
  	:class="flyaway"
  >

  	<blue-hero
		  :blue="true"
		  title="20/20 Investments"
		  sub-title="Elegant medical investment research!"
		></blue-hero>
  	<!-- <div 
  		class="fly-away-image"
  		@click="$root.truth.settings.animateHeader = !$root.truth.settings.animateHeader" 
  	> -->
  	<img src="images/frontImages/headerImage.jpg" />
  	
    </div>
    

  </div>
</template>

<script>
export default {
    name: 'intro-fly-away',
    changeTabTitle: false,
    logHooksToConsole: true,
    watchMode: true,
    data() {
      return {
      	pageTitle: 'Intro Fly Away',
      	bang: false,
      	flyaway: '',
      }
    },
    computed:{

    },
    methods: {
    },
    ready() {
    	var that = this;
    	var waypoint = $('#IntroFlyAway').waypoint(function(direction) {
			  that.flyaway = 'fly-away'
			}, {
			  offset: '-5%',
		  })
    }
  }
</script>

<style lang="stylus">

//Small screens
.fly-away-image
	transition 1s ease-out
	height 100px
	> img
		transition 1s ease-out
		max-height 100px
		width 100%
		right 0
	.fly-away
		top -600px
.intro-fly-away .section-title
		font-size 80px
		font-weight 900px
		color #fff

// iphone landscape
@media (min-width 300px)
	.hero
		padding 30px 0
	.fly-away-image
		height 120px
		> img
			max-height 120px
	.fly-away
		top -300px
//ipad and bigger
@media (min-width 568px)
	.hero
		padding 100px 0
	.fly-away-image
		height 250px
		> img
			max-height 250px
//ipad and bigger
@media (min-width 1000px)
	.fly-away-image
		height 400px
		> img
			max-height 400px
	.fly-away
		top -600px
</style>