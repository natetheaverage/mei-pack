import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/logger'
Vue.use( Vuex )

const state = {
  currentRoute: "home",
  appName:'MEi',
  viewTitle: 'Home',
  currentView: 'home',
  currentNavigation: 'mainnav',
  //currentUser: mei.currentUser,
  
  editMode: false, 
  editAll: false,
  dataMode: false,

  showLanguageSelector: false,

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
  menus:{
    home:{},
    main:{},
  },

  mainnav:[], 

};

const mutations = {
  SET_ROUTE (state, payload) {
    state.currentRoute = payload
  },
  SET_MODEL (state, payload) {
    state.models[payload[0]+''] = payload[1]
  },
  SET_MENU (state, payload) {
    state.menus[payload[0]+''] = payload[1]
  },
  SET_PAGE (state, payload) {
    state.pages[payload[0]+''] = payload[1]
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


export default new Vuex.Store({
  //remove these next two lines when in prodution cpu intence
	middlewares: [createLogger()],
  strict: true,
  state,
  mutations
})