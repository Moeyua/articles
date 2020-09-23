<template>
  <iframe :src="src" frameborder="0"></iframe>
</template>

<script>
export default {
  props: ['name'],
  computed: {
    src: function () {
      return 'static/' + this.name
    }
  }
}
</script>

<style>

</style>
