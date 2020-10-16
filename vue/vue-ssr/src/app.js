import Vue from 'vue'
import App from './App.vue'
import { createRouter } from './routes/index'

// 导出一个工厂函数
export function createApp() {
  const router = createRouter()

  const app = new Vue({
    router,
    render: h => h(App)
  })
  return { app, router }
}