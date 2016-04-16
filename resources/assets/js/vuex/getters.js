 // This getter is a function which just returns the count
// With ES6 you can also write it as:
// export const getCount = state => state.count

export function getRoute (state) {
  return state.currentRoute
}
export function getModels (state) {
  return state.models
}
export function getPublicSettings (state) {
  return state.truth.settings
}

export function getCompanyDetails (state) {
  return state.truth.company
}

export function getPrimaryMenu (state) {
  return state.truth.menus.filter(menu => {
    return menu === 'primary'
  })
}
export function getMenuData (state) {
  return state.truth.menus.filter(menu => {
    return menu === 'primary'
  })
}
// export function getPrimaryMenuHover (state) {
//   return state.truth.menus.primary
// }
export function getHomeMenu (state) {
  return state.menus.dashboard
}

export function getHomePage (state) {
  return state.pages.home
}
