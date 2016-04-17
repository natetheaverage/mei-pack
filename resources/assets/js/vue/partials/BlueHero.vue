<template>
<div 
	class="hero"
	:class="blue ? 'blue-hero' : ''"	
>
  <div class="container ">
    <div class="section-header center">
  	  <h2 class="section-title wow fadeInDown">
        <editable-copy
          :name-of-parent="'BlueHero_'+id"
          instance-number="0"
          use-html="true" 
          overide-text=""
        ></editable-copy>
      </h2>
  	  <p class="wow fadeInDown" >
        <editable-copy
          :name-of-parent="'BlueHero_'+id"
          instance-number="1"
          use-html="true" 
          overide-text=""
        ></editable-copy>
      </p>
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
    props:['blue', 'id'],
    data() {
      return {
      }
    },
  }
</script>

<style lang="stylus">
</style>