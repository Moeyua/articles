import Vue from 'vue'
import Router from 'vue-router'
import contents from '@/components/contents'

Vue.use(Router)

export default new Router({
  routes: [
    // {path: '/', name: 'HelloWorld', component: HelloWorld}
    // {path: '/home', name: 'contents', component: contents},
    // {path: '/', name: 'root', redirect: '/home'},
    {
      path: '/',
      redirect: '/首页',
      children: [

      ]
    },
    {path: '/:name', name: 'contents', component: contents}
  ]
})
