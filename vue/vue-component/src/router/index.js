import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// import Main from '../views/Main.vue'

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
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/main',
    name: 'Main',
    component: () => import('@/views/Main.vue')
  },
  {
    path: '/detail',
    name: 'Detail',
    component: () => import('@/views/Detail.vue')
  },
  {
    path: '/methods',
    name: 'Methods',
    component: () => import('@/views/Methods.vue')
  },
  {
    path: '/watch',
    name: 'Watch',
    component: () => import('@/views/Watch.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
