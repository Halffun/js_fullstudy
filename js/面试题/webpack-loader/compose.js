var greet = function (name) {
  return "hi: " + name;
};
var exclaim = function (statement) {
  return statement.toUpperCase() + "!";
};
function compose(...args) {
  return function (str) {
    // args[len - 2](args[len - 1](str))
    while (args.length) {
      let fn = args.pop()
      str = fn(str)
    }
    return str
  }
}
var welcome = compose(greet, exclaim);
console.log(welcome('moe'));