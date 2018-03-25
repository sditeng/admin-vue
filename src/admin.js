// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Admin from './Admin.vue'
import router from './router/admin'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'font-awesome/css/font-awesome.min.css'
import './assets/admin.css'
import store from './store'
import { sync } from 'vuex-router-sync'
import axios from 'axios'

Vue.use(ElementUI)

Vue.config.productionTip = false

sync(store, router)
/* eslint-disable no-new */
new Vue({
  el: '#admin',
  router,
  components: { Admin },
  template: '<admin/>',
  store
})
