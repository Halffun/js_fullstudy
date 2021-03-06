// 拦截器
class InterceptorsManage {
  constructor() {
    this.handlers = []
  }

  use(fullfield, rejected) {
    this.handlers.push({
      fullfield,
      rejected
    })
  }
}

class Axios {
  constructor() {
    this.interceptors = {
      request: new InterceptorsManage,
      response: new InterceptorsManage
    }
  }

  request(config) {
    // 把拦截器和ajax请求组装成一个队列
    let chain = [this.sendAjax.bind(this), undefined]

    // 请求拦截
    this.interceptors.request.handlers.forEach(interceptors => {
      chain.unshift(interceptors.fullfield, interceptors.rejected)
    })

    // 执行队列, 每次执行一队, 并给Promised赋最新的值
    let promise = Promise.resolve(config)
    while (chain.length > 0) {
      promise = promise.then(chain.shift(), chain.shift())
    }
    return promise
    // this.sendAjax(config)
  }
  sendAjax(config) {
    return new Promise(resolve => {
      const { url = '', method = 'get', data = {} } = config
      // 发ajax请求
      const xhr = new XMLHttpRequest()
      xhr.open(method, url, true)
      xhr.onload = function () {
        // console.log(xhr.responseText);
        resolve(xhr.responseText)
      }
      xhr.send(data)
    })
  }
}
const methodsArr = ['get', 'delete', 'head', 'options', 'put', 'post', 'patch']
methodsArr.forEach(met => {
  Axios.prototype[met] = function() {
    // 处理单个
    if(['get', 'delete', 'head', 'options'].includes(met)) { // 直接收两个参数(url, [config])
      // console.log(this); // request()
      return this.request({
        method: met,
        url: arguments[0],
        ...arguments[1] || {}
      })
    } else { // 接收三个参数(url, data, [config])
      return this.request({
        method: met,
        url: arguments[0],
        data: arguments[1] || {},
        ...arguments[2] || {}
      })
    }
  }
})


const utils = {
  extend (a, b, context) {
    for (let key in b) {
      if (a.hasOwnProperty(key)) {
        if (typeof b[key] === 'function') {
          a[key] = b[key].bind(context)
        }
      } else {
        a[key] = b[key]
      }
    }
  }
}


function CreateAxiosFn() {
  let axios = new Axios()
  let req = axios.request.bind(axios)
  utils.extend(req, Axios.prototype, axios)
  utils.extend(req, axios, axios)
  return req
}

let axios = CreateAxiosFn()


