<template>
    <div>
        <button @click="isShow = !isShow">显示/隐藏</button>
        <transition appear>
            <h1 v-show="isShow">你好啊！</h1>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'Test',
    data() {
        return {
            isShow:true
        }
    }
}
</script>

<style>
h1{
    background-color: orange;
    text-align: center;
}
.v-enter-active{
    animation: atname 1s;
}
.v-leave-active{
    animation: atname 1s reverse;
}
@keyframes atname{
    from{
        transform: translateX(-100%);
    }
    to{
        transform: translateX(0px);
    }
}
</style>