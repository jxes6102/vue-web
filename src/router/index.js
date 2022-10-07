import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import mainView from '../views/mainView'
import formView from '../views/formView.vue'
import gameView from '../views/gameView.vue'
import pictureView from '../views/pictureView'
import toolView from '../views/toolView.vue'
import errorView from '../views/errorView.vue'

const routes = [
  {
    path: '/',
    component: mainView,
  },
  {
    path: '/home',
    component: HomeView,
  },
  {
    path: '/form',
    component: formView,
  },
  {
    path: '/game',
    component: gameView,
  },
  {
    path: '/picture',
    component: pictureView,
  },
  {
    path: '/tool',
    component: toolView,
  },
  {
    path: '/about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },
  {
    // todo notfound component
    path: '/:catchAll(.*)',
    component: errorView,
  },
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
})

export default router
