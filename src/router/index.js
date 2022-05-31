import { createRouter, createWebHistory } from 'vue-router'

import store from '../store/index.js'

import HomePage from '../views/HomePage.vue'
import Ourservices from '../views/OurServices.vue'
import ProductDetails from '../views/ProductDetails.vue'
import Login from "../auth/LoginForm.vue"
import Register from "../auth/RegisterForm.vue"
import Cart from "../views/ItemsCart.vue"
import Wishlist from "../views/WishList.vue"
import Checkout from "../views/CheckOut.vue"
import CategoryPage from "../views/CategoryPage.vue"
import TagsPage from "../views/TagsPage.vue"
import Profile from '../views/MyProfile.vue'
import Contact from '../views/ContactUs.vue'


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
    path: '/contacts',
    name: 'contact',
    component: Contact
  },
  {
    path: '/product/:any/:id',
    name: 'product_page',
    component: ProductDetails
  },
  {
    path: '/category/:id',
    name: 'category_page',
    component: CategoryPage
  },
  {
    path: '/tag/:id',
    name: 'tag_page',
    component: TagsPage
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
    beforeEnter: (to, from, next) => {
      if(store.state.user.name) {
          next({path:'/'});
      } else {
          next();
      }
  }
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    beforeEnter: (to, from, next) => {
        if(store.state.user.name) {
            next({path:'/'});
        } else {
            next();
        }
    }
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart
  },
  {
    path: '/wishlist',
    name: 'wishlist',
    component: Wishlist
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: Checkout
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile,
    beforeEnter: (to, from, next) => {
      if(store.state.user.name) {
          next();
      } else {
          next({path:'/'});
      }
  }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    // always scroll to top
    return { top: 0 }
  },
})

export default router
