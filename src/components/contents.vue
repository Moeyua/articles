<template>
    <div>
      <a :href="src(item.name)" class="articles"
      v-for="item in list[index].items" :key="item.name">
        {{title(item.name)}}
      </a>
    </div>
</template>

<script>
import store from '@/vuex/store'
export default {
  data () {
    return {
    }
  },
  computed: {
    list () {
      return store.getters.get_list
    },
    index () {
      return store.getters.get_index
    },
    src: function () {
      return function (name) {
        return '../../static' + this.$route.path + '/' + name + '.html'
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
