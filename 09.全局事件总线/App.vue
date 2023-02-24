<template>
    <div class="app">
        <h1>{{msg}}</h1>
        <School></School>
        <hr>
        <Student></Student>
    </div>
</template>

<script>
import School from './components/School'
import Student from './components/Student'
export default {
    name: 'App',
    components: {
        School,
        Student
    },
    data() {
        return {
            msg:'你好啊!'
        }
    },
}
</script>

<style scoped>
.app{
    background-color: #ddd;
    padding: 5px;
}
</style>