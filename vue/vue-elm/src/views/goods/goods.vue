<template>
  <div class="goods">
    <div class="scroll-nav-wrapper">
      <!-- 左右联动的菜单 -->
      <cube-scroll-nav :side="true" :data="goods" :options="scrollOptions" v-if="goods.length">
        <!-- 左侧菜单 -->
        <template slot="bar" slot-scope="props">
          <cube-scroll-nav-bar
            direction="vertical"
            :current="props.current"
            :labels="props.labels"
            :txts="barTxts"
          >
            <!-- 菜单里面的内容 -->
            <template slot-scope="props">
              <div class="text">
                <support-ico v-if="props.txt.type > -1" :size=3 :type="props.txt.type"></support-ico>
                <span>{{props.txt.name}}</span>
              </div>
            </template>
          </cube-scroll-nav-bar>
        </template>
        <cube-scroll-nav-panel
          v-for="good in goods"
          :key="good.name"
          :label="good.name"
          :title="good.name"
        >
          <ul>
            <li class="food-item" v-for="(food, index) in good.foods" :key="index">
              <div class="icon">
                <img width="57" height="57" :src="food.icon" alt="">
              </div>
              <div class="content">
                <h2 class="name">{{food.name}}</h2>
                <p class="desc">{{food.description}}</p>
                <div class="extra">
                  <span class="count">月售{{food.sellCount}}份</span>
                  <span>好评率{{food.rating}}%</span>
                </div>
                <div class="price">
                  <span class="now">￥{{food.price}}</span>
                  <span class="old" v-if="food.oldPrice">￥{{food.oldPrice}}</span>
                </div>
                <div class="cart-control-wrapper">
                  <cart-control :food="food" @add="onAdd"></cart-control>
                </div>
              </div>
            </li>
          </ul>
        </cube-scroll-nav-panel>
      </cube-scroll-nav>
    </div>
    <div class="shop-cart-wrapper">
      <shop-cart :select-foods="selectFoods" :deliveryPrice="data.deliveryPrice" :minPrice="data.minPrice"></shop-cart>
    </div>
  </div>
</template>

<script>
import SupportIco from '@/components/support-ico/support-ico'
import CartControl from '@/components/cart-control/cart-control'
import ShopCart from '@/components/shop-cart/shop-cart'
import { getGoods } from '@/api'
export default {
  props: {
    data: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  created() {
    this._getGoods()
  },
  data() {
    return {
      goods: [],
      scrollOptions: {
        click: true,
        directionLockThreshold: 0
      },
    }
  },
  computed: {
    // 需要一个菜单的集合--数组
    barTxts() {
      let ret = []
      // 循环数据源拿到里面的每一条数据的name重新放进ret
      this.goods.forEach((good) => {
        const {type, name, foods} = good
        ret.push({
          type,
          name
        })
      });
      return ret
    },
    selectFoods() {
      let foods = []
      this.goods.forEach((good) => {
        good.foods.forEach((food) => {
          if (food.count) {
            foods.push(food)
          }
        })
      })
      return foods
    }
  },
  methods: {
    onAdd(target) {
      // 小球下落
    },
    _getGoods() {
      getGoods({
        id: this.data.id
      }).then((goods) => {
        console.log('-----', goods);
        this.goods = goods
      })
    }
  },
  components: {
    SupportIco,
    CartControl,
    ShopCart
  }
};
</script>

<style lang="stylus" scoped>
  @import '../../common/stylus/variable';
  .goods
    position: relative
    text-align: left
    height: 100%
    .scroll-nav-wrapper
      position: absolute
      width: 100%
      top: 0
      left: 0
      bottom: 48px
    >>> .cube-scroll-nav-bar
      width: 80px
      white-space: normal
      overflow: hidden
    >>> .cube-scroll-nav-bar-item
      padding: 0 10px
      display: flex
      align-items: center
      height: 56px
      line-height: 14px
      font-size: $fontsize-small
      background: $color-background-ssss
      .text
        flex: 1
        position: relative
      .num
        position: absolute
        right: -8px
        top: -10px
      .support-ico
        display: inline-block
        vertical-align: top
        margin-right: 4px
    >>> .cube-scroll-nav-bar-item_active
      background: $color-white
      color: $color-dark-grey
    >>> .cube-scroll-nav-panel-title
      padding-left: 14px
      height: 26px
      line-height: 26px
      border-left: 2px solid $color-col-line
      font-size: $fontsize-small
      color: $color-grey
      background: $color-background-ssss
    .food-item
      display: flex
      margin: 18px
      padding-bottom: 18px
      position: relative
      &:last-child
        border-none()
        margin-bottom: 0
      .icon
        flex: 0 0 57px
        margin-right: 10px
        img
          height: auto
      .content
        flex: 1
        .name
          margin: 2px 0 8px 0
          height: 14px
          line-height: 14px
          font-size: $fontsize-medium
          color: $color-dark-grey
        .desc, .extra
          line-height: 10px
          font-size: $fontsize-small-s
          color: $color-light-grey
        .desc
          line-height: 12px
          margin-bottom: 8px
        .extra
          .count
            margin-right: 12px
        .price
          font-weight: 700
          line-height: 24px
          .now
            margin-right: 8px
            font-size: $fontsize-medium
            color: $color-red
          .old
            text-decoration: line-through
            font-size: $fontsize-small-s
            color: $color-light-grey
      .cart-control-wrapper
        position: absolute
        right: 0
        bottom: 12px
    .shop-cart-wrapper
      position: absolute
      left: 0
      bottom: 0
      z-index: 50
      width: 100%
      height: 48px
</style>