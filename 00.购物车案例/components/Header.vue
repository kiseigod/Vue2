<template>
    <div class="header-container">{{title}}</div>
</template>

<script>
export default {
    name: 'Header',
    data() {
        return {
            title:'购物车案例',
        }
    },
}
</script>

<style scoped>
.header-container{
    font-size: 12px;
    height: 45px;
    width: 100%;
    text-align: center;
    line-height: 45px;
    background-color: blue;
    color: #fff;
}
</style>