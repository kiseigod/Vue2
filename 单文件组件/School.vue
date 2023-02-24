<template>
    <div>
        <h2>学校名称:{{schoolName}}</h2>
        <h2>学校地址:{{address}}</h2>
        <button @click="showName">点击显示名称</button>
    </div>
</template>

<script>
export default {
    name: 'School',
    data() {
        return {
            schoolName: '武大',
            address:'武汉'
        }
    },
    methods: {
        showName() {
            alert(this.schoolName)
        }
    },
}
</script>
