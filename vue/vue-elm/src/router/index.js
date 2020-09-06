import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Goods',
    component: () => import('@/views/goods/goods.vue')
  },
  {
    path: '/comment',
    name: 'Comment',
    component: () => import('@/views/comment/comment.vue')
  },
  {
    path: '/seller',
    name: 'Seller',
    component: () => import('@/views/seller/seller.vue')
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
