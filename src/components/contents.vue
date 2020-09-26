<template>
  <div>
      <div v-for="item in list.items" :key="item.name">
          <a :href="src(list.dir,item.name)">{{item.name}}</a>
      </div>
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

</style>
