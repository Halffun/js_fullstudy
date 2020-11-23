<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <keep-alive>
      <HelloWorld @getData="getDataFromSon" msg="Welcome to Your Vue.js App" :value.sync="value"/>
    </keep-alive>
    <!-- <input type="text" :value="value"> -->
    <span>{{value}}</span>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  provide: {
    message: '123141'
  },
  data() {
    return{
      value: '123'
    }
  },
  components: {
    HelloWorld
  },
  methods: {
    getDataFromSon(data) {
      console.log(data); // 来自子组件的数据
    }
  },
  activeted() { // 命中缓存

  },
  deactiveted() {

  },
  beforeCreate() {
    console.log('APP beforeCreate');
  },
  created() {
    console.log('APP created');
  },
  beforeMount() {
    console.log('APP beforeMount');
  },
  mounted() {
    console.log('APP mounted');
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
