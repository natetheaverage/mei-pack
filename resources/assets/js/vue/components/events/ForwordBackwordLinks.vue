<template>
	<div 
	  class="row"
	  style="display:flex; justify-content:space-between;"
	>
	  <a :href="'/events/'+backUrl">
	  <i class="fa fa-icon fa-arrow-left"></i> {{backLabel}}</a>
	  <a :href="'/events/'+forwordUrl">{{forwordLabel}}
	  <i class="fa fa-icon fa-arrow-right"></i></a>
	</div> 
</template>
<script>
export default {
	name: 'eventpagelinks',
  props:['event'],
  data(){
  	return{
  		forwordUrl: '',
  		backUrl: '',
  		forwordLabel: '',
  		backLabel: '',
  	}
  },
  computed:{
  	forword(){
  		this.forwordUrl = this.$root.truth.events[this.event.order_column + 1].url;
  		this.forwordLabel = this.$root.truth.events[this.event.order_column + 1].name;
  	},

  	back(){
  		this.backUrl = this.$root.truth.events[this.event.order_column - 1].url;
  		this.backLabel = this.$root.truth.events[this.event.order_column - 1].name;
  	},

  },

}
</script>
<style lang='stylus'>
</style>