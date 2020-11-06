import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Browse from '../views/Browse.vue'
import Cart from '../views/Cart.vue'
import ULTRABOOST20 from '../views/products/ULTRABOOST20'
import X9000L4 from '../views/products/X9000L4'
import PUREMOTION from '../views/products/PUREMOTION'
import NMDR1 from '../views/products/NMDR1'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/browse',
    name: 'Browse',
    component: Browse
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/ULTRABOOST20',
    name: 'ULTRABOOST20',
    component: ULTRABOOST20
  },
  {
    path: '/X9000L4',
    name: 'X9000L4',
    component: X9000L4
  },
  {
    path: '/PUREMOTION',
    name: 'PUREMOTION',
    component: PUREMOTION
  },
  {
    path: '/NMDR1',
    name: 'NMDR1',
    component: NMDR1
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
