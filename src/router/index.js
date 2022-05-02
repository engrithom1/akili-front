import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import Ourservices from '../views/OurServices.vue'
import ProductDetails from '../views/ProductDetails.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/services',
    name: 'services',
    component: Ourservices
  },
  {
    path: '/product-page',
    name: 'product_page',
    component: ProductDetails
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
