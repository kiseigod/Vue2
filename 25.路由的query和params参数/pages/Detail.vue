<template>
    <ul>
        <li>信息编号:{{$route.query.id}}</li>
        <li>信息标题:{{$route.query.title}}</li>

        <!-- params参数 -->
        <!-- 
        <li>信息编号:{{$route.params.id}}</li>
        <li>信息标题:{{$route.params.title}}</li> 
        -->
    </ul>
</template>

<script>
export default {
    name: 'Detail',
    mounted() {
        console.log(this.$route);
    }
}
</script>