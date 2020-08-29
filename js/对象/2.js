// 构造函数
function Student(name, age, sex) {
  // var this = {
        // name: '',
        // age: ''
  // }
  this.name = name
  this.age = age
  this.sex = sex
  this.grade = 2017
  return []
  // return this
}

var student = new Student('jiaHao', 22, 'boy')
console.log(student);



// 模拟构造函数
// function Person(name, age) {
//   var that = {}
//   that.name = name
//   that.age = age
//   return that
// }
// var person = Person('wn', 18)
// console.log(person);