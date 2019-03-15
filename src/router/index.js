import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import MyPre from '@/pages/my-pre'
import Classfication from '@/pages/Classfication'
import ShoppingCart from "../pages/ShoppingCart";
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },

    {
      path:'/class',
      component:Classfication
    },
    {
      path:'/cart',
      component:ShoppingCart
    },
    {
      path:'/me',
      component:MyPre
    },
  ]
})
