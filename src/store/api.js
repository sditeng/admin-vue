import Vue from 'vue'
import axios from 'axios'
import qs from "qs"

Vue.prototype.$http = axios

axios.interceptors.response.use((response) => {
  return response;
}), (error) => {
  return Promise.reject(error.response.data)
}

export function post(path, data) {
  path = "/api"+path
  data = qs.stringify(data)
  return new Promise((resolve, reject) => {
    axios.post(path, data).then(function (response) {
      intercept(path, response.data);
      resolve(response.data);
    }).catch(function (err) {
      reject(err);
    })
  })
}

export function get (path, data) {
  path = "/api"+path
  data = qs.stringify(data)
  return new Promise((resolve, reject) => {
    axios.get(path, data).then(function (response) {
      intercept(path, response.data);
      resolve(response.data);
    }).catch(function (err) {
      reject(err);
    })
  })
}

function intercept(path, data) {

}

export function isLogin () {
  return get('/admin/check')
}
