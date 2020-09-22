<template>
  <div class="item-wrapper">
      <Bgimg>
        <div class="item-container">
          <div class="item_items">
            <span class="item_title">{{tip}}</span>
            <ul ref="change">
              <li class="item_list" v-for="(item, index) in q3" :key="index" >
                <span class="option_style" :class="{'has_choosed': chooseNum==index}" @click="choosed(index)">{{item.a}}</span>
                <span class="option_detail">{{item.answer}}</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="button" @click="btn"></div>
        <TopImg :tip="tip"></TopImg>
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
      chooseNum: null,
      tip: '题目三'
    }
  },
  components: {
    TopImg,
    Bgimg
  },
  computed: {
    ...mapState(['q1', 'q2', 'q3', 'score']),
  },
  methods: {
    choosed(index) {
      for(let i=0; i < this.q3.length; i++) {
        if (this.q3[i].choose !== index) {
          this.chooseNum = index
          this.score.a += this.q3[i].score
        }
      }
    },
    btn() {
      if (this.chooseNum == null) {
        alert('您还没有选择答案哦')
      } else {
        this.$router.push({ path: '/result' })
      }
      console.log(this.score.a);
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
.button
  position absolute
  top 400px
  left 150px
  width 112px
  height 54px
  background url(../assets/images/3-1.png) no-repeat
  background-size 100% 100%
</style>