import { createApp } from './app'


export default (context) => {
  const { app } = createApp()
  return app
}
// 不需要 挂载 没有 DOM 节点