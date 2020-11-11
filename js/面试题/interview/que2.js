// setTimeout Promise async/await  的区别
// 1. setTimeout隶属于宏任务队列, 会等到执行栈清空后才执行
// 2. Promise会让回调函数取到微任务队列, 等到宏任务里面的同步代码执行完再执行
// 3. async表示函数可能有异步方法, await后面跟表达式, async执行时碰到await就会让它立即执行, await后面的代码会将它放在微任务队列
