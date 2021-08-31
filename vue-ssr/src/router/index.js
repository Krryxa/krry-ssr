import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About.vue')
  },
  {
    path: '/myblog',
    name: 'myblog',
    component: () => import('@/views/Myblog.vue')
  }
]

export default new VueRouter({
  mode: 'history',
  routes
})