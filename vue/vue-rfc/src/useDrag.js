import { ref } from 'vue'
// 多个地方需要拖拽 x y handleMove 
// es-module:   import  export
// node commonJS:   exports === module.exports  require
// default 默认导出
// 命名导出
export default function useDrag() {
  const x = ref(0) // reactive 把某个数据 变成 data
  const y = ref(0)
  const handleMove = (e) => {
    x.value = e.touches[0].pageX
    y.value = e.touches[0].pageY
  } 
  return {
    x, y, handleMove
  }
}