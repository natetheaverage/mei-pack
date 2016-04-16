import VueRouter from 'vue-router'
import Vue from 'vue'
Vue.use(VueRouter)

export default new VueRouter({
  hashbang: false,
  history: true,
  linkActiveClass: 'active-link',
});
