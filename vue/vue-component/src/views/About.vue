<template>
  <div class="about">
    <User :userName="name" @babyChange="updateBaby"></User>
    <Animal :babyName="baby" ></Animal>
  </div>
</template>

<script>
import User from "@/components/User";
import Animal from "@/components/Animal";
export default {
  name: 'About',
  data() {
    return {
      name: '皮皮',
      baby: undefined
    }
  },
  components: {
    User,
    Animal
  },
  methods: {
    updateBaby(baby) {
      this.baby = baby
    }
  }
}
</script>

<style>
  .about{
    color: red;
  }
</style>