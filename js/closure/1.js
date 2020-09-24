function test(){
  var arr = []
  for (var i = 0; i < 10; i++) {

    (function(j){
      arr[j] = function (){
      console.log(j)
    }})(i)
  }
  return arr
}

var myArr = test()
// myArr[0]()
// myArr[1]()
// myArr[2]()
// ...

for (var j = 0; j < 10; j++){
  myArr[j]()
}