import Vue from 'vue'
import Vuex from 'vuex'

import menus from './modules/menus.js'
import copyText from './modules/copyText.js'
import settings from './modules/settings.js'

import Persistance from '../api/vuex/persistance.js'
import createLogger from 'vuex/logger'
import truth from '../truth/truth.js'

Vue.use( Vuex )

const state = {
  truth,
  models:{
	  projects:{},
	  tasks:{},
	  conversations:{},
	  messages:{},
	  inventories:{},
  }, 
  pages:{
    home:{
      //menulayout:{},
    },
  },
};



export const mutations = {
  SET_ROUTE (state, payload) {
    state.currentRoute = payload
  },

  SET_MODEL (state, payload) {
    state.models[payload[0]+''] = payload[1]
  },
  
  SET_PAGE (state, payload) {
    state.pages[payload[0]+''] = payload[1]
  },
  
  // SET_COPY_TEXT (state, location, payload) {
  //   state.copyText[location['base']][location['name']][location['instance']] = location[1]
  // },

  SET_COMPANY_BRAND_DETAIL (state, payload) {
    state.truth.company.branding[payload[0]+''] = payload[1]
  },
  
  
}

const logger = createLogger({
  collapsed: true, // auto-expand logged mutations
  transformer (state) {
    // transform the state before logging it.
    // for example return only a specific sub-tree
    return state
  },
  mutationTransformer (mutation) {
    // mutations are logged in the format of { type, payload }
    // we can format it anyway we want.
    return mutation.type+' - '+mutation.payload
  }
})

const persistToDatabase = { 
  snapshot: true,
  onMutation (mutation, nextState, prevState, store) {
    // console.log( mutation )
    // console.log( prevState )
    // console.log( nextState )
    // console.log( store )
    Persistance.save(mutation) 
  }
}

export default new Vuex.Store({
  //remove these next two lines when in prodution cpu intence
	middlewares: [createLogger(), persistToDatabase],
  strict: true,
  modules: {
    menus,
    copyText,
    settings,
  },
  state,
  mutations
})