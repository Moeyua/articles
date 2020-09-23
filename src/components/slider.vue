<template>
  <aside>
    <div id="head">
      <img :src="src" alt="moeyua">
    </div>
    <div id="content">
        <li v-for="item in list" :key="item.name" @click="$emit('change-article', item.name)">{{item.name}}</li>
    </div>
    <div id="back" @click="$emit('change-slider')"></div>
  </aside>
</template>

<script>
export default {
  data () {
    return {
      list: [
        {name: '个人收藏的RSS订阅源 '},
        {name: '异步操作'}
      ],
      src: '../static/head.jpg?time=' + new Date().getTime()
    }
  },
  methods: {
  }
}
</script>

<style scoped>
    aside{
        display: flex;
        flex-flow: column wrap;
        position: absolute;
        width: 100%;
        height: 100%;
    }
    #head{
      height: 300px;
      width: 300px;
      background: #d6e0f0;
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
        background: #d6e0f064;
    }
    li{
      list-style: none;
      margin-left: 10px;
    }
    img{
      border-radius: 100px;
      position: relative;
      top: 80px;
      width: 100px;
      height: 100px;
    }
</style>
