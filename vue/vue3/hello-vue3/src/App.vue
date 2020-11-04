<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3.0 + Vite" />
  <hr>
  <comdemo />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import comdemo from './components/com-demo.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    comdemo
  }
}
</script>
