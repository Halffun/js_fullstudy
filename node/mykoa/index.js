// const http = require('http')

// const server = http.createServer((req, res) => {
//   res.end('hello world')
// })

// server.listen(3000)

// const Koa = require('koa')
// const app = new Koa()

// app.use((ctx, next) => {
//   ctx.body = 'hello'
// })

// app.listen(3000)


let Koa = require('./lib/application')
let app = new Koa() 

app.use((req, res) => {
  res.end('hello')
})

app.listen(3000)