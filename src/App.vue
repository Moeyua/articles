<template>
  <div id="app">
    <top v-on:change-show="changeShow"></top>
    <articles v-bind:name="name"></articles>
    <sider v-if="show"></sider>
    <router-view/>
    <bottom></bottom>
  </div>
</template>

<script>
import top from './components/top'
import bottom from './components/bottom'
import sider from './components/sider'
import articles from './components/articles'
export default {
  name: 'App',
  data () {
    return {
      show: false,
      name: '个人收藏的RSS订阅源 '
    }
  },
  methods: {
    changeShow: function () {
      this.show = !this.show
    }
  },
  components: {
    top, bottom, sider, articles
  }
}
</script>

<style>
#app {
  background: #f1f3f8;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  color: #393b44;
  display: flex;
  flex-flow: column;
  text-align: center;
}
</style>
