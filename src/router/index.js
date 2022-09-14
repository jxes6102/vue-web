import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import mainView from '../views/mainView'
import formView from '../views/formView.vue'
import gameView from '../views/gameView.vue'
import pictureView from '../views/pictureView.vue'
import toolView from '../views/toolView.vue'

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
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },
  {
    // todo notfound component
    path: '/:catchAll(.*)',
    redirect: '/',
  },
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
})

export default router
