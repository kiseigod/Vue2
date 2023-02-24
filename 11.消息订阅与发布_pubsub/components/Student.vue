<template>
    <div class="demo">
        <h2>学生姓名:{{name}}</h2>
        <h2>学生性别:{{sex}}</h2>
        <button @click="showStudentName">点击把学生名给School组件</button>
    </div>
</template>

<script>
import pubsub from "pubsub-js";
export default {
    name: 'Student',
    data() {
        return {
            name: '张三',
            sex: '男'
        } 
    },
    methods: {
        showStudentName() {
        //    this.$bus.$emit('hello',this.name)
        pubsub.publish('hello',this.name)
        }
    }
}
</script>

<style>
.demo{
    background-color: blueviolet;
}
</style>