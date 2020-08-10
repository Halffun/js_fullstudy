// function identify(context){
//   return context.toUpperCase()
// }
// function speak(context){
//   let greating = "hello, I'm" + identify(context)
//   console.log(greating)
// }
// speak("wn")


// function identify(){
//   return this.name.toUpperCase() // this = me , you
// }
// function speak(){
//   let greating = "hello, I'm" + identify.call(this)
//   console.log(greating)
// }
// let me = {
//   name: 'wn'
// }
// let you = {
//   name: 'abc'
// }
// identify.call(me)
// speak.call(me)



// this 所在的词法作用域在哪里生效了，this作用域就指向哪里

// function foo(){
//   let person = {
//     name: 'wn',
//     age: 18
//   }
//   console.log(this)// window
// }

// function bar (){
//   let person = {
//     name: '蜗牛',
//     age: 20
//   }
//   foo()
// }

// bar()


// function foo(){
//   // "use strict"
//   console.log(this.a)// 2
// }
// var a = 2;
// // window: {
// //   a: 2
// // }
// (function(){
//   "use strict"
//   foo() // 严格模式下的foo的调用，与位置无关
// })()



// function foo(){
//   console.log(this.a)// obj.a
// }
// var obj2 = {
//   a: 3,
//   foo: foo
// }
// var obj1 = {
//   a: 2,
//   obj2: obj2
// }
// obj1.obj2.foo()// foo此刻被obj所拥有/包含


// function foo(){
//   console.log(this.a)
// }
// function doFoo(fn){ // 参数传递其实又称之为隐式赋值
//   fn()
// }
// var obj = {
//   a: 2,
//   foo: foo()
// }
// var bar = obj.foo;
// var a = 'hello'
// doFoo(obj.foo)
// console.log(bar)



function foo(){
  console.log(this.a)
}

var obj = {
  a: 2,
  foo: foo
}
var bar = obj.foo()
console.log(bar)