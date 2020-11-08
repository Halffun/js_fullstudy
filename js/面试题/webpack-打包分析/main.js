(function (modules) {
  let installModules = {}
  // modules['./index.js']();
  function webpack_require(id) {
    if (installModules[id]) {
      return installModules[id]
    }
    let module = {
      exports: {}
    }
    let exports = module.exports;
    installModules[id] = exports
    // module.exports === exports 指向了一个对象
    modules[id](module, exports, webpack_require)
    // module.exports.add = XXXX 别人 把 add 方法 加到 {}
    return exports
  }
  webpack_require('./index.js')
})(
  {
    './index.js': function (module, exports, require) {
      // index.js 内容
      // 引入 math.js 内容 引入失败 引入了一个 undefined
      // 能引入什么东西 就由 require 返回值决定
      const { add } = require('./math.js')
      // require('./math.js') 会去调用 math.js  递归
      console.log(add(4, 5));
    },
    './math.js': function (module, exports, require) {
      // module, exports 对象
      // math.js 内容
      const aa = require('./index.js')
      module.exports.add = (a, b) => a + b;
      // 对象.add 有个 add 方法
    }
  }
)