 import {
  SET_COPY_TEXT,
  SET_COPY,
} from '../mutation-types'
import truth from '../../truth/truth.js'

// initial state
const state = {
  all: truth.copyText
}

const mutations = {

  [SET_COPY_TEXT] (state, object, payload) {
    var route = state.all[object.base_view][payload[1]][object.instance_number]
    route.id = object.id
    route.copy = payload[0]
    route.height = object.height
    route.version = object.version
    route.versionList = object.versionList
  },

  [SET_COPY] (state, payload) {
    for (var i = payload.length - 1; i >= 0; i--) {      
      var route = state.all[payload[i].base_view][payload[i].parent_name][payload[i].instance_number]
      route.id = payload[i].id
      route.copy = payload[i].copy
      route.height = payload[i].height
      route.version = payload[i].version
      route.versionList = payload[i].versionList
    }
  },

}

export default {
  state,
  mutations
}