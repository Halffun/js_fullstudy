<template>
  <div>
    <!-- fragment -->
    <h2 @touchmove="handleMove"
     :style="{left: `${x}px`, top: `${y}px`, position: 'absolute'}">拖拽</h2>
     <DragAble />
  </div>
</template>

<script>
import txt from './txt'
import withDrag from '../withDrag'

const DragAble = withDrag(txt)
// DragAble 拥有了 拖拽事件
export default {
  components: {
    DragAble,
  },
  data() {
    return {
      x: 0,
      y: 0
    }
  },
  methods: {
    handleMove(e) {
      const x = e.touches[0].pageX;
      const y = e.touches[0].pageY;
      this.x = x;
      this.y = y
    }
  }
}
</script>

<style>

</style>