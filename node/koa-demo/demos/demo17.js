const Koa = require('koa')
const serve = require('koa-static')
const app = new Koa()

const main = ctx => {
  ctx.throw(500)
}

// 监听error，可以在控制台看见server error
app.on('error', (error, ctx) => {
  console.log('server error', error);
})


app.use(main)
app.listen(3000)