<template>
  <div class="wrapper">
    <slot></slot>
  </div>
</template>

<script>
import BScroll from '@better-scroll/core'

const DIRECTION_H = 'horizontal'
const DIRECTION_V = 'vertical'

export default {
  methods: {
    _initScroll() {
      if (!this.$refs.wrapper) {
        return
      }
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true,
        probeType: 1, // 派发scroll , 节流
        
      })
    }
  }
}
</script>

<style>

</style>