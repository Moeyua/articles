<template>
  <div id="app">
    <top v-on:change-slider="changeSlider"></top>
    <articles v-bind:name="name"></articles>
    <slider v-if="show" v-on:change-slider="changeSlider" v-on:change-article="changeArticle"></slider>
    <router-view/>
    <bottom></bottom>
  </div>
</template>

<script>
import top from './components/top'
import bottom from './components/bottom'
import slider from './components/slider'
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
    changeSlider: function () {
      this.show = !this.show
    },
    changeArticle: function (name) {
      this.name = name
    }
  },
  components: {
    top, bottom, slider, articles
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
