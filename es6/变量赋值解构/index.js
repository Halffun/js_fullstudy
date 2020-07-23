// let a = 1
// let b = 2
// let c = 3
// 数组的解构
// let [a, b, c] = [1, 2, 3]

// let [foo, [[bar], baz]] = [1, [[2], 3]]

// console.log(bar)

// let [, , third] = ['a', 'b', 'c']

// let [x, y] = [1, 2, 3]

// let [head, ...tail] = [1, 2, 3, 4]
// console.log(head, tail) // 1 [2, 3, 4]

// let [a, b, ...c] = ['hello']
// console.log(a, b, c) // hello undefined []


// let [foo] = []
// console.log(foo) // undefined

// let [foo, bar] = [1]
// console.log(bar) // undefined

//let [foo] = 1 // false NaN undefined null
// console.log(foo) // 报错

// let [foo] = {}
// console.log(foo) // 报错

// let [foo = true] = []
// console.log(foo) // true

// let [x, y = 'aaa'] = ['a']
// console.log(x, y) // a aaa

// let [x, y = 'aaa'] = ['a', undefined] // undefined 解构出来默认赋值时不成功
// console.log(x, y) // a aaa

// let [x, y = 'aaa'] = ['a', null] // null 解构出来默认赋值时成功
// console.log(x, y) // a null


// let [x = 1, y = x] = []
// console.log(x, y) // 1 1

// let [y = x, x = 1] = []
// console.log(x, y) // 报错

// let [x = 1, y = x] = [2, 3]
// console.log(x, y)// 2 3

// ----------------------------------------------------

// 对象的解构

// let {foo, bar} = {foo: 'aaa', bar: 'bbb'}
// console.log(foo, bar)// aaa bbb

// let {foo, bar} = {q: 'aaa', w: 'bbb'}
// console.log(foo, bar)// undefined undefined

// let obj = {
//   name: '元隆',
//   age: 18
// }
// let {name, age} = obj


// let {foo: baz} = {foo: 'aaa', bar: 'bbb'}
// // foo 是匹配模式， baz 才是变量
// //console.log(foo)// 报错
// console.log(baz)// aaa

// let obj = {
//   name: '子晨',
//   desc: {
//     alone: false,
//     age: 20,
//     sanwei: [50, 100, 120]
//   }
// }

// let {name, desc: {alone, age, sanwei: [x, y, z]}} = obj
// console.log(name, alone, age, x, y, z)


// let {x = 3} = {x: 6}
// console.log(x)// 6

// let {x = 3} = {x: undefined}
// console.log(x)// 3

// let {x = 3} = {x: null}
// console.log(x)// null

// 注意！
// let x
// {x} = {x: 1}
// console.log(x)// 报错

// let x
// ({x} = {x: 1})
// console.log(x)// 1


//字符串的解构
// let [a, b, c, d, e] = 'hello'
// console.log(a, b, c, d, e)// h e l l o
// let {length: len} = 'hello'
// //console.log(length)// 报错
// console.log(len)// 5

//数值和布尔值的解构赋值
// let {toString: s} = 123
// console.log(s === Number.prototype.toString)// true
// (123).toString()// '123'
// let num = 123
// num.toString()// '123'
let {toString: s} = true
console.log(s === Boolean.prototype.toString)// true
