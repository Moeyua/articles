<template>
  <div id="app">
    <transition name="shadow">
      <div id="shadow" v-if="show"></div>
    </transition>
    <top v-on:change-slider="changeSlider"></top>

    <transition name="fade">
      <slider v-if="show" v-on:change-slider="changeSlider" v-on:change-contents="changeContents"></slider>
    </transition>
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
    changeContents: function (item) {
      // eslint-disable-next-line no-unused-expressions
      this.$router.push({name: 'contents', params: {name: item.dir, items: item.items}}).catch(err => { err })
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
#shadow{
  width: 100%;
  height: 100%;
  position: fixed;
  background: rgba(0,0,0,.4);
  z-index: 11;
}
.shadow-enter-active, .shadow-leave-active {
  transition: opacity .5s;
}
.shadow-enter, .shadow-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.fade-enter-active, .fade-leave-active {
  transition: all .3s ease-out;
  transform: translateX(0);
}
.fade-enter, .fade-leave /* .fade-leave-active below version 2.1.8 */ {
  transform: translateX(-100%);
}
.fade-leave-to{
  transform: translateX(-100%);
}
</style>
