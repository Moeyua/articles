<template>
<header>
    <button @click="$emit('change-slider')">
        <img :src=src>
    </button>
    <span>Moeyua</span>
</header>
</template>

<script>
export default {
  computed: {
    src: function () {
      return '../static/list.png?time=' + new Date().getTime()
    }
  }
}
</script>

<style scoped>
    header{
        background: #212121;
        height: 50px;
        width: 100%;
        display: block;
        position: fixed;
        z-index: 2;
    }
    span{
        font-size: 24px;
        font-weight: 100;
        line-height: 50px;
        letter-spacing: 4px;
        font-family: 'Times New Roman', Times, serif;
        color: #ffffff;
    }
    button{
        width: 50px;
        height: 50px;
        position: absolute;
        left: 0;
        border: none;
        background: none;
    }
    button img{
        width: 25px;
        height: 25px;
    }
</style>
