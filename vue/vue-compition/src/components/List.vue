<template>
  <div>
    <button @click="re">re</button>
    <div>
      <li v-for="(item) in list" :key="item.id">
        {{item.content}}
        <input type="text" />
      </li>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {content: '0', id: 0},
        {content: '1', id: 1},
        {content: '2', id: 2},
        {content: '3', id: 3},
        {content: '4', id: 4},
      ]
    }
  },
  methods: {
    re() {
      this.list = this.list.reverse()
    }
  }
}
</script>

<style>

</style>