<template>
    <!--Searchbox-->
	  <div class="searchbox" :class="{'in' : openSearch}">
	    <div class="input-group custom-search-form">
	      <input 
	      	type="text" 
	      	class="form-control bg-dark-gray" 
	      	placeholder="Search.."
	      	@keyup.enter="searchFor"
	      >
	      <span class="input-group-btn  bg-dark-gray">
	        <button class="text-muted" type="button"><i class="fa fa-2x fa-search "></i></button>
	      </span>
	    </div>
	  </div>
</template>

<script>
export default {
    name: 'search-box',
    changeTabTitle: false,
    logHooksToConsole: true,
    watchMode: true,
    data() {
      return {
      	pageTitle: 'SearchBox',
      	openSearch: false,
      }
    },

    methods: {
    	searchBoxKeybordListener(){
    		if(!this.openSearch){
	    		var that = this;
					$(window).keypress(function(e) { var ev = e || window.event; var key = ev.keyCode || ev.which;
						if(key == 115 || key == 83){that.openSearch = true}
					});
				}
    	},

    	searchFor(){
    		this.openSearch = false
    	}
    },

    ready() {
    	this.searchBoxKeybordListener()
    }
  }
</script>

<style lang="stylus">
.searchbox
	top -50px
	right 0
	padding 0 25%
	min-width 100%
	position fixed
	margin-right 0px
	transition padding .3s ease, top .3s ease
	&.in
		top 0px
		padding-top 50px
	>.input-group
		>input
			font-size 42px
			font-weight 100
			&:focus
				border none
		

</style>