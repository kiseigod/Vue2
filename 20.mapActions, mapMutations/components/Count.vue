<template>
    <div>
        <h1>当前求和的值:{{sum}}</h1>
        <h3>当前求和的值放大10倍:{{bigSum}}</h3>
        <h3>我在{{school}},学习{{subject}}</h3>
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="increment(n)">+</button>
        <button @click="decrement(n)">-</button>
        <button @click="incrementOdd(n)">当前求和为奇数再加</button>
        <button @click="incremrntWait(n)">等一等再加</button>
    </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations, mapState } from 'vuex'
export default {
    name: 'Count',
    data() {
        return {
            n: 1,
        }
    },
    computed: {
       
        // 借助mapstate生成  (对象写法)
        // ...mapState({ sum: 'sum', school: 'school', subject: 'subject' }),

        // 数组写法
        ...mapState(['sum', 'school', 'subject']),
         
        
        // ...mapGetters({bigSum:'bigSum'})
        ...mapGetters(['bigSum'])
    },
    methods: {
        // increment() {
        //     this.$store.commit('JIA',this.n)
        // },
        // decrement() {
        //     this.$store.commit('JIAN',this.n) 
        // },

        ...mapMutations({ increment: 'JIA', decrement:'JIAN'}),

        /* ******************************************************** */

        // incrementOdd() {
        //     this.$store.dispatch('jiaOdd', this.n)
        // },
        // incremrntWait() {
        //     this.$store.dispatch('jiaWait', this.n)
        // },

        ...mapActions({incrementOdd:'jiaOdd',incremrntWait:'jiaWait'})
    },
}
</script>

<style>
button{
    margin-left: 8px;
}
</style>