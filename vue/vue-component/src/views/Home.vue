<template>
  <div class="home">
    <p>{{title}}</p>
    <User :userName="name" @titleChange="updateTitle"></User>
  </div>
</template>

<script>
// @ is an alias to /src
import User from "@/components/User";
export default {
  name: 'Home',
  data() {
    return {
      name: '聪哥',
      title: ''
    }
  },
  components: {
    User
  },
  methods: {
    updateTitle(title) {
      // console.log(title);
      this.title = title
    }
  }
}
</script>
