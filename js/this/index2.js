// function foo(){
//   console.log(this.a) // 2
// }

// var obj2 = {
//   a:2,
//   foo:foo
// }

// var obj1 = {
//   a:3,
//   obj2:obj2
// }

// obj1.obj2.foo()


// function foo(){
//   console.log(this.a) // hello
// }

// var obj = {
//   a:2,
//   foo:foo
// }

// var bar = obj.foo

// var a = 'hello'

// bar()

// function foo(){
//   console.log(this.a) // 2
// }

// var obj = {
//   a:2
// }

// foo.call(obj)
// foo.apply(obj) // bind


// 隐式绑定
// var a = {
//   user: '蜗牛',
//   fn: function(q, w){
//     console.log(this.user)
//     console.log(q + w)
//   }
// }
// var b = a.fn
// b.call(a, 1, 2)


// var a = {
//   user: '蜗牛',
//   fn: function(q, w){
//     console.log(this.user)
//     console.log(q + w)
//   }
// }
// var b = a.fn
// var arr = [100, 200]
// // b.apply(a, [10, 11])
// // b.apply(a, arr)
// b.apply(null)


var a = {
  user: '蜗牛',
  fn:function(e, d, f){
    console.log(this.user)
    console.log(e, d, f)
  }
}
var b = a.fn
// b.bind(a)(10,20,30)
// var c = b.bind(a, 10)
// c(1, 2, 3)