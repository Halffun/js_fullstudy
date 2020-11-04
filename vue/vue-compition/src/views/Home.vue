<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <List></List>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import List from '@/components/List'
export default {
  name: 'Home',
  components: {
    HelloWorld,
    List
  }
}
</script>
