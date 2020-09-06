<template>
  <div class="cart-control">
    <transition name="move">
      <div class="cart-decrease" v-show="food.count > 0" @click.stop="decrease">
      <span class="inner icon-remove_circle_outline"></span>
    </div>
    </transition>
    <div class="cart-count" v-show="food.count > 0">{{food.count}}</div>
    <div class="cart-add icon-add_circle" @click.stop="add"></div>
  </div>
</template>

<script>
export default {
  props: {
    food: {
      type: Object
    }
  },
  data() {
    return {

    }
  },
  methods: {
    decrease() {
      if (this.food.count) {
        this.food.count--
      }
    },
    add(event) {
      if (!this.food.count) {
        this.$set(this.food, 'count', 1)
      } else {
        this.food.count++
      }
      this.$emit('add', event.target)
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '../../common/stylus/variable';
  .cart-control
    display flex
    align-items center
    .cart-decrease
      display inline-block
      padding 6px
      opacity 1
      .inner
        display inline-block
        line-height 24px
        font-size $fontsize-large-xxx
        color $color-blue
        transition all 0.4s linear
        transform rotate(0)
      &.move-enter, &.move-leave-to
        opacity 0
        transform translate3d(24px, 0, 0)
        .inner
          transform rotate(180deg)
      &.move-enter-active, &.move-leave-active
        transition all 0.4s linear
    .cart-count
      width 12px
      line-height 24px
      font-size $fontsize-small-s
      text-align center
      color $color-font
    .cart-add
      display inline-block
      padding 6px
      line-height 24px
      font-size $fontsize-large-xxx
      color $color-blue
</style>