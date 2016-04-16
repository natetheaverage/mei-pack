 import {
  SET_SETTING,
  TOGGLE_SETTING
} from '../mutation-types'
//import menus from '../../api/vuex/settings.js'
import truth from '../../truth/truth.js'

// initial state
const state = {
  all: truth.settings
}

const mutations = {

  [SET_SETTING] (state, payload) {
    state.all[payload[0]+''] = payload[1]
  },

  [TOGGLE_SETTING] (state, payload) {
    state.all[payload] = !state.all[payload]
  },

}

export default {
  state,
  mutations
}