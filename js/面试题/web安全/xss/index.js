const Koa = require('koa')
const KoaView = require('koa-views')
const router = require('koa-router')()
const app = new Koa()
const path = require('path')
const viewPath = path.join(__dirname, './views')
// ejs 约等于 vue template
app.use(KoaView(viewPath, {
  extension: 'ejs'
}))

// html css js: 如果我们不想让他们当作可执行执行,就转义他们
// html 转义 (过滤): 
// js 转义: \x unicode码点16进制表现形式
// cookie: httpOnly
// CSP: 内容安全策略
router.get('/', async (ctx) => {
  let xss = `
    <h2>xss</h2>
    <img onerror="alert(123)" src="xxx" />
  `
  function toString(html) {
    return html.replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
  }
  function toString2(js) {
    let t = '';
    let code = '\\x'+"\"".charCodeAt(0).toString(16)
    return js.replace(/"/g, code)
  }
  let js = `";alert('css by js');"`
  await ctx.render('xss', {
    xssCode: toString(xss),
    js: toString2(js)
  })
})
app
  .use(router.routes())
  .use(router.allowedMethods())

app.listen(8080, () => {
  console.log(8080);
})