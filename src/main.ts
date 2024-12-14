import './assets/css/style.css'
import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import './assets/css/style.css'

// Définir les routes directement ici
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/fr'
  },
  {
    path: '/fr',
    name: 'home',
    component: () => import('./pages/fr/index.vue')
  },
  {
    path: '/fr/projet/:id',
    name: 'projet',
    component: () => import('./pages/fr/projet/[id].vue')
  },
  {
    path: '/fr/projet',
    name: 'projets',
    component: () => import('./pages/fr/projet/index.vue')
  },
  {
    path: '/fr/about',
    name: 'about',
    component: () => import('./pages/fr/about.vue')
  },
  {
    path: '/fr/contact',
    name: 'contact',
    component: () => import('./pages/fr/contact.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

const app = createApp(App)
app.use(router)
app.mount('#app')

