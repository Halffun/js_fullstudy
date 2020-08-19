const Koa = require('koa')
// const fs = require('fs')
const route = require('koa-route')

const app = new Koa()

const main = ctx => {
  // console.log(ctx);
  ctx.response.body = `${ctx.request.url}-${ctx.request.method}-${new Date()}`
}


app.use(route.get('/', main))
app.listen(3000)