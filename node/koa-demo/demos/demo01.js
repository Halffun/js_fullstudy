// 引入依赖 commonJS
const Koa = require('koa')

const app = new Koa() // 定义一个新的Koa实例

app.listen(3000, () => {
  console.log('项目启动ing');
})