import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/Welcome'
import AI from '@/components/AI'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome,
      props: true
    },
    {
      path: '/AI',
      name: 'AIOptions',
      component: AI
    }
  ]
})
