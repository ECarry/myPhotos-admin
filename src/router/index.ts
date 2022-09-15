import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'
import Layout from '~/layout/index.vue'

// 存放固定的路由
const defaultRouterList: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'login',
    component: () => import('~/pages/login/index.vue'),
  },
  {
    path: '/',
    name: 'Home',
    component: Layout,
  },
]

const routes = [...defaultRouterList]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
