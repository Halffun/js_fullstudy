
let loadingNode = document.createElement('div');
loadingNode.style.backgroundColor = '#eee';
loadingNode.style.opacity = '.6';
loadingNode.style.position = 'absolute';
loadingNode.style.left = 0;
loadingNode.style.top = 0;
loadingNode.style.right = 0;
loadingNode.style.bottom = 0;
function toggleLoading(el, binding) {
  if (binding.value) {
    el.appendChild(loadingNode);
  } else {
    el.contains(loadingNode) && el.removeChild(loadingNode);
  }
}

let plugin = {};
// Vue.use()
plugin.install = function(Vue) {
  Vue.aaaaa = '123';
  Vue.directive('loading', {
    bind: function (el, binding) {
      // console.log(el, binding);
      // 第一次绑定的时候 只会调用一次
      toggleLoading(el, binding);
    },
    update(el, binding) {
      toggleLoading(el, binding);
    }
  })
}
// vue 插件 提供全局的方法
// import VueLoading from 'vue-laoding'
// Vue.use(VueLoading);
// 导出
// 通用 模块化 方案 UMD
if (typeof exports === 'object') {
  module.exports = plugin
} else {
  // window
  window.VueLoading = plugin;
  window.Vue.use(plugin);
}
// npm login
// npm publish