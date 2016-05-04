<template>
  <div class="page-activity">
  	<ul>
	    <li v-for="item in activityFeed">
	    	<h4 v-html="item.message_type"></h4>
	    	<p v-html="'sent from ' + item.name"></p>
	    	<p v-html="'on: ' + item.sent_on"></p>
	    	<a 
	    		class="mtrl-btn mtrl-raised bg-purple"
	    	>Open Message <i class="fa fa-icon fa-message"></i></a>
	    </li>
    </ul>
  </div>
</template>

<script>
export default {
    name: 'page-activity',
    changeTabTitle: true,
    logHooksToConsole: true,
    watchMode: true,
    data() 
    {
      return {
      	pageTitle: 'page-activity',
      	activityFeed: [],
      }
    },

    methods: {

    },

    ready() 
    {
    	this.$root.socket.on('message-channel:App\\Events\\Conversations\\MessageSent', 
	    function(data){
	    	this.activityFeed.push(data.message)
	    }.bind(this))
    }
  }
</script>

<style lang="stylus">
.page-activity >ul 
	margin 0
	padding 3px
	>li
		list-style-type none
		>h4
			font-wieght bold
	
</style>