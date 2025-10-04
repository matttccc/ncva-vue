import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/news',
      name: 'news',
      component: () => import('../views/NewsView.vue'),
    },
    {
      path: '/leagues',
      name: 'leagues',
      component: () => import('../views/LeaguesView.vue'),
    },
    {
      path: '/clubs',
      name: 'clubs',
      component: () => import('../views/ClubsView.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue'),
    },
    {
      path: '/enter-results',
      name: 'enter-results',
      component: () => import('../views/EnterResultsView.vue'),
    },
  ],
})

export default router
