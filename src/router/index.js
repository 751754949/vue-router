import Vue from 'vue'
import Router from 'vue-router'
import List from '@/components/List'
import Home from '@/components/Home'
import Title from '@/components/Title'
import Img from '@/components/Img'
import Cart from '@/components/Cart'
import User from '@/components/User'

Vue.use(Router)
// export default new Router({
export let router =  new Router({
  mode: "hash",  // 默认hash/     history
  routes: [
    // {
    //   path: '/list/:id/user/:name',       /* 动态路由 */
    //   component: List
    // },
    {
      path: '/list',       /* 嵌套路由 */
      component: List,
      children:[
        {
          path: 'title',       /*子路由 */
          component: Title,
        },
        {
          path: 'img',        /*子路由 */
          component: Img,
        }
      ]
    },
    {
      path: '/cart',
      component: Cart
    },
    {
      // path: '/search',
      path: '/user/:userId',      
      component: User
    },
    {
      path: '/',
      component: Home
    }
  ]
})
