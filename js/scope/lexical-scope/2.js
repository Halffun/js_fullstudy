// 欺骗词法作用域

// eval()
function foo(str, a) {
  'use strict'
  eval(str) // 影响了正常的词法作用域，欺骗{}
  console.log(b, a)
}
var b = 2
foo('var b = 3', 1)





var obj = {
  a: 1,
  b: 2,
  c: 3
}
// 正常操作
obj.a = 10
obj.b = 20
obj.c = 30

// 简单快捷的方式 with
with(obj) {
  a = 100
  b = 200
  c = 300
}

console.log(obj)

// with 的缺点
function foo2(obj) {
  with(obj) {
    a = 2
  }
  // obj.a = 2
}

var o1 = {
  a: 3
}
foo2(o1)
console.log(o1.a) // 2

var o2 = {
  b: 3
}
foo2(o2)
console.log(o2.a) // undefined
console.log(a) // 2  --- a 出现在了全局