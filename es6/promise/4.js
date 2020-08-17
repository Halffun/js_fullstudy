function a() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('aaa');
      resolve('yes')
    }, 1000);
  })
}

function b() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('bbb');
      resolve('yes')
    }, 1500);
  })
}

function c() {
  setTimeout(() => {
    console.log('ccc');
  }, 500);
}

function d() {
  setTimeout(() => {
    console.log('ddd');
  }, 3000);
}

function e() {
  console.log('eee');
}

// class Promise{
//   constructor() {
//     status: 'pending'
//   }
//   resolve() {
//     this.status = 'resolved'
//   }
//   reject() {
//     this.status = 'rejected'
//   }
//   then() {
//     if (this.status = 'resolved') {
//       // ...
//     }
//   }
//   catch() {
//     if (this.status = 'rejected') {
//       // ...
//     }
//   }
//   finally() {
//     // ...
//   }
// }

// Promise pending（进行中）、resolved（已成功）和rejected（已失败）

// finally 不管promise最后是个什么状态，都能走进finally里面
// a().then(b).catch(c).finally(d)

// all 
// Promise.all([a(), b()]).then(e)

// race
Promise.race([a(), b()]).then(e)
