<template>
  <div id="app">
    <v-header>
      <i class="iconfont" slot="left-icon">&#xe96d;</i>
      <span slot="content">我的音乐</span>
      <i class="iconfont" slot="right-icon">&#xe600;</i>
    </v-header>
    <v-tab></v-tab>

    <keep-alive>
      <router-view/>
    </keep-alive>

    <v-play></v-play>

    <!-- menu -->
    <v-sidebar></v-sidebar>
  </div>
</template>

<script>
import Header from '@/components/header'
import Tab from '@/components/tab'
import Sidebar from '@/components/sidebar'
import play from '@/components/play'

export default {
  components: {
    'v-header': Header,
    'v-sidebar': Sidebar,
    'v-tab': Tab,
    'v-play': play
  }
}
</script>

<style lang="stylus">
@font-face {
  font-family: 'iconfont';  /* project id 2062317 */
  src: url('//at.alicdn.com/t/font_2062317_mji9r0y15bo.eot');
  src: url('//at.alicdn.com/t/font_2062317_mji9r0y15bo.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_2062317_mji9r0y15bo.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_2062317_mji9r0y15bo.woff') format('woff'),
  url('//at.alicdn.com/t/font_2062317_mji9r0y15bo.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_2062317_mji9r0y15bo.svg#iconfont') format('svg');
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
