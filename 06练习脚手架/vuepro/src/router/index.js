import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import product2 from '@/components/product2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'product2',
      component: product2
    }
  ]
})
