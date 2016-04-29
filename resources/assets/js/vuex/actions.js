import * as types from './mutation-types'
import menus from '../api/vuex/menus.js'

export const setRoute = function ({ dispatch, state }) {
  dispatch(types.SET_ROUTE, state) 
}
export const setModel = function ({ dispatch, state}) {
  dispatch(types.SET_MODEL, state )
}

// this will probably find its way gone
export const setCompanyBrandingDetail = ({dispatch }, id, value) => {
  if(typeof id == 'string') {
  	dispatch(types.SET_COMPANY_BRAND_DETAIL, [id,value])
	}
}

// For more percice control of settings by sending the value 
export const setSetting = ({dispatch}, id, value) => {
  if(typeof id == 'string') {
  	dispatch(types.SET_SETTING, [id,value])
  }
}

// The switcher for boolean values in settings
export const toggleSetting = ({ dispatch }, container) => {
  dispatch(types.TOGGLE_SETTING, container)
}

// When a full menu is fetched use this action to set the menu to state
export const setMenu = ({ dispatch, state}, menuName, menu=null) => {
  
  if(menu != null){
    dispatch(types.SET_MENU, [menu, menuName])
  }else{
    menus.getMenu( menuName,
      menu => dispatch(types.SET_MENU, [menu, menuName])
    )
  }
}
export const setMenuActive = ({dispatch}, button) => {
    dispatch(types.RESET_ALL_MENU_ACTIVE),
    dispatch(types.SET_MENU_ACTIVE, button)
}
// Object editor setter (this could be buttons 
export const setObject = function ({ dispatch, state}, object, field, value) {
  dispatch(types.SET_OBJECT, object, field, value )
}

export const setCopyText = ({dispatch}, object, payload) => {
  if(typeof object == 'object') {
    dispatch(types.SET_COPY_TEXT, object, payload)
  }
}

export const setCopy = ({dispatch}, payload) => {
    dispatch(types.SET_COPY, payload)
}

export const setFeatures = ({dispatch}, payload) => {
    dispatch(types.SET_FEATURES, payload)
}


export const setPage = function ({ dispatch, state}) {
  dispatch(types.SET_PAGE, state )
}