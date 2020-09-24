function test() {
  var food = 'apple'

  function a() {
    console.log(food);
    food = 'banana'
  }

  function b() {
    console.log(food);
  }
}

// a()
// b()


// 想一个办法把这两个函数的值一起返回出来
function fruit() {
  var food = 'apple' // food 一直被缓存着
  var obj = {
    eatFood: function () {
      if (food != '') {
        console.log('I am eating ' + food);
        food = ''
      }else {
        console.log('There is nothing');
      }
    },
    pushFood: function (myFood) {
      food = myFood
    }
  }
  return obj
}

var person = fruit()
person.eatFood()
person.eatFood()
person.pushFood('banana')
person.eatFood()

// 为什么能连贯性的修改
