<style lang='stylus'>

</style>
<template>
	<div class="main-menu">
		<menubutton 
			v-for="button in menu" 
			:button="button"
		></menubutton>
	</div>
</template> 
<script>
export default {
  name: 'MainMenu',
  data(){
    return{
    	menu: this.$root.truth.mainMenu,
    }
  },
  events: {
  	menuHover(id){
			this.$broadcast("handelSubMenu", id);
      return true;
		},
  }
}
</script>
