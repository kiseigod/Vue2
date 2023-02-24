<template>
    <div class="app">
        <Header/>
        <Goods v-for="item in list" :key="item.id" 
        :id="item.id"
        :title="item.goods_name" 
        :pic="item.goods_img" 
        :price="item.goods_price"
        :state="item.goods_state"
        @state-change="getNewState"
        :count="item.goods_count"
        />
        <Footer 
        :isfull="fullState" 
        @full-change="getFullState" 
        :amt="amt"
        :all="all"/>
    </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Goods from './components/Goods.vue'
import axios from 'axios'
export default {
    name: 'App',
    components: { Header, Footer, Goods },
    data() {
        return {
            list:[]
        }
    },
    methods: {
        // 封装请求列表数据的方法 
        async initCartList() {  
            const { data: res } = await axios.get('https://www.escook.cn/api/cart')
            if (res.status === 200) {
                this.list = res.list
            }
        },
        getNewState(e) {
            this.list.some(item => {
                if (item.id === e.id) {
                    item.goods_state = e.value
                    return true
                }
            })
        },
        getFullState(value) {
            this.list.forEach(item => item.goods_state = value)
        }
    },
    computed: {
        fullState() {
           return this.list.every(item => item.goods_state)
        },
        amt() {
            return this.list
                .filter(item => item.goods_state)
                .reduce((total, item) => total += item.goods_price * item.goods_count, 0)  
        },
        all() {
            return this.list
                .filter(item => item.goods_state)
                .reduce((t, item) => t += item.goods_count,0)
        }
    },
     // 调用请求数据的方法
    created() {
        this.initCartList()
        this.$bus.$on('share', val => {
            this.list.some(item => {
                if (item.id === val.id) {
                    item.goods_count = val.value
                    return true
                }
            })
        })
    },
    beforeDestroy() {
        this.$bus.$off('share')
    }
}
</script>

<style scoped>

</style>
