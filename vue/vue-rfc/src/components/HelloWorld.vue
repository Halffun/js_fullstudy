<template>
  <div>
    <div @touchmove="handleMove1" :style="{position: 'absolute', left: x1 + 'px', top: y1 + 'px'}">1</div>
    <div @touchmove="handleMove2" :style="{position: 'absolute', left: x2 + 'px', top: y2 + 'px'}">2</div>
    <div>{{time}}</div>
  </div>
</template>

<script>
import useDrag from '../useDrag'
import useClock from '../useClock'
export default {
  setup() {
    const {x: x1, y: y1, handleMove: handleMove1} = useDrag()
    const {x: x2, y: y2, handleMove: handleMove2} = useDrag()
    const time = useClock()
    return {
      x1, y1, x2, y2, handleMove1, handleMove2, time
    }
  }
}
</script>

<style>

</style>