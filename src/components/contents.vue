<template>
  <div>
    <a :href="src(list.dir,item.name)" class="articles" v-for="item in list.items" :key="item.name">
      {{item.name}}
    </a>
  </div>
</template>

<script>
export default {
  props: ['list'],
  data () {
    return {

    }
  },
  computed: {
    src: function () {
      return function (dir, name) {
        return '../../static/' + dir + '/' + name + '.html'
      }
    }
  }
}
</script>

<style scoped>
.articles{
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
