<template>
  <div class="movie-box">
    <van-image
      class="cover-image"
      radius="5px"
      :src="movie.img"
    >
      <template v-slot:error>
        <img src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2452075545.jpg" alt=""/>
      </template>
    </van-image>
    <div class="title">{{movie.nm}}</div>
    <Star :scope="movie.sc"></Star>
  </div>
</template>

<script>
import Star from './Star.vue'
import { Image } from 'vant';
export default {
  components: {
    Star,
    [Image.name]: Image
  },
  props: ['movie']
};
</script>

<style lang="less" scoped>
.movie-box{
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 205px;
  margin-left: 10px;
}
.cover-image{
  width: 100px;
  height: 145px;
}
.title{
  margin-top: 5px;
  margin-bottom: 5px;
  font-size: 15px;
  text-align: left;
  font-weight: bold;
}

</style>