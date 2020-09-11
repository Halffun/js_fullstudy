<template>
  <div id="app">
    <v-header>
      <i class="iconfont" slot="left-icon">&#xe96d;</i>
      <span slot="content">我的音乐</span>
      <i class="iconfont" slot="right-icon">&#xe600;</i>
    </v-header>
    <!-- <router-view/> -->

    <!-- menu -->
    <v-sidebar></v-sidebar>
  </div>
</template>

<script>
import Header from '@/components/header'
import Sidebar from '@/components/sidebar'
export default {
  components: {
    'v-header': Header,
    'v-sidebar': Sidebar
  }
}
</script>

<style lang="stylus">
@font-face {
  font-family: 'iconfont';  /* project id 2062317 */
  src: url('//at.alicdn.com/t/font_2062317_w8l0gblyyl.eot');
  src: url('//at.alicdn.com/t/font_2062317_w8l0gblyyl.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_2062317_w8l0gblyyl.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_2062317_w8l0gblyyl.woff') format('woff'),
  url('//at.alicdn.com/t/font_2062317_w8l0gblyyl.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_2062317_w8l0gblyyl.svg#iconfont') format('svg');
}
.iconfont{
  font-family:"iconfont" !important;
  font-size:16px;font-style:normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
html,
body {
  line-height: 1;
  font-family: PingFang SC, STHeitiSC-Light, Helvetica-Light, arial, sans-serif;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  background: rgba(8, 5, 58, 0.9);
  color: #fff;
}
</style>
