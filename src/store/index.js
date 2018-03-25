import Vue from 'vue'
import Vuex from 'vuex'

import { isLogin , post} from './api'
import router from '../router/admin'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    test: 1,
    user: {}           // 用户登录信息
  },
  getters:{
    getUser: (state) => state.user
  },
  actions: {
    isLogin: ({ commit, state }) => {
      isLogin().then(data => {
        commit('set_user', {data})
      })
    },
    login: ({ commit, state }, {username, password, errorcb}) => {
      return post('/admin/login',{username, password}).then(data => {
        commit('set_user', {data})
      }).catch(data => errorcb && errorcb(data))
    },
    logout: ({ commit, state }) => {
      return post('/admin/logout').then(data => {
        commit('set_user', {data})
      })
    }
  },
  mutations: {
    set_user: (state, {data}) => {
      if (data) {
        state.user = data
      } else {
        state.user = {}
      }
    }
  }
})

export default store
