console.log(1);

setImmediate(() => {
  console.log(4);  // 无法确定
});

setTimeout(() => {
  console.log(2); // 无法确定
});

process.nextTick(() => {
  console.log(3);
});

new Promise((resolve) => {
  console.log(5);
  resolve();
  console.log(6);
}).then(() => {
  console.log(7);
});

Promise.resolve().then(() => {
  console.log(8);
  process.nextTick(() => {
    console.log(9);
  });
});