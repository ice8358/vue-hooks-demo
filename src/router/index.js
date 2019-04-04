import Vue from 'vue'
// import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Parent from '@/views/parent'

// Vue.use(Router)


const routes = [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/parent',
      name: 'parent',
      component: Parent
    }
]

export default routes;