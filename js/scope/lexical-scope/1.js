var a = 10 // window.a = 10

function foo(a) {
  var b = a + 2

  function bar(c) {
    console.log(window.a, b, c)
  }

  bar(b * 3)
}
// bar(5)
foo(2)
// console.log(b) // undefined

// 全局作用域下只有一个 foo
// foo 作用域下面有 a, b, bar
// bar 作用域下有 c