import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
import mock from './data.js'

let data = {
  products: mock,
  cart:[],
  cartSize: 0,
  empty: true
} 


new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')