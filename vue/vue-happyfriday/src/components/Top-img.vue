<template>
  <div class="top-img">
    <span class="num-tip">{{tip}}</span>
  </div>
</template>

<script>
export default {
  props: ['tip']
}
</script>

<style lang="stylus" scoped>
.top-img
  position absolute
  top 0
  right 40px
  width 84px
  height 150px
  background url(../assets/images/WechatIMG2.png) no-repeat
  background-size 100% 100%
  .num-tip
    position absolute
    bottom 20px
    right 16px
    color red
    font-weight bold
</style>