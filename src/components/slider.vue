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
            {name: '个人收藏的RSS订阅源 1eda6578a8cf474eb9d0634821119334', sum: ''},
            {name: '更改img标签中的src属性值，但是浏览器中的图片并没有更新 a8bf3aa3e29442e7a171db6ad416ad09', sum: ''},
            {name: '将本地git仓库上传至GitHub 6a1550edfbf948c3abce4e3d9972591c', sum: ''},
            {name: '目前前端路线 646e3e736ff94552a4bbf905365b4ee0', sum: ''},
            {name: '前端基础面试题 290dc88d2fcd4d0b98c2483e30a165a3', sum: ''},
            {name: '如何利用 Git 与 GitHub 进行多人协作开发 e99aa7183cec4663bb863d22bc261e7d', sum: ''},
            {name: '数据结构-Xmind dd0fbf62b1814cfbafabf4dc16685141', sum: ''},
            {name: '网页加载流程 56df4358225d4bc6b741608576e50f8f', sum: ''},
            {name: '异步操作 68a262d38c9b48108c51cd29b656d354', sum: ''},
            {name: 'css计算属性 838b29b738c542a7b0e3fe62f080bd76', sum: ''},
            {name: 'DOM CSS操作 2e9c6d820b2748c189f5d91e2f67465b', sum: ''},
            {name: 'edge chrome修改flash版本的方法 e31eed645a8145dbaf4f3745bc73de0f', sum: ''},
            {name: 'JS定时器 1d12ba107b1948998526783f3cc78e5a', sum: ''},
            {name: '前端面试常见知识点归纳 84317fb74b4c47cf9f8c6451f1925b20', sum: ''}]
        },
        {
          dir: '做题笔记',
          items: [
            {name: '2020年9月22日 31f869ced6e345a48e6ca58b5cf6550b', sum: ''},
            {name: '2020年9月17日 0965a55fdf1d488ebc97c2b02feac6b2', sum: ''},
            {name: '2020年9月15日 88aacda5a87d458c957402fb18ff3c68', sum: ''},
            {name: '2020年9月4日 a733a5f42dae468c9c158aa0a12542c0', sum: ''},
            {name: '2020年9月3日 574f20e03182405c80c19034cd68ef18', sum: ''},
            {name: '2020年9月2日 c086964800ee4433bb9ae1f665de70fb', sum: ''},
            {name: '2020年9月1日 6678634b0ab64b238e055f69392d790f', sum: ''},
            {name: '2020年8月31日 7ab80d47c0e24a209e1109c3608af5c3', sum: ''},
            {name: '2020年8月26日 e1e5f3f002844d1aa1f9a9c16a177c7b', sum: ''},
            {name: '2020年8月24日 f20ba5002da04386884c8f361ba5a75b', sum: ''},
            {name: '2020年8月22日 067a5f3e1b05440db579d306a812537e', sum: ''},
            {name: '2020年8月21日 f25c33e42ea9457dbcd33f6e8bb006a2', sum: ''},
            {name: '2020年8月20日 5696b17e10344869b729333bb3d46dc7', sum: ''},
            {name: '2020年8月19日 32ddef36bfa04a47b4811255434f5106', sum: ''},
            {name: '2020年8月18日 ba761c0d35c8439e83dc46c381b080b9', sum: ''}
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
