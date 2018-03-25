import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '../view/admin/dashboard/dashboard.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {path: '/',name: 'Dashboard',component: Dashboard}
  ]
})
