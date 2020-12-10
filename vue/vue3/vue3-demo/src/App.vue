<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <h1>欢迎来到红浪漫洗浴中心</h1>
  <div>{{ clock }}</div>
  <button @click="updataClock">上电池</button>
  <div>请选择陪您吟诗作对的小姐姐</div>
  <button
    @click="selectGirl(index)"
    v-for="(item, index) in girls"
    :key="index"
  >
    {{ index }}:{{ item }}
  </button>
  <div>您当前选择的小姐姐是【{{ curGirl }}】</div>
  <button @click="check">确认选择小姐姐</button>
  <Suspense v-if="isCheck">
    <template #fallback>
      <div>小姐姐马上就来...</div>
    </template>
    <template #default>
      <AsyncShow />
    </template>
  </Suspense>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, Suspense, ref } from "vue";
import { clock, updataClock } from "./hooks/useClock";
import AsyncShow from "./components/AsyncShow.vue";
interface DataProps {
  girls: string[];
  curGirl: string;
  selectGirl: (index: number) => void;
}

export default defineComponent({
  components: { AsyncShow },
  name: "App",
  setup() {
    const isCheck = ref(false);
    const data = reactive({
      girls: ["大脚", "刘英", "小红"],
      curGirl: "",
      selectGirl: (index: number) => {
        data.curGirl = data.girls[index];
        isCheck.value = false;
      },
    });
    const refData = toRefs(data);
    const check = () => {
      isCheck.value = true;
    };
    // const girls = ref(['大脚','刘英','小红']);
    // const curGirl = ref('');
    // const selectGirl = (index: number)=>{
    //   curGirl.value = girls.value[index];
    // }
    return {
      ...refData,
      clock,
      updataClock,
      isCheck,
      check,
    };
  },
});
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
