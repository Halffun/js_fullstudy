<template>
  <img :src="data.imgUrl" alt="">
</template>

<script lang="ts">
import { defineComponent} from 'vue'
import axios from 'axios'
export default defineComponent({
  async setup() {
    // return new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     return resolve({result: '小姐姐来了！'})
    //   }, 2000);
    // })
    const result = await axios('https://apiblog.jspang.com/default/getGirl')   
    return {data:result.data}
  }
})
</script>