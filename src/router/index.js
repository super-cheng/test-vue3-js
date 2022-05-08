import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/about2',
    name: 'about2',
    component: () => import(/* webpackChunkName: "about2" */ '../views/About2View.vue')
  },
  {
    path: '/about3',
    name: 'about3',
    component: () => import(/* webpackChunkName: "about3" */ '../views/About3View.vue')
  },
  {
    path: '/about4',
    name: 'about4',
    component: () => import(/* webpackChunkName: "about4" */ '../views/About4View.vue')
  },
  {
    path: '/about5',
    name: 'about5',
    component: () => import(/* webpackChunkName: "about5" */ '../views/About5View.vue')
  },
  {
    path: '/about6',
    name: 'about6',
    component: () => import(/* webpackChunkName: "about6" */ '../views/About6View.vue')
  },
  {
    path: '/about6copy',
    name: 'about6copy',
    component: () => import(/* webpackChunkName: "about6copy" */ '../views/About6ViewCopy.vue')
  },
  {
    path: '/about7',
    name: 'about7',
    component: () => import(/* webpackChunkName: "about7" */ '../views/About7View.vue')
  },
  {
    path: '/about8',
    name: 'about8',
    component: () => import(/* webpackChunkName: "about8" */ '../views/About8View.vue')
  },
  {
    path: '/about9',
    name: 'about9',
    component: () => import(/* webpackChunkName: "about9" */ '../views/About9View.vue')
  },
  {
    path: '/about10',
    name: 'about10',
    component: () => import(/* webpackChunkName: "about10" */ '../views/About10View.vue')
  },
  {
    path: '/about11',
    name: 'about11',
    component: () => import(/* webpackChunkName: "about11" */ '../views/About11View.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
