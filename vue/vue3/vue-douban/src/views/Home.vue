<template>
  <div class="home">
    <v-header title="豆瓣电影评分" :leftAarrow="false"></v-header>
    <MovieSection
      :section="test"
    ></MovieSection>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import MovieSection from "@/components/MovieSection.vue";
import { ref } from 'vue'

export default {
  name: "Home",
  components: {
    "v-header": Header,
    MovieSection,
  },
  setup() {
    const test = ref({
      movies: [
        {image:'https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3855684193,1508653948&fm=26&gp=0.jpg', title:'金刚川', rating: { stars: [1, 1, 1, 0, 0], score: 6.5}},
        {image:'https://img.yzcdn.cn/vant/cat.jpeg', title:'金刚川', rating: { stars: [1, 1, 1, 0, 0], score: 6.5}},
        {image:'https://img.yzcdn.cn/vant/cat.jpeg', title:'金刚川', rating: { stars: [1, 1, 1, 0, 0], score: 6.5}}
      ]
    })

    return {
      test
    }
  }
};
</script>
