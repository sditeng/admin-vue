import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '../view/admin/dashboard/dashboard.vue'
import Login from '../view/admin/login.vue'
import Article from '../view/admin/article/article.vue'
import Page from '../view/admin/page/page.vue'
import Attachment from '../view/admin/attachment/attachment.vue'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {path: '/',name: 'Dashboard',components: {default: Dashboard, login: Login}},
    // {path: '/admin/login',name: 'Login',component: Login},
    {path: '/admin/article',name: 'Article',component: Article},
    {path: '/admin/page',name: 'Page',component: Page},
    {path: '/admin/attachment',name: 'Attachment',component: Attachment},
  ]
})
