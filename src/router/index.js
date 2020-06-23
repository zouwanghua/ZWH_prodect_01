import Vue from 'vue'
import Router from 'vue-router'
// 导入刚才编写的组件
import Login from '@/components/Login'
import AppIndex from '@/components/home/AppIndex'
// import HelloWorld from '@/components/HelloWorld'


Vue.use(Router)
export const constantRouterMap = [
	
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/index',
      name: 'AppIndex',
      component: AppIndex
    }
  ]

export default new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
