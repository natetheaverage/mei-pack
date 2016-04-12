import {
  RESET_ALL_MENU_HOVER,
  SET_PRIMARY_MENU_HOVER
} from '../mutation-types'
import truth from '../../truth/truth.js'
// initial state
const state = {
  menus: truth.menus
}

// mutations
const mutations = {
  [GET_PRIMARY_MENU] (state, payload) {
    state.truth.menus[payload]
  },
  [RESET_ALL_MENU_HOVER] (state) {
    console.log(state.truth.menus['primary'])
    for(var menu in state.truth.menus){
      for(var button in state.truth.menus[menu]){
        state.truth.menus[menu][button].hovering = false
      }
    }
  },
  [SET_PRIMARY_MENU_HOVER] (state, payload) {
    // state.truth(
    //   menus => menus === payload[0](
    //     btn => btn.id === payload[1]
    //   ).hovering = true
    // )
    state.truth.menus[payload[0]+''][payload[1]].hovering = true
  },
  // [RECEIVE_PRODUCTS] (state, products) {
  //   state.all = products
  // },

  // [ADD_TO_CART] (state, productId) {
  //   state.all.find(p => p.id === productId).inventory--
  // }
}

export default {
  state,
  mutations
}