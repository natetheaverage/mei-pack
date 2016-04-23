import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)

export default new Vue({
	methods:{
		save(d){
			//console.log('save fired in api/vuex/pessistance.js with following data')
			//console.log(d)
			return true
		}
	}
})

