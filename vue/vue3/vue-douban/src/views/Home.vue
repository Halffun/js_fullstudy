<template>
  <div class="home">
    <v-header title="豆瓣电影评分" :leftAarrow="false"></v-header>
    <MovieSection
      v-for="(item, index) in sectionData"
      :key="item.type"
      :section="item"
      :movie_key="movie_key[index]"
    ></MovieSection>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import MovieSection from "@/components/MovieSection.vue";
import { ref } from 'vue'
import { getMovieSection } from '@/utils/movie'

export default {
  name: "Home",
  components: {
    "v-header": Header,
    MovieSection,
  },
  setup() {
    const sectionData = ref([])
    const movie_key = [
      {key: 'movieOnInfoList', params: {}, name: '影院热映'},
      {key: 'comingList', params: {ci: 83, token: '', limit: 10}, name: '即将上映'}
    ]
    const promiseArr = movie_key.map(function (item) {
      return getMovieSection(item.key, item.params)
    })
    Promise.all(promiseArr).then(function (res) {
      sectionData.value = res
      console.log(res);
    })
    return {
      sectionData,
      movie_key
    }
  }
};
</script>
