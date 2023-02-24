<template>
    <div>
        <button @click="getHost1">获取host1信息</button>
        <button @click="getHost2">获取host2信息</button>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'App',
    methods: {
        getHost1() {
            axios.get('http://localhost:8080/api/host1').then(
                response => {
                    console.log('请求成功了',response.data);
                } ,
                error => {
                    console.log('请求失败了',error.message);
                }            
            )
        },
        getHost2() {
            axios.get('http://localhost:8080/demo/host2').then(
                response => {
                    console.log('请求成功了',response.data);
                } ,
                error => {
                    console.log('请求失败了',error.message);
                }            
            )
        }
    }
}
</script>

