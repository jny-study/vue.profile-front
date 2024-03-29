import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/spa/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/profile',
      name: 'profile',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '@/spa/ProfileList.vue')
    },
    {
      path: '/profile/new',
      name: 'profileNew',
      component: () => import('@/spa/ProfileNew.vue')
    },
    {
      path: '/profile/detail',
      name: 'profileDetail',
      component: () => import('@/spa/ProfileDetail.vue')
    },
    {
      path: '/profile/modify',
      name: 'profileModify',
      component: () => import('@/spa/ProfileModify.vue')
    }
  ]
})
