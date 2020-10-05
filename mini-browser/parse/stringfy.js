function stringfy(data) {
  let str = ''
  if (typeof data !== 'object') {
      return data;
  }
  if (Array.isArray(data)) {
      str += '['
      for (let ele of data) {
          str += stringfy(ele)
          str += ','
      }
      str += ']'
  } else if (!Array.isArray(data) && typeof data === 'object') {
      str += '{'
      for (let key in data) {
          str += `"${key}"`;
          str += ':'
          str += stringfy(data[key])
          str += ','
      }
      str += '}'
  }
  return str;
}
var a = {
a: 1,
b: [{b: 2}, 2, 3, {c: 4}, [4, [5, [6, 7]]]]
}
console.log(JSON.stringify(a));
console.log(stringfy(a));
