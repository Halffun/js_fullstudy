// 创建一个计数器：
function create_counter(initial) {
  var x = initial || 0;
  return {
    inc: function () {
      x += 1;
      return x;
    }
  }
}

var c1 = create_counter();
c1.inc(); // 1
c1.inc(); // 2
c1.inc(); // 3

var c2 = create_counter(10);
c2.inc(); // 11
c2.inc(); // 12
c2.inc(); // 13

// 在返回的对象中，实现了一个闭包，该闭包携带了局部变量x，并且，
// 从外部代码根本无法访问到变量x。换句话说，闭包就是携带状态的函数，
// 并且它的状态可以完全对外隐藏起来。