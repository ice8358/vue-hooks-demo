<template>
  <div>
    <input type="text" v-model="user">
    childone: {{msg}}
    <!-- <childtwo></childtwo> -->
  </div>
</template>

<script>
import childtwo from './ChildTwo'
import { hooks, useData, useComputed } from 'vue-hooks'

export default {
  name: 'childOne',
  inject: ['msg'],
  data() {
      return {
        demo: this.msg,
        user: '',
      }
  },
  watch: {
    demo(val) {
      console.log(val, '子组件demo')
    }
  },
  components: {
      childtwo
  }
}
</script>