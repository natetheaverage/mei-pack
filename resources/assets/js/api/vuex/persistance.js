import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)

export default new Vue({
	methods:{
		save(state)
    {
			this.$http.post('/api/state', {state},
      function (data, status, request) {
        console.log("ui / vuex / persistance.js  >>>GOOD<<<<");
        //that.setCopy(data[1]);
      }).error(function (data, status, request) {
        console.log("Err in ui vuex persistance.js");
      }.bind(this))
		},
    get()
    {
      this.$http.get('/api/state', function (data, status, request) {
        console.log("ui / vuex / persistance.js  >>>Retrieved<<<<");
        //onsole.log(data);
        return data;
      }).error(function (data, status, request) {
        console.log("Err in ui vuex persistance.js");
      }.bind(this))
    },
	}
})

