// 引入依赖 commonJS
const Koa = require('koa')
const app = new Koa() // 定义一个新的Koa实例

// ctx.request.accepts检查http请求的accept的内容的
// Accept属于请求头，代表客户端希望接受的数据类型，跟Content
const main = ctx => {
  if (ctx.request.accepts('xml')) {
    ctx.response.type = 'xml'
    ctx.response.body = '<data>Hello World</data>'
  }else if (ctx.request.accepts('hxml')) {
    ctx.response.type = 'html'
    ctx.response.body = '<p>Hello World</p>'
  }else if (ctx.request.accepts('json')) {
    ctx.response.type = 'json'
    ctx.response.body = '{data: Hello World}'
  }else {
    ctx.response.type = 'text'
    ctx.response.body = 'Hello World'
  }
}
app.use(main)

app.listen(3000, () => {
  console.log('项目启动ing');
})