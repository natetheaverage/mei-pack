// This getter is a function which just returns the count
// With ES6 you can also write it as:
// export const getCount = state => state.count

export function getRoute (state) {
  return state.currentRoute
}
export function getModels (state) {
  return state.models
}
export function getMainMenu (state) {
  return state.menus.main
}
export function getHomeMenu (state) {
  return state.menus.dashboard
}
export function getHomePage (state) {
  return state.pages.home
}
