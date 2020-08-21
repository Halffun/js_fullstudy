
Person.prototype = {
  // name: 'mingguo',
  // sayName: function () {
  //   console.log(this.name);
  // }
  height: 100
}


function Person() {
  // this.name = 'yuanlong'
  this.eat = function () {
    this.height++
  }
}
var person = new Person()

// console.log(person.sayName()); // mingguo

// console.log(person.sayName()); // yuanlong


person.eat()
console.log(person.height); // 101
console.log(Person.prototype.height); // 100