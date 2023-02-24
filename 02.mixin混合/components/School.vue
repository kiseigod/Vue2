<template>
    <div>
        <h2 @click="showName">学校名称:{{name}}</h2>
        <h2>学校地址:{{address}}</h2>
    </div>
</template>

<script>
import { m } from '../mixin'

export default {
    name: 'School',
    data() {
        return {
            name: '武大',
            address: '武汉'
        }
    },
    mixins:[m]
}
</script>