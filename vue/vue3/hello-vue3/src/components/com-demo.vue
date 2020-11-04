<!-- fragment -->
<template>
  <ul>
    <FragmentDemo :data="[5, 3, 2, 9 ,7 ,6]" /> 
    <hr>
    <TeleportDemo />
    <hr>
    <!-- <SuspenseDemo /> -->
    <Suspense>
      <template #default>
        <AsyncComponent :timeout="3000" />
      </template>
      <template #fallback>
        <loadingDemo></loadingDemo>
      </template>
  </Suspense>
  </ul>
</template>

<script>
import FragmentDemo from './fragment.vue'
import TeleportDemo from './teleport.vue'
import AsyncComponent from './suspense.vue'
import loadingDemo from './loading.vue'
export default {
  components: {
    FragmentDemo,
    TeleportDemo,
    AsyncComponent,
    loadingDemo
  }
}
</script>

<style>

</style>