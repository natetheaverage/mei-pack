<template>
  <div class="animated-words align-center">

  		<h1 
        class="my-text align-center"
        v-text="words"
      ></h1>
      <br />
  		<a 
        class="mtrl-btn mtrl-raised bg-orange"
        @click="dance"
      >Dance</a>
  </div>
</template>

<script>
export default {
    name: 'animated-words',
    changeTabTitle: false,
    logHooksToConsole: false,
    watchMode: true,
    props:['type', 'words', 'animate'],
    data() {
      return {
      	pageTitle: "Animated words",
      	myText: '',

      }
    },

    methods: {
    	bang(){
    		var el = document.querySelector('.my-text');
    		var options = {
		    size: 40,         // Font size, defined by th
		    weight: 5,         // Font weight (pixels)
		    rounded: false,    // Rounded letter endings
		    color: '#7049ba',  // Font color
		    duration: 1,       // Duration of the animation of each 
		    delay: [0, 0.2],  // Delay animation among letters (seconds)
		    fade: 0.7,         // Fade effect duration (seconds)
		    easing: d3_ease.easeCubicInOut.ease,   // Easing function
		    individualDelays: false,           
				};
		    this.myText = new Letters(el, options);
		    //this.dance()
    	},
    	dance(){
    		this.myText.show();
    	},
    },
    	ready(){

    		if(this.animate){
          this.bang()
        }

			}
}
</script>

<style lang="stylus">
</style>	