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
import { changeRoute, setMenuActive, setMenu } from '../../../../vuex/actions.js'
export default {
  name: 'PrimaryMenu', 
  data(){
    return{}
  },

  vuex:{ 
    getters:{
      menuData: ({ menus }) => menus.primary
    },
      actions:{
        setMenuActive,
        setMenu
      },
  },
  events:{
    menuActive(btn){
      this.setMenuActive(btn)
      return true;
    }
  },
  ready(){
    this.setMenu('primary')
  },

}
</script>
