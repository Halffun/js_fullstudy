const fs = require('fs')
const path = require('path')
const Router = require('koa-router')

// 读取目录和文件
function load(dir, cb) {
  // 获取绝对路径
  const url = path.resolve(__dirname, dir)
  // console.log(url);
  // 读取目录
  const files = fs.readdirSync(url) // Array
  // console.log(files);
  // 遍历
  files.forEach(filename => {
    // 去掉扩展名
    filename = filename.replace('.js', '')
    const file = require(url + '/' + filename)
    cb(filename, file)
  })
}



// 加载路由
function initRouter(app) {
  const router = new Router()
  load('routes', (filename, routes) => {
    routes = typeof routes === 'function' ? routes(app) : routes
    const prefix = filename === 'index' ? '' : `/${filename}`
    Object.keys(routes).forEach(key => {
      const [method, path] = key.split(' ')
      console.log(`正在映射地址:${method.toLocaleUpperCase()} ${prefix}${path}`);

      // 注册路由
      // router.get('/', ctx => {})
      router[method](path ==='/' ? prefix : prefix + path, routes[key])
    })
  })
  return router
}

function initController(app) {
  const controllers = {}
  load('controller', (filename, controller) => {
    controllers[filename] = controller
  })
  return controllers
}

module.exports = {
  initRouter,
  initController
}

// load('./routes', (filename, file) => {
//   console.log('routes: ' + filename, file);
// })
// initRouter()