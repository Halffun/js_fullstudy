<template>
  <div class="item-wrapper">
      <Bgimg>
        <div class="item-container">
          <div class="item_items">
            <span class="item_title">题目一</span>
            <ul v-for="(item, index) in q1" :key="index">
              <li class="item_list">
                <span class="option_style" :class="{'has_choosed': item.choose===true}" @click="chooses">{{item.a}}</span>
                <span class="option_detail">{{item.answer}}</span>
              </li>
            </ul>
          </div>
        </div>
        <TopImg></TopImg>
      </Bgimg>
    </div>
  
</template>

<script>
import Bgimg from '@/components/Bgimg'
import TopImg from '@/components/Top-img'
import { mapState } from 'vuex'

export default {
  data() {
    return {

    }
  },
  components: {
    TopImg,
    Bgimg
  },
  computed: {
    ...mapState(['q1']),
  },
  methods: {
    chooses() {
      console.log(this.q1);
      for(let i=0; i < this.q1.length; i++) {
        this.q1[i].choose = !this.q1[i].choose
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.item-container
  position absolute
  top 100px
  left 50px
  width 340px
  height 300px
  background url(../assets/images/2-1.png) no-repeat
  background-size 100% 100%
  .item_items
    position absolute
    top 80px
    left 80px
    .item_title
      font-size 18px
      color #fff
      line-height 12px
    ul
      list-style none 
      font-style normal
      text-decoration none
      border none 
      font-weight lighter
      .item_list
        margin-top 8px
        color #fff
        .option_style
          display inline-block
          width 19px
          height 19px
          border 1px solid #fff
          border-radius 50%
          line-height 19px
          text-align center
          margin-right 5px
          &.has_choosed
            background-color #ffd400
            color #575757
            border-color #ffd400
            display inline-block
            width 19px
            height 19px
            border 1px solid #fff
            border-radius 50%
            line-height 19px
            text-align center
            margin-right 5px
</style>