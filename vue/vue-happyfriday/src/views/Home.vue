<template>
  <div class="home">
    <div class="home-wrapper">
      <bgimg>
        <div class="img-home">
          <img src="../assets/images/1-2.png" alt="">
        </div>
        <TopImg :tip="tip"></TopImg>
        <div class="botton" @click="start">
          <img src="../assets/images/1-4.png" alt="">
        </div>
      </bgimg>
    </div>
  </div>
</template>

<script>
import Bgimg from '@/components/Bgimg'
import TopImg from '@/components/Top-img'

export default {
  data() {
    return { 
      tip: '第一周'
    }
  },
  components: {
    'bgimg': Bgimg,
    TopImg
  },
  methods: {
    start() {
      this.$router.push({ path: '/item' })
    }
  }
}
</script>

<style lang="stylus" scoped>
.home
  .home-wrapper
    
      .img-home
        position absolute
        top 100px
        left 30px
        width 340px
        height 300px
      
      .botton
        position absolute
        top 400px
        left 150px
        width 112px
        height 54px
        z-index 99
</style>