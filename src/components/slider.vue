<template>
  <aside>
    <div id="head">
      <img :src="src" alt="moeyua">
      <p>Moeyua's blog</p>
    </div>
    <div id="content">
        <li v-for="item in list" :key="item.dir" @click="choose(item)">{{item.dir}}</li>
    </div>
    <div id="back" @click="$emit('change-slider')"></div>
  </aside>
</template>

<script>
export default {
  data () {
    return {
      list: [
        {
          dir: '首页',
          items: [
            {name: '个人收藏的RSS订阅源', sum: ''},
            {name: '异步操作', sum: ''},
            {name: '将本地git仓库上传至GitHub', sum: ''},
            {name: '目前前端路线', sum: ''},
            {name: 'DOMCSS操作', sum: ''},
            {name: 'JS定时器', sum: ''}]
        },
        {
          dir: '做题笔记',
          items: [
            {name: '2020年9月1日', sum: ''},
            {name: '2020年8月31日', sum: ''},
            {name: '2020年8月26日', sum: ''},
            {name: '2020年8月24日', sum: ''},
            {name: '2020年8月22日', sum: ''},
            {name: '2020年8月21日', sum: ''},
            {name: '2020年8月20日', sum: ''},
            {name: '2020年8月19日', sum: ''},
            {name: '2020年8月18日', sum: ''}
          ]
        }
      ],
      src: '../static/head.jpg?time=' + new Date().getTime()
    }
  },
  methods: {
    choose: function (item) {
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
      list-style: none;
      height: 50px;
      padding: 0 30px;
      line-height: 50px;
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
