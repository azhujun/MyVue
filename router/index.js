import Vue from 'vue'
import Router from 'vue-router'
import Hello from 'components/Hello'
import List from 'components/List'
import Login from 'components/Login'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/list',
      name: 'list',
      component: List
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
