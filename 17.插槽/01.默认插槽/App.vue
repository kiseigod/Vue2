<template>
    <div class="app">
        <Category title="美食">
            <img src="http://s3.ax1x.com/2021/01/16/srj1q0.jpg">
        </Category>

        <Category title="游戏">
            <ul>
                <li v-for="(g,index) in games" :key="index">{{g}}</li>
            </ul>
        </Category>
 
        <Category title="电影">
             <ul>
                <li v-for="(f,index) in films" :key="index">{{f}}</li>
            </ul>
        </Category>
    </div>
</template>

<script>
import Category from './components/Category.vue'
export default {
    name: 'App',
    components: { Category },
    data() {
        return {
            foods: ['火锅', '烧烤', '小龙虾', '牛排'],
            games: ['LOL', 'PUBG', '超级玛丽', 'CF'],
            films:['教父','功夫','百变星君','大话西游']
        }
    },
}
</script>

<style scoped>
.app{
    display: flex;
    justify-content: space-around;
}
img{
    width: 100%;
}
</style>
