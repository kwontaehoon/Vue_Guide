import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/home/index.vue'
import Setup from '@/components/setup/List.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/setup',
      component: Setup
    }
  ],
})

export default router
