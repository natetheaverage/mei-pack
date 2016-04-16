 import {
  RESET_ALL_MENU_ACTIVE,
  SET_MENU_ACTIVE,
  SET_MENU
} from '../mutation-types'
import menus from '../../api/vuex/menus.js'
import truth from '../../truth/truth.js'

// initial state
const state = {
  primary: truth.menus.primary,
  adminPrimary: truth.menus.adminPrimary,
  DashboardMenu: truth.menus.DashboardMenu
}

const mutations = {

  [SET_MENU] (state, payload) {
    state[payload[1]] = payload[0]
  },

  [RESET_ALL_MENU_ACTIVE] (state) {
    for(var menu in state){
      for(var button in state[menu]){
        state[menu][button].active = false
        for(var sub in button.submenu){
          state[menu][button].submenu[sub].active = false
        }
      }
    }
  },

  // Button owner_type is the name of the menu
  // Use indexOf to locate the buttons position in the menu
  [SET_MENU_ACTIVE] (state, button) {
    var menu = state[button['menu_name']]
    if( menu != undefined ){
      menu[menu.indexOf(button) ].active = !menu[ menu.indexOf(button) ].active
    }else{
      var menu = state[ button['owner_type'] ]
      for(var btn in menu){
        if(menu[btn].id == button.menu_id){
          var subMenu = menu[btn].submenu 
          menu[btn].active = true
          subMenu[ subMenu.indexOf(button) ].active = !subMenu[ subMenu.indexOf(button) ].active
        }
      }    
    } 
  } 



}

export default {
  state,
  mutations
}