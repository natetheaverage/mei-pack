import truth from '../../truth/truth.js'

const _menus = truth.menus

export default {

	getMenu(menuName, cb){
		console.log(menuName, 'in ->api/vuex/menus.js')
		setTimeout(() => {
			cb(_menus[menuName]) 
		}, 100)
	}

}
