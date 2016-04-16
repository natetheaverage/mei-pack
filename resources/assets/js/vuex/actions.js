import * as types from './mutation-types'
import menus from '../api/vuex/menus.js'
// EXAMPLE
// export const addToCart = ({ dispatch }, product) => {
//   if (product.inventory > 0) {
//     dispatch(types.ADD_TO_CART, product.id)
//   }
// }
// An action will recieve the store as the first argument.
// Since we are only interested in the dispatch (and optionally the state)
// We can pull those two parameters using the ES6 destructuring feature



export const setRoute = function ({ dispatch, state }) {
  dispatch(types.SET_ROUTE, state) 
}
export const setModel = function ({ dispatch, state}) {
  dispatch(types.SET_MODEL, state )
}

export const setCompanyBrandingDetail = ({dispatch }, id, value) => {
	//console.log(value +' '+ id)
  if(typeof id == 'string') {
  	dispatch(types.SET_COMPANY_BRAND_DETAIL, [id,value])
	}
}
export const setSetting = ({dispatch}, id, value) => {
  if(typeof id == 'string') {
  	dispatch(types.SET_SETTING, [id,value])
  }
}


export const toggleSetting = ({ dispatch }, container) => {
  dispatch(types.TOGGLE_SETTING, container)
}

export const setMenu = ({ dispatch, state}, menuName, menu=null) => {
  if(menu != null){
    dispatch(types.SET_MENU, [menu, menuName])
  }else{
    menus.getMenu(
      menuName,
      menu => dispatch(types.SET_MENU, [menu, menuName])
    )
  }
}

export const setMenuActive = ({dispatch}, button) => {
    dispatch(types.RESET_ALL_MENU_ACTIVE),
    dispatch(types.SET_MENU_ACTIVE, button)
}

export const setCopyText = ({dispatch}, object, payload) => {
  if(typeof object == 'object') {
    dispatch(types.SET_COPY_TEXT, object, payload)
  }
}

export const setCopy = ({dispatch}, payload) => {
    dispatch(types.SET_COPY, payload)
}

export const setPage = function ({ dispatch, state}) {
  dispatch(types.SET_PAGE, state )
}