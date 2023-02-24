<template>
    <div>
        <div class="container">
            <h1>登录</h1>
            <form action="">
                <input type="text" v-model="username" class="tbx" placeholder="账号">
                <input type="password" v-model="password" class="tbx" placeholder="密码" autocomplete>
                <input type="submit" class="sub" value="登录">
            </form>
        </div>
        <div></div>
    </div>
</template>

<script>
import 'animate.css'
export default {
    name: 'Login',
    data () {
        return {
            username: '',
            password:'',
            isIn: false,
        }
    },
}
</script>

<style>
    *{
        margin: 0;
        padding: 0;
    }
    body{
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #ddd;
    }
    .container{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 350px;
        height: 400px;
        margin-top: 100px;
        border-radius: 20px;
        background-color: #d1d8e1;
        box-shadow: 15px 15px 10px rgba(33,45,58,0.3);
        overflow: hidden;
        position: relative;
    }
    .container form{
        width: 350px;
        height: 200px;
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        align-items: center;
        z-index: 1;
    }
    .container form .tbx{
        width: 250px;
        height: 40px;
        outline: none;
        border: none;
        border-bottom: 1PX solid rgb(32, 24, 24);
        background: none;
        color: rgb(32, 24, 24);
        font-size: 15px;
    }
    .container form .tbx::placeholder{
        color: rgb(10, 2, 2);
        font-size: 15px;
    }
    .container form .sub{
        width: 250px;
        height: 40px;
        outline: none;
        border: 1px solid rgb(32, 24, 24);
        border-radius: 20px;
        letter-spacing: 5px;
        color: rgb(9, 6, 6);
        background: none;
        cursor: pointer;
        margin-top: 20px;
    }
    .container h1{
        color: #080e10;
        font-size: 50px;
        letter-spacing: 5px;
        font-weight: 100;
        text-shadow: 5px 5px 5px rgba(33,45,58,0.3);
        z-index: 1;
    }
</style>