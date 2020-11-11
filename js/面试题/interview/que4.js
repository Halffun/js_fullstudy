// Promise构造函数是同步还是异步? .then()?

const promise = new Promise((resolve, reject) => {
  console.log(1);
  resolve()
  console.log(2);
})

promise.then(() => {
  console.log(3);
})

console.log(4);