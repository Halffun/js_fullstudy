const Koa = require('koa')
const app = new Koa()

const main = ctx => {
  // console.log(ctx.request);
  if (ctx.request.url !== '/') {
    ctx.response.type = 'html'
    ctx.response.body = '<a href="/">Index Page</a>'
  } else {
    ctx.response.body = 'Hello World'
  }
}
app.use(main)
app.listen(3000, () => {
  console.log('项目启动ing');
})