<template>
    <div>
        <!-- <h1 v-text="msg" ref="title"></h1>
        <button ref="btn" @click="showDOM">点击输出上方的DOM元素</button>
        <School ref="sch"/> -->
        <Student name="张三" sex="男"></Student>
    </div>
</template>

<script>
// import School from './components/School'
import Student from './components/Student'
export default {
    name: 'App',
    components: {
        // School
        Student
    },
    // data() {
    //     return {
    //         msg:'你好'
    //     }
    // },
    // methods: {
    //     showDOM() {
    //         console.log(this.$refs.title);
    //         console.log(this.$refs.btn);
    //         console.log(this.$refs.sch);
    //     }
    // }
}
</script>