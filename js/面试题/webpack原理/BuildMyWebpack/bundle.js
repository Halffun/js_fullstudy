// 获取主入口文件
const fs = require('fs')
const path = require('path')
const parser = require('@babel/parser')
const traverse = require('@babel/traverse').default
const babel = require('@babel/core')

const getModuleInfo = (file) => {
  const body = fs.readFileSync(file, 'utf-8')
  const ast = parser.parse(body, {
    sourceType: 'module' // 表示我们要解析的是ES模块
  })

  const deps = {}
  traverse(ast, {
    ImportDeclaration({node}) {
      const dirname = path.dirname(file) // 拿到index.js的绝对路径
      const abspath = './' + path.join(dirname, node.source.value) // 通过index.js的绝对路径读到模块的路径
      deps[node.source.value] = abspath
    }
  })

  // 先将AST转化为真实语法 ES6 > ES5
  const { code } = babel.transformFromAst(ast, null, {
    presets: ['@babel/preset-env']
  })

  const moduleInfo = {file, deps, code}
  // console.log(code);
  return moduleInfo
}


// 递归做依赖收集
const parseModules = (file) => {
  const enter = getModuleInfo(file)
  const temp = [enter]
  const depsGraph = {}

  for (let i = 0; i < temp.length; i++) {
    const deps = temp[i].deps
    if (deps) {
      for (let key in deps) {
        if (deps.hasOwnProperty(key)) {
          temp.push(getModuleInfo(deps[key]))
        }
      }
    }
  }
  // 优化一下
  temp.forEach(moduleInfo => {
    depsGraph[moduleInfo.file] = {
      deps: moduleInfo.deps,
      code: moduleInfo.code
    }
  })
  // console.log(depsGraph);
  return depsGraph
}

// 打包
const bundle = (file) =>{
  const depsGraph = JSON.stringify(parseModules(file))
  return `(function (graph) {
      function require(file) {
          function absRequire(relPath) {
              return require(graph[file].deps[relPath])
          }
          var exports = {};
          (function (require,exports,code) {
              eval(code)
          })(absRequire,exports,graph[file].code)
          return exports
      }
      require('${file}')
  })(${depsGraph})`
}

const content = bundle('./src/index.js')
console.log(content);

// 写入dist目录
fs.mkdirSync('./dist')
fs.writeFileSync('./dist/bundle.js', content)