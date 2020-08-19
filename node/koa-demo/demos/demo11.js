const Koa = require('koa')
const compose = require('koa-compose')
const app = new Koa()

const logger = (ctx, next) => {
  console.log(`${ctx.request.url}-${ctx.request.method}-${new Date()}`); 
  next()
}

const main = ctx => {
  ctx.response.body = 'Hello World'
}

const middlewares = compose([logger, main])
app.use(middlewares)
// app.use(logger)
// app.use(main)
app.listen(3000)