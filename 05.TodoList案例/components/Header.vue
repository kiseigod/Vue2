<template>
    <div class="todo-header">
        <input type="text" placeholder="请输入任务名称,按回车健确定" v-model="title" @keyup.enter="add">
    </div>
</template>

<script>
import {nanoid} from 'nanoid'
export default {
    name: 'Header',
    props: ['addTodo'],
    data() {
        return {
            title:''
        }
    },
    methods: {
        add() {
            // 校验数据
            if (!this.title.trim()) return alert('输入不能为空')
            // 将用户的输入包装成一个todo对象
            const todoObj = { id: nanoid(), title: this.title, done: false }
            // 通知App组件去添加一个todo对象
            this.addTodo(todoObj)
            // 清空输入
            this.title = ''
        }
    }
}
</script>

<style scoped>
.todo-header input{
    width: 560px;
    height: 28px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px 7px;
}
.todo-header input:focus{
    outline: none;
    border-color: aqua;
}
</style>