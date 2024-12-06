import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/fr',
      name: 'home',
      component: () => import('../pages/fr/index.vue')
    },
    {
      path: '/fr/projet/:id',
      name: 'projet',
      component: () => import('../pages/fr/projet/[id].vue')
    }
  ]
})

export default router