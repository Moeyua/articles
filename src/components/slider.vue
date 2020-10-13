<template>
  <aside>
    <div id="head">
      <img :src="src" alt="moeyua">
      <p>Moeyua's blog</p>
    </div>
    <div id="content">
        <!-- 因为路由跳转不在这里进行，所以这里改成了<li> -->
        <li v-for="item in list" :key="item.dir"
        @click="changeContents(item.index)">{{item.dir}}</li>
    </div>
    <div id="back" @click="$emit('change-slider')"></div>
  </aside>
</template>

<script>
import store from '@/vuex/store'

export default {
  data () {
    return {
      src: '../static/head.jpg?time=' + new Date().getTime()
    }
  },
  computed: {
    list () {
      return store.getters.get_list
    }
  },
  store,
  methods: {
    changeContents: function (item) {
      this.$emit('change-contents', item)
      this.$emit('change-slider')
    }
  }
}
</script>

<style scoped>
    aside{
        display: flex;
        flex-flow: column wrap;
        position: fixed;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 12;
    }
    #head{
      height: 300px;
      width: 300px;
      background: #ffffff;
    }
    #content{
        width: 300px;
        height: calc(100% - 300px);
        background: #ffffff;
        text-align: left;
    }
    #back{
        width: calc(100% - 300px);
        height: 100%;
    }
    li{
      display: block;
      list-style: none;
      height: 50px;
      padding: 0 30px;
      line-height: 50px;
      text-decoration: none;
    }
    li:hover{
      background:#ebebeb;
      font-weight: 700;
    }
    #head img{
      border-radius: 100px;
      position: relative;
      top: 60px;
      width: 100px;
      height: 100px;
    }
    #head p{
      position: relative;
      top: 70px;
      font-family: 'Times New Roman', Times, serif;
      font-size: 18px;
    }
</style>
