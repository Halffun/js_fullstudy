<template>
  <div id="app">
    <Com1></Com1>
  </div>
</template>

<script>
import Com1 from './Com.vue'
export default {
  components: {
    Com1
  },
  beforeCreate() {
    // node 里面输出
    // 组件在服务器端调用
    console.log(1111);
  },
  mounted() {
    // 在 node 端没有 $mount() 所以不会被调用
    console.log(22222);
  }
}
</script>

<style>

</style>