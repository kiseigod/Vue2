<template>
    <ul>
        <li>信息编号:{{id}}</li>
        <li>信息标题:{{title}}</li>
    </ul>
</template>

<script>
export default {
    name: 'Detail',
    props:['id','title'],
}
</script>