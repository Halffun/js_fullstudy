// 去除数组的重复成员
// [...new Set(array)]

// console.log([...new Set('ababbc')].join(''));

// let set = new Set();
// let a = NaN;
// let b = NaN;
// set.add(a);
// set.add(b);
// set // Set {NaN}
// 上面代码向 Set 实例添加了两次NaN，但是只会加入一个。这表明，在 Set 内部，两个NaN是相等的。



// let set = new Set();

// set.add({});
// set.size // 1

// set.add({});
// set.size // 2
// 上面代码表示，由于两个空对象不相等，所以它们被视为两个值。



// Array.from方法可以将 Set 结构转为数组。
// const items = new Set([1, 2, 3, 4, 5]);
// const array = Array.from(items);
// 这就提供了去除数组重复成员的另一种方法。
// function dedupe(array) {
//   return Array.from(new Set(array));
// }
// dedupe([1, 1, 2, 3]) // [1, 2, 3]




// let set = new Set(['red', 'green', 'blue']);

// for (let item of set.keys()) {
//   console.log(item);
// }
// red
// green
// blue

// for (let item of set.values()) {
//   console.log(item);
// }
// red
// green
// blue

// for (let item of set.entries()) {
//   console.log(item);
// }
// ["red", "red"]
// ["green", "green"]
// ["blue", "blue"]




// Set 结构的实例默认可遍历，它的默认遍历器生成函数就是它的values方法。

// Set.prototype[Symbol.iterator] === Set.prototype.values
// true
// 这意味着，可以省略values方法，直接用for...of循环遍历 Set。

// let set = new Set(['red', 'green', 'blue']);

// for (let x of set) {
//   console.log(x);
// }
// red
// green
// blue




// Set 结构的实例与数组一样，也拥有forEach方法，用于对每个成员执行某种操作，没有返回值。

// let set = new Set([1, 4, 9]);
// set.forEach((value, key) => console.log(key + ' : ' + value))
// 1 : 1
// 4 : 4
// 9 : 9