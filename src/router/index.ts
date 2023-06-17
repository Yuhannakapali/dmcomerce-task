import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/example-template',
      name: 'example-template',
      component: () => import('@/views/ExampleTemplateView.vue')
    },
    {
      path: '/newsletter-subscription',
      name: 'newsletter-subscription',
      component: () => import('@/views/NewsletterSubscriptionView.vue')
    }
  ]
})

export default router
