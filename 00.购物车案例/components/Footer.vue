<template>
    <div>
        <input type="checkbox" :checked="isfull" @change="fullChange">全选
        <span class="heji">合计:<span class="red">￥{{amt.toFixed(2)}}</span></span>
        <span class="jiesuan">结算({{all}})</span>
    </div>
</template>

<script>
export default {
    name: 'Footer',
    props: ['isfull','amt','all'],
    methods: {
        fullChange(e) {
            this.$emit('full-change',e.target.checked)
        }
    }
}
</script>

<style scoped>
div{
    position: relative;
    height: 30px;
    line-height: 50px;
}
.heji{
    position: absolute;
    left: 50%;
    transform: translateX(-80%);
}
.jiesuan{
    position: absolute;
    right: 10px;
    width: 100px;
    height: 46px;
    border-radius: 23px;
    text-align: center;
    line-height: 46px;
    background-color: rgb(95, 95, 242);
    color: #fff;
}
.red{
    color: red;
}
</style>