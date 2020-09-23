<template>
  <iframe :src="src" frameborder="0" scrolling = "auto" seamless = "seamless"></iframe>
</template>

<script>
export default {
  props: ['name'],
  computed: {
    src: function () {
      return '../static/' + this.name + '.html'
    }
  }
}
</script>

<style>
iframe{
  height: 100%;
  width: calc(100% - 10px);
  margin: 10px;
}
</style>
