import BrandBox from './../../../resources/assets/js/vue/partials/BrandBox.vue'
import store from './../../../resources/assets/js/vuex/store.js'
import setSetting from './../../../resources/assets/js/vuex/actions.js'
import truth from './../../../resources/assets/js/truth/truth.js'
import Vue from 'vue'

describe("Vue Brand Box static", function() {
	const vm = new Vue({
	    template: '<div><brand-box></brand-box></div>',
	    components: { BrandBox },
	    store: store,
	    vuex:{
	    	actions:{
	    		setSetting
	    	}
	    },
	  }).$mount()
	it('should render correct title', () => {
	  expect(vm.$el.querySelector('.brand-title').textContent).toBe(truth.company.branding.name)
	})
	it('should render correct sub-title', () => {
	  expect(vm.$el.querySelector('.brand-sub-title').textContent).toBe(truth.company.branding.tagLine)
	})
	
})

// describe("Vue Brand Box editable", function() {
	
// 	  var vm = new Vue({
// 	    template: '<div><brand-box></brand-box></div>',
// 	    data: function(){
// 	    	return{ this: 'that' }
// 	    },
// 	    components:{ BrandBox },
// 	    store: store,
// 	    vuex:{
// 	    	actions:{
// 	    		setSetting
// 	    	},
// 	    },
// 	    //ready(){ this.setSetting('editMode', true) }
// 	  }).$mount()
// 	it('should render inputs', () => {
		
// 		//expect(typeof BrandBox.methods['getSettings'] ).toBe('function')
		

// 	  //expect(typeof settings() ).toBe(object)
// 	  expect( vm.$el.querySelector('.brand-sub-title').type ).toBe('text')
// 	})
// })

