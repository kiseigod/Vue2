<template>
    <div class="student">
        <h2>学生姓名:{{name}}</h2>
        <h2>学生性别:{{sex}}</h2>
        <h2>n的值为:{{n}}</h2>
        <button @click="add">点击n++</button>
        <button @click="sendStudentName">把学生名给App</button>
        <button @click="unbind">解除atname事件</button>
        <button @click="death">销毁当前Student组件的实例对象(vc)</button>
    </div>
</template>

<script>
export default {
    name: 'Student',
    data() {
        return {
            name: '张三',
            sex: '男',
            n:0
        }
    },
    methods: {
        add() {
            this.n++  
        },
        sendStudentName() {
            // 触发Student组件实例身上的atname事件
            this.$emit('atname', this.name)
        },
        unbind() {
            // 解除Student组件实例身上的atname事件 
            this.$off('atname')     // 只能解绑一个自定义事件
            // this.$off(['atname','demo'])  //解绑多个自定义事件
            // this.$off() // 解绑所有的自定义事件
        },
        death() {
            this.$destroy()  // 销毁当前Student组件的实例，身上的自定义事件也全都不奏效了
        }
    }
}
</script>

<style>
.student{
    background-color: blueviolet;
}
</style>