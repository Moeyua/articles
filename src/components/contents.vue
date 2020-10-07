<template>
    <div>
    <h1>我是文章</h1>
      <a :href="src(lists.dir,item.name)" class="articles"
      v-for="item in this.$route.params.lists.items" :key="item.name">
        {{title(item.name)}}
      </a>
    </div>
</template>

<script>
export default {
  props: ['lists'],
  data () {
    return {

    }
  },
  computed: {
    src: function () {
      return function (dir, name) {
        return '../../static/' + dir + '/' + name + '.html'
      }
    },
    title: function () {
      return function (name) {
        var index = name.lastIndexOf(' ')
        return name.substring(0, index)
      }
    }
  }
}
</script>

<style scoped>
.articles{
  position: relative;
  top: 50px;
  z-index: 1;
  display: block;
  height: 100px;
  width: calc(100% - 20px);
  background: #ebebeb;
  margin: 10px 10px;
  font-size: 20px;
  font-weight: 700;
  text-decoration: none;
  color: black;
  line-height: 100px;
}
</style>
