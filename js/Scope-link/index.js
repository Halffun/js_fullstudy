function test(){

}

// 函数也是对象，也能拥有属性
// test.name  test.prototype
// test.[[scope]] // 隐式属性，不可能被拿出来用

// var obj = {

// }
// 一个对象不具备词法作用域
// obj.[[scope]]

// test() ---> AO: {} // 回收
// test() ---> AO: {}


// GO: {
//   glab: undefined, 100
//   a: function a(){...},
// }
function a(){
  function b(){
    var b = 222
  }
  var a = 111
  b()
  console.log(a)
}
var glab = 100
// a AO: {
//   a: undefined, 111
//   b: function b(){...},
// }
// b AO: {
//   b: undefined, 222
// }
a()



// a 定义 a.[[scope]]  ---> 0: GO:{}
// a 执行 a.[[scope]]  ---> 0: aAO:{}   1: GO:{}
// b 定义 a.[[scope]]  ---> 0: aAO:{}   1: GO:{}
// b 执行 a.[[scope]]  ---> 0: bAO:{}   1: aAO:{}   2: GO:{}


// b 执行完了，b的AO就要销毁
// 紧接着a也说，我也执行完了，我的AO也要销毁，因为a的AO包含了b函数，当a的AO销毁了b函数直接失效





// function a(){
//   function b(){
//     function c(){

//     }
//     c()
//   }
//   b()
// }
// a()