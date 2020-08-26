<template>
  <div class="hi">
    <p>我是hi二页面</p>
    <button @click="goBack">返回上一个页面</button>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    goBack() {
      // 编程式导航
      // this.$router.push({path:'/hi', query: {name: 'wn'}})
      this.$router.push({name:'abc', params: {name: 'wn'}})
    }
  },
}
</script>

<style>

</style>