<template>
  <div class="bgimg">
    <img src="../assets/images/1-1.jpg" alt="">
    <slot></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
.bgimg
  height 100vh
  width 100vw
  box-sizing border-box
  img 
    width 100%
    height 100%
</style>