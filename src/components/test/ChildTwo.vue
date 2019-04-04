<template>
  <div>
    <input type="text" v-model="user">
    childtwo: {{msg}}
  </div>
</template>

<script>
export default {
  name: '',
  inject: ['msg'],
  data() {
    return {
      demo: this.msg,
      user: '',
    }
  }
}
</script>