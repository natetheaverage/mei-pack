import * as types from './mutation-types'
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
export const setMainMenuHover = ({ dispatch }, id) => {
  if(id != null) {
  	dispatch(types.SET_MENU, id)
	}
}
export const setCompanyBrandingDetail = ({dispatch }, id, value) => {
	console.log(value +' '+ id)
  if(typeof id == 'string') {
  	dispatch(types.SET_COMPANY_BRAND_DETAIL, [id,value])
	}
}
export const setSetting = ({dispatch}, id, value) => {
  if(typeof id == 'string') {
  	dispatch(types.SET_SETTING, [id,value])
  }
}
export const setPrimaryMenuHover = ({dispatch}, button) => {
	if(typeof button == 'object') {
 		dispatch(types.RESET_ALL_MENU_HOVER)
 		dispatch(types.SET_PRIMARY_MENU_HOVER, [button.type, button.id] )
	}
}
export const setPage = function ({ dispatch, state}) {
  dispatch(types.SET_PAGE, state )
}