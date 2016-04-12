<template>
<div 
	class="hero"
	:class="blue ? 'blue-hero' : ''"	
>
<div class="container">
  <div class="section-header">
	  <h2 
	  	class="section-title text-center wow fadeInDown"
	  	v-html="title"
	  ></h2>
	  <p 
	  	class="text-center wow fadeInDown" 
	  	v-html="subTitle"
	  ></p>
  </div>
  </div>
  </div>
</template>

<script>
export default {
    name: 'BlueHero',
    changeTabTitle: false,
    logHooksToConsole: false,
    watchMode: true,
    props:['title', 'subTitle', 'blue'],
    data() {
      return {
      	pageTitle: 'Section Header',

      }
    },

    methods: {

    },

    ready() {

    }
  }
</script>

<style lang="stylus">
</style>