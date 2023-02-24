<template>
    <div class="demo">
        <h2>学校名称:{{name}}</h2>
        <h2>学校地址:{{address}}</h2>
    </div>
</template>

<script>
import pubsub from "pubsub-js";
export default {
    name: 'School',
    data() {
        return {
            name: '华中科技大学',
            address: '武汉'
        }
    },
    mounted() {
        // this.$bus.$on('hello', (data) => {
        //     console.log('我是School组件,我收到学生姓名:',data);
        // })
        this.pubId = pubsub.subscribe('hello', (msgName,data) => {
            console.log('发布hello信息,hello消息回调执行',msgName,data);
        })
    },
    beforeDestroy() {
        // this.$bus.$off('hello')
        pubsub.unsubscribe(this.pubId)
    }
}
</script>

<style scoped>
.demo{
    background-color: aqua;
}
</style>