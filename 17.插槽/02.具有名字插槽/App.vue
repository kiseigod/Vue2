<template>
    <div class="app">
        <Category title="美食">
            <img slot="center" src="http://s3.ax1x.com/2021/01/16/srj1q0.jpg">
            <a slot="footer" href="http://www.baudu.com">更多美食</a>
        </Category>

        <Category title="游戏">
            <ul slot="center">
                <li v-for="(g,index) in games" :key="index">{{g}}</li>
            </ul>
            <div class="foot" slot="footer">
                <a href="http://www.baudu.com">单机游戏</a>
                <a href="http://www.baudu.com">网络游戏</a>
            </div>
        </Category>
 
        <Category title="电影">
             <ul slot="center">
                <li v-for="(f,index) in films" :key="index">{{f}}</li>
            </ul>
            <template v-slot:footer>
                <div class="foot">
                    <a href="http://www.baudu.com">经典</a>
                    <a href="http://www.baudu.com">热门</a>
                    <a href="http://www.baudu.com">推荐</a>
                </div>
                <H4>欢迎前来观影</H4>
            </template>
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
.app,.foot{
    display: flex;
    justify-content: space-around;
}
img{
    width: 100%;
}
h4{
    text-align: center;
}
</style>
