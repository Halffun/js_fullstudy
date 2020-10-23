// 实现Storage, 使得该对象为单例, 基于localStorage进行封装
// 实现方法setItem(key, value)和getItem(key)

// class Storage{
//   static getInstance () { // 静态对象实例调用不了
//     if (!Storage.instance) {
//       Storage.instance = new Storage()
//     }
//     return Storage.instance
//   }
//   setItem(key, value) {
//     return localStorage.setItem(key, value)
//   }
//   getItem(key){
//     return localStorage.getItem(key)
//   }
// }

function StorageBase() {}
StorageBase.prototype.getItem = function (key) {
  return localStorage.getItem(key)
}
StorageBase.prototype.setItem = function (key, value) {
  return localStorage.setItem(key, value)
}
const Storage = (function() {
  let instance = null
  return function () {
    if (!instance) {
      instance = new StorageBase()
    }
    return instance
  }
})()

const storage1 = Storage.instance() // new Storage
const storage2 = Storage.instance()

storage1.setItem('name', 'wn')
storage2.setItem('name', 'pp')

storage1.getItem('name') // pp
storage2.getItem('name') // pp