<template>
  <div 
  	class="intro-fly-away" 
  	:class="flyaway"
  >
  	<blue-hero
		  :blue="true"
		  id="1"
		></blue-hero>
		<center>
  	<div class="fly-away-image">
  		<!-- @click="settings.animateHeader = !settings.animateHeader"  -->
  		
  			<img class=" mtrl-raised" src="images/frontImages/headerImage.jpg" />
  		
    </div></center>
  </div>
</template>

<script>

import { toggleSetting } from '../../../vuex/actions.js'

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

    vuex:{
		actions:{
      toggleSetting
		},
	},

    computed:{

    },
    methods: {
    },
    ready() {
    	var that = this;
    	var waypoint = $('#IntroFlyAway').waypoint(function(direction) {
			  that.flyaway = 'fly-away'
			  that.toggleSetting('animateHeader')
			  console.log('Bang from waypoint intro flyaway')
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
		background-image: -webkit-linear-gradient(90deg, #2c8cb3 0%, #2caab3 100%);
		height 250px
		> img
			margin 0 auto
			max-height 250px
@media (min-width 850px)
	.fly-away-image
		background-image: -webkit-linear-gradient(90deg, #2c8cb3 0%, #2caab3 100%);
		height 325px
		> img
			max-height 350px
//ipad and bigger
@media (min-width 1400px)
	.fly-away-image
		height 450px
		width 100%
		> img
			max-width 1400px
			max-height 450px
			
	.fly-away
		top -600px
</style>