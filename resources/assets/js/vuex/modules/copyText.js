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
    console.log(payload)
    var route = state.all[object.base_view][object.instance_number]
    route.id = object.id
    route.copy = payload
    route.height = object.height
    route.version = object.version
    route.versionList = object.versionList
  },

  [SET_COPY] (state, payload) {
    console.log(payload)
    for (var i = payload.length - 1; i >= 0; i--) {
      console.log(payload[i])
      var route = state.all[payload[i].base_view][payload[i].instance_number]
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