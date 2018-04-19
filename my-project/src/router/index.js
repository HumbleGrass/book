import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/components/Home'
// import Collect from '@/components/Collect'
// import Add from '@/components/Add'
// import Detall from '@/components/Detall'
// import List from '@/components/List'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: ()=>import('@/components/Home')
    },
    {
      path: '/collect',
      name: 'Collect',
      component: ()=>import('@/components/Collect'),
      meta:{keeplive:true}
    },
    {
      path: '/add',
      name: 'Add',
      component: ()=>import('@/components/Add')
    },
    {
      path: '/detall/:bid',
      name: 'Detall',
      component: ()=>import('@/components/Detall')
    },
    {
      path: '/list',
      name: 'List',
      component: ()=>import('@/components/List')
    },
    {
      path: '/parent',
      name: 'parent',
      component: ()=>import('@/base/parent')
    },
    {
      path: '/',
      redirect:'/home'
    },
  ]
})
