// An action will recieve the store as the first argument.
// Since we are only interested in the dispatch (and optionally the state)
// We can pull those two parameters using the ES6 destructuring feature
export const setRoute = function ({ dispatch, state }) {
  dispatch('SET_ROUTE', state)
}
export const setModel = function ({ dispatch, state}) {
  dispatch('SET_MODEL', state )
}
export const setMenu = function ({ dispatch, state}) {
  dispatch('SET_MENU', state )
}
export const setPage = function ({ dispatch, state}) {
  dispatch('SET_PAGE', state )
}