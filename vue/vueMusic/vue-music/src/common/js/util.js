export function debounce(func, delay) {
  let timer

  return function (...args) {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      func.apply(this, args) // apply 保证 this 不被改变 eg: a.apply(b) 将a的this变为b的this
    }, delay);
  }
}