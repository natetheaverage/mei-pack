 import {
  SET_FEATURES,
} from '../mutation-types'
import truth from '../../truth/truth.js'

// initial state
const state = {
  all: truth.features
}

const mutations = {

  [SET_FEATURES] (state, payload) {
    state.all = payload
  },

}

export default {
  state,
  mutations
}