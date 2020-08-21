
// Car.prototype.height = 1400
// Car.prototype.lang = 4900
// Car.prototype.carName = 'BMW'
Car.prototype = {
  height: 1400,
  lang: 4900,
  carName: 'BMW'
}

function Car(color, owner) {
  this.color = color
  this.owner = owner
  // this.carName = 'BMW' // 耦合度高
  // this.lang = 4900
  // this.height = 1400
}

var car = new Car('red', 'huang')
var car1 = new Car('green', 'haonan')

console.log(car.carName);