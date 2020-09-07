<template>
  <div class="shop-cart">
    <div class="content">
      <div class="content-left">
        <div class="logo-wrapper">
          <div class="logo" :class="{'highlight': totalCount > 0}">
            <i class="icon-shopping_cart" :class="{'highlight': totalCount > 0}"></i>
          </div>
          <div class="num" :class="{'num1': totalCount == 0}">
            <span class="bubble">{{totalCount}}</span>
          </div>
        </div>
        <div class="price">¥{{totalPrice}}</div>
        <div class="desc">另需配送费¥ {{deliveryPrice}} 元</div>
      </div>
      <div class="content-right">
        <div class="pay not-enough" :class="{'enough': this.totalPrice > this.minPrice || this.totalPrice == this.minPrice}">{{pay}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    selectFoods: {
      type: Array,
      default() {
        return []
      }
    },
    deliveryPrice: {
      type: Number,
      default: 0
    },
    minPrice: {
      type: Number,
      default: 0
    }
  },
  computed: {
    totalCount() {
      let count = 0
      this.selectFoods.forEach(food => {
         count += food.count
      });
      return count
    },
    totalPrice() {
      let price = 0
      this.selectFoods.forEach(food => {
         price += food.count * food.price
      });
      return price
    },
    pay() {
      if (this.totalPrice > this.minPrice || this.totalPrice == this.minPrice) {
        return '去结算'
      } else if(this.totalPrice == 0) {
        return '￥20元起送'
      } else {
        return `还差￥${this.minPrice - this.totalPrice}起送`
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
  @import '../../common/stylus/variable.styl';
  .shop-cart
    height: 100%
    .content
      display: flex
      background: $color-background
      font-size: 0
      color: $color-light-grey
      .content-left
        flex: 1
        .logo-wrapper
          display: inline-block
          vertical-align: top
          position: relative
          top: -10px
          margin: 0 12px
          padding: 6px
          width: 56px
          height: 56px
          box-sizing: border-box
          border-radius: 50%
          background: $color-background
          .logo
            width: 100%
            height: 100%
            border-radius: 50%
            text-align: center
            background: $color-dark-grey
            &.highlight
              background: $color-blue
            .icon-shopping_cart
              line-height: 44px
              font-size: $fontsize-large-xxx
              color: $color-light-grey
              &.highlight
                color: $color-white
          .num
            position: absolute
            top: 0
            right: 0
            &.num1
              display none
              position: absolute
              top: 0
              right: 0
            .bubble
              display inline-block
              padding 0 5px
              height 16px
              line-height 16px
              text-align center
              border-radius 16px
              font-family Helvetica
              font-weight 700
              font-size $fontsize-small-s
              color $color-white
              background $color-red
        .price
          display: inline-block
          vertical-align: top
          margin-top: 12px
          line-height: 24px
          padding-right: 12px
          box-sizing: border-box
          border-right: 1px solid rgba(255, 255, 255, 0.1)
          font-weight: 700
          font-size: $fontsize-large
          &.highlight
            color: $color-white
        .desc
          display: inline-block
          vertical-align: top
          margin: 12px 0 0 12px
          line-height: 24px
          font-size: $fontsize-small-s
      .content-right
        flex: 0 0 105px
        width: 105px
        .pay
          height: 48px
          line-height: 48px
          text-align: center
          font-weight: 700
          font-size: $fontsize-small
          &.not-enough
            background: $color-dark-grey
          &.enough
            background: $color-green
            color: $color-white
    .ball-container
      .ball
        position: fixed
        left: 32px
        bottom: 22px
        z-index: 200
        transition: all 0.4s cubic-bezier(0.49, -0.29, 0.75, 0.41)
        .inner
          width: 16px
          height: 16px
          border-radius: 50%
          background: $color-blue
          transition: all 0.4s linear
</style>