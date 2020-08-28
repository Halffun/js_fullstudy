<template>
  <div class="detail">
    <h1>Computed 计算属性</h1>

    <div class="price">
      {{totalPrice}}元
    </div>

    <div class="news">
      <ul>
        <li v-for="(item, index) in reverseNews" :key="index">
          {{item.title}}----{{item.date}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      price: 100,
      num: 4,
      news: [
        {title: '警方：男生踹伤猥亵男被解除刑拘 提级重新调查', date: '2020-08-26'},
        {title: '被警察连开7枪的美国黑人已瘫痪 其父质疑：凭什么?', date: '2020-08-26'},
        {title: '袁隆平爷爷90岁生日前去理发', date: '2020-08-27'},
        {title: '中国释放善意但印军不领情:为谈判失败做好军事准备', date: '2020-08-27'},
      ],
    }
  },
  computed: {
    totalPrice: function () {
      return this.price * this.num
    },
    reverseNews: function () {
      let news = this.news
      return news.reverse()
    }
  }
}
</script>

<style>

</style>