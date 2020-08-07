function isWord(str){
  return 0 < str.length <= 140
}

function toUpperWord(str){
  return str.split(" ")
  .map(
    word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")
}

function generateHashTag(str){
  if (!isWord(str)){
    return false
  }
  return `#${toUpperWord(str)}`
}
console.log(generateHashTag("hello world"))