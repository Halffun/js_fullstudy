let xq = new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log('元隆相亲了！');
    resolve('相亲成功！嘿嘿')
  }, 2000)
})
.then((res) => {
  console.log(res);
  return marry()
})
.then((res) => {
  console.log(res);
  return baby1()
})
.catch((err) => {
  console.log(err);
})

function marry() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('元隆结婚了！');
        resolve('元隆结婚顺利')
    }, 1000);
  })  
}

function baby1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
    console.log('小元隆1出生');
    reject('no')
  }, 500);
  })  
}

function baby2() {
  setTimeout(() => {
    console.log('小元隆2出生');
  }, 400);
}