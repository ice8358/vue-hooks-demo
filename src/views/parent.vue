<template>
  <div>
    <!-- <input type="text" v-model="message"> -->
    <div class="btns">
      <button @click="toChildOne">childOne</button>
      <button  @click="toChildTwo">childTwo</button>
    </div>
    <keep-alive>
      <childOne :is="childName"></childOne>
      <childOne :is="childName"></childOne>
    </keep-alive>
  </div>
</template>

<script>
import childOne from '@/components/test/ChildOne'
import childTwo from '@/components/test/ChildTwo'
export default {
  name: 'Parent',
  data() {
    return {
      message: '3sss33',
      childName: 'childOne'
    }
  },
  provide() {
    return {
      msg: this.getMessage()
    }
  },
  watch: {
    message(val) {
      console.log(val,'message')
    },
    msg(val) {
      console.log(val,'msg')
    }
  },
  methods: {
    getMessage() {
      return this.message
    },
    toChildOne() {
      this.childName = 'childOne';
    },
    toChildTwo() {
      this.childName = 'childTwo';
    }
  },
  components: {
    childOne,
    childTwo
  }
}
</script>
<style lang="" scoped>
  .btns {
    margin-bottom: 20px;
  }
</style>