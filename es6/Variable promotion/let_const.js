// var name
// var obj = {}

// console.log(name)

// var name = '张三'
// name = '张三'


// for (var i = 0; i < 10; i++) {
//   // console.log(i)
// }
// console.log(i)


// var a= []

// for (let i = 0; i < 10; i++) {
//   a[i] = function() {
//     console.log(i)
//   }
// }
// a[6]()


// for (let i = 0; i < 3; i++) { // 父作用域
//   let i = 'abc' // 子作用域
//   console.log(i) // 输出abc
// }


// 暂时性死区
// var tmp = 123;

// if (true) {
//   tmp = 'abc'
//   let tmp
// }

var a = 'a'
var a = 'aa'
console.log(a) // aa

let b = 'b'
let b = 'bb'
console.log(b) // 报错