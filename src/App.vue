<template>
  <div id="app">
    <top v-on:change-slider="changeSlider"></top>
    <contents :list="list"></contents>
    <slider v-if="show" v-on:change-slider="changeSlider" v-on:change-contents="changeContents"></slider>
    <router-view/>
    <bottom></bottom>
  </div>
</template>

<script>
import top from './components/top'
import bottom from './components/bottom'
import slider from './components/slider'
import contents from './components/contents'
export default {
  name: 'App',
  data () {
    return {
      show: false,
      list: {}
    }
  },
  methods: {
    changeSlider: function () {
      this.show = !this.show
    },
    changeContents: function (list) {
      this.list = list
    }
  },
  components: {
    top, bottom, slider, contents
  }
}
</script>

<style>
#app {
  background: #ffffff;
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
