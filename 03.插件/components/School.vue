<template>
    <div>
        <h2>学校名称:{{name | mySlice}}</h2>
        <h2>学校地址:{{address}}</h2>
        <button @click="test">点击弹窗</button>
    </div>
</template>

<script>

export default {
    name: 'School',
    data() {
        return {
            name: '华中科技大学',
            address: '武汉'
        }
    },
    methods: {
        test() {
            this.hello( )
        }
    }
}
</script>