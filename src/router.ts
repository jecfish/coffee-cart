import { createRouter, createWebHistory } from 'vue-router'
import ListPage from './components/pages/ListPage.vue'
import CartPage from './components/pages/CartPage.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/menu',
      component: ListPage
  },
  {
      path: '/cart',
      component: CartPage
  },
  {
      path: '/',
      redirect: '/menu'
  }
  ]
})