// @ts-ignore
import { createRouter, createWebHistory } from 'vue-router'
import { home, aboutus } from './pages'

const routes = [
  {
    path: '/',
    component: home,
  },
  {
    path: '/aboutus',
    component: aboutus,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router