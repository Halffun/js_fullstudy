function a(str){
  let firstUpperCase = ([first, ...rest]) => 
    first.toUpperCase()+
    rest.join('')
  return `#${firstUpperCase(str)}`
}
console.log(a("hello world"))