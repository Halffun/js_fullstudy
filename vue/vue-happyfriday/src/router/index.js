import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/item',
    name: 'Item',
    component: () => import('@/views/Item.vue')
  },
  {
    path: '/item2',
    name: 'Item2',
    component: () => import('@/views/Item2.vue')
  },
  {
    path: '/item3',
    name: 'Item3',
    component: () => import('@/views/Item3.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
