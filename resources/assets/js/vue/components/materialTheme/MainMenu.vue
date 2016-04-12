<style lang='stylus'>

</style>
<template>
	<div class="main-menu">
		<menubutton 
			v-for="button in menuData" 
			:button="button"
		></menubutton>
	</div>
</template> 
<script>
import {getPrimaryMenu} from '../../../vuex/getters.js'
import {setPrimaryMenuHover} from '../../../vuex/actions.js'
export default {
  name: 'PrimaryMenu',
  data(){
    return{
    	
    }
  },

  vuex:{
    getters:{
      menuData: state => state.truth.menus.primary
      //menuData: getPrimaryMenu ,
    },
      actions:{
        setPrimaryMenuHover,
      },
  },
  computed: {
    menuData(){
      return  this.data
    },
  },
  events:{
    menuHover(id){
      
      this.setPrimaryMenuHover(id)
    }
  },
  ready(){
    console.log(this.data)
  },

}
</script>
