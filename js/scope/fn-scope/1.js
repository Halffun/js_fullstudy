// 函数中的作用域  气泡模型
function foo(a){
  var b = 2

  function bar() {
    console.log(4)
  }

  var c = 3
}

foo(1)

// console.log(a, b, c)
// console.log(bar())

// foo的作用域具备 a, b, c, bar这些标识符
// foo外部是访问不到这些标识符的