import Vue from 'vue'
import VueResource from 'vue-resource'
import VueTouch from 'vue-touch'
Vue.use(VueResource)
Vue.use(VueTouch)

import MeiApp from './mei-app.js'

import Test from './modules/Test.vue'
Vue.component('test', Test)

module.exports = new Vue(MeiApp).$mount('body')