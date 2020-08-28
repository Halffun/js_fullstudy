<template>
  <div class="user">
    <p>{{userName}}</p>
    <!-- <button @click="handle">按钮</button> -->
    <button @click="changeBaby">养新的宠物</button>
  </div>
</template>

<script>
export default {
  props: ['userName'],
  data() {
    return {
      name: '皮皮',
      title: '我是子组件里的title',
      baby: '小黑'
    }
  },
  methods: {
    handle() {
      // console.log('ok');
      this.$emit('titleChange', this.title)
    },
    changeBaby() {
      this.$emit('babyChange', this.baby)
    }
  }
}
</script>

<style>

</style>