<template>
  <div class="methods">
    <p>{{count}}</p>
    <button @click="add($event)">add</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0
    }
  },
  methods: {
    add(e) {
      console.log(e);
      this.count++
    }
  }
}
</script>

<style>

</style>