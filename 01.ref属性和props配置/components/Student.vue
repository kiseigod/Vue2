<template>
    <div>
        <h1>{{msg}}</h1>
        <h2>学生姓名:{{name}}</h2>
        <h2>学生性别:{{sex}}</h2>
        <h2>学生年龄:{{myAge}}</h2>
        <button @click="updateAge">尝试修改年龄</button>
    </div>
</template>

<script>
export default {
    name: 'Student',
    data() {
        return {
            msg: '你好',
            myAge:this.age
        }
    },
    methods: {
        updateAge() {
            this.myAge++
        }
    },
    // 第一种方式（只接收）
    // props:['name','sex','age']  

    // 第二种方式（限制类型）
    // props: {
    //     name:String,
    //     sex:String,
    //     age:Number
    // }

    // 第三种方式（限制类型  限制必要性  指定默认值）
    props: {
        name: {
            type: String, //name的类型是字符串
            required: true // name是必要的
        },
        sex: {
            type: String,
            required:true
        },
        age: {
            type: Number,
            default:30 //默认值
        }
    }
}
</script>