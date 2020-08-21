
// Person.prototype.name = 'wn'
// function Person() {
//   // var this = {
//   //   __proto__: Person.prototype
//   // }
// }
// var person = new Person()
// // console.log(person.name);


// var obj = {
//   name: '蜗牛'
// }
// console.log(person.__proto__); // { name: 'wn' }
// person.__proto__ = obj
// console.log(person.__proto__); // { name: '蜗牛‘ }





// ？？？？
Person.prototype.name = 'wn'
function Person() {
  
}
var person = new Person()
Person.prototype = { // 把原型重新赋值
  name: 'pipi'
}

console.log(person.name); // wn  // 浅拷贝