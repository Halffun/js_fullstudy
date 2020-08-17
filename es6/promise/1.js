// js 是单线程的
function a() {
  console.log('蜗牛');
}

function b() {
  setTimeout(() => {
    console.log('bb');    
  }, 1000);
}

function c() {
  console.log('cc');
}

b()
a()
c()