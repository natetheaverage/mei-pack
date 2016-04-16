import truth from '../../truth/truth.js'
// import Vue from 'vue'
// import VueResource from 'vue-resource'
// Vue.use(VueResource)

const _menus = truth.menus

export default {

	getMenu(menuName, cb){
		console.log(menuName)
		setTimeout(() => {
			cb(_menus[menuName]) 
		}, 100)
	}

}
