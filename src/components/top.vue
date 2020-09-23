<template>
<header>
    <button @click="$emit('change-slider')"></button>
    <span>Moeyua</span>
</header>
</template>

<script>
export default {
}
</script>

<style scoped>
    header{
        background: #8d93ab;
        height: 50px;
        width: 100%;
        display: block;
        position: relative;
    }
    span{
        font-size: 26px;
        font-weight: 700;
        line-height: 50px;
        letter-spacing: 3px;
        font-family: 'Times New Roman', Times, serif;
    }
    button{
        width: 24px;
        height: 24px;
        position: absolute;
        left: 20px;
        top: 13px;
    }
</style>
