// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import routes from './router'
import VueRouter from 'vue-router';

import {
  withHooks,
  useData,
  useComputed,
  useWatch,
  useMounted,
  useUpdated,
  useDestroyed
} from "vue-hooks"

Vue.use(VueRouter);
const router = new VueRouter({
  routes: routes,
  mode: process.env.NODE_ENV == 'development' ? 'history' : 'hash',
});
Vue.config.productionTip = false
window.$router = router;


const Foo = withHooks(h => {
  const data = useData({
    count: 0
  })
 
  const double = useComputed(() => data.count * 2)
 
  useWatch(() => data.count, (val, prevVal) => {
    console.log(`count is: ${val}`)
  })
 
  useMounted(() => {
    console.log('mounted!')
  })
  useUpdated(() => {
    console.log('updated!')
  })
  useDestroyed(() => {
    console.log('destroyed!')
  })
 
  return h('div', [
    h('div', `count is ${data.count}`),
    h('div', `double count is ${double}`),
    h('button', { on: { click: () => {
      // still got that direct mutation!
      data.count++
    }}}, 'count++')
  ])
})


/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>'
// })
new Vue({
  el: '#app',
  components: { Foo },
  template: '<Foo/>'
})
// new Vue({
//   el: '#app',
//   render(h) {
//     return h('div', [h(Foo),h(Foo)])
//   }
// })
