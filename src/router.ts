import { createRouter, createWebHistory } from 'vue-router'
import ListPage from './components/pages/ListPage.vue'
import CartPage from './components/pages/CartPage.vue'
import AdPage from './components/pages/AdPage.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: ListPage
    },
    {
      path: '/cart',
      component: CartPage
    },
    {
      path: '/ad',
      component: AdPage
    },
  ]
})