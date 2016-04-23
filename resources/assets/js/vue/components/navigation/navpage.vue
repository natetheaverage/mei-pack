<template>
  <div id="main-nav-menu">
      <div 
        class="inline-block pad-all" 
        v-for="button in menuData" 
      >
        <navpagebutton 
          :button="button" 
          :edit-mode="editMode"
        ></navpagebutton>
      </div>
      
      <button 
        class="btn btn-default"
        @click="$root.addNavButton()"
      ><i class="fa fa-4x fa-plus"></i></button>
     <!-- <pre v-if="dataMode">{{ $data | json }}</pre> -->
  </div>

</template>

<script>
import { changeRoute, setMenuActive, setMenu } from '../../../vuex/actions.js'

export default {
  name: 'DashboardHome', 
    changeTabTitle: true,
    logHooksToConsole: true,
    watchMode: true,
  data(){
    return{
      pageTitle: 'DashboardHome'
    }
  },

  vuex:{ 
    getters:{
      menuData: ({ menus }) => menus.DashboardMenu
    },
    actions:{
      setMenuActive,
      setMenu
    },
  },
  ready(){
    this.setMenu('DashboardMenu')
  },

}
</script>
<style>
</style>