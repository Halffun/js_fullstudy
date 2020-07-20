var CONFIG = {};

Object.defineProperty(CONFIG, 'DB_ACCOUNT', {
  value: 'root',
  writable: false,
});

console.log(CONFIG.DB_ACCOUNT); // 输出：root

CONFIG.DB_ACCOUNT = 'guest';

console.log(CONFIG.DB_ACCOUNT); // 因为不可被改写，所以输出：root

// 这种方式将常量都放在一个对象下，通过Object.defineProperty定义属性，设定其writable为false，就可以防止被改写。

// 但有一个问题，CONFIG自身这个对象可能被修改。

// 换一个思路，既然在最外层声明的变量是放在window上的，那可以用这个方式往 window上挂不可改写的属性。

Object.defineProperty(window, 'DB_ACCOUNT', {
  value: 'root',
  writable: false,
});

console.log(DB_ACCOUNT); // 输出：root

DB_ACCOUNT = 'guest';

console.log(DB_ACCOUNT); // 因为不可被改写，所以输出：root

// 通常情况下 window 对象是不可被修改的，这样常量的安全系数就变得非常高，但缺点是可能性较差，通过一点修改可以提升可读性。

var define = function(name, value) {
  Object.defineProperty(window, name, {
    value: value,
    writable: false,
  });
};

define('DB_ACCOUNT', 'root');
define('DB_PASSWORD', 'root');

// 只要约定好使用 define 函数定义的都为常量即可。