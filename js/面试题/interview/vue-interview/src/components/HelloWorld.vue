<template>
  <div class="hello">
    Hello world
    <Hello></Hello>
    <button @click="toParent">click</button>
    <button @click="toData">click</button>
  </div>
</template>

<script>
import Hello from '@/components/hello1'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
    Hello
  },
  methods: {
    toParent() {
      this.$emit('getData', '来自子组件的数据')
    },
    toData() {
      this.$emit('updata:value', '1')
    }
  },
  beforeCreate() {
    console.log('SON beforeCreate');
  },
  created() {
    console.log('SON created');
  },
  beforeMount() {
    console.log('SON beforeMount');
  },
  mounted() {
    console.log('SON mounted');
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
